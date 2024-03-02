import "@styles/globals.css";

import SideNav from "@components/SideNav";
import Nav from "@components/Nav";
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
          <Nav />
          <div className="max-w-[80rem] w-full flex">
            <SideNav/>
            {children}
          </div>
        </main>
      </SessionProvider>
    </body>
  </html>
  )
}
