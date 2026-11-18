import { createFileRoute } from "@tanstack/react-router";
import LoginWindow from "../components/LoginWindow";

export const Route = createFileRoute("/login")({
  component: LoginPage,
});

function LoginPage() {
  return (
    <div className="p-2 text-white">
      <h3>Login page</h3>
      <LoginWindow />
    </div>
  );
}
