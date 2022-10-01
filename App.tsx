import 'react-native-reanimated';
import 'react-native-gesture-handler';
import {ThemeProvider} from 'styled-components';
import theme from './src/styles/theme';
import AppRoutes from './src/routes';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppRoutes />
    </ThemeProvider>
  );
};

export default App;
