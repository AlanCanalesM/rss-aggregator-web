import { useState, useEffect } from "react";
import axios from "axios";
function useFeeds() {
  const [feeds, setFeeds] = useState([]);
  const [feedsFollows, setFeedsFollows] = useState([]);
  const [feedsNotFollows, setFeedsNotFollows] = useState([]);

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

  function getFeedsFollows(apiKey){

    useEffect(() => {
      axios
        .get("http://localhost:8080/v1/feed_follows", {
          headers: {
            Authorization: `ApiKey ${apiKey}`,
          },
        })
        .then((response) => {
          setFeedsFollows(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);
  }

  function getFeedsNotFollows(){

    useEffect(() => {
      axios
        .get("http://localhost:8080/v1/feeds_not_followed",
        {
          headers: {
            Authorization: `ApiKey 840934fdf0d1eee126995b106b9aba2a1f4f1ff4001b52e71894578e7d8ec07f`,
          },
        })
        .then((response) => {
          setFeedsNotFollows(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);
  }

  return { feeds, getFeeds, feedsFollows, getFeedsFollows, getFeedsNotFollows, feedsNotFollows };
}

export default useFeeds;
