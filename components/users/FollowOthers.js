import useSWR from 'swr';
import { fetcher } from 'lib/swr/fetcher';

import UserAvatar from './UserAvatar';

const FollowOthers = ({ id }) => {
  const { data, error } = useSWR('/api/allUsers', fetcher);

  return (
    <div className='flex flex-col items-start mt-14'>
      <h1 className='mb-3 text-lg font-bold'>Follow Others</h1>

      {error ? (
        <div>error</div>
      ) : !data ? (
        <div>Loading...</div>
      ) : (
        data.map((profile, i) => (
          <UserAvatar key={`profile-${i}`} user={profile} />
        ))
      )}
    </div>
  );
};

export default FollowOthers;
