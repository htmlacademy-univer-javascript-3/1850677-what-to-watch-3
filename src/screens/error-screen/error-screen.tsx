import { Footer } from '../../components/footer/footer';
import { Logo } from '../../components/logo/logo';

export function ErrorScreen() {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />
        <h1 className="page-title user-page__title">Ошибка</h1>
      </header>
      <h1 className='page-header'>404 Not Found</h1>
      <Footer />
    </div>
  );
}
