import React from 'react';

const OpenBrowserButton = () => {
  const openBrowser = () => {
    const url = 'https://myaccount.aumthegame.com/register';

    if (/Mobi|Android/i.test(navigator.userAgent)) {
      // If the user is on a mobile device, open in the browser app
      window.location.href = url;
    } else {
      // If the user is on a desktop, open in a new tab
      window.open(url, '_blank');
    }
  };

  return (
    <button className='text-white z-20 mx-center justify-center my-center' onClick={openBrowser}>
      Open Browser
    </button>
  );
};

export default OpenBrowserButton;
