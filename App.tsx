import 'react-native-reanimated';
import {ThemeProvider} from 'styled-components';
import Scanner from './src/screens/Scanner';
import theme from './src/styles/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Scanner />
    </ThemeProvider>
  );
};

export default App;
