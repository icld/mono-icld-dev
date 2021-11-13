import Image from 'next/image';
import { useEffect, useState } from 'react';
import useSWR, { SWRConfig } from 'swr';
import { fetcher } from 'lib/swr/fetcher';

import { useStore } from 'lib/zustand/store';

const FeedSection = (i) => {
  const { countEnd, setCountEnd } = useStore();

  const { data, error, mutate } = useSWR(`/api/feed?page=${i.i}`, fetcher);

  useEffect(() => {
    if (data) {
      data.length < 6 ? setCountEnd(true) : setCountEnd(false);
    }
  }, [data]);

  return (
    <div className=' space-y-7'>
      {data &&
        data.map((post, i) => {
          const { author, content, createdAt, authorId } = post;
          const { image, firstName, lastName, userName } = author;
          return (
            <>
              <div key={`post-${i}`} className='relative flex flex-row '>
                <div className='flex-shrink-0'>
                  <Image
                    src={image}
                    alt='User smiling face'
                    width={32}
                    height={32}
                    className='w-8 h-8 rounded-full '
                  />
                </div>

                {/* Body */}
                <div className=' ml-3.5 flex flex-col '>
                  {/* Name / date section - on top */}
                  <div className='flex flex-row text-sm  mb-1.5'>
                    <div className='font-medium text-gray-900 '>
                      <span>{firstName}</span> <span>{lastName}</span>
                    </div>
                    <div className=' ml-1.5 font-normal text-gray-500 lowercase'>
                      {userName}
                    </div>
                    <li className='ml-2.5 text-gray-500'>
                      {new Intl.DateTimeFormat('en-US', {
                        year: 'numeric',
                        day: 'numeric',
                        month: 'short',
                      }).format(new Date(createdAt))}
                    </li>
                  </div>
                  {/* Content Section - on bottom */}
                  <div className='text-sm text-gray-500 break-words '>
                    {content}
                  </div>
                </div>
              </div>
            </>
          );
        })}
    </div>
  );
};

const Feed = () => {
  const [cnt, setCnt] = useState(0);
  const { countEnd, submitted } = useStore();

  const buttonStyle =
    'px-2 py-0.5 rounded-md text-sm   border border-gray-500 hover:bg-gray-300 duration-150 drop-shadow-sm';

  useEffect(() => {
    submitted && setCnt(0);
  }, [submitted]);

  return (
    <div className='bg-white'>
      <div className='hidden'>
        <FeedSection i={cnt + 1} />
      </div>
      <FeedSection i={cnt} />
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
  );
};

export default Feed;
