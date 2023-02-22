import React from 'react';

export default function AboutButton({ handleOpen, isOpen }) {
  const handleClick = () => {
    handleOpen();
  };
  return (
    <button
      className={isOpen ? 'btn__active' : 'btn'}
      onClick={handleClick}
      style={{ marginBottom: '1em' }}
    >
      {isOpen ? "That's plenty" : 'More About Me'}
    </button>
  );
}
