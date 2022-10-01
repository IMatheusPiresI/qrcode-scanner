import {NavigationContainer} from '@react-navigation/native';
import StackRoutes from './stack.routes';

const AppRoutes = () => {
  return (
    <NavigationContainer>
      <StackRoutes />
    </NavigationContainer>
  );
};

export default AppRoutes;
