import React, { useState, useEffect } from 'react';

function InfoModal() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleClickOutside = event => {
    if (event.target.className.includes('modal')) {
      setIsVisible(false);
    }
  };

  return (
    isVisible && (
      <div className="fixed inset-0 flex items-center justify-center modal" onClick={handleClickOutside}>
        <div className="bg-white w-1/2 h-1/2 flex items-center justify-center modal-content">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Book Now
          </button>
        </div>
      </div>
    )
  );
}

export default InfoModal;