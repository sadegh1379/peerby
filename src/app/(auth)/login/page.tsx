"use client";
import { Button } from "@/components/ui/button";
import { signIn, signOut, useSession } from "next-auth/react";

interface LoginPageProps {}

const LoginPage: FC<LoginPageProps> = () => {
  const { data } = useSession();
  console.log("user data =>", data);

  const handleLogin = async () => {
    const res = await signIn("credentials", {
      email: "test@example.com",
      password: "123456",
    });
    console.log("res", res);
  };

  const handleLogout = async () => {
    signOut();
  };

  return (
    <div>
      <h1>Login</h1>
      <Button onClick={handleLogin}>login</Button><br />
      <Button onClick={handleLogout}>Logout</Button>
    </div>
  );
};

export default LoginPage;
