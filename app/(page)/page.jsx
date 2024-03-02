"use client"

import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";
import PlanCard from "@components/PlanCard";
import Modal from "@components/Modal";
import { useState,useEffect } from "react";

const Home = () => {
  const { data: session } = useSession();
  const [openModalLogin, setModalLogin] = useState(false);

  const createCheckoutSession = async (idPlan) => {
    if (session?.user?.id) {
      const plan = { id: idPlan }
      const response = await fetch("/api/stripe/checkout-session", {
        method: "POST",
        body: JSON.stringify(plan),
      });
      const result = await response.json();
      if (response.ok) {
        window.location.href = result.urlRedirect;
      }
    } else {
      setModalLogin(true);
    }
  }

  const cancelSubscription = async (idPlan) => {
    if (session?.user?.id) {
      const plan = { id: idPlan }
      const response = await fetch("/api/stripe/subscription/cancel", {
        method: "POST",
      });
      const result = await response.json();
      if (response.ok) {
        //window.location.href = result.urlRedirect;
      }
    } else {
      console.log("login first");
    }
  }
  return (
      <section className='w-full flex-center flex-col gap-24 md:gap-24'>
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
        {/*<div className="flex justify-center w-full">
          <script async src="https://js.stripe.com/v3/pricing-table.js"></script>
          <stripe-pricing-table pricing-table-id="prctbl_1Ofln0EvKoUwFT20fGwIzB5f" className="flex justify-center" disabled
            publishable-key="pk_test_51OYrGnEvKoUwFT20tw9N3WzAS4Xou6TqcgQLBbDVgTfhuy6OZfnHJoE4tf6sRs7RaDtzKktvZZyTKRJIPDDMSGh4008vjkvqnY">
          </stripe-pricing-table>
        </div>*/}
        <div className="flex justify-center items-center">
          <PlanCard createCheckoutSession = {createCheckoutSession} priceId="price_1OfllyEvKoUwFT20EGgKo87b" name="Basic" price="9.99R$" description="Basic plan for collectFy" recurseList={["No limit collections"]}/>
          <PlanCard createCheckoutSession = {createCheckoutSession} priceId="price_1OflmGEvKoUwFT20tUs6mNbC" name="Pro" price="19.99R$" description="Pro plan for collectFy" recurseList={["No limit for file upload","No limit collections"]} mark={"true"}/>
        </div>
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
        <Modal title="Tetse" content="Você precisa estar logado para se inscrever" buttons={[<a href="/login" className="p-4 mt-4 flex justify-center w-full h-auto bg-yellow-500 rounded-md" key="1">ok</a>]} open={openModalLogin} setIsOpen={setModalLogin}/>
      </section>
  );
}


export default Home