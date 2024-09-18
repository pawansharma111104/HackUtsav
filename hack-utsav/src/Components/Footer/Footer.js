import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <h1 className="footer-text">Organized by:</h1>
      <div className="footer-logos">
        <img src="https://res.cloudinary.com/dvhislzt0/image/upload/v1726563186/xmbrpnznbx16s5cjjnkv.png" alt="NCU Logo" className="org-logo"/>
        <img src="https://res.cloudinary.com/dvhislzt0/image/upload/v1726563281/iqhrvlzbolydrscqnxv7.png" alt="IEEE NCU Logo" className="org-logo" />
        <img src="https://res.cloudinary.com/dvhislzt0/image/upload/v1726563541/lkyhrzp58vrh206rlzwz.jpg" alt="ACM NCU Logo" className="org-logo" />
        <img src="https://res.cloudinary.com/dvhislzt0/image/upload/v1726669713/ceugks6yny9kc6ix56fl.png" alt="ICT ACADEMY Logo" className="org-logo" />
        <img src="https://res.cloudinary.com/dvhislzt0/image/upload/v1726670401/IIC_judrn1.png" alt="IIC Logo" className="org-logo" />

        
      </div>
    </footer>
  );
};

export default Footer;
