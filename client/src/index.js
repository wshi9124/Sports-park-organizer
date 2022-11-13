import React, { createContext }  from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from './AuthProvider';
import './index.css';
import App from './App';
import actionCable from 'actioncable'

const CableApp = {}
CableApp.cable = actionCable.createConsumer('ws://localhost:3000/cable') // change to whatever port your server uses
export const ActionCableContext = createContext()


ReactDOM.render(
    <BrowserRouter>
      <AuthProvider>
        <ActionCableContext.Provider value={CableApp.cable}>
          <App />
        </ActionCableContext.Provider>
      </AuthProvider>
    </BrowserRouter>,
  document.getElementById('root')
);

