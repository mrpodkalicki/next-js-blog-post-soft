import LayoutComponent from "@/components/layout";
import { SeoType } from "@/components/SEO/seo.type";
import { useQueryHook } from "@/hooks/useQueryHook";
import { getPostsPagination } from "@/pages/api/post/requests";
import { PostDTO } from "@/pages/shared/models/postDTO";
import PostComponent from "@/components/post";
import { getDataForPostComponent } from "@/helpers/mapPostDTOToPostComponentType";

const seoData: SeoType = {
  ogDescriptionContent: "",
  ogTitleContent: "",
  ogURL: "",
  descriptionContent: "",
};

export default function Home() {
  // const {result} = useQueryHook<any>(['post'], () => getPostsRequest());
  // const {result: postIdRes} = useQueryHook<any>(['postId'], () => getPostsByIdRequest('126'));
  const { result }: { result: PostDTO[] } = useQueryHook<any>(
    ["post-page"],
    () => getPostsPagination("1")
  );

  return (
    <LayoutComponent seoData={seoData}>
      <div className="grid grid-cols-3 gap-10 py-10">
        {(result || []).map((item) => (
          <PostComponent key={item.id} {...getDataForPostComponent(item)} />
        ))}
      </div>
    </LayoutComponent>
  );
}
