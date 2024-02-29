import Link from "next/link";
import { faUser} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Setting = () => {
  return (
    <section className='w-full max-w-full flex-start flex-col'>
      <h1 className='head_text'>
        <span className=''>Meus Dados</span>
      </h1>

      <div
        className='mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism'
      >
        <div className="w-full h-20 border-black border-spacing-1 flex justify-between">
            <p>Cadastro</p>
            <FontAwesomeIcon icon={faUser}/>
        </div>
      </div>
    </section>
  );
};

export default Setting;
