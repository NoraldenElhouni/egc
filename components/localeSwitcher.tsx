"use client";

import { usePathname, useRouter } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

export default function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: string) => {
    if (newLocale !== locale) {
      router.replace(pathname, { locale: newLocale });
      router.refresh();
    }
  };

  useEffect(() => {
    const body = document.body;
    if (locale === "ar") {
      body.classList.add("font-arabic");
      body.classList.remove("font-sans");
    } else {
      body.classList.add("font-sans");
      body.classList.remove("font-arabic");
    }
  }, [locale]);

  const nextLocale = locale === "en" ? "ar" : "en";
  const displayText = locale === "en" ? "عربي" : "English";

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => switchLocale(nextLocale)}
      aria-label="Change language"
    >
      <Globe size={16} />
      <span>{displayText}</span>
    </Button>
  );
}
