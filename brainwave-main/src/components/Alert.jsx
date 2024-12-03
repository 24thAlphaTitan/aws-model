import { useState, useEffect } from 'react';
import {g_ingo,final_info,cat_sel} from "../assets";

const AlertModal = () => {
    const [showModal, setShowModal] = useState(true);  // State to show or hide the modal
    const [currentStep, setCurrentStep] = useState(0); // State to track the current image

    const images = [final_info, g_ingo,cat_sel];   // Store imported images in an array

    // Function to handle closing the modal
    const closeModal = () => {
        setShowModal(false);
    };

    // Function to go to the next image
    const nextImage = () => {
        if (currentStep < images.length - 1) {
            setCurrentStep(currentStep + 1);
        } else {
            closeModal();  // Close modal if it's the last image
        }
    };

    // Automatically show the modal when the page loads
    useEffect(() => {
        setShowModal(true);
    }, []);

    return (
        <>
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="relative bg-white p-6 rounded-lg shadow-lg w-[400px] max-w-full text-center">
                        {/* Close button */}
                        <button
                            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                            onClick={closeModal}
                        >
                            &times;
                        </button>

                        {/* Modal Heading */}
                        <h2 className="text-xl font-bold mb-4 text-black">How to Use Revachi AI</h2>

                        {/* Display current image */}
                        <img
                            src={images[currentStep]}
                            alt="How to Use Revachi AI"
                            className="w-full h-auto mb-4"
                        />

                        {/* Next Button */}
                        <button
                            onClick={nextImage}
                            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                        >
                            {currentStep < images.length - 1 ? 'Next' : 'Close'}
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default AlertModal;
