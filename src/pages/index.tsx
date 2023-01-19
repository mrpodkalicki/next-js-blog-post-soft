import LayoutComponent from "@/components/layout";
import { SeoType } from "@/components/SEO/seo.type";

const seoData: SeoType = {
  ogDescriptionContent: "",
  ogTitleContent: "",
  ogURL: "",
  descriptionContent: "",
};

export default function Home() {
  return (
    <LayoutComponent seoData={seoData}>
      <p>testt</p>
    </LayoutComponent>
  );
}
