import axios, { AxiosError } from "axios";
import { CreatePostData } from "./types";

console.log(import.meta.env.VITE_API_BASE_URL);

export const client = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
  },
  transformRequest: [
    (data, headers) => {
      const token = localStorage.getItem("accessToken");
      if (token) headers["Authorization"] = `Bearer ${token}`;
      return JSON.stringify(data);
    },
  ],
});

export const posts = {
  async all() {
    try {
      const { data } = await client.get("posts");
      return data;
    } catch (e) {
      console.log(e);
    }
  },
  async create(data: CreatePostData) {
    try {
      const response = await client.post("posts", { data });
      return response.data;
    } catch (e) {
      console.log(e);
    }
  },
};

export const user = {
  async me() {
    try {
      const response = await client.get("auth/me");
      return response;
    } catch (e: any) {
      return e;
    }
  },
  async signup({
    email,
    password,
    location,
    passwordConfirmation,
    name,
  }: {
    email: string;
    password: string;
    location: string;
    passwordConfirmation: string;
    name: string;
  }) {
    try {
      const response = await client.post("auth/register", {
        name,
        location,
        email,
        password,
        passwordConfirmation,
      });
      return response;
    } catch (e: any) {
      if (e.response.data.errors) return e.response.data;
      return e;
    }
  },
  async login({ email, password }: { email: string; password: string }) {
    try {
      const response = await client.post("auth/login", { email, password });
      return response;
    } catch (e: any) {
      return e;
    }
  },
};

export const instruments = {
  async all() {
    try {
      const { data } = await client.get("instruments");
      return data;
    } catch (e) {
      console.log(e);
    }
  },
};

export const ensembles = {
  async index() {
    const response = await client.get("ensembles");
    return response;
  },
  async show(id: string) {
    try {
      const response = await client.get("ensembles/" + id);
      return response;
    } catch (e: any) {
      if (e.response.data?.error) return e.response.data;
    }
  },
  async join(id: string) {
    try {
      const response = await client.post("ensembles/" + id + "/join");
      return response;
    } catch (e: any) {
      if (e.response.data?.error) return e.response.data;
    }
  },
  async create({ name, description }: { name: string; description: string }) {
    try {
      const response = await client.post("ensembles", { name, description });
      return response;
    } catch (e: any) {
      if (e.response.data.errors) return e.response.data;
      return e;
    }
  },
  async leave(id: string) {
    try {
      const response = await client.post("ensembles/" + id + "/leave");
      return response;
    } catch (e: any) {
      if (e.response.data?.error) return e.response.data;
    }
  },
};
