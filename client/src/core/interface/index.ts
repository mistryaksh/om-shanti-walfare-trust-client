export * from './layout.interface';

export interface IDates {
   createdAt: Date,
   updatedAt: Date,
}

export interface IContact {
   _id?: string,
   email: string,
   mobile: string,
   helplineNumbers: string[],
   address: string[],
   active: boolean,
   createdAt?: string;
   updatedAt?: string;
}

export interface IEventCategory {
   _id?: string,
   label: string,
   subTitle: string,
   active: boolean,
   createdAt?: string;
   updatedAt?: string;
}

export interface IEvent {
   _id?: string,
   image: string,
   label: string,
   subTitle: string,
   postedOn: Date,
   description: string,
   bannerImage: string,
   active: boolean,
   category: IEventCategory,
   createdAt?: string;
   updatedAt?: string;
}

export interface IProgram {
   _id?: string,
   label: string,
   subTitle: string,
   description: string,
   requiredDonation: string,
   receivedDonation?: string,
   categoryId: IEventCategory,
   active: boolean,
   createdAt?: string;
   updatedAt?: string;
}

export interface IUserContact {
   _id?: string,
   message: string,
   fullName: string,
   email: string,
   subject?: string,
   createdAt?: string;
   updatedAt?: string;
}

export interface IDirector {
   name: string,
   description: string,
   image: string,
}

export interface INGOProfile {
   _id?: string,
   description: string,
   vision: string,
   mission: string,
   active: boolean,
   director: IDirector[],
   createdAt?: string;
   updatedAt?: string;
}

export interface IDonationConfig {
   _id?: string,
   key_id: string,
   key_secret: string,
   minimumDonation: string,
   active: boolean,
   createdAt?: string;
   updatedAt?: string;
}