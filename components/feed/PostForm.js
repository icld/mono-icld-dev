import { useStore } from 'lib/zustand/store';
import { useForm } from 'react-hook-form';

async function createPost(formData) {
  const response = await fetch('/api/createPost', {
    method: 'POST',
    body: JSON.stringify(formData),
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return await response.json();
}

const PostForm = () => {
  const { sessionUser } = useStore();

  console.log(sessionUser.id);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      console.log(data);
      await createPost(data);
      alert('success');
      //   router.push('/');
    } catch (error) {
      console.log('here error');
      console.log(errors);
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type='text'
          placeholder='userId'
          {...register('userId', { required: true })}
          value={sessionUser?.id}
        />
        <textarea
          placeholder="What's on your min..."
          type='text'
          {...register('content', { required: true, min: 1, maxLength: 280 })}
        />

        <button
          type='submit'
          className='py-2.5 px-5 w-36  h-11 text-sm font-medium text-white bg-purple-700 hover:bg-purple-500 rounded-md'
        >
          Send Mweet
        </button>
      </form>
    </div>
  );
};

export default PostForm;
