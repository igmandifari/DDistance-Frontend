import ButtonLogout from "../../../components/ButtonLogout";
import HeaderListUser from "../../../components/HeaderListUser";
import Input from "../../../components/Input";
import { useToogle } from "../../../context/ToogleContext";

const JaminanDetail = () => {
  const { logout, decline, handleDecline } = useToogle();
  const dummyDetail = {
    nama: "Distributor 1",
  };
  return (
    <>
      <HeaderListUser />

      <div className="bg-background mx-10 h-[85vh] overflow-y-scroll">
        <div className="flex justify-end absolute right-10">
          {logout && <ButtonLogout />}
        </div>

        <h1 className="text-primary text-3xl font-extrabold mx-10 py-5 ">
          Detail Approval
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

            <label htmlFor="ktp" className="text-primary font-semibold">
              KTP
            </label>
            <img
              src="https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="w-40 h-28"
            />
            <label htmlFor="siu" className="text-primary font-semibold">
              SIU
            </label>
            <img
              src="https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="w-40 h-28"
            />
            <label htmlFor="agunan" className="text-primary font-semibold">
              Agunan
            </label>
            <img
              src="https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="w-40 h-28"
            />

            <div className="flex gap-4 mt-4">
              <button
                disabled={decline}
                className={`text-white font-bold px-8 py-1 rounded-lg ${
                  decline ? "bg-green-400 cursor-not-allowed" : "bg-green-600"
                }`}
              >
                Accept
              </button>
              <button
                className="bg-red-600 text-white font-bold px-8 py-1 rounded-lg"
                onClick={handleDecline}
              >
                Decline
              </button>
            </div>

            {decline && (
              <div className="mt-5">
                <label
                  htmlFor="description"
                  className="text-primary font-semibold"
                >
                  Alasan Penolakan
                </label>
                <textarea
                  name=""
                  id=""
                  cols="100"
                  rows="5"
                  className="outline-none rounded-2xl w-full"
                ></textarea>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default JaminanDetail;
