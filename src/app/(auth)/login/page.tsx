import { NextPage } from 'next';
import Login from './_components';

export const metadata = {
  title: 'ورود',
  description: 'ورود به حساب کاربری'
};

const LoginPage: NextPage = () => {
  return <Login />;
};

export default LoginPage;
