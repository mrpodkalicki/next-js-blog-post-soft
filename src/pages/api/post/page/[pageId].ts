import { NextApiRequest, NextApiResponse } from "next";
import { PostDTO } from "@/pages/shared/models/postDTO";
import { ReqMethodType } from "@/pages/shared/models/reqMethod";
import { getPagePost } from "@/pages/api/post/helpers";
import { QueryClient } from "@tanstack/react-query";
import { getPostsPagination } from "@/pages/api/post/requests";
import { dehydrate } from "@tanstack/query-core";

export const getServerSideProps = async (ctx: any) => {
  const { id } = ctx.params;

  const queryClient = new QueryClient();
  await queryClient.fetchQuery(["post-page", id], () => getPostsPagination(id));

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

const handler = (req: NextApiRequest, res: NextApiResponse<PostDTO[]>): any => {
  const method = req.method as ReqMethodType;
  const { pageId } = req.query;
  console.log(req.query);

  switch (method) {
    case "GET":
      res.status(200).json(getPagePost(pageId));
      break;
    default:
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
};

export default handler;
