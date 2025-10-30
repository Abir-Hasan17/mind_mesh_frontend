import z from "zod";
import { api } from "./api";
import { loginSchema, signupSchema } from "../schema/auth";

export const signup = async (data: z.infer<typeof signupSchema>) => {
  const response = await api.post("/auth/signup", data);
  return response.data;
};

export const login = async (data: z.infer<typeof loginSchema>) => {
  const response = await api.post("/auth/login", data);
  return response.data;
};
