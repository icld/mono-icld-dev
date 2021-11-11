import { getSession } from 'next-auth/react';
import { useState, useEffect } from 'react';
import useSWR from 'swr';
import { fetcher, fetchWithArg } from 'lib/swr/fetcher';
import { useStore } from 'lib/zustand/store';

import Layout from 'components/layout/Layout';
import UserAvatar from 'components/users/UserAvatar';

const Following = () => {
  const [following, setFollowing] = useState();
  const { data, error } = useSWR('/api/following', fetcher);

  useEffect(() => {
    data && setFollowing(data[0].following);
  }, [data]);

  console.log(following);

  return (
    <Layout>
      <div>
        <h1 className='text-2xl font-extrabold mb-7'>Following</h1>
        <div>
          {error ? (
            <div>error</div>
          ) : !data ? (
            <div>Loading...</div>
          ) : (
            data[0].following.map((profile, i) => (
              <UserAvatar key={`following-${i}`} user={profile} />
            ))
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Following;

export async function getServerSideProps({ req }) {
  const session = await getSession({ req });
  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
}
