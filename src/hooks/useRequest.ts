import axios, { AxiosError, AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';

interface UseRequestResult<T> {
  data: T | T[] | null;
  loading: boolean;
  error: string | null;
}

const useRequest = <T>(paths: string | string[]): UseRequestResult<T> => {
  const [data, setData] = useState<T | T[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const pathsArray = Array.isArray(paths) ? paths : [paths];

        const responses: AxiosResponse<T>[] = await Promise.all(
          pathsArray.map((path: string) => axios.get<T>(path))
        );

        const combinedData = responses.map((response) => response.data);
        setData(Array.isArray(paths) ? combinedData : combinedData[0]);
      } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
          const axiosError = error as AxiosError;
          setError(axiosError.message || 'An error occurred');
        } else {
          setError('An unknown error occurred');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [paths]);

  return { data, loading, error };
};

export default useRequest;
