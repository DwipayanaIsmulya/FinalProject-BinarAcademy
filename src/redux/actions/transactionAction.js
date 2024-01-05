import axios from "axios";
import toast from "react-hot-toast";

export const transaction = (courseId, paymentMethod, cardNumber, cardHolderName, cvv, expiryDate, total, setErrors, errors, token, navigate) => async () => {
  try {
    let data = JSON.stringify({
      courseId,
      paymentMethod,
      cardNumber,
      cardHolderName,
      cvv,
      expiryDate,
      total,
    });

    let config = {
      method: "post",
      url: "https://fpbejs-production.up.railway.app/api/v1/transaction/create",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      data: data,
    };

    await axios.request(config);

    setErrors({ ...errors, isError: false });
    toast.success("Your Transaction Done!", {
      duration: 3000,
    });
    navigate("/pembayarandone");
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(error?.response?.data?.message, {
        duration: 3000,
      });
      return;
    }
    toast.error(error?.message, {
      duration: 3000,
    });
  }
};
