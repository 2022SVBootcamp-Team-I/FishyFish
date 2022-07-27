import {useState, useEffect} from "react";
import axios from "axios";
import {useQuery} from "@tanstack/react-query";

export const useGetUserData = () => {
  const { status, data, error} = useQuery(['userData'], (url) =>
   axios.get("https://kyounghwan01.github.io/blog/React/react-query/basic/#usequery")
    .then((res) => {
      console.log(res.data);
      return res.data;
    })
  );

  if (status === "loading"){ 
    return "Loading...";
  }

  if (error instanceof Error) {
    return "An error has occurred: " + error.message;
  } 

  return {data};


  // const [response, setResponse] = useState<Response[]>();
  // const [error, setError] = useState<string>("");
  // const [loading, setLoading] = useState<boolean>(true);

  // useEffect(() => {
    // const fetchData = async () => {
      // axios(url)
        // .then((res) => {
          // setResponse(res.data);
        // })
        // .finally(() => {
          // setLoading(false);
        // })
        // .catch((err) => {
          // setError(err)
        // });
    // };
  // 
    // if (loading) {
      // fetchData();
    // }
  // }, [url]);

  //return { response, error, loading};
};