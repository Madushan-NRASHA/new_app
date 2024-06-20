import React from 'react';
import { IonIcon } from '@ionic/react';
import { logoGithub } from 'ionicons/icons';
import { FaGithub, FaWhatsapp, FaFacebook, FaTelegram, FaInstagram, FaLinkedin } from 'react-icons/fa';
import '../App.css';

function IconSideBar() {
  return (
    <div className="sidebar">
      {/* <div className="sidebar-item">
        <IonIcon icon={logoGithub} className="sidebar-icon" />
      </div> */}
      <div className="sidebar-item">
        <FaFacebook className="sidebar-icon" />
      </div>
      <div className="sidebar-item">
        <FaInstagram className="sidebar-icon" />
      </div>
      <div className="sidebar-item">
        <FaLinkedin className="sidebar-icon" />
      </div>
      <div className="sidebar-item">
        <FaTelegram className="sidebar-icon" />
      </div>
      <div className="sidebar-item">
        <FaWhatsapp className="sidebar-icon" />
      </div>
      <div className="sidebar-item">
        <FaGithub className="sidebar-icon" />
      </div>
    </div>
  );
}

export default IconSideBar;
