import { getHomeMagazineSlots } from "@/lib/blog";
import { MagazineHeroContent } from "./magazine-hero-content";

export async function MagazineHero() {
  const { featured, left, rightLarge } = await getHomeMagazineSlots();

  return (
    <MagazineHeroContent
      featured={featured}
      left={[left[0] ?? null, left[1] ?? null]}
      rightLarge={rightLarge}
    />
  );
}
