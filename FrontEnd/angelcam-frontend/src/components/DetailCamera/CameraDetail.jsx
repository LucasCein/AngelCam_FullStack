import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import LiveStream from './LiveStream';
import Recordings from './Recordings';
import ModalPlayer from './ModalPlayer';

const CameraDetail = () => {
    const location = useLocation();
    const camera = location.state?.camera;

    const [recordingInfo, setRecordingInfo] = useState(null);
    const [recordingUrl, setRecordingUrl] = useState(null);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    useEffect(() => {
        if (camera) {
            fetchRecordingInfo(camera.id);
        }
    }, [camera]);

    const fetchRecordingInfo = async (cameraId) => {
        const token = process.env.REACT_APP_ACCESS_TOKEN;
        const response = await fetch(`https://api.angelcam.com/v1/shared-cameras/${cameraId}/recording/`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Authorization': `PersonalAccessToken ${token}`
            }
        });
        const data = await response.json();
        setRecordingInfo(data);
    };

    const fetchRecordingUrl = async (cameraId, start, end) => {
        const token = process.env.REACT_APP_ACCESS_TOKEN;
        const response = await fetch(`https://api.angelcam.com/v1/shared-cameras/${cameraId}/recording/stream/?start=${start}&end=${end}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Authorization': `PersonalAccessToken ${token}`
            }
        });
        const data = await response.json();
        setRecordingUrl(data.url);
    };

    useEffect(() => {
        if (recordingInfo && recordingInfo.recording_start && recordingInfo.recording_end) {
            fetchRecordingUrl(camera.id, recordingInfo.recording_start, recordingInfo.recording_end);
        }
    }, [recordingInfo]);

    if (!camera) {
        return <div>No camera selected.</div>;
    }

    const liveStream = camera.streams.find(stream => stream.format === 'mp4') || camera.streams[0];

    return (
        <div className="container mx-auto my-10">
            <h3 className="text-2xl font-bold mb-4">{camera.name} - Live Stream</h3>
            <div className="flex flex-col lg:flex-row lg:space-x-6">
                <LiveStream liveStream={liveStream} />
                {camera.has_recording && recordingUrl && (
                    <Recordings setModalIsOpen={setModalIsOpen} />
                )}
            </div>
            <ModalPlayer modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} recordingUrl={recordingUrl} />
        </div>
    );
};

export default CameraDetail;
