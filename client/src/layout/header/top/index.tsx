import React, { FC } from "react";
import { Link } from "react-router-dom";
import { TiSocialTwitter } from "react-icons/ti";
import { BiLogoFacebook } from "react-icons/bi";
import { LiaLinkedinIn } from "react-icons/lia";
import { FaGooglePlusG } from "react-icons/fa";
import { IoChevronDown } from "react-icons/io5";

import { SocialMediaLinks } from '../../../interface';
import { COMMON, SOCIAL_MEDIA_LINKS, LAYOUT_STYLES } from "../../../constants";
import { Button } from "../../../components";

const STYLES = LAYOUT_STYLES;

export const HeaderTop: FC = (): JSX.Element => {
  const socialMediaLinks: SocialMediaLinks[] = [
    {
      to: SOCIAL_MEDIA_LINKS.TWITTER,
      icon: <TiSocialTwitter />,
      target: COMMON.LINK_TARGET,
    },
    {
      to: SOCIAL_MEDIA_LINKS.FACEBOOK,
      icon: <BiLogoFacebook />,
      target: COMMON.LINK_TARGET,
    },
    {
      to: SOCIAL_MEDIA_LINKS.LINKEDIN,
      icon: <LiaLinkedinIn />,
      target: COMMON.LINK_TARGET,
    },
    {
      to: SOCIAL_MEDIA_LINKS.GOOGLE,
      icon: <FaGooglePlusG />,
      target: COMMON.LINK_TARGET,
    },
  ];

  return (
    <header className="border-b border-slate-100 bg-white py-6 w-full">
      <div className="container mx-auto w-full px-10">
        <div className="flex items-center justify-between max-w-full">
          <div className="flex items-center gap-x-5">
            <div className={STYLES.TEXT}>Phone: +99 (0) 101 0000 888</div>
            <div className={STYLES.TEXT}>Email: noreply@yourdomain.com</div>
              {socialMediaLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.to}
                  target={link.target}
                  className={STYLES.SOCIAL_ICON}
                >
                  {link.icon}
                </Link>
              
              ))}
          </div>
          <div className="flex items-center gap-x-5">
            <Button
              className={`${STYLES.BUTTON} border-r border-slate-500 pr-5`}
            >
              <div className="flex items-center gap-x-2">
                <span>English</span>
                <IoChevronDown />
              </div>
            </Button>
            <Button
              className={STYLES.BUTTON}
              value="Subscribe Now"
            />
          </div>
        </div>
      </div>
    </header>
  );
};
