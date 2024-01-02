import {render, screen} from '@testing-library/react';
import {withHistory, withStore} from '../../utils/mock-component.tsx';
import {SignInError} from './sign-in-error.tsx';
import {LoginStatus} from '../../const.ts';

describe('Component: SignInError', () => {
  it('should render correctly', () => {
    const { withStoreComponent } = withStore(<SignInError loginStatus={LoginStatus.IncorrectEmail}/>, {});
    const preparedComponent = withHistory(withStoreComponent);

    render(preparedComponent);

    expect(screen.getByText('Please enter a valid email address')).toBeInTheDocument();
  });
});
