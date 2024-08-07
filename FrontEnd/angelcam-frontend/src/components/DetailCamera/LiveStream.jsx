import React from 'react';

const LiveStream = ({ liveStream }) => {
    return (
        <div className="relative w-full lg:w-3/4" style={{ height: '75vh' }}>
            <div className="w-full h-full bg-black flex items-center justify-center">
                {liveStream.format === 'mjpeg' ? (
                    <img
                        src={liveStream.url}
                        className="max-w-full max-h-full w-full h-full object-contain rounded-lg shadow-lg"
                        alt="Live Stream"
                        style={{ border: 'none' }}
                    />
                ) : (
                    <video
                        src={liveStream.url}
                        className="max-w-full max-h-full w-full h-full object-contain rounded-lg shadow-lg"
                        autoPlay
                        controls
                        style={{ border: 'none' }}
                    />
                )}
            </div>
        </div>
    );
};

export default LiveStream;
