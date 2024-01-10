import "@styles/globals.css";


import {getServerSession} from "next-auth";
import  SessionProvider  from '../components/SessionProvider';

export const metadata = {
  title: "Collection",
  description: "Discover & Share collections",
};


export default async function RootLayout({ 
  children, 
}) {
  const session = await getServerSession();

  return (
    <html lang='en'>
    <body>
    <SessionProvider session={session}>
        <div className='main'>
          <div className='gradient' />
        </div>
        <main className='app'>
            <div className="w-full flex flex-col justify-start items-center">
                {children}
            </div>
        </main>
      </SessionProvider>
    </body>
  </html>
  )
}
