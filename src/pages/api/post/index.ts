import { NextApiRequest, NextApiResponse } from "next";
import { PostDTO } from "@/pages/shared/models/postDTO";
import { ReqMethodType } from "@/pages/shared/models/reqMethod";
import { getPost } from "@/pages/api/post/helpers";
import { PostSearchQueryParamType } from "@/pages/shared/models/postSearchType";

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
