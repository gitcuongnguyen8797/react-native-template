/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import LoginPage from './src/pages/LoginPage';
import { Provider } from 'react-redux'
import { configureStore } from './src/redux/store';

const App: () => Node = () => {
    return (
        <Provider store={configureStore()}>
          <LoginPage />
        </Provider>
    )
};

export default App
