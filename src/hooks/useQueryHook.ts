import { useQuery as useQueryReactQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useQueryHook = <T>(
  configuration: [string, string?],
  functionToFetchData: () => Promise<AxiosResponse<T>>
) => {
  const result = useQueryReactQuery(configuration, functionToFetchData);

  return {
    result,
  };
};
