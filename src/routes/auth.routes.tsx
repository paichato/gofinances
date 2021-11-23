import { createStackNavigator } from '@react-navigation/stack';
import Signin from '../screens/Signin';

const {Navigator,Screen} = createStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator>
      <Screen name="SignIn" component={Signin} />
     
    </Navigator>
  );
}