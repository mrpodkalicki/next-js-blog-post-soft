import { SeoType } from "@/components/SEO/seo.type";
import { FC } from "react";

const SeoComponent: FC<SeoType> = (seoData: SeoType) => {
  const { ogDescriptionContent, ogTitleContent, ogURL, descriptionContent } =
    seoData;
  return (
    <>
      <meta name="description" content={descriptionContent} />
      <meta property="og:URL" content={ogURL} />
      <meta property="og:title" content={ogTitleContent} />
      <meta property="og:description" content={ogDescriptionContent} />
    </>
  );
};

export default SeoComponent;
