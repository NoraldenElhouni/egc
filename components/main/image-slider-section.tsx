import { getHeroSlides } from "@/lib/data/hero";
import { ImageSlider } from "@/components/main/image-slider";

export async function ImageSliderSection({ locale }: { locale: string }) {
  const slides = await getHeroSlides(locale);

  return <ImageSlider slides={slides} />;
}
