import { useState, useEffect } from 'react';
import useSWR from 'swr';
import { fetcher } from 'lib/swr/fetcher';

import UserAvatar from './UserAvatar';

const FollowOthers = ({ id }) => {
  const [cnt, setCnt] = useState(0);
  const [countEnd, setCountEnd] = useState(false);

  const UserFeed = (i) => {
    const { data, error } = useSWR(`api/someUsers?page=${cnt}`, fetcher);

    useEffect(() => {
      if (data) {
        data.length < 6 ? setCountEnd(true) : setCountEnd(false);
      }
    }, [data]);

    console.log(data);
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
          <div className='flex flex-row items-center w-full mt-4 space-x-4 px-11 '>
            {cnt >= 1 && (
              <button className={buttonStyle} onClick={() => setCnt(cnt - 1)}>
                prev{' '}
              </button>
            )}

            {!countEnd && (
              <button className={buttonStyle} onClick={() => setCnt(cnt + 1)}>
                next{' '}
              </button>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <UserFeed userData={cnt} />
    </div>
  );
};

export default FollowOthers;

const buttonStyle =
  'px-2 py-0.5 rounded-md text-sm   border border-gray-500 hover:bg-gray-300 duration-150 drop-shadow-sm';
