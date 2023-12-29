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
      } catch (error) {
        // Handle error as needed
        console.error("Error fetching user data:", error);
        // Optionally, you can redirect to login on error as well
<<<<<<< HEAD
        // navigate("/login");
=======
        navigate("/login");
>>>>>>> 20cefc9dccc662830b3ca5fc3bae1668e5edb039
      }
    };

    getMe();
  }, [token, navigate]);

  return children;
};

export default Protected;
