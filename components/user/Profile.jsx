import Link from "next/link";

const Profile = ({ type, user, setUser, submitting, handleSubmit }) => {
  return (
    <section className='w-full max-w-full flex-start flex-col'>
      <h1 className='head_text'>
        <span className=''>{type} Profile</span>
      </h1>

      <form
        onSubmit={handleSubmit}
        className='mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism'
      >
        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Name{" "}
          </span>
          <input
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
            type='text'
            placeholder='name'
            required
            className='form_input'
          />
        </label>
        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Cpf{" "}
          </span>
          <textarea
            value={user.cpf}
            onChange={(e) => setUser({ ...user, cpf: e.target.value })}
            placeholder='cpf'
            required
            className='form_input'
          ></textarea>
        </label>
        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Phone{" "}
          </span>
          <textarea
            value={user.phone}
            onChange={(e) => setUser({ ...user, phone: e.target.value })}
            placeholder='phone'
            required
            className='form_input'
          ></textarea>
        </label>
        <div className='flex-end mx-3 mb-5 gap-4'>
          <Link href='/user' className='text-gray-500 text-sm'>
            Cancel
          </Link>

          <button
            type='submit'
            disabled={submitting}
            className='px-5 py-1.5 text-sm bg-blue-900 rounded-full text-white'
          >
            {submitting ? `${type}ing...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Profile;
