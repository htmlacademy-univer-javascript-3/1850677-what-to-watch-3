import {LoginStatus} from '../../const.ts';

type SignInErrorProps = {
  loginStatus: LoginStatus;
};

export function SignInError({loginStatus} : SignInErrorProps){
  return(
    <p>
      {(() => {
        if (loginStatus === LoginStatus.IncorrectPassword) {
          return (
            <>Please enter a valid password</>
          );
        } else if (loginStatus === LoginStatus.IncorrectEmail){
          return (
            <>Please enter a valid email address</>
          );
        } else if (loginStatus === LoginStatus.IncorrectEmailAndPassword){
          return (
            <>Please enter a valid email address and password</>
          );
        } else {
          return null;
        }
      })()}
    </p>
  );
}
