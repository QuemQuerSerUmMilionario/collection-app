import Link from "next/link";
import { faCreditCard , faUser} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Setting = () => {
  return (
    <section className='w-full max-w-full flex-center flex-col'>
      <h1 className='head_text'>
        <span className=''>Profile</span>
      </h1>

      <div
        className='mt-10 w-full max-w-2xl flex flex-col gap-4 glassmorphism'
      >
        <Link  href="./settings/profile" className="w-full h-10 p-6 rounded-md shadow-sm box-border border-2 flex items-center justify-between">
            <p>Register</p>
            <FontAwesomeIcon icon={faUser}/>
        </Link>
        <Link href="./settings/profile" className="w-full h-10 p-6 rounded-md shadow-sm box-border border-2 flex items-center justify-between">
            <p>Subscription</p>
            <FontAwesomeIcon icon={faCreditCard}/>
        </Link>
      </div>
    </section>
  );
};

export default Setting;
