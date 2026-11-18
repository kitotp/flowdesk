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
