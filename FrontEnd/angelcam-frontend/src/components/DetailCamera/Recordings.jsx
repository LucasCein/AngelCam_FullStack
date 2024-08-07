import React from 'react';

const Recordings = ({setModalIsOpen }) => {
    return (
        <div className="mt-4 lg:mt-0 lg:w-1/4">
            <h4 className="text-xl font-bold mb-2">Recordings</h4>
            <ul>
                <li className="mb-2">
                    <button 
                        onClick={() => setModalIsOpen(true)} 
                        className="text-blue-500 hover:underline">
                        Recording Stream
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default Recordings;
