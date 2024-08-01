// src/components/CameraDetail.js
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

const CameraDetail = () => {
    const location = useLocation();
    const camera = location.state?.camera;
    const [playing, setPlaying] = useState(true);
    const [speed, setSpeed] = useState(1);
    if (!camera) {
        return <div>No camera selected.</div>;
    }

    const liveStream = camera.streams.find(stream => stream.format === 'mjpeg') || camera.streams[0];

    

    const handlePlayPause = () => {
        setPlaying(!playing);
    };

    const handleSpeedChange = (newSpeed) => {
        setSpeed(newSpeed);
    };

    return (
        <div className="container mx-auto my-10">
            <h3 className="text-2xl font-bold mb-4">{camera.name} - Live Stream</h3>
            <div className="flex flex-col lg:flex-row lg:space-x-6">
                <div className="relative w-full lg:w-3/4" style={{ paddingBottom: '56.25%', maxHeight: '75vh', overflow: 'hidden' }}>
                    <iframe
                        src={liveStream.url}
                        className="absolute top-0 left-0 w-full h-full object-cover"
                        allow="autoplay; fullscreen"
                        title="Live Stream"
                    ></iframe>
                </div>
                {camera.has_recording && (
                    <div className="mt-4 lg:mt-0 lg:w-1/4">
                        <h4 className="text-xl font-bold mb-2">Recordings</h4>
                        <ul>
                            {camera.streams.map((stream, index) => (
                                stream.format !== 'mjpeg' && (
                                    <li key={index} className="mb-2">
                                        <a href={stream.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                                            {stream.format.toUpperCase()} Stream
                                        </a>
                                    </li>
                                )
                            ))}
                        </ul>
                    </div>
                )}
            </div>
            
        </div>
    );
};

export default CameraDetail;
