
import { HiMagnifyingGlass, HiMoon, HiSun } from "react-icons/hi2"
import logo from "../assets/images/logo.png"
import { useContext, useEffect, useState } from "react"
import ThemeContext from "../Context/ThemeContext";

const Header = () => {
    const [toggle, setToggle] = useState(true)
    const {theme, setTheme} = useContext(ThemeContext)

    useEffect(() => {
        //console.log("Theme", theme);
    }, [])

    return (
        <div className="flex items-center p-3">
            <img src={logo} alt="logo" width={60} height={60} />
            <div className="flex bg-slate-200 p-2 items-center w-full rounded-full mx-5">
                <HiMagnifyingGlass />
                <input type="text" placeholder="Search Games" className="px-2 bg-transparent outline-none" />
            </div>
            <div>
                {theme == "light" ? <HiMoon className="text-[35px] bg-slate-200 text-black p-1 rounded-full cursor-pointer"
                    onClick={() => {setTheme("dark"); localStorage.setItem("theme", "dark")}} /> : <HiSun className="text-[35px] bg-slate-200 text-black p-1 rounded-full cursor-pointer"
                        onClick={() => {setTheme("light"); localStorage.setItem("theme", "light")}} />}
            </div>
        </div>
    )
}

export default Header