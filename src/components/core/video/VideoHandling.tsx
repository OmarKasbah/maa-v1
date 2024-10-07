import React from 'react';

const VideoHandling: React.FC<{ autoplay?: boolean; sx?: any }> = ({ autoplay, sx }) => {
    return (
        <video
            src="/public/assets/sample.mp4"
            autoPlay={autoplay}
            controls
            style={{
                width: '100%', // Ensure the video fills the parent container
                height: '100%', // Ensure the video fills the parent container
                ...sx, // Apply any additional styles passed via props
            }}
        >
            Your browser does not support the video tag.
        </video>
    );
};

export default VideoHandling;
