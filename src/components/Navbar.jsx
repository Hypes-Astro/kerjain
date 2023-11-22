import Profil from "../assets/ShortHairMan.png"

const Navbar = () => {
    return(
        <div className="navbar bg-base-100 shadow-xl">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">Kerjain</a>
            </div>
            <div className="flex-none gap-2">
                <div className="dropdown dropdown-end">
                <label className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <a href="https://github.com/Hypes-Astro">
                            <img alt="" src={Profil} />
                        </a>
                    </div>
                </label>
                
                </div>
            </div>
        </div>
    );
}

export default Navbar;