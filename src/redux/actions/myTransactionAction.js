import axios from "axios";
import { setMyTransaction } from "../reducers/myTransactionReducer";
import toast from "react-hot-toast";

export const getMyTransaction = () => async (dispatch, getState) => {
  try {
    const { token } = getState().auth;
    const response = await axios.get("https://fpbejs-production.up.railway.app/api/v1/transaction/my-transaction", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const { data } = response.data;
    dispatch(setMyTransaction(data));
  } catch (error) {
    toast.error(error.message);
  }
};
