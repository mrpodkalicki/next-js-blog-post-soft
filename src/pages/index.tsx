import LayoutComponent from "@/components/layout";
import { SeoType } from "@/components/SEO/seo.type";

const seoData: SeoType = {
  ogDescriptionContent: "",
  ogTitleContent: "",
  ogURL: "",
  descriptionContent: "",
};

export default function Home() {
  // const {result} = useQueryHook<any>(['post'], () => getPostsRequest());
  // const {result: postIdRes} = useQueryHook<any>(['postId'], () => getPostsByIdRequest('126'));
  // const {result: pagiResult} = useQueryHook<any>(['post-page'], () => getPostsPagination('1'));
  // const {data} = result;

  return (
    <LayoutComponent seoData={seoData}>
      <p>testt</p>
    </LayoutComponent>
  );
}
