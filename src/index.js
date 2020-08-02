import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import { ProjectsState } from './context/projects/ProjectState';
import { UiState } from './context/UI/UiState';

import App from './App';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <ProjectsState>
      <UiState>
        <Router>
          <App />
        </Router>
      </UiState>
    </ProjectsState>
  </React.StrictMode>,
  rootElement
);
