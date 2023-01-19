import { NextApiRequest, NextApiResponse } from "next";
import { PostDTO } from "@/pages/shared/models/postDTO";
import { ReqMethodType } from "@/pages/shared/models/reqMethod";
import { QueryClient } from "@tanstack/react-query";
import { getPostsByIdRequest } from "@/pages/api/post/requests";
import { dehydrate } from "@tanstack/query-core";
import { getPostById } from "@/pages/api/post/helpers";

export const getServerSideProps = async (ctx: any) => {
  const { id } = ctx.params;

  const queryClient = new QueryClient();
  await queryClient.fetchQuery(["postId", id], () => getPostsByIdRequest(id));

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

const handler = (req: NextApiRequest, res: NextApiResponse<PostDTO[]>): any => {
  const method = req.method as ReqMethodType;
  const { postId } = req.query;
  switch (method) {
    case "GET":
      res.status(200).json(getPostById(postId));
      break;
    default:
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
};

export default handler;
