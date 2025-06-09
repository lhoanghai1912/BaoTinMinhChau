// src/navigation/AuthNavigator.tsx
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/Login/LoginScreen';
import RegisterScreen from '../screens/Register/RegisterScreen';
import {Screen_Name} from './ScreenName';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator
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
    </Stack.Navigator>
  );
};

export default AuthNavigator;
