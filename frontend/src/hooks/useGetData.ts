import axios from "axios";
import { useState, useEffect } from "react";
import {useQuery} from "react-query";

export const useGetUserData = (url) => {
  const { isLoading, error, data } = useQuery(['getData'], () => axios.get(url).then((res) => res));
  if (isLoading) console.log("Loading...");
  if (error) console.log("An error has occurred: " + error.message);

  console.log(data);
}

type getUserObjectList = {
  data_created: string,
  data_updated: string,
  email: string,
  id: number,
  password: string,
  username: string
}[]

export const useGetUserDataOnce = (url)=> {
  const [isLoading, setIsLoading] = useState(true);
  const [getData, setGetData] = useState<getUserObjectList>();
  useEffect(() => {
    if (isLoading) {
      axios.get(url)
      .then((res) => setGetData(res.data.list));
      setIsLoading(false);
    } else return;
  }, [isLoading, url]);
  return getData;
}