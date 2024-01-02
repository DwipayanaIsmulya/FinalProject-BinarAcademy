import CardRiwayatPembayaranComponent from "../CardRiwayatPembayaranComponent";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMyTransaction } from "../../redux/actions/myTransactionAction";

const RiwayatPembelianComponent = () => {
  const { myTransaction } = useSelector((state) => state.myTransaction);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMyTransaction());
  }, [dispatch]);
  return (
    <>
      <div className="text-md font-bold text-center mx-auto">Riwayat Pembayaran</div>
      <div className="py-2">
        <div className="md:px-9">
          <CardRiwayatPembayaranComponent id={myTransaction.id} name={myTransaction.course} level={myTransaction.courseLevel} category={myTransaction.category} />
        </div>
      </div>
    </>
  );
};

export default RiwayatPembelianComponent;
