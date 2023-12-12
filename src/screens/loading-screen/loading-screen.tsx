import {Logo} from '../../components/logo/logo.tsx';
import {Footer} from '../../components/footer/footer.tsx';


export function LoadingScreen() {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />
        <h1 className="page-title user-page__title">Загрузка страницы...</h1>
      </header>
      <h1 className='page-header'>Пожалуйста, подождите</h1>
      <Footer />
    </div>
  );
}
