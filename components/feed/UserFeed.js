import Image from 'next/image';
import { useStore } from 'lib/zustand/store';

const UserFeed = ({ feed }) => {
  const { sessionUser } = useStore();
  return (
    <div className='h-full space-y-7'>
      {feed &&
        feed.map((post, i) => {
          const { author, content, createdAt, authorId } = post;
          const { image, firstName, lastName, userName } = author;

          return (
            <>
              <div
                key={`post-${i}`}
                className='relative flex flex-row bg-white'
              >
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
                  <div className='text-sm text-gray-500'>{content}</div>
                </div>
              </div>
            </>
          );
        })}
    </div>
  );
};

export default UserFeed;
