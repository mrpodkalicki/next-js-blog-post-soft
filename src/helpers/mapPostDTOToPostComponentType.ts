import { PostDTO } from "@/pages/shared/models/postDTO";
import { PostType } from "@/components/post/post.type";

export const getDataForPostComponent = (postDTO: PostDTO): PostType => {
  const { categories, excerpt, slug, title, imageUrl, id } = postDTO;
  return {
    id,
    categories,
    description: excerpt,
    imageAlt: slug,
    imageSrc: imageUrl,
    title,
    link: `post/${slug}`,
  };
};
