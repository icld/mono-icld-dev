import { motion } from 'framer-motion';
import { BsDot } from 'react-icons/bs';

const loadingContainer = {
  width: '3rem',
  height: '2rem',
  display: 'flex',
  justifyContent: 'space-around',
};

const loadingCircle = {
  display: 'block',
  width: '0.7rem',
  height: '0.7rem',
  backgroundColor: 'black',
  borderRadius: '0.5rem',
};

const loadingContainerVariants = {
  start: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  end: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const loadingCircleVariants = {
  start: {
    y: '50%',
  },
  end: {
    y: '150%',
  },
};

const loadingCircleTransition = {
  duration: 0.5,
  repeat: Infinity,
  ease: 'easeInOut',
};

export default function LoadingAnimation() {
  return (
    <div className='flex items-center justify-center w-screen h-screen'>
      <motion.div
        style={loadingContainer}
        variants={loadingContainerVariants}
        initial='start'
        animate='end'
      >
        <motion.span
          style={loadingCircle}
          variants={loadingCircleVariants}
          transition={loadingCircleTransition}
        />
        <motion.span
          style={loadingCircle}
          variants={loadingCircleVariants}
          transition={loadingCircleTransition}
        />
        <motion.span
          style={loadingCircle}
          variants={loadingCircleVariants}
          transition={loadingCircleTransition}
        />
      </motion.div>
    </div>
  );
}
