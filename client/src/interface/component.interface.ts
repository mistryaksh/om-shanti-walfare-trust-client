import { BUTTON_TYPES } from '../constants';

export interface ButtonProps {
   children?: React.ReactNode;
   onClick?: () => void;
   type?: BUTTON_TYPES.BUTTON | BUTTON_TYPES.SUBMIT | BUTTON_TYPES.RESET;
   className?: string;
   value?: string;
   transparent?: boolean;
   styles?: string;
};

export interface CardProps {
   title: string;
   description: string;
   icon: React.ReactNode | string;
   children?: React.ReactNode;
   onClick?: () => void;
   className?: string;
   styles?: string;
   active?: boolean;
};