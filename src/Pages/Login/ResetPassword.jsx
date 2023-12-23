import axios from "axios";
import { useState } from "react";


const ResetPassword = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleResetPassword = async () => {
        try{
            // eslint-disable-next-line no-undef
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/reset-password`, {email, password});
            setMessage(response.data.message);
        } catch (error) { 
         
            setMessage("Password min8 karakter!");

        }
    };
  return (
    <>
        <h2>Reset Password</h2>
      <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <button onClick={handleResetPassword}>Reset Password</button>
      <p>{message}</p>
    </>
  );
};

export default ResetPassword;
