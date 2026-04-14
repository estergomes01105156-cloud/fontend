import LoginForm from "@/components/LoginForm";

import { loginAction } from "./actions";

export default function LoginPage() {
  return (
    <div className="w-screen h-screen flex flex-col items-center bg-blue-50 p-6">
      <h1 className="text-4xl font-bold mb-8 text-center w-full text-blue-500">Login</h1>

      <LoginForm onSend={loginAction} />
    </div>
  );
}
