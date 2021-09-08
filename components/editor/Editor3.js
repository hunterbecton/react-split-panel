import { useState } from 'react';
import Split from 'react-split';

import { CollapseButton } from '../../components';

export const Editor3 = () => {
  const [collapsedIndex, setCollapsedIndex] = useState(null);

  return (
    <Split direction='vertical' style={{ height: `calc(100vh - 4rem)` }}>
      <Split className='flex' collapsed={collapsedIndex}>
        <Options>
          <CollapseButton onClick={() => setCollapsedIndex(0)} />
        </Options>
        <Options>
          <CollapseButton onClick={() => setCollapsedIndex(1)} />
        </Options>
        <Options>
          <CollapseButton onClick={() => setCollapsedIndex(2)} />
        </Options>
      </Split>
      <div className='bg-gray-400'></div>
    </Split>
  );
};

const Options = ({ children }) => {
  return (
    <div className='bg-gray-300 relative overflow-hidden'>
      <div className='absolute top-2 left-2 flex flex-col space-y-2'>
        {children}
      </div>
    </div>
  );
};
