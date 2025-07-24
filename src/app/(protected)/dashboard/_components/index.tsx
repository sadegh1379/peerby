'use client';
import { Button } from '@/components/ui/button';
import { signOut, useSession } from 'next-auth/react';

const Dashboard: FC = () => {
  const { data } = useSession();
  const handleLogout = async () => {
    signOut();
  };

  return (
    <div className="w-full text-center mt-10">
      <h1 className="mb-5 font-bold text-2xl">Dashboard Page</h1>
      <h3 className="mb-5 text-xs">User: {data?.user.email}</h3>
      <Button onClick={handleLogout}>Logout</Button>
    </div>
  );
};

export default Dashboard;
