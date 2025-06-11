// src/navigation/AppStack.tsx
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/Home';
import {Screen_Name} from './ScreenName';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator
      id={undefined}
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}
      initialRouteName={Screen_Name.HomeScreen}>
      <Stack.Screen name={Screen_Name.HomeScreen} component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default AppStack;
