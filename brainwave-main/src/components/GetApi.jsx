import axios from 'axios';
import React, {useState} from 'react';
import Section from "./Section.jsx";
import Heading from "./Heading.jsx";
import useRazorpay from "react-razorpay";
import {closed_hands , example_img1 , man2 ,shirt ,exapmle2 ,e ,img_web,man} from "../assets";

function GetApi() {
    const [companyName, setCompanyName] = useState('');
    const [url, setUrl] = useState('');
    const [apiKey, setApiKey] = useState('');
    const [Razorpay, setRazorpay] = useRazorpay();

    const handleCompanyNameChange = (event) => {
        setCompanyName(event.target.value);
    };

    const handleUrlChange = (event) => {
        setUrl(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (companyName && url) {
            try {
                const response = await axios.post('https://api.revachiai.com/api/generate-key/', {
                    name: companyName,
                    url: url
                });
                if (response.data.api_key) {
                    setApiKey(response.data.api_key);
                }
            } catch (error) {
                console.error('There was an error generating the API key!', error);
            }
        } else {
            alert("Please enter a company name and company URL.");
        }
    };

    const handleCopy = () => {
        if (apiKey) {
            navigator.clipboard.writeText(apiKey).then(() => {
                alert("Please Save your API key. You need this to generate the Try On Look for your website.");
            }).catch(err => {
                console.error('Failed to copy the API key: ', err);
            });
        }
    };

    return (
        <Section>
            <div className="container mx-auto mt-5 overflow-auto px-4">
                <main className="mt-4 overflow-auto">
                    <form onSubmit={handleSubmit} className="flex flex-col items-center">
                        <Heading className="md:max-w-md lg:max-w-2xl" title="Get Api Key"/>
                        <div className="mb-4 w-1/2">
                            <label htmlFor="companyName" className="block text-sm font-medium text-white text-center">
                                Company Name
                            </label>
                            <input
                                type="text"
                                className="mt-1 block w-full px-3 py-2 border text-black border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                                id="companyName"
                                value={companyName}
                                onChange={handleCompanyNameChange}
                            />
                        </div>
                        <div className="mb-4 w-1/2">
                            <label htmlFor="url" className="block text-sm font-medium text-white text-center">
                                Company Website URL
                            </label>
                            <input
                                type="text"
                                className="mt-1 block w-full px-3 py-2 border text-black border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                                id="url"
                                value={url}
                                onChange={handleUrlChange}
                            />
                        </div>
                        <button
                            type="submit"
                            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                        >
                            Generate API Key
                        </button>
                    </form>
                    {apiKey && (
                        <div className="mt-4">
                            <label htmlFor="apiKey" className="block text-sm font-medium text-white">
                                Generated API Key
                            </label>
                            <div className="mt-1 flex rounded-md shadow-sm">
                                <input
                                    type="text"
                                    className="flex-1 block w-full  text-black border-gray-300 rounded-none rounded-l-md sm:text-sm border-gray-300 focus:ring-primary focus:border-primary"
                                    id="apiKey"
                                    value={apiKey}
                                    readOnly
                                />
                                <button
                                    className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-r-md text-gray-700 bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                                    onClick={handleCopy}
                                >
                                    Copy
                                </button>
                            </div>
                        </div>
                    )}


                    <div className="mt-10">
                        <label htmlFor="companyName" className="block text-2xl font-extrabold text-white text-center">
                            While Sending the Cloth images through the API, the garment arms should be closed as shown
                            in the reference images below :
                        </label>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-5">
                            <div className="grid gap-4">
                                <div>
                                    <img className="h-full max-w-full rounded-lg"
                                         src={closed_hands}  alt=""/>
                                </div>
                            </div>
                            <div className="grid gap-4">
                                <div>
                                    <img className="h-full max-w-full rounded-lg"
                                         src={example_img1}  alt=""/>
                                </div>
                            </div>
                            <div className="grid gap-4">
                                <div>
                                    <img className="h-full max-w-full rounded-lg"
                                         src={shirt}  alt=""/>
                                </div>
                            </div>
                            <div className="grid gap-4">
                                <div>
                                    <img className="h-full max-w-full rounded-lg"
                                         src={exapmle2}  alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-10">
                        <label htmlFor="companyName" className="block text-2xl font-extrabold text-white text-center">
                            While Sending the Person image through the API, the person should stand like shown below in the reference images:
                        </label>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-5">
                            <div className="grid gap-4">
                                <div>
                                    <img className="h-full max-w-full rounded-lg"
                                         src={e}  alt=""/>
                                </div>
                            </div>
                            <div className="grid gap-4">
                                <div>
                                    <img className="h-full max-w-full rounded-lg"
                                         src={img_web}  alt=""/>
                                </div>
                            </div>
                            <div className="grid gap-4">
                                <div>
                                    <img className="h-full max-w-full rounded-lg"
                                         src={man}  alt=""/>
                                </div>
                            </div>
                            <div className="grid gap-4">
                                <div>
                                    <img className="h-full max-w-full rounded-lg"
                                         src={man2}  alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>

                </main>
            </div>


        </Section>
    );
}

export default GetApi;
