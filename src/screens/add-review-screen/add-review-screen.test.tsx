import {describe, expect} from 'vitest';
import {render, screen} from '@testing-library/react';
import {withHistory, withStore} from '../../utils/mock-component.tsx';
import {AddReviewScreen} from './add-review-screen.tsx';
import {makeFakeStore} from '../../utils/mocks.ts';

describe('Page: AddReview', () => {
  it('should render correct', () => {
    const withHistoryComponent = withHistory(<AddReviewScreen />);
    const { withStoreComponent } = withStore(withHistoryComponent, makeFakeStore());

    render(withStoreComponent);

    expect(screen.getByText('Add review')).toBeInTheDocument();
    expect(screen.getByText('Post')).toBeInTheDocument();
  });
});
