import { NextApiRequest, NextApiResponse } from "next";
import { PostDTO } from "@/pages/shared/models/postDTO";
import { ReqMethodType } from "@/pages/shared/models/reqMethod";
import { getPost } from "@/pages/api/post/helpers";
import { PostSearchQueryParamType } from "@/pages/shared/models/postSearchType";
import { QueryClient } from "@tanstack/react-query";
import { getPostsRequest } from "@/pages/api/post/requests";
import { dehydrate } from "@tanstack/query-core";

export const getServerSideProps = async () => {
  const queryClient = new QueryClient();
  await queryClient.fetchQuery(["post"], () => getPostsRequest());

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

const handler = (req: NextApiRequest, res: NextApiResponse<PostDTO[]>): any => {
  const method = req.method as ReqMethodType;
  const { search, title, excerpt, slug, filterBy } = req.query;
  const searchObj = {
    search,
    title,
    excerpt,
    slug,
    filterBy,
  } as PostSearchQueryParamType;

  switch (method) {
    case "GET":
      res.status(200).json(getPost(searchObj));
      break;
    default:
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
};

export default handler;
