export interface CategoriesDTO {
  id: number;
  name: CategoriesNameType;
  slug: CategoriesSlugType;
}

export type CategoriesNameType =
  | "Books"
  | "Accessories"
  | "Music"
  | "Toys"
  | "Audiobooks"
  | "News";

export type CategoriesSlugType = Lowercase<CategoriesNameType>;
