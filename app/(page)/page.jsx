"use client"

import Image from "next/image";
import Link from "next/link";
import {useSession} from "next-auth/react";


const Home = () =>  {
    const { data: session } = useSession();
    const createCheckoutSession = async (idPlan) => {
      if(session?.user?.id){
        const plan = {id:idPlan}
        const response = await fetch("/api/stripe/checkout-session", {
          method: "POST",
          body:JSON.stringify(plan),
        });
        const result = await response.json();
        if(response.ok){
            window.location.href = result.urlRedirect;
        }
      }else{
        console.log("login first");
      }
    }

    const cancelSubscription = async (idPlan) => {
      if(session?.user?.id){
        const plan = {id:idPlan}
        const response = await fetch("/api/stripe/subscription/cancel", {
          method: "POST",
        });
        const result = await response.json();
        if(response.ok){
           //window.location.href = result.urlRedirect;
        }
      }else{
        console.log("login first");
      }
    }
    return (<section className='w-full flex-center flex-col gap-24 md:gap-24'>
      <div className="flex justify-between items-start h-full">
        <div className="w-1/2 h-full flex flex-col justify-between gap-8">
            <h1>Bem vindo ao CollectFy</h1>
            <p className="">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod egestas odio sapien dis massa massa massa. Accumsan, cras tristique adipiscing consectetur. Laoreet ante quisque in nulla eleifend neque sed rutrum donec.
            </p>
            <Link className='black_btn w-32' href='/register'>
                Saiba Mais
            </Link>
            <button >
              dadadad
            </button>
        </div>
        <div className="w-1/2">
            <Image
                src='/assets/images/logo.svg'
                alt='logo'
                width={400}
                height={400}
                className='object-contain'
              />
        </div>
      </div>
      <div className="flex justify-between gap-4">
        <div className="w-1/2 flex flex-wrap justify-between items-stretch">
          <div className="flex flex-col w-1/2 mb-4">
            <Image
                src='/assets/images/logo.svg'
                alt='logo'
                width={40}
                height={40}
                className='object-contain'
              />
              <h2>Titulo</h2>
              <p className="text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod egestas odio sapien dis massa massa massa. Accumsan, cras tristique adipiscing consectetur. Laoreet ante quisque in nulla eleifend neque sed rutrum donec.</p>
          </div>
          <div className="flex flex-col w-1/2">
            <Image
                src='/assets/images/logo.svg'
                alt='logo'
                width={40}
                height={40}
                className='object-contain'
              />
              <h2>Titulo</h2>
              <p className="text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod egestas odio sapien dis massa massa massa. Accumsan, cras tristique adipiscing consectetur. Laoreet ante quisque in nulla eleifend neque sed rutrum donec.</p>
          </div>
          <div className="flex flex-col w-1/2">
            <Image
                src='/assets/images/logo.svg'
                alt='logo'
                width={40}
                height={40}
                className='object-contain'
              />
              <h2>Titulo</h2>
              <p className="text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod egestas odio sapien dis massa massa massa. Accumsan, cras tristique adipiscing consectetur. Laoreet ante quisque in nulla eleifend neque sed rutrum donec.</p>
          </div>
          <div className="flex flex-col w-1/2">
            <Image
                src='/assets/images/logo.svg'
                alt='logo'
                width={40}
                height={40}
                className='object-contain'
              />
              <h2>Titulo</h2>
              <p className="text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod egestas odio sapien dis massa massa massa. Accumsan, cras tristique adipiscing consectetur. Laoreet ante quisque in nulla eleifend neque sed rutrum donec.</p>
          </div>
        </div>
        <div className="w-1/3 m-auto">
            <h1>Bem vindo ao CollectFy</h1>
            <p className="">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod egestas odio sapien dis massa massa massa. Accumsan, cras tristique adipiscing consectetur. Laoreet ante quisque in nulla eleifend neque sed rutrum donec.
            </p>
            <Link className='black_btn' href='/register'>
                Saiba Mais
            </Link>
        </div>
      </div>
      <div className="flex justify-center w-full">
        <script async src="https://js.stripe.com/v3/pricing-table.js"></script>
        <stripe-pricing-table pricing-table-id="prctbl_1Ofln0EvKoUwFT20fGwIzB5f" className="flex justify-center" disabled
                publishable-key="pk_test_51OYrGnEvKoUwFT20tw9N3WzAS4Xou6TqcgQLBbDVgTfhuy6OZfnHJoE4tf6sRs7RaDtzKktvZZyTKRJIPDDMSGh4008vjkvqnY">
        </stripe-pricing-table>
      </div>
      <button onClick={(e) => createCheckoutSession("price_1OfllyEvKoUwFT20EGgKo87b")} >basic</button>
      <button onClick={(e) => createCheckoutSession("price_1OflmGEvKoUwFT20tUs6mNbC")} >pro</button>
      <button onClick={(e) => cancelSubscription()} >cancel subscription</button>
      <div className="flex justify-between items-start">
        <video width="500" height="240"  >
          <source src="/assets/videos/trabalho2_def_god.mp4" type="video/mp4" />
          <track
            kind="subtitles"
            label="English"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
}
  

export default Home