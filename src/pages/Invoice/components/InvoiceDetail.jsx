import ButtonLogout from "../../../components/ButtonLogout";
import HeaderListUser from "../../../components/HeaderListUser";
import Input from "../../../components/Input";
import { useToogle } from "../../../context/ToogleContext";

const InvoiceDetail = () => {
  const { logout } = useToogle();

  const dummyDetail = {
    nama: "Toko 1",
    distributor: "Distributor 1",
    tanggal: "23/12/2023              17.10",
    jatuhTempo: "23/01/2024              17.10",
    totalTagihan: "Rp. 10.000.000,00",
    status: "Accepted",
  };

  return (
    <>
      <HeaderListUser />

      <div className="bg-background mx-10 h-[85vh] overflow-y-scroll">
        <div className="flex justify-end absolute right-10">
          {logout && <ButtonLogout />}
        </div>

        <h1 className="text-primary text-3xl font-extrabold mx-10 py-5 ">
          Detail Approval Invoice
        </h1>

        <div className="bg-bgSecondary ml-8 py-3 w-[60%] rounded-2xl mb-7">
          <div className="flex flex-col gap-2 w-[50%] mx-5 pb-6">
            <label htmlFor="nama" className="text-primary font-semibold">
              Nama Merchant
            </label>
            <div>
              <Input
                type="text"
                name="nama"
                id="nama"
                value={dummyDetail.nama}
              />
            </div>

            <label htmlFor="email" className="text-primary font-semibold">
              Nama Distributor
            </label>
            <div>
              <Input
                type="email"
                name="email"
                id="email"
                value={dummyDetail.distributor}
              />
            </div>

            <label htmlFor="alamat" className="text-primary font-semibold">
              Tanggal Waktu
            </label>
            <div>
              <Input
                type="text"
                name="alamat"
                id="alamat"
                value={dummyDetail.tanggal}
              />
            </div>

            <label htmlFor="telp" className="text-primary font-semibold">
              Jatuh Tempo
            </label>
            <div>
              <Input
                type="text"
                name="telp"
                id="telp"
                value={dummyDetail.jatuhTempo}
              />
            </div>

            <label htmlFor="company" className="text-primary font-semibold">
              Total Tagihan
            </label>
            <div>
              <Input
                type="text"
                name="company"
                id="company"
                value={dummyDetail.totalTagihan}
              />
            </div>

            <label htmlFor="status" className="text-primary font-semibold">
              Faktur Fisik
            </label>
            <img
              src="https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="w-40 h-28"
            />

            <p
              className={`text-lg font-bold ${
                dummyDetail.status === "Accepted"
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {dummyDetail.status}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default InvoiceDetail;
