'use client';
import { Button } from '@/components/ui/button';
import { signIn, useSession } from 'next-auth/react';

interface LoginProps {}

const Login: FC<LoginProps> = () => {
  const { data } = useSession();
  console.log('user data =>', data);

  const handleLogin = async () => {
    const res = await signIn('credentials', {
      email: 'test@example.com',
      password: '123456'
    });
    console.log('res', res);
  };

  return (
    <div className="w-full text-center mt-10">
      <h1 className="mb-5 font-bold text-2xl">Login Page</h1>
      <Button onClick={handleLogin}>login</Button>
    </div>
  );
};

export default Login;
