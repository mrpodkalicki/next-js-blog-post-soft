export const ReqMethod = {
  GET: "GET",
  POST: "POST",
  DELETE: "DELETE",
  PUT: "PUT",
} as const;

export type ReqMethodType = keyof typeof ReqMethod;
