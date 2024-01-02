import {render, screen} from '@testing-library/react';
import {makeFakeFilm} from '../../utils/mocks.ts';
import {VideoPlayer} from './video-player.tsx';
describe('Component: VideoPlayer', () => {
  it('should render correct', () => {
    const fakeFilm = makeFakeFilm();

    render(<VideoPlayer src={fakeFilm.videoLink} poster={fakeFilm.posterImage} isPlaying isMuted />);

    expect(screen.getByTestId('video-player')).toBeInTheDocument();
  });
});
