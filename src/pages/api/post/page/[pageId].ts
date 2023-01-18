import { NextApiRequest, NextApiResponse } from "next";
import { PostDto } from "@/pages/shared/models/postDto";
import { ReqMethodType } from "@/pages/shared/models/reqMethod";
import { getPagePost } from "@/pages/api/post/helpers";

const handler = (req: NextApiRequest, res: NextApiResponse<PostDto[]>): any => {
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
