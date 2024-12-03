import { useState, useEffect } from "react";
import Spinner from "./design/Spinner.jsx";
import { toast, ToastContainer } from "react-toastify";
import { BiUser } from "react-icons/bi";
import { HamburgerMenu } from "./design/Header.jsx";
import {register , reset } from "../features/auth/authSlice.jsx";
import Section from "./Section.jsx";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        re_password: ""
    });

    const { first_name, last_name, email, password, re_password } = formData

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth)

    const handleChange = (e) => {
        setFormData((prev) => ({
                ...prev,
                [e.target.name]: e.target.value
            })
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault()


        if (password !== re_password) {
            toast.error("Passwords do not match")
        } else {
            const userData = {
                first_name,
                last_name,
                email,
                password,
                re_password
            }
            dispatch(register(userData))
        }
    }


    useEffect(() => {
        if (isError) {
            toast.error(message)
        }

        if (isSuccess || user) {
            navigate("/activationinfo")
            toast.success("An activation email has been sent to your email. Please check your email")
        }

        dispatch(reset())

    }, [isError, isSuccess, user, navigate, dispatch])

    return (
        <>
            <Section>
                <div className="min-h-screen flex items-center justify-center p-5">
                    <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">
                            Register
                            <BiUser className="inline-block w-6 h-6 ml-2 mb-1" />
                        </h2>
                        {isLoading && <Spinner />}
                        <form className="w-full" onSubmit={handleSubmit}>
                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label
                                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                        htmlFor="first_name"
                                    >
                                        First Name
                                    </label>
                                    <input
                                        className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                        id="grid-first-name"
                                        type="text"
                                        placeholder=""
                                        name="first_name"
                                        value={first_name}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="w-full md:w-1/2 px-3">
                                    <label
                                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                        htmlFor="grid-last-name"
                                    >
                                        Last Name
                                    </label>
                                    <input
                                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                        id="grid-last-name"
                                        type="text"
                                        placeholder=""
                                        name="last_name"
                                        value={last_name}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full px-3">
                                    <label
                                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        Password
                                    </label>
                                    <input
                                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                        id="grid-password"
                                        type="password"
                                        name="password"
                                        onChange={handleChange}
                                        value={password}
                                    />
                                </div>
                            </div>
                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full px-3">
                                    <label
                                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        Confirm Password
                                    </label>
                                    <input
                                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                        id="grid-password"
                                        type="password"
                                        name="re_password"
                                        onChange={handleChange}
                                        value={re_password}
                                    />
                                </div>
                            </div>
                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full px-3">
                                    <label
                                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                        htmlFor="grid-email"
                                    >
                                        Email
                                    </label>
                                    <input
                                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                        id="grid-email"
                                        type="email"
                                        name="email"
                                        onChange={handleChange}
                                        value={email}
                                    />
                                </div>
                            </div>
                            <div className="md:flex md:items-center">
                                <div className="md:w-1/3"></div>
                                <div className="md:w-2/3">
                                    <button
                                        className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                                        type="submit"
                                    >
                                        Sign Up
                                    </button>
                                </div>
                            </div>
                            <HamburgerMenu />
                        </form>
                    </div>
                </div>
            </Section>
            <ToastContainer />
        </>
    );
};

export default RegisterPage;


// < div
// className = "flex flex-wrap -mx-3 mb-2" >
    {/*<div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">*/}
{/*    <label*/
}
{/*        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"*/
}
{/*        htmlFor="grid-city">*/
}
{/*        City*/
}
{/*    </label>*/
}
{/*    <input*/
}
{/*        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"*/
}
{/*        id="grid-city" type="text" placeholder=""/>*/
}
{/*</div>*/
}
{/*<div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">*/
}
{/*    <label*/
}
{/*        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"*/
}
{/*        htmlFor="grid-state">*/
}
{/*        State*/
}
{/*    </label>*/
}
{/*    <div className="relative">*/
}
{/*        <select*/
}
{/*            className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"*/
}
{/*            id="grid-state">*/
}
{/*            <option>Select</option>*/
}
{/*            <option>Andra Pradesh</option>*/
}
{/*            <option>Arunachal Pradesh</option>*/
}
{/*            <option>Assam</option>*/
}
{/*            <option>Bihar</option>*/
}
{/*            <option>Chhattisgarh</option>*/
}
{/*            <option>Goa</option>*/
}
{/*            <option>Gujarat</option>*/
}
{/*            <option>Haryana</option>*/
}
{/*            <option>Himachal Pradesh</option>*/
}
{/*            <option>Jharkhand</option>*/
}
{/*            <option>Karnataka</option>*/
}
{/*            <option>Kerala</option>*/
}
{/*            <option>Madhya Pradesh</option>*/
}
{/*            <option>Maharashtra</option>*/
}
{/*            <option>Manipur</option>*/
}
{/*            <option>Meghalaya</option>*/
}
{/*            <option>Mizoram</option>*/
}
{/*            <option>Nagaland</option>*/
}
{/*            <option>Odisha</option>*/
}
{/*            <option>Punjab</option>*/
}
{/*            <option>Rajasthan</option>*/
}
{/*            <option>Sikkim</option>*/
}
{/*            <option>Tamil Nadu</option>*/
}
{/*            <option>Telangana</option>*/
}
{/*            <option>Tripura</option>*/
}
{/*            <option>Uttar Pradesh</option>*/
}
{/*            <option>Uttarakhand</option>*/
}
{/*            <option>West Bengal</option>*/
}
{/*        </select>*/
}
{/*        <div*/
}
{/*            className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">*/
}
{/*            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg"*/
}
{/*                 viewBox="0 0 20 20">*/
}
{/*                <path*/
}
{/*                    d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>*/
}
{/*            </svg>*/
}
{/*        </div>*/
}
{/*    </div>*/
}
{/*</div>*/
}
// </div>