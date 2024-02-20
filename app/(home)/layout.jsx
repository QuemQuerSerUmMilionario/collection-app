import "@styles/globals.css";

import SideNav from "@components/SideNav";
import Nav from "@components/Nav";
import  Provider  from "@components/Provider"
import { ErrorBoundary } from "next/dist/client/components/error-boundary";


  export default async function RootLayout({ 
    children, 
  }) {
    return (
      <html lang='en' suppressHydrationWarning>
      <body>
        <Provider>
            <div className='main'>
              <div className='gradient' />
            </div>
            <main className='app'>
              <Nav />
              <div className="w-full flex justify-between">
                <SideNav/>
                <div className="w-full flex flex-col justify-start items-center">
                    {children}
                </div>
              </div>
            </main>
        </Provider>
      </body>
    </html>
    )
  }