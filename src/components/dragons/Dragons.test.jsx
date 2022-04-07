import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import { Provider, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Dragons from './Dragons';
import store from '../../redux/configStore';
import { fetchDragonsBegin, fetchDragonsFailed, fetchDragonsSucess } from '../../redux/dragons/dragon';

const TestContainer = ({ action }) => {
  const dispatch = useDispatch();
  switch (action) {
    case 'FETCH_BEGIN':
      dispatch(fetchDragonsBegin());
      break;
    case 'FETCH_FAILURE':
      dispatch(fetchDragonsFailed(new Error('Test_Error')));
      break;
    case 'FETCH_SUCCESS':
      dispatch(fetchDragonsSucess([{
        id: 'Test_Item1',
        name: 'Test_Name1',
        type: 'Test_Type1',
        description: 'Test_Description1',
        flickr_images: 'Test_Image1',
        reserved: false,
      }]));
      break;
    default:
      break;
  }

  return (
    <Dragons />
  );
};

TestContainer.propTypes = {
  action: PropTypes.string.isRequired,
};

describe('Tests for the Dragons component', () => {
  test('The component should display "LOADING..." when the fetching Dragons action starts', () => {
    const { getByText } = render(
      <Provider store={store}>
        <TestContainer action="FETCH_BEGIN" />
      </Provider>,
    );

    expect(getByText(/LOADING.../i)).toBeInTheDocument();
  });

  test('The component should display "Something went wrong: [ERROR]" when the fetching Dragons action fails', () => {
    const { getByText } = render(
      <Provider store={store}>
        <TestContainer action="FETCH_FAILURE" />
      </Provider>,
    );

    expect(getByText(/Something went wrong:/i)).toBeInTheDocument();
  });

  test('The component should display a list of dragons when the fetching Dragons action succeeds', () => {
    const { getByText } = render(
      <Provider store={store}>
        <TestContainer action="FETCH_SUCCESS" />
      </Provider>,
    );

    expect(getByText(/Test_Name1/i)).toBeInTheDocument();
  });

  test('The component should display a "Reserved" badge when the user clicks the Reserve Dragon button', () => {
    const { getByText } = render(
      <Provider store={store}>
        <TestContainer action="FETCH_SUCCESS" />
      </Provider>,
    );

    fireEvent.click(getByText(/Reserve Dragon/i));

    expect(getByText(/Reserved/i)).toBeInTheDocument();
    expect(getByText(/Cancel Reservation/i)).toBeInTheDocument();
  });
});
