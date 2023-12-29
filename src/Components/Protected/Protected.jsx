import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";

const Protected = ({ children }) => {
  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    const getMe = async () => {
      try {
        if (!token) {
          return navigate("/login");
        }

        await axios.get(
          `https://fpbejs-production.up.railway.app/api/v1/auth/me`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
      } catch (error) {
        // Handle error as needed
        console.error("Error fetching user data:", error);
        // Optionally, you can redirect to login on error as well
        navigate("/login");
      }
    };

    getMe();
  }, [token, navigate]);

  return children;
};

export default Protected;
