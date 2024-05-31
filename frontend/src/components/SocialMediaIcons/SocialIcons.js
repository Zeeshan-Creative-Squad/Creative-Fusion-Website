import React from "react";
import { ReactComponent as FacebookIcon } from '../../../public/images/icons/rc-fb-icon.svg';
import { ReactComponent as InstagramIcon } from '../../../public/images/icons/rc-insta-icon.svg';
import { ReactComponent as TwitterIcon } from '../../../public/images/icons/rc-x-icon.svg';



const SocialIcons = () => {
  return (
    <div className="social-icons-container">
      <div className="social-icon-wrapper">
        <FacebookIcon className="social-icon" />
      </div>
      <div className="social-icon-wrapper">
        <InstagramIcon className="social-icon" />
      </div>
      <div className="social-icon-wrapper">
        <TwitterIcon className="social-icon" />
      </div>
    </div>
  );
};

export default SocialIcons;
