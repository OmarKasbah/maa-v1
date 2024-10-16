import React, { useEffect, useState } from 'react';
import './PhotoCollage.css'; // Ensure this path is correct

// Image details with dimensions
const imageSources = [
    {
        src: 'https://assets.website-files.com/63af52b71504f950bae436f8/63b5c3920959c33645a79743_Group%2093.jpg',
        width: 269,
        height: 298,
    },
    {
        src: 'https://assets.website-files.com/63af52b71504f950bae436f8/image2.jpg', // Replace with the actual image URL
        width: 399,
        height: 449,
    },
    {
        src: 'https://assets.website-files.com/63af52b71504f950bae436f8/image3.jpg', // Replace with the actual image URL
        width: 624,
        height: 416,
    },
    {
        src: 'https://assets.website-files.com/63af52b71504f950bae436f8/image4.jpg', // Replace with the actual image URL
        width: 725,
        height: 339,
    },
    {
        src: 'https://assets.website-files.com/63af52b71504f950bae436f8/image5.jpg', // Replace with the actual image URL
        width: 579,
        height: 393,
    },
    {
        src: 'https://assets.website-files.com/63af52b71504f950bae436f8/image6.jpg', // Replace with the actual image URL
        width: 546,
        height: 189,
    },
    {
        src: 'https://assets.website-files.com/63af52b71504f950bae436f8/image7.jpg', // Replace with the actual image URL
        width: 387,
        height: 290,
    },
];

const PhotoCollage: React.FC = () => {
    const [scrollY, setScrollY] = useState(0);

    const handleScroll = () => {
        setScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="collage-container">
            {/* Left Splatter */}
            <div className="splatter left" />
            {imageSources.map((image, index) => (
                <img
                    key={index}
                    src={image.src}
                    alt={`Image ${index + 1}`}
                    className="parallax-img"
                    style={{
                        width: `${image.width}px`,
                        height: `${image.height}px`,
                        transform: `translate3d(0, ${scrollY * (0.1 * (index + 1))}px, 0)`,
                    }}
                />
            ))}
            {/* Right Splatter */}
            <div className="splatter right" />
        </div>
    );
};

export default PhotoCollage;
