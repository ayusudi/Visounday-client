import { useNavigate } from "react-router-dom"

export default function NavBar({ page }) {
  const navigate = useNavigate()
  const exit = async () => {
    if (page === "Dashboard") {
      localStorage.clear();
      navigate("/");
    } else {
      navigate("/dashboard");
    }
  }

  return (
    <div className="w-full bg-darker mx-auto border-sizing rounded-2xl py-5 px-8 flex justify-between">
      <p className="text-2xl md:text-4xl text-white font-main flex gap-3">HELLO <u style={{ textDecorationColor: "orange" }} className="text-2xl md:text-4xl text-white font-main">{localStorage.getItem('name')}</u><b className="text-orange text-2xl md:text-4xl font-main">!</b></p>
      <p onClick={exit} id="logout" className="hover:underline text-2xl md:text-4xl text-white font-main cursor-pointer">{page === 'Dashboard' ? 'LOGOUT' : 'BACK'}</p>
    </div>
  )
}