import React from 'react';
import { Header } from './components/layout/Header';
import { Content } from './components/layout/Content';

//style
import './App.scss';

export const App = () => (
  <div className="App">
    <Header />
    <Content />
  </div>
);
