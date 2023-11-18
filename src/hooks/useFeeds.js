import { useState, useEffect } from "react";
import axios from "axios";

function useFeeds(apiKey) {
  const [feeds, setFeeds] = useState([]);
  const [feedsFollows, setFeedsFollows] = useState([]);
  const [feedsNotFollows, setFeedsNotFollows] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/v1/feeds")
      .then((response) => {
        setFeeds(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get("http://localhost:8080/v1/feed_follows", {
        headers: {
          Authorization: `ApiKey ${apiKey}`,
        },
      })
      .then((response) => {
        setFeedsFollows(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

      console.log(apiKey['apikey']);
    axios
      .get("http://localhost:8080/v1/feeds_not_followed", {
        headers: {
          Authorization: `ApiKey ${apiKey['apikey']}`,
        },
      })
      .then((response) => {
        setFeedsNotFollows(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [apiKey]);

  const followFeed = (feedId, feedName) => {
    
    axios
      .post(
        "http://localhost:8080/v1/feed_follows",
        {
          feed_id: feedId,
          feed_name: feedName,
        },
        {
          headers: {
            Authorization: `ApiKey ${apiKey['apikey']}`,
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        // You might want to update state based on the response if needed
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const unFollowFeed = (feedId) => {
    console.log(apiKey['apikey']);
    axios
      .delete(`http://localhost:8080/v1/feed_follows/${feedId}`, {
        headers: {
          Authorization: `ApiKey 840934fdf0d1eee126995b106b9aba2a1f4f1ff4001b52e71894578e7d8ec07f`,
        },
      })
      .then((response) => {
        console.log(response.data);
        // You might want to update state based on the response if needed
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return { feeds, feedsFollows, feedsNotFollows, followFeed, unFollowFeed };
}

export default useFeeds;
