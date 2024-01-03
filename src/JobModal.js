// JobModal.jsx

import React, { useEffect } from 'react';
import styled from 'styled-components';

const ModalWrapper = styled.div`
  /* Your existing modal styles */
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 20px;
  z-index: 1000;
  border: 5px solid #000;
  max-width: 80%; /* Set a default maximum width */
  width: 100%; /* Ensure the modal takes full width on smaller screens */
  max-height: 80vh; /* Set a default maximum height */
  box-sizing: border-box; /* Include padding and border in the total width */
  overflow-y: auto; /* Add vertical scrollbar if content exceeds the maximum height */
  border-radius: 15px; /* Rounded edges */

  @media (min-width: 768px) {
    max-width: 60%; /* Adjust the maximum width for larger screens */
  }

  @media (max-width: 768px) {
    max-height: 90vh; /* Adjust the maximum height for smaller screens */
  }
`;

const CloseButton = styled.button`
  /* Your styles for the close button */
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  background: #ccc; /* Gray background */
  border: none;
  font-size: 18px;
  font-weight: bold;
  color: #333;
  padding: 5px 10px; /* Padding for better appearance */
  border-radius: 5px; /* Rounded edges */
`;

const JobModal = ({ isOpen, onClose, jobInfo }) => {
  useEffect(() => {
    // Add or remove the 'modal-open' class to the body based on the modal's open state
    document.body.classList.toggle('modal-open', isOpen);

    // Cleanup function to remove the 'modal-open' class when the component unmounts
    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <ModalWrapper>
      <CloseButton onClick={onClose}>X</CloseButton>
      <h2>{jobInfo.company}</h2>
      <p>{jobInfo.position}</p>
      <p>{jobInfo.years}</p>
      <p>{jobInfo.duties}</p>
    </ModalWrapper>
  );
};

export default JobModal;
