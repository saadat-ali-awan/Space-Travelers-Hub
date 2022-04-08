import React from 'react';
import { useSelector } from 'react-redux';
import Dragon from './Dragon';

const Dragons = () => {
  const dragonsList = useSelector((state) => state.dragonReducer);

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '1rem',
    paddingTop: '1rem',
  };
  const innerStyle = {
    display: 'flex',
    width: '80%',
    maxWidth: '960px',
  };
  const listStyle = {
    display: 'flex',
    flexDirection: 'column',
    listStyle: 'none',
    margin: '0',
    padding: '0',
  };

  const renderState = () => {
    switch (dragonsList.status) {
      case 'FETCHING_DRAGONS':
        return <li><h1>LOADING...</h1></li>;
      case 'FETCHING_FAILED':
        return <li><h1>{`Something went wrong: ${dragonsList.error}`}</h1></li>;
      case 'FETCHING_SUCCEEDED':
        return dragonsList.dragons.map((item) => (
          <li key={item.id}>
            <Dragon
              id={item.id}
              name={item.name}
              type={item.type}
              description={item.description}
              image={item.flickr_images}
              reserved={item.reserved}
            />
          </li>
        ));
      default:
        return <li><h1>Unexpected behavior</h1></li>;
    }
  };

  return (
    <div style={containerStyle}>
      <section style={innerStyle}>
        <ul style={listStyle}>
          {renderState()}
        </ul>
      </section>
    </div>
  );
};

export default Dragons;
