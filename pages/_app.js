import { SessionProvider } from 'next-auth/react';
import Auth from 'components/auth/Auth';
import 'tailwindcss/tailwind.css';

function App({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <Auth>
        <Component {...pageProps} />
      </Auth>
    </SessionProvider>
  );
}

export default App;
