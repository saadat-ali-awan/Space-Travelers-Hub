import React from 'react';
import { useSelector } from 'react-redux';

const Dragons = () => {
  const dragonsList = useSelector((state) => state.dragonReducer);
  return (
    <div>
      <section>
        {`Dragons page ${dragonsList}`}
      </section>
    </div>
  );
};

export default Dragons;
