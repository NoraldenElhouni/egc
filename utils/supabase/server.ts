import "server-only";

import { createClient as createSupabaseClient } from "@supabase/supabase-js";
import type { Database } from "./types";

// Deliberately NOT NEXT_PUBLIC_. Every Supabase read in this app happens inside
// a Server Component, so neither the project URL nor the key is ever compiled
// into the browser bundle. The `server-only` import above turns any accidental
// import from a Client Component into a build error rather than a leak.
const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_PUBLISHABLE_KEY = process.env.SUPABASE_PUBLISHABLE_KEY;

const BUCKET = "site-media";

/**
 * Read-only client for the `website` schema.
 *
 * This uses the publishable key, which resolves to the `anon` Postgres role.
 * That role is granted SELECT on four `website` tables and nothing else (see
 * ../supabase-tooling/migrations/0001_website_public_read.sql and
 * SUPABASE.md), so the ERP data sharing this database is unreachable
 * through it.
 */
export function createClient() {
  if (!SUPABASE_URL || !SUPABASE_PUBLISHABLE_KEY) {
    throw new Error(
      "Missing SUPABASE_URL or SUPABASE_PUBLISHABLE_KEY. See .env.example."
    );
  }

  return createSupabaseClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
    db: { schema: "website" },
    auth: { persistSession: false, autoRefreshToken: false },
  });
}

/** Public CDN URL for a `storage_path` stored in the database. */
export function storageUrl(storagePath: string): string {
  const safe = storagePath
    .split("/")
    .map((segment) => encodeURIComponent(segment))
    .join("/");

  return `${SUPABASE_URL}/storage/v1/object/public/${BUCKET}/${safe}`;
}
