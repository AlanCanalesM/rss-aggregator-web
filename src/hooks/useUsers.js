import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function useUsers() {
  const [loginError, setLoginError] = useState(null);
  const navigate = useNavigate()

  function signin(username, password) {
    axios
      .post("http://localhost:8080/v1/signin", {
        username: username,
        password: password,
      })
      .then((response) => {
        if (response.status !== 200) {
          setLoginError(true);
        } else {
          setLoginError(false); // Reset the error state if the login is successful
          navigate('/home',{
            state: {user:response.data},
            replace: true
          })
        }
      })
      .catch((error) => {
        if (error.response && error.response.status === 404) {
          setLoginError(true);
        }
      });
  }

  return { signin, loginError };
}

export default useUsers;
