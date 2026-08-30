import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

// Project images are served from the public `site-media` bucket. Scope the
// allowance to that bucket path so next/image can't be pointed at arbitrary
// Supabase endpoints.
const supabaseHost = process.env.SUPABASE_URL
  ? new URL(process.env.SUPABASE_URL).hostname
  : undefined;

const nextConfig: NextConfig = {
  images: {
    remotePatterns: supabaseHost
      ? [
          {
            protocol: "https",
            hostname: supabaseHost,
            port: "",
            pathname: "/storage/v1/object/public/site-media/**",
            search: "",
          },
        ]
      : [],
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
