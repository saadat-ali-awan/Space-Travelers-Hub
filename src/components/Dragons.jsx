import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDragonsData } from '../redux/dragons/dragon';

const Dragons = () => {
  const dragonsList = useSelector((state) => state.dragonReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (dragonsList.status !== 'FETCHING_SUCCEEDED') dispatch(fetchDragonsData());
  }, []);

  return (
    <div>
      <section>
        {`Dragons page ${dragonsList}`}
      </section>
    </div>
  );
};

export default Dragons;
