import { useContext } from "react";
import {
    Navbar,
    Typography,
    Button,
    IconButton
} from "@material-tailwind/react";
import { ThemeContext } from "@/context/ThemeContext";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import { CNAME } from "@/utilities/constants";
//hi

export function NavBar() {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <Navbar className="bg-transparent border-none outline-none shadow-none pt-5" fullWidth blurred={false}>
            <div className="flex flex-col justify-around gap-6 md:flex-row md:items-center">
                <div>
                    <Typography variant="h2" className="text-black dark:text-white">
                        <span className="text-[#26B7A4] font-custom2">{CNAME.charAt(0)}</span>
                        {CNAME.slice(1, -1)}
                        <span className="text-[#26B7A4]">{CNAME.charAt(CNAME.length - 1)}</span>
                    </Typography>
                </div>

                <div className="flex items-center gap-5 text-black dark:text-white font-semibold">
                    <Typography className="text-[#26B7A4]">Home</Typography>
                    <Typography>Features</Typography>
                    <Typography>About</Typography>
                    <Typography>Pricing</Typography>
                </div>

                <div className="flex items-center gap-3">
                    <IconButton
                        variant="text"
                        onClick={toggleTheme}
                        className="text-black dark:text-white"
                    >
                        {theme === "dark" ? <SunIcon className="h-6 w-6" /> : <MoonIcon className="h-5 w-5" />}
                    </IconButton>
                    <Button className="bg-[#26B7A4] text-white border-none">Login</Button>
                    <Button className="bg-transparent text-[#26B7A4] border border-[#26B7A4]  hover:bg-[#26B7A4] hover:text-black transition-colors duration-700 ease-in-out">
                        Sign Up
                    </Button>

                </div>
            </div>
        </Navbar>
    );
}

export default NavBar;
