import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Provider, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Dragons from './Dragons';
import store from '../../redux/configStore';
import { fetchDragonsBegin } from '../../redux/dragons/dragon';

const TestContainer = ({ action }) => {
  const dispatch = useDispatch();
  dispatch(action());
  return (
    <Dragons />
  );
};

TestContainer.propTypes = {
  action: PropTypes.func.isRequired,
};

describe('Tests for the Dragons component', () => {
  test('The component should display "LOADING..." when the fetching Dragons action starts', () => {
    const { getByText } = render(
      <Provider store={store}>
        <TestContainer action={fetchDragonsBegin} />
      </Provider>,
    );

    expect(getByText(/LOADING.../i)).toBeInTheDocument();
  });
});
