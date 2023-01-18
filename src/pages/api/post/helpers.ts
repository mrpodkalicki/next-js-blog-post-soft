import { posts } from "@/data/blog.json";
import { PostDto } from "@/pages/shared/models/postDto";
import { getValueFromParams } from "@/pages/shared/helpers/params";

const findPostById = (id: string) =>
  posts.find((post) => post.id === parseInt(id));

export const getPost = (paramValueId?: string[] | string): PostDto[] => {
  const id = getValueFromParams(paramValueId);
  if (id) {
    const post = findPostById(id);
    return post ? [post] : [];
  }

  return posts;
};

export const getPagePost = (
  paramValuePageNumber: string[] | string = "1"
): PostDto[] => {
  const pageNumber = getValueFromParams(paramValuePageNumber);
  const postsCopy = [...posts];
  return postsCopy.splice((+pageNumber - 1) * 3, 3);
};
