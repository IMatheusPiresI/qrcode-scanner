import {createStackNavigator} from '@react-navigation/stack';
import {Home} from '../screens/Home';
import {ScanComplete} from '../screens/ScanComplete';
import Scanner from '../screens/Scanner';

const {Navigator, Screen} = createStackNavigator();

const StackRoutes = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Screen name="Home" component={Home} />
      <Screen name="Scanner" component={Scanner} />
      <Screen name="ScanComplete" component={ScanComplete} />
    </Navigator>
  );
};

export default StackRoutes;
