import Heading from "./Heading.jsx";
import { FaCheckCircle } from "react-icons/fa";
const Activationinfo = () => {

    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <FaCheckCircle size={100} className="text-n-3"/>
            <Heading
                className="md:max-w-md lg:max-w-2xl"
                title="An Account Activation mail has been sent to your Submitted Email id , Please check your email and click on the link to activate your account."
            />


        </div>
    )
};
export default Activationinfo;