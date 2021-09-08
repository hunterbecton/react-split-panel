import { BiMinus } from 'react-icons/bi';

export const CollapseButton = ({ onClick }) => {
  return (
    <button
      type='button'
      onClick={onClick}
      className='inline-flex items-center p-1 border border-transparent rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
    >
      <BiMinus className='h-5 w-5' aria-hidden='true' />
    </button>
  );
};
