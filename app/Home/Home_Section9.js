import React from 'react'

const OpenBrowserButton = () => {
  const openBrowser = () => {
    // Specify the URL you want to open in the browser
    const url = 'https://www.example.com';

    // Open the browser window
    window.open(url, '_blank');
  };

  return (
    <button className='text-white' onClick={openBrowser}>
      Open Browser
    </button>
  );
};

export default OpenBrowserButton