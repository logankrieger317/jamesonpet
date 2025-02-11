import React, { useEffect } from 'react';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '500px',
    width: '90%',
    padding: '2rem',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    zIndex: 1000,
    position: 'relative',
    backgroundColor: 'white'
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    zIndex: 999,
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
};

const OutOfOfficeModal = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  useEffect(() => {
    setIsOpen(true);
  }, []);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => setIsOpen(false)}
      style={customStyles}
      ariaHideApp={false}
      className="z-[1000] bg-white"
      overlayClassName="z-[999]"
    >
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Out of Office Notice</h2>
        <p className="mb-6 text-gray-600 leading-relaxed">
          I will be out of office until February 23rd until March 1st with limited access to phone and email. I will return any inquiries when I return. Please email me at <a href="mailto:info@jcoatx.com" className="text-red-600 hover:text-red-800">info@jcoatx.com</a> if you have any questions or concerns and I will address them as soon as possible.
        </p>
        <button 
          onClick={() => setIsOpen(false)}
          className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors"
        >
          Close
        </button>
      </div>
    </Modal>
  );
};

export default OutOfOfficeModal;
