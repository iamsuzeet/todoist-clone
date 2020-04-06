import React from 'react';
import { Header } from './components/layout/Header';
import { Content } from './components/layout/Content';
import { ProjectsProvider, SelectedProjectProvider } from './context';

//style
import './App.scss';

export const App = () => (
  <SelectedProjectProvider>
    <ProjectsProvider>
      <div className="App">
        <Header />
        <Content />
      </div>
    </ProjectsProvider>
  </SelectedProjectProvider>
);
