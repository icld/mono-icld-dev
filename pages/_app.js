import { SessionProvider } from 'next-auth/react';

import 'tailwindcss/tailwind.css';

function App({ Component, pageProps }) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default App;
