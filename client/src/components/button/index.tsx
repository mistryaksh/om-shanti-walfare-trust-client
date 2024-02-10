import React, { FC } from 'react';

import { ButtonProps } from '../../interface';
import { COMPONENT_STYLES } from '../../constants';

const STYLES = COMPONENT_STYLES;

export const Button: FC<ButtonProps> = ({ children, value, type, className, onClick, transparent, styles }): JSX.Element  => {
   return (
      <button
         type={type}
         className={(className || (!transparent ? STYLES.BUTTON : STYLES.BUTTON_TRANSPARENT)) + ' ' + styles}
         onClick={onClick}
      >
         {children || value}
      </button>
   );
}