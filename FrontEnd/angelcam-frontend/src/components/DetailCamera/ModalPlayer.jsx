import React from 'react';
import Modal from 'react-modal';
import ReactPlayer from 'react-player';

const ModalPlayer = ({ modalIsOpen, setModalIsOpen, recordingUrl }) => {
    return (
        <Modal 
            isOpen={modalIsOpen} 
            onRequestClose={() => setModalIsOpen(false)}
            style={{
                content: {
                    top: '50%',
                    left: '50%',
                    right: 'auto',
                    bottom: 'auto',
                    marginRight: '-50%',
                    transform: 'translate(-50%, -50%)',
                    width: '80%',
                    height: '80%'
                }
            }}
        >
            <ReactPlayer url={recordingUrl} controls width='100%' height='100%' />
            <button onClick={() => setModalIsOpen(false)}>Close</button>
        </Modal>
    );
};

export default ModalPlayer;
