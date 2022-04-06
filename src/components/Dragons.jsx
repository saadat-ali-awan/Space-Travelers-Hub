import React from 'react';
import { useSelector } from 'react-redux';
import Dragon from './Dragon';

const Dragons = () => {
  const dragonsList = useSelector((state) => state.dragonReducer);

  const renderState = () => {
    switch (dragonsList.status) {
      case 'FETCHING_DRAGONS':
        return <li>LOADING...</li>;
      case 'FETCHING_FAILED':
        return <li>{`Something went wrong: ${dragonsList.error}`}</li>;
      case 'FETCHING_SUCCEEDED':
        return dragonsList.dragons.map((item) => (
          <li key={item.id}>
            <Dragon
              id={item.id}
              name={item.name}
              type={item.type}
              image={item.flickr_images}
            />
          </li>
        ));
      default:
        return <li>Unexpected behavior</li>;
    }
  };

  return (
    <div>
      <section>
        <ul>
          {renderState()}
        </ul>
      </section>
    </div>
  );
};

export default Dragons;
