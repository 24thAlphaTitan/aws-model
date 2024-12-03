import {BiUserCheck} from "react-icons/bi";
import Heading from "./Heading.jsx";
import Button from "./Button.jsx";
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { activate, reset } from '../features/auth/authSlice'
import { toast } from 'react-toastify'

const ActivationPage = () => {
    const { uid, token } = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { isLoading, isError, isSuccess, message } = useSelector((state) => state.auth)

    const handleSubmit = (e) => {
        e.preventDefault()

        const userData = {
            uid,
            token
        }
        dispatch(activate(userData))
        toast.success("Your account has been activated! You can login now")
    }

    useEffect(() => {
        if (isError) {
            toast.error(message)
        }

        if (isSuccess) {
            navigate("/login")
        }

        dispatch(reset())

    }, [isError, isSuccess, navigate, dispatch])
    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <BiUserCheck size={100} className="text-n-3"/>
            <Heading
                className="md:max-w-md lg:max-w-2xl"
                title="Account Activate"
            />
            <Button white onClick={handleSubmit}>Activate Account</Button>

        </div>
    )
};
export default ActivationPage;