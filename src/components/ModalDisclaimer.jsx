import React, { useEffect, useState } from 'react';

const ModalDisclaimer = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Mostrar modal al cargar la página
    setIsOpen(true);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div  style={styles.overlay} className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-20">
      <div className="bg-white rounded-2xl shadow-lg p-6 max-w-xl mx-4 text-center space-y-4">
        <h2 className="text-xl font-semibold">DISCLAIMER</h2>
        <p className="text-sm text-gray-700">
          THIS PAGE WAS MADE AS A PERSONAL EDUCATIONAL PROJECT. This is NOT the official site of the company or brand identified on the page. The creator of this page is NOT affiliated with the company or brand in any way. This page is a personal project made in connection with an educational exercise.
        </p>
        <button
          onClick={handleClose}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
        >
          Aceptar
        </button>
      </div>
    </div>
  );
};

export default ModalDisclaimer;

const styles = {
  overlay: {
    position: 'fixed',
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.8)', // ← semi-transparente negro
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 9999,
  },}