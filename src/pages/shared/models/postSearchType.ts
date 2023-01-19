import { PostDTO } from "@/pages/shared/models/postDTO";
import { CategoriesNameType } from "@/pages/shared/models/categoriesDTO";

export type PostSearchType = keyof Pick<PostDTO, "title" | "excerpt" | "slug">;

export type PostSearchQueryParamType = {
  search?: string;
  title?: boolean;
  excerpt?: boolean;
  slug?: boolean;
  filterBy?: CategoriesNameType;
};
