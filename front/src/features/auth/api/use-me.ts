import { useQuery } from "@tanstack/react-query";
import type { User } from "../types";

export function useUser() {
  const { data } = useQuery<User | null>({
    queryKey: ["me"],
    queryFn: () => null,
    enabled: false,
  });

  return data ?? null;
}
