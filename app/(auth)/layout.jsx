import "@styles/globals.css";


import {getServerSession} from "next-auth";
import  Provider  from "@components/Provider"
import Nav from "@components/Nav";
import Footer from "@components/Footer"


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
                <div className="w-full flex flex-col justify-start items-center">
                    {children}
                </div>
                <Footer/>
            </main>
        </Provider>
      </body>
    </html>
    )
  }