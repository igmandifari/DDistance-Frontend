import { useParams } from "react-router-dom";

import Input from "../../../components/Input";
import ButtonLogout from "../../../components/ButtonLogout";
import HeaderListUser from "../../../components/HeaderListUser";

import { useToogle } from "../../../context/ToogleContext";
import { useFetchInvoiceById } from "../../../hooks/invoice/useFetchInvoiceById";
import { useFetchFileInvoice } from "../../../hooks/invoice/useFetchFileInvoice";
import { formatIDRCurrency } from "../../../utils/utility";

const InvoiceDetail = () => {
  const { logout } = useToogle();
  const { id } = useParams();

  const { data: getInvoiceById } = id ? useFetchInvoiceById(id) : {};

  const { data: getFileInvoice } = id ? useFetchFileInvoice(id) : {};
  
  const invoiceDetail = getInvoiceById;
  const fileInvoice = getFileInvoice;

  return (
    <>
      <HeaderListUser />

      <div className="bg-background mx-10 h-[89vh] overflow-y-scroll">
        <div className="flex justify-end absolute right-10">
          {logout && <ButtonLogout />}
        </div>

        <h1 className="text-primary text-3xl font-extrabold mx-10 py-5 ">
          Detail Approval Invoice
        </h1>

        <div className="bg-bgSecondary ml-8 py-1 w-[60%] rounded-2xl ">
          <div className="flex flex-col gap-2 w-[50%] mx-5 pb-2">
            <label htmlFor="namaToko" className="text-primary font-semibold">
              Nama Merchant
            </label>
            <div>
              <Input
                type="text"
                name="namaToko"
                disabled
                styleError={"bg-white"}
                id="namaToko"
                value={invoiceDetail?.namaToko}
              />
            </div>

            <label
              htmlFor="namaDistributor"
              className="text-primary font-semibold"
            >
              Nama Distributor
            </label>
            <div>
              <Input
                type="namaDistributor"
                name="namaDistributor"
                disabled
                styleError={"bg-white"}
                id="email"
                value={invoiceDetail?.namaDistributor}
              />
            </div>

            <label
              htmlFor="tanggalTagihan"
              className="text-primary font-semibold"
            >
              Tanggal Waktu
            </label>
            <div>
              <Input
                type="text"
                name="tanggalTagihan"
                disabled
                styleError={"bg-white"}
                id="tanggalTagihan"
                value={invoiceDetail?.tanggalTagihan}
              />
            </div>

            <label
              htmlFor="tanggalJatuhTempo"
              className="text-primary font-semibold"
            >
              Jatuh Tempo
            </label>
            <div>
              <Input
                type="text"
                name="tanggalJatuhTempo"
                disabled
                styleError={"bg-white"}
                id="tanggalJatuhTempo"
                value={invoiceDetail?.tanggalJatuhTempo}
              />
            </div>

            <label
              htmlFor="jumlahTagihan"
              className="text-primary font-semibold"
            >
              Total Tagihan
            </label>
            <div>
              <Input
                type="text"
                name="jumlahTagihan"
                id="jumlahTagihan"
                disabled
                styleError={"bg-white"}
                value={formatIDRCurrency(invoiceDetail?.jumlahTagihan)}
              />
            </div>

            <p className="text-primary font-semibold">Faktur Fisik</p>
            <img src={fileInvoice} alt="Faktur fisik" className="w-40 h-28" />

            <p className="text-primary font-semibold -mb-2">Status</p>
            <p
              className={`text-lg font-semibold ${
                invoiceDetail?.status === "DALAM_PROSES"
                  ? "text-[#FFB000]"
                  : "text-green-600"
              }`}
            >
              {invoiceDetail?.status === "DALAM_PROSES" && "Pending"}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default InvoiceDetail;
