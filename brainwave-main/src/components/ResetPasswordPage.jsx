import {useState} from "react";
import Spinner from "./design/Spinner.jsx";
import {toast, ToastContainer} from "react-toastify";
import {HamburgerMenu} from "./design/Header.jsx";
import {resetPassword} from "../features/auth/authSlice"
import {RiLockPasswordLine} from "react-icons/ri";
import {useEffect} from "react"
import {useNavigate} from "react-router-dom"
import {useDispatch, useSelector} from 'react-redux'
import Section from "./Section.jsx";

const ResetPasswordPage = () => {
    const [formData, setFormData] = useState({
        "email": "",
    })

    const {email} = formData

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const {isLoading, isError, isSuccess, message} = useSelector((state) => state.auth)


    const handleChange = (e) => {
        setFormData((prev) => ({
                ...prev,
                [e.target.name]: e.target.value
            })
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const userData = {
            email
        }

        dispatch(resetPassword(userData))
    }

    useEffect(() => {
        if (isError) {
            toast.error(message)
        }
        if (isSuccess) {
            navigate("/")
            toast.success("A reset password email has been sent to you.")

        }


    }, [isError, isSuccess, message, navigate, dispatch])

    return (
        <>
            <Section>
                <div className="min-h-screen flex items-center justify-center p-5">
                    <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">
                            Reset Password
                            <RiLockPasswordLine className="inline-block w-6 h-6 ml-2 mb-1"/>
                        </h2>
                        {isLoading && <Spinner/>}
                        <form className="w-full" onSubmit={handleSubmit}>
                            <div className="flex flex-col items-center justify-center mb-6">
                                <div className="w-full px-3">
                                    <label
                                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-center"
                                        htmlFor="email"
                                    >
                                        E-Mail
                                    </label>
                                    <input
                                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                        id="grid-password"
                                        type="email"
                                        name="email"
                                        onChange={handleChange}
                                        value={email}
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-center mb-6">
                                <div className="md:flex w-full ml-[19rem] mt-3 md:items-center">
                                    <div className="md:w-2/3">
                                        <button
                                            className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                                            type="submit"
                                            onClick={handleSubmit}
                                        >
                                            Reset Password
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </form>
                        <HamburgerMenu/>
                    </div>
                </div>
            </Section>
            <ToastContainer/>
        </>
    );
};

export default ResetPasswordPage;