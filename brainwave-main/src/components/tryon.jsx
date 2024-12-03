import { useState } from 'react';
import Section from "./Section.jsx";
import Heading from "./Heading.jsx";
import loading from "../assets/loading.png"; // Correctly import the loading image

function Tryon() {
    const [clothImageBase64, setClothImageBase64] = useState('');
    const [personImageBase64, setPersonImageBase64] = useState('');
    const [clothType, setClothType] = useState('Shirt');
    const [isLoading, setIsLoading] = useState(false);

    const toBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
        });
    };

    const handleImageChange = async (event, setImageBase64) => {
        const file = event.target.files[0];
        const base64 = await toBase64(file);
        setImageBase64(base64);
    };

    const handleClothTypeChange = (event) => {
        setClothType(event.target.value);
    };

    const uploadImages = async () => {
        setIsLoading(true);
        const apiKey = '!!SZPM1HKGc0462f85-7333-4cd8-80c4-12ee7e63b80f';

        const response = await fetch('http://localhost:8000/api/tryon/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                api_key: apiKey,
                cloth_image: clothImageBase64,
                person_image: personImageBase64,
                category: clothType.toLowerCase(),
            }),
        });

        const responseData = await response.json();
        console.log('Try-On Result:', responseData);
        setIsLoading(false);
    };

    return (
        <Section>
            <div className="container mx-auto mt-5 overflow-auto px-4">
                <Heading className="md:max-w-md lg:max-w-2xl mx-auto" title="Try Clothes"/>

                <div className="flex flex-col md:flex-row gap-4 mt-4 items-center justify-center">
                    <div className="flex flex-col items-center">
                        <label className="block mb-2">Upload Person Image:</label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={(event) => handleImageChange(event, setPersonImageBase64)}
                        />
                        {personImageBase64 && (
                            <img
                                src={personImageBase64}
                                alt="Person"
                                className="mt-2"
                                width="192"
                                height="256"
                            />
                        )}
                    </div>

                    <div className="flex flex-col items-center">
                        <label className="block mb-2">Upload Cloth Image:</label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={(event) => handleImageChange(event, setClothImageBase64)}
                        />
                        {clothImageBase64 && (
                            <img
                                src={clothImageBase64}
                                alt="Cloth"
                                className="mt-2"
                                width="192"
                                height="256"
                            />
                        )}
                    </div>

                    <div className="flex flex-col items-center">
                        <label className="block mb-2">Select Cloth Type:</label>
                        <select value={clothType} className="text-black border-2" onChange={handleClothTypeChange}>
                            <option value="Shirt">Shirt</option>
                            <option value="T-Shirt">T-Shirt</option>
                            <option value="Pants">Pants</option>
                            <option value="Shorts">Shorts</option>
                            <option value="Dress">Dress</option>
                            <option value="Crop top">Crop top</option>
                        </select>
                    </div>
                </div>

                <div className="flex justify-center">
                    <button
                        className="mt-6 px-4 py-2 bg-white text-black rounded flex justify-center items-center"
                        onClick={uploadImages}
                        style={{width: '200px'}} // Set a fixed width
                    >
                        {isLoading ? (
                            <img src={loading} alt="Loading" className="w-6 h-6 animate-spin"/>
                        ) : (
                            'Upload and Try On'
                        )}
                    </button>
                </div>

            </div>
        </Section>
    );
}

export default Tryon;
