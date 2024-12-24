import AmenitiesSection from "@/components/amenities-section";
import DeveloperSection from "@/components/developer-section";
import GallerySection from "@/components/gallery-section";
import HeroSection from "@/components/hero-section";
import LocationSection from "@/components/location-section";
import PriceSection from "@/components/price-section";
import SitePlanSection from "@/components/site-plan-section";
import VirtualTourSection from "@/components/virtual-tour-section";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <PriceSection />
      <SitePlanSection />
      <AmenitiesSection />
      <GallerySection />
      <LocationSection />
      <VirtualTourSection />
      <DeveloperSection />
    </div>
  );
}
