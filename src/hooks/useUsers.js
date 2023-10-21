import { useState, useEffect } from "react";
import axios from "axios";

function useUsers() {
  const [user, setUser] = useState(null);

  function signin(username, password) {
    axios
      .post("http://localhost:8080/v1/signin", {
        username: username,
        password: password,
      })
      .then((response) => {
        if (response.status != 200) {
          console.log("Error");
        }
        setUser(response.data);
      });
  }

  return { signin, user };
}

export default useUsers;
