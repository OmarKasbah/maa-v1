import React from "react";

const VideoHandling: React.FC = () => {
    return (
        <video width="320" height="240" controls>
            <source src="/src/assets/sample.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    );
}

export default VideoHandling;