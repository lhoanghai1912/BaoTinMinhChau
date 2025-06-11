// src/navigation/AuthNavigator.tsx
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/Auth';
import RegisterScreen from '../screens/Auth/Register';
import {Screen_Name} from './ScreenName';
import RegisterScreen1 from '../screens/Auth/Register/index1';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      id={undefined}
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}
      initialRouteName={Screen_Name.LoginScreen}>
      <Stack.Screen name={Screen_Name.LoginScreen} component={LoginScreen} />
      <Stack.Screen
        name={Screen_Name.RegisterScreen}
        component={RegisterScreen}
      />
      <Stack.Screen
        name={Screen_Name.RegisterScreen1}
        component={RegisterScreen1}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
