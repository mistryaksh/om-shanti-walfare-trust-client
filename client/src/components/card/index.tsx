import React, { FC } from 'react';

import { CardProps } from '../../interface';
import { COMPONENT_STYLES } from '../../constants';

const STYLES = COMPONENT_STYLES;

export const Card: FC<CardProps> = ({ children, title, description, icon, onClick, className, styles, active }) => {
   return (
      <div className={STYLES.CARD}>
         <div className={STYLES.CARD_BODY}>
            <div className={STYLES.CARD_ICON}>
               {icon}
            </div>
            <h3 className={STYLES.CARD_TITLE}>
               {title}
            </h3>
            <p className={STYLES.CARD_DESCRIPTION}>
               {description}
            </p>
         </div>
      </div>
   );
}  