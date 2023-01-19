import { posts, categories } from "@/data/blog.json";
import { PostDTO } from "@/pages/shared/models/postDTO";
import { getValueFromParams } from "@/pages/shared/helpers/params";
import {
  PostSearchQueryParamType,
  PostSearchType,
} from "@/pages/shared/models/postSearchType";
import { CategoriesNameType } from "@/pages/shared/models/categoriesDTO";

const findPostById = (id: string) =>
  posts.find((post) => post.id === parseInt(id));

export const getPost = (paramQuery: PostSearchQueryParamType): PostDTO[] => {
  const { search, slug, excerpt, filterBy } = paramQuery;

  if (search) {
    return searchPostBy(search, slug, excerpt);
  } else if (filterBy) {
    return filterPostByCategory(filterBy);
  }

  return posts;
};

const searchPostBy = (value: string, excerpt?: boolean, slug?: boolean) => {
  let listOfPostSearchedByExcerpt: PostDTO[] = [];
  let listOfPostSearchedBySlug: PostDTO[] = [];
  let listOfPostSearchedByTitle = searchPost("title", posts, value);

  if (excerpt) {
    listOfPostSearchedByExcerpt = searchPost("excerpt", posts, value);
  } else if (slug) {
    listOfPostSearchedBySlug = searchPost("slug", posts, value);
  }

  return [
    ...listOfPostSearchedByTitle,
    ...listOfPostSearchedByExcerpt,
    ...listOfPostSearchedBySlug,
  ];
};

const filterPostByCategory = (category: CategoriesNameType) => {
  const getCategoryId = categories.find(({ name }) => name === category);
  const categoryId = getCategoryId?.id || 0;
  return posts.filter(({ categories }) => categories.includes(categoryId));
};

export const getPostById = (
  paramValueId: string[] | string = ""
): PostDTO[] => {
  const id = getValueFromParams(paramValueId);
  if (id) {
    const post = findPostById(id);
    return post ? [post] : [];
  }

  return posts;
};

export const getPagePost = (
  paramValuePageNumber: string[] | string = "1"
): PostDTO[] => {
  const pageNumber = getValueFromParams(paramValuePageNumber);
  return createPagination(posts, pageNumber);
};

const createPagination = (list: PostDTO[], pageNumber: string) => {
  const listClone = [...list];
  return listClone.splice((+pageNumber - 1) * 3, 3);
};

export const searchPost = (
  searchBy: PostSearchType,
  listOfPosts: PostDTO[],
  value: string
) =>
  listOfPosts.filter((item) =>
    item[searchBy].toLowerCase().includes(value.toLowerCase())
  );
