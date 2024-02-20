import Link from "next/link";

const Form = ({ type, collection, setCollection, submitting, handleSubmit }) => {
  return (
    <section className='w-full max-w-full flex-start flex-col'>
      <h1 className='head_text'>
        <span className=''>{type} Collection</span>
      </h1>

      <form
        onSubmit={handleSubmit}
        className='mt-10 w-full flex flex-col gap-7 glassmorphism'
      >
        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Name{" "}
          </span>
          <input
            value={collection.name}
            onChange={(e) => setCollection({ ...collection, name: e.target.value })}
            type='text'
            placeholder='Name'
            required
            className='form_input'
          />
        </label>
        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Description{" "}
          </span>
          <textarea
            value={collection.description}
            onChange={(e) => setCollection({ ...collection, description: e.target.value })}
            placeholder='Description'
            required
            className='form_input'
          ></textarea>
        </label>
        <div className='flex-end mx-3 mb-5 gap-4'>
          <Link href='/collection' className='text-gray-500 text-sm'>
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

export default Form;
