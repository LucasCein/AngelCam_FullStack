import { useLocation, useNavigate } from "react-router-dom";

const Cameras = () => {
    let location = useLocation();
    const navigate = useNavigate();

    const cameras = location.state?.cameras || []; // Verifica si location.state.cameras es undefined y asigna un array vacío si es así

    const handleSelectCamera = (camera) => {
        navigate('/camera-detail', { state: { camera } });
    };

    return (
        <div className="container mx-auto my-10">
            <h2 className="text-2xl font-bold text-center mb-6">Cameras</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {cameras.map((camera) => (
                    <div key={camera.id} className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer" onClick={() => handleSelectCamera(camera)}>
                        <img src={camera.streams[0].url} alt={camera.name} className="w-full h-64 object-cover" />
                        <div className="p-4">
                            <p className="text-lg font-semibold">
                                <span className="inline-block bg-green-500 rounded-full w-3 h-3 mr-2"></span>
                                {camera.name}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cameras;
