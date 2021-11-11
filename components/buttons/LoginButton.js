import { motion } from 'framer-motion';

function LoginButton({ text, icon }) {
  return (
    <div>
      <motion.button
        whileTap={{ scale: 1.1, transition: { type: 'spring', duration: 0.1 } }}
        className='flex flex-row items-center justify-center h-10 px-2.5 py-4 text-sm font-normal border border-solid rounded-md text-buttonLetters border-buttonBorder drop-shadow-sm  w-52  sm:w-auto   hover:bg-gray-100  hover:text-gray-700 transition-color duration-200'
      >
        <div className=' pr-2.5'>{icon}</div>
        <div>{text}</div>
      </motion.button>
    </div>
  );
}

export default LoginButton;
