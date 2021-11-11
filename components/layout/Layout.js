import Head from 'next/head';
import VerticalNav from 'components/navigation/VerticalNav';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>mweeter</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='relative flex flex-col w-full h-full mx-auto '>
        <div className='flex flex-row w-full m-auto'>
          <div>
            <VerticalNav />
          </div>
          <main className='flex flex-row justify-between w-full h-full mx-12 mt-11'>
            {children}
          </main>
        </div>
      </div>
    </>
  );
};

export default Layout;
