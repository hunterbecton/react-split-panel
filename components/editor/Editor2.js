import Split from 'react-split';

export const Editor2 = () => {
  return (
    <Split
      direction='vertical'
      sizes={[30, 70]}
      style={{ height: `calc(100vh - 4rem)` }}
    >
      <Split className='flex' sizes={[20, 35, 45]} minSize={[10, 40, 90]}>
        <div className='bg-gray-300'></div>
        <div className='bg-gray-300'></div>
        <div className='bg-gray-300'></div>
      </Split>
      <div className='bg-gray-400'></div>
    </Split>
  );
};
