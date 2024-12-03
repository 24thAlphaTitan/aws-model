import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Header from "./components/Header";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import RegisterPage from "./components/RegisterPage";
import ButtonGradient from "./assets/svg/ButtonGradient.jsx";
import ResetPasswordPage from "./components/ResetPasswordPage.jsx";
import ActivationPage from "./components/ActivationPage.jsx";
import Login from "./components/Login.jsx";
import Activationinfo from "./components/Activationinfo.jsx";
import ResetPasswordConfirmPage from "./components/ResetPasswordConfirmPage.jsx";
import Info from "./components/Info.jsx";
import GetApi from "./components/GetApi.jsx";
import Tryon from "./components/tryon.jsx";
import ContactUs from "./components/ContactUs.jsx";
import TermsAndConditions from "./components/terms-and-conditions.jsx";

const HomePage = () => (
    <>
        <Hero/>
        <Benefits/>
        <Collaboration/>
        <Services/>
        <Pricing/>
    </>
);

const App = () => {
    return (
        <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
            <Header/>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/register" element={<RegisterPage/>}/>
                <Route path="/reset-password" element={<ResetPasswordPage/>}/>
                <Route path="/activate/:uid/:token" element={<ActivationPage/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/activationinfo" element={<Activationinfo/>}/>
                <Route path="/info" element={<Info/>}/>
                <Route path="/getapi" element={<GetApi/>}/>
                <Route path="/tryon" element={<Tryon/>}/>
                <Route path="/terms-and-conditions" element={<TermsAndConditions/>}/>
                <Route path="/contactus" element={<ContactUs/>}/>
                <Route path="/password/reset/confirm/:uid/:token" element={<ResetPasswordConfirmPage/>}/>
            </Routes>
            <Footer/>
            <ButtonGradient/>
        </div>
    );
};

export default App;
