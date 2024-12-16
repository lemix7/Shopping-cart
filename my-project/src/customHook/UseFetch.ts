import axios from "axios";
import { useEffect, useState } from "react";

type UseFetchProps = {
  url: string;
};

type Data = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

export const UseFetch = ({ url }: UseFetchProps) => {
  const [data, setData] = useState<Data[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get(url)
      .then((Response) => {
        setData(Response.data);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, [url]);

  return { data, error };
};
