import { useState, useRef, useEffect } from 'react';
import {img_web ,out_web} from "../assets";
const ImageSlider = () => {
    const [isDragging, setIsDragging] = useState(false);
    const sliderContainerRef = useRef(null);
    const sliderHandleRef = useRef(null);
    const imageRightRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (event) => {
            if (isDragging) {
                const sliderContainer = sliderContainerRef.current;
                const offsetX = event.clientX - sliderContainer.getBoundingClientRect().left;
                let percentage = (offsetX / sliderContainer.offsetWidth) * 100;

                if (percentage < 0) percentage = 0;
                if (percentage > 100) percentage = 100;

                sliderHandleRef.current.style.left = `${percentage}%`;
                imageRightRef.current.style.clipPath = `inset(0 ${100 - percentage}% 0 0)`;
            }
        };

        const handleMouseUp = () => {
            setIsDragging(false);
        };

        const handleTouchMove = (event) => {
            if (isDragging) {
                const touch = event.touches[0];
                const sliderContainer = sliderContainerRef.current;
                const offsetX = touch.clientX - sliderContainer.getBoundingClientRect().left;
                let percentage = (offsetX / sliderContainer.offsetWidth) * 100;

                if (percentage < 0) percentage = 0;
                if (percentage > 100) percentage = 100;

                sliderHandleRef.current.style.left = `${percentage}%`;
                imageRightRef.current.style.clipPath = `inset(0 ${100 - percentage}% 0 0)`;
            }
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
        document.addEventListener('touchmove', handleTouchMove);
        document.addEventListener('touchend', handleMouseUp);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
            document.removeEventListener('touchmove', handleTouchMove);
            document.removeEventListener('touchend', handleMouseUp);
        };
    }, [isDragging]);

    return (
        <div
            className="relative"
            style={{ width: '384px', height: '512px' }}
            ref={sliderContainerRef}
        >
            <div className="relative w-full h-full overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full">
                    <img
                        src={out_web}
                        alt="Image 1"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div
                    ref={imageRightRef}
                    className="absolute top-0 left-0 w-full h-full"
                    style={{ clipPath: 'inset(0 50% 0 0)', zIndex: 1 }}
                >
                    <img
                        src={img_web}
                        alt="Image 2"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div
                    ref={sliderHandleRef}
                    className="absolute top-0 w-1 bg-white h-full cursor-ew-resize"
                    style={{ left: '50%', zIndex: 2 }}
                    onMouseDown={() => setIsDragging(true)}
                    onTouchStart={() => setIsDragging(true)}
                />
            </div>
        </div>
    );
};

export default ImageSlider;
