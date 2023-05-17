import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../Screens/Home';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};
export default StackNavigator;
