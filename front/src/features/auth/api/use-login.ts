import { useMutation } from "@tanstack/react-query";
import { loginWithEmail } from "./auth.api";
import { queryClient } from "../../../app/query-client";

export function useLogin() {
  return useMutation({
    mutationFn: loginWithEmail,
    onSuccess: (user) => {
      queryClient.setQueryData(["me"], user);
    },
  });
}
