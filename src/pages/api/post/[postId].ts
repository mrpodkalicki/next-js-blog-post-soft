import { NextApiRequest, NextApiResponse } from "next";
import { PostDTO } from "@/pages/shared/models/postDTO";
import { ReqMethodType } from "@/pages/shared/models/reqMethod";
import { getPostById } from "@/pages/api/post/helpers";

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
