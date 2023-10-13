import { MainScreen } from '../../screens/main-screen/main-screen';
import type { PromoInfo } from '../../screens/main-screen/main-screen';

export function App(props: PromoInfo) {
  return (
    <MainScreen
      {...props}
    />
  );
}
