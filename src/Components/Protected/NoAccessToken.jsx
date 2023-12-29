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

        await axios.get(`https://fpbejs-production.up.railway.app/api/v1/auth/me`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
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
