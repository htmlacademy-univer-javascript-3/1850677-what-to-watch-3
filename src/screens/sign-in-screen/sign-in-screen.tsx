import {Footer} from '../../components/footer/footer';
import {Logo} from '../../components/logo/logo';
import {FormEvent, useRef, useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../components/hooks/hooks.ts';
import {AppRoute, AuthorizationStatus, LoginStatus, RE_EMAIL, RE_PASSWORD, Reducer} from '../../const.ts';
import {useNavigate} from 'react-router-dom';
import {getAuthorisationStatus} from '../../store/user-reducer/selectors.ts';
import {SignInError} from '../../components/sign-in-error/sign-in-error.tsx';
import {setLoginStatus} from '../../store/user-reducer/user-reducer.ts';
import {loginAction} from '../../store/api-actions.ts';

export function SignInScreen() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const formRef = useRef(null);
  const loginStatus = useAppSelector((state) => state[Reducer.User].loginStatus);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const authorizationStatus = useAppSelector(getAuthorisationStatus);

  if (authorizationStatus === AuthorizationStatus.Auth) {
    navigate(AppRoute.Main);
  }

  const isEmailCorrect = () => email === null || !RE_EMAIL.test(email);
  const isPasswordCorrect = () => password === null || !RE_PASSWORD.test(password);

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (formRef.current) {
      if (isEmailCorrect() && isPasswordCorrect()) {
        dispatch(setLoginStatus(LoginStatus.IncorrectEmailAndPassword));
      } else if (isEmailCorrect()) {
        dispatch(setLoginStatus(LoginStatus.IncorrectEmail));
      } else if (isPasswordCorrect()) {
        dispatch(setLoginStatus(LoginStatus.IncorrectPassword));
      } else {
        dispatch(loginAction({email: email, password: password}));
      }
    }
  };

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo/>

        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">
        <form action="#" className="sign-in__form" ref={formRef} onSubmit={handleSubmit}>
          <div className="sign-in__message">
            <SignInError loginStatus={loginStatus}/>
          </div>
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input
                data-testid="user-email"
                className="sign-in__input"
                type="email"
                placeholder="Email address"
                name="user-email"
                id="user-email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <label
                className="sign-in__label visually-hidden"
                htmlFor="user-email"
              >
                Email address
              </label>
            </div>
            <div className="sign-in__field">
              <input
                data-testid="user-password"
                className="sign-in__input"
                type="password"
                placeholder="Password"
                name="user-password"
                id="user-password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
              <label
                className="sign-in__label visually-hidden"
                htmlFor="user-password"
              >
                Password
              </label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit">
              Sign in
            </button>
          </div>
        </form>
      </div>
      <Footer/>
    </div>
  );
}
