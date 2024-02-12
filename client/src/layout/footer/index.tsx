import React, { FC } from "react";
import { Link } from "react-router-dom";
import { TiSocialTwitter } from "react-icons/ti";
import { BiLogoFacebook } from "react-icons/bi";
import { LiaLinkedinIn } from "react-icons/lia";
import { FaGooglePlusG } from "react-icons/fa";

import { SocialMediaLinks } from '../../interface';
import { COMMON, SOCIAL_MEDIA_LINKS, LAYOUT_STYLES } from "../../constants";

const STYLES = LAYOUT_STYLES;

export const Footer: FC = (): JSX.Element => {
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
        <footer className="px-72 py-10 w-full h-auto" style={{ background: "url('./images/footer-bg.png')", backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }}>
            <div className="flex items-center justify-between">
                <p className="inline-block text-base text-slate-500 py-0 font-light focus:outline-none active:outline-none">Copyright &copy;2024</p>
                <div className="flex items-center gap-x-2.5">
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
            </div>
        </footer>
    )
}
