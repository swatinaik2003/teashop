
import React from 'react';
import { useNavigate } from 'react-router-dom';
import QrScanner from 'react-qr-scanner';

const ScannerPage = () => {
  const navigate = useNavigate();

  const handleScan = (data) => {
    if (data) {
      navigate('/register');
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  return (
    <div>
      <h2>Scan QR Code to Register</h2>
      <QrScanner
        delay={300}
        onError={handleError}
        onScan={handleScan}
      />
    </div>
  );
};

export default ScannerPage;
