import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
// import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store.jsx';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
// import { Loader } from 'components/Loader/Loader.jsx';

// const theme = {
//   colors: {
//     black: '#212121',
//     white: '#fff',
//     accent: 'orangered',
//   },
// };

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <PersistGate loading={null} persistor={persistor}>
        {/* <ThemeProvider theme={theme}> */}
        <BrowserRouter basename="/goit-react-hw-08-phonebook">
          <App />
        </BrowserRouter>
        {/* </ThemeProvider> */}
      </PersistGate>
    </React.StrictMode>
  </Provider>
);
