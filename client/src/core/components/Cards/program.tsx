/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { FC } from 'react';

import { CAUSE_CARD_STYLES } from '../../constants';

const STYLES = CAUSE_CARD_STYLES;

type CauseCardProps = {
   img: string;
   title: string;
   subTitle?: string;
   description?: string;
   onClick?: () => void;
};

export const CauseCard: FC<CauseCardProps> = ({ title, subTitle, description, img, onClick }) => {
   return (
      <div className={STYLES.MAIN}>
         <div className={STYLES.IMG}>
            <img src={img} alt="cause-image" className="w-full rounded-md-top" />
         </div>
         <div className={STYLES.BODY}>
            <h4 className={STYLES.SUB_TITLE}>
               {subTitle}
            </h4>
            <h3 className={STYLES.TITLE} onClick={onClick}>
               {title}
            </h3> 
            <p className={STYLES.DESCRIPTION}>
               {description}
            </p>
         </div>
      </div>
   );
}  