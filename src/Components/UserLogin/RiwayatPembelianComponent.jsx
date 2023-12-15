import CardRiwayatPembayaranComponent from "../CardRiwayatPembayaranComponent";

const RiwayatPembelianComponent = () => {
  return (
    <>
      <div className="text-md font-bold text-center mx-auto">Riwayat Pembayaran</div>
      <div className="py-2">
        <div className="md:px-9">
          <CardRiwayatPembayaranComponent />
        </div>
      </div>
      <div className="py-2">
        <div className="md:px-9">
          <CardRiwayatPembayaranComponent />
        </div>
      </div>
      <div className="py-2">
        <div className="md:px-9">
          <CardRiwayatPembayaranComponent />
        </div>
      </div>
    </>
  );
};

export default RiwayatPembelianComponent;
