import { IEventCategory } from './event.interface';

export interface IProgram {
   _id?: string,
   label: string,
   subTitle: string,
   description: string,
   image: string,
   requiredDonation: string,
   receivedDonation?: string,
   categoryId: string | IEventCategory,
   active: boolean,
   createdAt?: string;
   updatedAt?: string;
}
