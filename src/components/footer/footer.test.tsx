import { withHistory } from '../../utils/mock-component';
import { render, screen } from '@testing-library/react';
import {Footer} from './footer.tsx';

describe('Component: Footer', () => {
  it('should render correctly', () => {
    const expectedText = '© 2019 What to watch Ltd.';
    const preparedComponent = withHistory(<Footer />);

    render(preparedComponent);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
