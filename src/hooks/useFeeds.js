import { useState, useEffect } from "react";
import axios from "axios";
function useFeeds() {
  const [feeds, setFeeds] = useState([]);

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

  return { feeds };
}

export default useFeeds;
