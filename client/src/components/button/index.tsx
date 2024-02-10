import React, { FC } from 'react';

import { ButtonProps } from '../../interface';
import { COMPONENT_STYLES } from '../../constants';

const STYLES = COMPONENT_STYLES;

export const Button: FC<ButtonProps> = ({ children, value, type, className, onClick }): JSX.Element  => {
   return (
      <button
         type={type}
         className={className || STYLES.BUTTON}
         onClick={onClick}
      >
         {children || value}
      </button>
   );
}