import { useLocation, useNavigate } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { brainwave } from "../assets";
import { navigation } from "../constants";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";
import { useState } from "react";
import { Link} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";
import Your from "../assets/brand_logo.png"

const Header = () => {
    const pathname = useLocation();
    const navigate = useNavigate(); // Importing the navigate function
    const [openNavigation, setOpenNavigation] = useState(false);

    const toggleNavigation = () => {
        if (openNavigation) {
            setOpenNavigation(false);
            enablePageScroll();
        } else {
            setOpenNavigation(true);
            disablePageScroll();
        }
    };

    const handleClick = () => {
        if (!openNavigation) return;

        enablePageScroll();
        setOpenNavigation(false);
    };

    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);

    const handleLogout = () => {
        dispatch(logout());
        dispatch(reset());
        navigate("/");
    };

    const handleSignInClick = () => {
        navigate("/login");
        if (openNavigation) {
            handleClick();
        }
    };

    return (
        <div
            className={`fixed top-0 left-0 w-full z-50 border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${
                openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
            }`}
        >
            <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
                <Link to={"/"} className="block w-[12rem] xl:mr-8">
                    <img src={Your} width={190} height={40} alt="Brainwave"/>
                </Link>

                <nav
                    className={`${
                        openNavigation ? "flex" : "hidden"
                    } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
                >
                    <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
                        {navigation.map((item) => (
                            <a
                                key={item.id}
                                href={item.id === "3" ? "/register" : item.id === "4" ? "/login" : item.url}
                                onClick={item.url.startsWith('#') ? handleClick : null}
                                className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${
                                    item.onlyMobile ? "lg:hidden" : ""
                                } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                                    item.url === pathname.hash
                                        ? "z-2 lg:text-n-1"
                                        : "lg:text-n-1/50"
                                } lg:leading-5 lg:hover:text-n-1 xl:px-12`}
                            >
                                {item.title}
                            </a>
                        ))}
                    </div>


                    <HamburgerMenu/>
                </nav>

                {user ? (
                    <Button className="hidden lg:flex" onClick={handleLogout}>
                        Logout
                    </Button>
                ) : (
                    <>
                        <Link to="/contactus"
                              className="button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block">
                            Contact Us
                        </Link>        
                        <Link to="/register"
                              className="button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block">
                            Register
                        </Link>
                        <Button className="hidden lg:flex" onClick={handleSignInClick}>
                            Sign in
                        </Button>
                    </>
                )}

                <Button
                    className="ml-auto lg:hidden"
                    px="px-3"
                    onClick={toggleNavigation}
                >
                <MenuSvg openNavigation={openNavigation} />
                </Button>
            </div>
        </div>
    );
};

export default Header;
