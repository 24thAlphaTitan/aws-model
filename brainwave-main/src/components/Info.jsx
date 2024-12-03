import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { IoPersonCircle } from "react-icons/io5";
import {getUserInfo} from "../features/auth/authSlice.jsx";
import Section from "./Section.jsx";


const Info = () => {
    const dispatch = useDispatch();
    const { userInfo, isLoading } = useSelector((state) => state.auth);

    useEffect(() => {
        dispatch(getUserInfo());
    }, [dispatch]);

    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    return (
        <Section>
            <div className="justify-center">
                <h1>Welcome, {userInfo?.first_name || 'User'} </h1>
                <h1>Welcome, {userInfo?.last_name || 'User'} </h1>
                <IoPersonCircle/>
            </div>
        </Section>
    );
};

export default Info;