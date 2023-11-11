import axios from "axios";
import { useEffect, useState } from "react";

export const useCustomReactQuery = (urlPath: string) => {
  const [data, setData] = useState<Array<any>>([]);
  const [error, setError] = useState<unknown>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await axios.get(urlPath);
        setData(res.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return { data, error, loading };
};
