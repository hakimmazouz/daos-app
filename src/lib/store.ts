import create from "zustand";
import { User, UserStore } from "./types";

export const useAuthStore = create<UserStore>((set) => ({
  user: null,
  accessToken: null,
}));
