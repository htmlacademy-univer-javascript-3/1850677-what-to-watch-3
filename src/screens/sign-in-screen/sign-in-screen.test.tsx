import {describe} from 'vitest';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {withHistory, withStore} from '../../utils/mock-component.tsx';
import {SignInScreen} from './sign-in-screen.tsx';
import {makeFakeStore} from '../../utils/mocks.ts';

describe('Screen: SignInScreen', () => {
  it('should render correct', () => {
    const withHistoryComponent = withHistory(<SignInScreen />);
    const { withStoreComponent } = withStore(withHistoryComponent, makeFakeStore());

    render(withStoreComponent);

    expect(screen.getAllByText('Sign in')).toHaveLength(2);
  });

  it('should display entered values', async () => {
    const mockEmail = 'example@gmail.com';
    const mockPassword = 'password123';
    const withHistoryComponent = withHistory(<SignInScreen />);
    const { withStoreComponent } = withStore(withHistoryComponent, makeFakeStore());

    render(withStoreComponent);
    await userEvent.type(screen.getByTestId('user-email'), mockEmail);
    await userEvent.type(screen.getByTestId('user-password'), mockPassword);

    expect(screen.getByDisplayValue(mockEmail)).toBeInTheDocument();
    expect(screen.getByDisplayValue(mockPassword)).toBeInTheDocument();
  });
});
