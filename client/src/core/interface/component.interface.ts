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
export interface EventCardProps {
   title: string;
   img: string;
   date: string;
   location: string;
   onClick?: () => void;
};