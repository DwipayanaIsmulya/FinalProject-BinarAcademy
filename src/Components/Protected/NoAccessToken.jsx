import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

const NoAccessToken = ({ children }) => {
  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    const getMe = async () => {
      try {
        if (!token) {
          return;
        }

<<<<<<< HEAD
        await axios.get(`https://fpbejs-production.up.railway.app/api/v1/auth/me`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
=======
        await axios.get(
          `https://fpbejs-production.up.railway.app/api/v1/auth/me`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
>>>>>>> 20cefc9dccc662830b3ca5fc3bae1668e5edb039
        navigate("/");
      } catch (error) {
        return;
      }
    };

    getMe();
  }, [token, navigate]);
  return children;
};

export default NoAccessToken;
