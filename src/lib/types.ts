export interface CreatePostData {
  title: string;
  body: string;
  seekingMusician: boolean;
}

export interface Instrument {
  id: string;
  name: string;
}

export interface User {
  _id: string;
  email: string;
  name: string;
  instruments: Instrument[];
  location: string;
}

export interface Member {
  _id: string;
  user: User;
  role: "member" | "admin";
}

export interface Ensemble {
  _id: string;
  name: string;
  description: string;
  members: Member[];
  membership?: Member;
}

export interface Post {
  id: string;
  title: string;
  body: string;
  instrument: Instrument;
  author: User;
  isSeeking: "ensemble" | "musician";
}

export interface UserStore {
  user: User | null;
}

export interface EnsembleShowResponse {
  error?: string;
  data?: Ensemble;
}
