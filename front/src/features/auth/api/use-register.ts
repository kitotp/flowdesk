import { useMutation } from "@tanstack/react-query";
import { registerUser } from "./auth.api";
import { queryClient } from "../../../app/query-client";

export function useRegister() {
  return useMutation({
    mutationFn: registerUser,
    onSuccess: (user) => {
      queryClient.setQueryData(["me"], user);
    },
  });
}
