import {useState,useEffect} from "react"
import { signIn,getProviders } from "next-auth/react";

const RegisterForm = ({ type, user, setUser, submitting, handleSubmit }) => {
    const [providers, setProviders] = useState(null);
  
    useEffect(() => {
        (async () => {
          const res = await getProviders();
          setProviders(res);
        })();
      }, []);
    return (
        <section className='w-full max-w-full flex items-center flex-col'>
           
            <form
                onSubmit={handleSubmit}
                className='mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism'
            >

                <label>
                    <span className='font-satoshi font-semibold text-base text-gray-700'>
                        E-mail{" "}
                    </span>
                    <input
                        onChange={(e) => setUser({ ...user, email: e.target.value })}
                        type='text'
                        placeholder='Name'
                        required
                        className='form_input'
                    />
                 
                </label>
                <label>
                    <span className='font-satoshi font-semibold text-base text-gray-700'>
                        Name{" "}
                    </span>
                    <input
                        onChange={(e) => setUser({ ...user, name: e.target.value })}
                        type='text'
                        placeholder='Name'
                        required
                        className='form_input'
                    />
                 
                </label>
                <label>
                    <span className='font-satoshi font-semibold text-base text-gray-700'>
                        Password{" "}
                    </span>
                    <input
                        onChange={(e) => setUser({ ...user, password: e.target.value })}
                        type='password'
                        placeholder='Password'
                        required
                        className='form_input'
                    />
                 
                </label>
                <label>
                    <span className='font-satoshi font-semibold text-base text-gray-700'>
                        Confirm Password{""}
                    </span>
                    <input
                        onChange={(e) => setUser({ ...user, confirmPassword: e.target.value })}
                        type='password'
                        placeholder='Password'
                        required
                        className='form_input'
                    />
                </label>
               
                <div className='mx-3 mb-5 gap-4'>
                    <button
                        type='submit'
                        disabled={submitting}
                        className=' black_btn w-full mb-2'
                    >
                        {submitting ? `${type}ing...` : "register"}
                    </button>
                    {providers &&
                     Object.values(providers).map((provider) => (
                        <div key={provider.id}>
                            <button
                            type='button'
                            onClick={() => signIn(provider.id)}
                            >
                            Sign in with {provider.name}
                            </button>
                        </div>
                    ))}
                </div>
            </form>
        </section>
  );
};

export default RegisterForm;
