type Urls = {
  regular: string;
  [prop: string]: string;
};

type Profile_image = {
  small: string;
  [prop: string]: string;
};

type Social = {
  portfolio_url: string | null;

  [prop: string]: string | null;
};

type User = {
  profile_image: Profile_image;
  name: string;
  social: Social;

  [prop: string]: string | boolean | object | null;
};

export type Image = {
  id: string;
  description: string;
  urls: Urls;
  likes: number;
  created_at: string;
  alt_description:string;

  user: User;


  [prop: string]: string | number | object | [] | boolean | null;
};

export interface ModalData {
    
        description?:string;
        urlRegular?: string;
        likes?: number;
        createdAt?: string;
        userProfileImage?: string,
        authorName?: string,
        userSocial?: string | null,
      
}

export interface Data {
    results:Image[]; 
total:number;
total_pages:number;}
