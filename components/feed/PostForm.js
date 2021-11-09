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
          {...register('content', { required: true, min: 1, maxLength: 280 })}
        />

        <input type='submit' />
      </form>
    </div>
  );
};

export default PostForm;
