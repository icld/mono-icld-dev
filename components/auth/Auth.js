import { useEffect } from 'react';
import VerticalNav from 'components/navigation/VerticalNav';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import LoadingAnimation from 'components/navigation/LoadingAnimation';

const Auth = ({ children }) => {
  const { data: user, status } = useSession();
  const router = useRouter();

  return (
    <>
      {router.pathname === '/login' ? null : <VerticalNav />}
      {status === 'loading' ? <LoadingAnimation /> : <> {children}</>}
    </>
  );
};

export default Auth;
