import Split from 'react-split';

export const Editor1 = () => {
  return (
    <Split direction='vertical' style={{ height: `calc(100vh - 4rem)` }}>
      <Split className='flex'>
        <div className='bg-gray-300'></div>
        <div className='bg-gray-300'></div>
        <div className='bg-gray-300'></div>
      </Split>
      <div className='bg-gray-400'></div>
    </Split>
  );
};
