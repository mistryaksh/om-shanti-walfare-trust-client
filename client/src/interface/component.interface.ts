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

export interface MissionCardProps {
   title: string;
   description: string;
   icon: React.ReactNode | string;
   onClick?: () => void;
};

export interface CauseCardProps {
   title: string;
   img: string;
   raised: number;
   goal: number;
   onClick?: () => void;
};