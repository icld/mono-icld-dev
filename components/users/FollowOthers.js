import useSWR from 'swr';
import { fetcher } from 'lib/swr/fetcher';

import UserAvatar from './UserAvatar';

const FollowOthers = ({ id }) => {
  const { data, error } = useSWR('/api/allUsers', fetcher);

  return (
    <div className='flex flex-col mt-14'>
      <h1 className='mb-3 text-lg font-bold'>Follow Others</h1>
      <div className='grid items-start grid-cols-1 gap-x-6 lg:flex lg:flex-col sm:grid-cols-2 '>
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
    </div>
  );
};

export default FollowOthers;
