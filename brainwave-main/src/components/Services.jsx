import Section from "./Section";
import Heading from "./Heading";
import {service1, check} from "../assets";
import {brainwaveServices, guide} from "../constants";
import Button from "./Button.jsx";
import {
    Gradient,
} from "./design/Services";
import {reactCode, vueCode, angularCode} from "../constants";
import {useState} from "react";
import {Link} from "react-router-dom";

const Services = () => {
    const [selectedLanguage, setSelectedLanguage] = useState(null);

    return (
        <Section id="how-to-use">
            <div className="container">
                <Heading
                    title="Clothes try on ai for Business."
                    text="Revachi's ai soulution boosts the customer confidence in buying clothes."
                />
                <div className="relative">
                    <div className="relative z-1 grid gap-5 lg:grid-cols-2">
                        <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
                            <div
                                className="absolute inset-0 flex flex-col justify-start p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                                <h4 className="h4 mb-4 justify-center">Guide</h4>
                                <h5 className="h5 mb-4 justify-center">For man and women</h5>
                                <ul className="max-w-[22rem] mb-10 md:mb-14">
                                    {guide.map((item) => (
                                        <li className="mb-3 py-3" key={item.id}>
                                            <div className="flex items-center">
                                                <img src={check} width={24} height={24} alt="check"/>
                                                <h6 className="body-2 ml-5">{item.title}</h6>
                                            </div>
                                            {item.text && (
                                                <p className="body-2 mt-3 text-n-4">{item.text}</p>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="relative min-h-[46rem] border border-n-1/10 rounded-3xl overflow-hidden">
                            <div
                                className="absolute inset-0 flex flex-col justify-start py-12 px-4 xl:px-8 bg-gradient-to-b from-n-8/0 to-n-8/90">
                                <h4 className="h4 mb-4">Enterprise Guide</h4>
                                <p className="body-2 mb-[2rem] text-n-3">
                                    We also Provide API services to enterprise companies.
                                </p>
                                <Link to="/getapi">
                                    <Button>GET API KEY</Button>
                                </Link>
                                <p className="body-2 mb-[2rem] mt-[2rem] text-n-3">
                                    Use the following code to integrate with Revachi Ai.
                                </p>
                                <div>
                                    <div className="flex space-x-2 mb-4 mt-5 justify-center">
                                        <button
                                            className={`px-4 py-2 rounded ${selectedLanguage === 'react' ? 'bg-blue-500 text-white' : 'bg-blue-300 text-black'}`}
                                            onClick={() => setSelectedLanguage('react')}
                                        >
                                            React Code
                                        </button>
                                        <button
                                            className={`px-4 py-2 rounded ${selectedLanguage === 'angular' ? 'bg-red-500 text-white' : 'bg-red-300 text-black'}`}
                                            onClick={() => setSelectedLanguage('angular')}
                                        >
                                            Angular Code
                                        </button>
                                        <button
                                            className={`px-4 py-2 rounded ${selectedLanguage === 'vue' ? 'bg-green-500 text-white' : 'bg-green-300 text-black'}`}
                                            onClick={() => setSelectedLanguage('vue')}
                                        >
                                            Vue Code
                                        </button>
                                    </div>

                                    {selectedLanguage && (
                                        <div
                                            className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem] mt-4 p-4">
                                            <div className="overflow-auto h-full bg-gray-900 text-white rounded p-4">
                        <pre>
                            <code>
                                {selectedLanguage === 'react' ? reactCode : selectedLanguage === 'angular' ? angularCode : vueCode}
                            </code>
                        </pre>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                    </div>
                    <Gradient/>
                </div>
            </div>
        </Section>
    )
        ;
};

export default Services;
