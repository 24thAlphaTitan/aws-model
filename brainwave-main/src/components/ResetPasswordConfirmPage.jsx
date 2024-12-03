import React , {useState,useEffect} from 'react';
import {resetPasswordConfirm} from "../features/auth/authSlice.jsx";
import { useNavigate, useParams } from 'react-router-dom'
import {toast, ToastContainer} from 'react-toastify'
import { useSelector, useDispatch } from "react-redux"
import { AiFillLock } from 'react-icons/ai'
import Spinner from "./design/Spinner.jsx";
import Section from "./Section.jsx";
import {RiLockPasswordLine} from "react-icons/ri";
import {HamburgerMenu} from "./design/Header.jsx";

const ResetPasswordConfirmPage = () => {

    const { uid, token } = useParams()
    const [formData, setFormData] = useState({
        'new_password': '',
        're_new_password': ''
    })

    const { new_password, re_new_password } = formData

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { isLoading, isError, isSuccess, message } = useSelector((state) => state.auth)


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
            uid,
            token,
            new_password,
            re_new_password
        }

        dispatch(resetPasswordConfirm(userData))
    }

    useEffect(() => {
        if (isError) {
            toast.error(message)
        }
        if (isSuccess) {
            navigate("/")
            toast.success("Your password was reset successfully.")

        }


    }, [isError, isSuccess, message, navigate, dispatch])


    return (
        <>
            <Section>
                <div className="min-h-screen flex items-center justify-center p-5">
                    <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">
                            Reset Password
                            <AiFillLock className="inline-block w-6 h-6 ml-2 mb-1"/>
                        </h2>
                        {isLoading && <Spinner/>}
                        <form className="w-full" onSubmit={handleSubmit}>
                            <div className="flex flex-col items-center justify-center mb-6">
                                <div className="w-full px-3">
                                    <label
                                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-center"
                                        htmlFor="email"
                                    >

                                    </label>
                                    <input
                                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                        id="grid-password"
                                        type="password"
                                        name="new_password"
                                        onChange={handleChange}
                                        value={new_password}
                                    />
                                    <input
                                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                        id="grid-password"
                                        type="password"
                                        name="re_new_password"
                                        onChange={handleChange}
                                        value={re_new_password}
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
    )
}

export default ResetPasswordConfirmPage