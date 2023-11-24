import { useState, useEffect } from "react";
import axios from "axios";

function useFeeds(apiKey) {
  const [feeds, setFeeds] = useState([]);
  const [feedsFollows, setFeedsFollows] = useState([]);
  const [feedsNotFollows, setFeedsNotFollows] = useState([]);

  const fetchData = () => {
    console.log("executing fetch data");
    // Fetch data from the API and update state
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

    axios
      .get("http://localhost:8080/v1/feeds_not_followed", {
        headers: {
          Authorization: `ApiKey ${apiKey}`,
        },
      })
      .then((response) => {
        setFeedsNotFollows(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData(); // Fetch data on mount
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
            Authorization: `ApiKey ${apiKey}`,
          },
        }
      )
      .then((response) => {
        // console.log(response.data);
        fetchData(); // Refresh data after a successful follow
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const unFollowFeed = (feedId) => {
    axios
      .delete(`http://localhost:8080/v1/feed_follows/${feedId}`, {
        headers: {
          Authorization: `ApiKey ${apiKey}`,
        },
      })
      .then((response) => {
        // console.log(response.data);
        fetchData(); // Refresh data after a successful unfollow
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return { feeds, feedsFollows, feedsNotFollows, followFeed, unFollowFeed };
}

export default useFeeds;
