import {describe} from 'vitest';
import {withHistory, withStore} from '../../utils/mock-component.tsx';
import {PlayerScreen} from './player-screen.tsx';
import {makeFakeStore} from '../../utils/mocks.ts';
import {render, screen} from '@testing-library/react';

describe('Screen: PlayerScreen', () => {
  it('should render correct', () => {
    const withHistoryComponent = withHistory(<PlayerScreen />);
    const { withStoreComponent } = withStore(withHistoryComponent, makeFakeStore());

    render(withStoreComponent);

    expect(screen.getByText('Exit')).toBeInTheDocument();
  });
});
