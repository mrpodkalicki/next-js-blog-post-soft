import { useQuery as useQueryReactQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useQueryHook = <T>(
  configuration: [string, string?],
  functionToFetchData: () => Promise<AxiosResponse<T>>
) => {
  const response = useQueryReactQuery(configuration, functionToFetchData);
  const { status, data: result }: AxiosResponse<T, any> =
    response.data || ({} as AxiosResponse<T, any>);

  return {
    status,
    result,
  };
};
