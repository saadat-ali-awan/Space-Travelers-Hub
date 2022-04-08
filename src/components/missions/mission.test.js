import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../redux/configStore';
import { GET_DATA_MISSIONS } from '../../redux/missions/missions';
import MissionData from './mData';

const missionsData = [
  {
    name: 'Mission 1',
    id: 'Mission-1',
    description: 'First Mission Description',
    reserved: false,
  },
];

const MissionsMock = () => {
  const missionList = store.getState().missionReducer;

  render(
    <Provider store={store}>
      <table>
        <tbody>
          {missionList.map((mission) => (
            <MissionData key={mission.id} mission={mission} />
          ))}
        </tbody>
      </table>
    </Provider>,
  );
};

describe('Missions test', () => {
  store.dispatch({ type: GET_DATA_MISSIONS, payload: missionsData });

  test('loads and displays table', () => {
    MissionsMock();

    expect(screen.getByText(/Mission 1/i)).toBeInTheDocument();
    expect(screen.getByText(/First Mission Description/i)).toBeInTheDocument();
    expect(screen.getByText(/Mission 1/i)).toBeInTheDocument();
    expect(screen.getByText('NOT A MEMBER')).toBeInTheDocument();
    expect(screen.getByText('Join Mission')).toBeInTheDocument();
  });

  test('Check if Join a mission button is working', () => {
    MissionsMock();
    fireEvent.click(screen.getByText('Join Mission'));
    MissionsMock();
    expect(screen.getByText('ACTIVE MEMBER')).toBeInTheDocument();
    expect(screen.getByText('Leave Mission')).toBeInTheDocument();
  });

  test('Check if Leave a mission button is working', () => {
    MissionsMock();
    fireEvent.click(screen.getByText('Leave Mission'));
    MissionsMock();
    expect(screen.getByText('NOT A MEMBER')).toBeInTheDocument();
    expect(screen.getByText('Join Mission')).toBeInTheDocument();
  });
});
