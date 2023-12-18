import { useToogle } from "../../../context/ToogleContext";
import ButtonLogout from "../../../components/ButtonLogout";
import HeaderListUser from "../../../components/HeaderListUser";
import Input from "../../../components/Input";

const AdminForm = () => {
  const { logout } = useToogle();

  return (
    <>
      <HeaderListUser />
      <div className="bg-background mx-10 min-h-[85%]">
        <div className="flex justify-end absolute right-10">
          {logout && <ButtonLogout />}
        </div>

        <h1 className="text-primary text-3xl font-extrabold mx-10 py-5">
          Tambah Kredit Analis
        </h1>

        <form action="">
          <div className="bg-bgSecondary ml-8 py-3 w-[60%] min-h-full rounded-2xl pb-36">
            <div className="flex flex-col gap-2 w-[50%] mx-5">
              <label htmlFor="nama" className="text-primary font-semibold">
                Nama
              </label>
              <div>
                <Input type="text" name="nama" id="nama" />
              </div>

              <label htmlFor="email" className="text-primary font-semibold">
                Email
              </label>
              <div>
                <Input type="email" name="email" id="email" />
              </div>

              <label htmlFor="alamat" className="text-primary font-semibold">
                Alamat
              </label>
              <div>
                <Input type="text" name="alamat" id="alamat" />
              </div>

              <label htmlFor="telp" className="text-primary font-semibold">
                No. Telp
              </label>
              <div>
                <Input type="text" name="telp" id="telp" />
              </div>

              <label htmlFor="status" className="text-primary font-semibold">
                Status User
              </label>
              <select
                name="status"
                id="status"
                className="border-none outline-none px-2 py-[7px] rounded-2xl w-[84%] bg-white"
              >
                <option value="AKTIF">Aktif</option>
                <option value="AKTIF">Non Aktif</option>
              </select>
            </div>
          </div>
          <div className="flex justify-end mr-16">
            <button
              className="bg-[#F36C21] text-white text-sm font-bold py-1 px-7 rounded-md"
              type="submit"
            >
              Tambah
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AdminForm;
