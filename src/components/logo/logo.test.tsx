import {render, screen} from '@testing-library/react';
import {Logo} from './logo.tsx';
import {withHistory} from '../../utils/mock-component.tsx';

describe('Component: Logo', () => {
  it('should render correct', () => {
    const withHistoryComponent = withHistory(<Logo />);
    render(withHistoryComponent);

    expect(screen.getByRole('link')).toHaveClass('logo__link');
  });
});
