function LoginButton({ text, icon }) {
  return (
    <div>
      <button className='flex flex-row items-center justify-center h-10 px-2.5 py-4 text-sm font-normal border border-solid rounded-md text-buttonLetters border-buttonBorder drop-shadow-sm'>
        <div className=' pr-2.5'>{icon}</div>
        <div>{text}</div>
      </button>
    </div>
  );
}

export default LoginButton;
