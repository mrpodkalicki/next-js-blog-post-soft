import axios from "axios";
import { PostDTO } from "@/pages/shared/models/postDTO";

export const getPostsRequest = async () =>
  await axios.get<PostDTO[]>("api/post", {
    params: {
      filterBy: "Accessories",
    },
  });

export const getPostsByIdRequest = async (id: string | number) =>
  await axios.get(`api/post/${id}`);

export const getPostsPagination = async (id: string | number) =>
  await axios.get(`api/post/page/${id}`);
