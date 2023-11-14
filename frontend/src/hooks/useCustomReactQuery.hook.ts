import axios from "axios";
import { useCallback, useEffect, useState } from "react";

export const useCustomReactQuery = (urlPath: string) => {
  const [data, setData] = useState<Array<any>>([]);
  const [error, setError] = useState<unknown>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [search, setSearch] = useState("");

  useEffect(
    useCallback(() => {
      // fixes race condition
      const controller = new AbortController();
      (async () => {
        try {
          setLoading(true);
          setError(null);
          // setSearch(searchKeyword);
          const res = await axios.get(`${urlPath}?search=${search}`, {
            signal: controller.signal,
          });
          setData(res.data);
        } catch (error) {
          if (axios.isCancel(error)) {
            console.log("cancelled");
            return;
          }
          setError(error);
        } finally {
          setLoading(false);
        }
      })();

      // Cleanup function
      return () => {
        controller.abort();
      };
    }, [search, urlPath]),
    [search, urlPath]
  );

  return { data, error, loading, setSearch };
};
