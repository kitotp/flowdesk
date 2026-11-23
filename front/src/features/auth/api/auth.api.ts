import { request } from "../../../shared/api/request";
import type { User } from "../types";

export async function registerUser(email: string): Promise<User> {
  return await request<User>("auth", {
    method: "POST",
    body: JSON.stringify({ email }),
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export async function loginWithEmail(email: string): Promise<User> {
  return await request<User>(`auth/login?email=${email}`, {
    method: "GET",
  });
}

export async function getMyUser(): Promise<User> {
  return await request<User>("auth/me", {
    method: "GET",
  });
}
