import App from './App';
import { Platform } from 'react-native';
import { registerRootComponent } from 'expo';

if (Platform.OS === 'web') {
  // Si estamos en la web, usamos ReactDOM para renderizar la app
  import('react-dom').then(({ render }) =>
    render(<App />, document.getElementById('root'))
  );
} else {
    registerRootComponent(App);
}
