// app/support/page.tsx
import Link from "next/link";
import { getTranslations } from "next-intl/server";

export const metadata = {
  title: "Support | EGC Builder",
  description: "Get help and support for EGC Builder.",
};

export default async function SupportPage() {
  const t = await getTranslations("support");

  const supportEmail = "support@engroup.ly";
  const phone = "+218916517020";
  const whatsapp = "https://wa.me/218916517020";
  const website = "https://engroup.ly";

  return (
    <main className="min-h-screen bg-white pt-10">
      <div className="mx-auto max-w-3xl px-6 py-12">
        <header className="mb-10">
          <h1 className="text-3xl font-bold text-gray-900">{t("title")}</h1>
          <p className="mt-2 text-gray-600">{t("subtitle")}</p>
        </header>

        {/* Contact cards */}
        <section className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 p-5 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900">
              {t("cards.email.title")}
            </h2>
            <p className="mt-1 text-gray-600">{t("cards.email.desc")}</p>
            <a
              className="mt-3 inline-block font-medium text-blue-600 hover:underline"
              href={`mailto:${supportEmail}`}
            >
              {supportEmail}
            </a>
          </div>

          <div className="rounded-2xl border border-gray-200 p-5 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900">
              {t("cards.whatsapp.title")}
            </h2>
            <p className="mt-1 text-gray-600">{t("cards.whatsapp.desc")}</p>
            <a
              className="mt-3 inline-block font-medium text-blue-600 hover:underline"
              href={whatsapp}
              target="_blank"
              rel="noreferrer"
            >
              {t("cards.whatsapp.cta")}
            </a>
          </div>

          <div className="rounded-2xl border border-gray-200 p-5 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900">
              {t("cards.phone.title")}
            </h2>
            <p className="mt-1 text-gray-600">{t("cards.phone.desc")}</p>
            <a
              className="mt-3 inline-block font-medium text-blue-600 hover:underline"
              href={`tel:${phone.replace(/\s/g, "")}`}
            >
              {phone}
            </a>
          </div>

          <div className="rounded-2xl border border-gray-200 p-5 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900">
              {t("cards.website.title")}
            </h2>
            <p className="mt-1 text-gray-600">{t("cards.website.desc")}</p>
            <a
              className="mt-3 inline-block font-medium text-blue-600 hover:underline"
              href={website}
              target="_blank"
              rel="noreferrer"
            >
              engroup.ly
            </a>
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-10 rounded-2xl border border-gray-200 p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900">
            {t("faq.title")}
          </h2>

          <div className="mt-4 space-y-4 text-gray-700">
            <div>
              <p className="font-medium text-gray-900">{t("faq.q1.q")}</p>
              <p className="mt-1 text-gray-600">{t("faq.q1.a")}</p>
            </div>

            <div>
              <p className="font-medium text-gray-900">{t("faq.q2.q")}</p>
              <p className="mt-1 text-gray-600">{t("faq.q2.a")}</p>
            </div>

            <div>
              <p className="font-medium text-gray-900">{t("faq.q3.q")}</p>
              <p className="mt-1 text-gray-600">{t("faq.q3.a")}</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
