import { useState, useEffect } from "react";
import axios from "axios";
function useFeeds() {
  const [feeds, setFeeds] = useState([]);
  const [feedsFollows, setFeedsFollows] = useState([]);

  function getFeeds(){
  useEffect(() => {
    axios
      .get("http://localhost:8080/v1/feeds")
      .then((response) => {
        setFeeds(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  }

  function getFeedsFollows(){

    useEffect(() => {
      axios
        .get("http://localhost:8080/v1/feeds")
        .then((response) => {
          setFeedsFollows(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);
  }

  return { feeds, getFeeds, feedsFollows, getFeedsFollows };
}

export default useFeeds;
