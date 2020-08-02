import React, { createContext, useReducer } from 'react';

import projectsReducer from './projectReducer';

import {
  SET_CURRENT,
  CLEAR_CURRENT,
  FILTER,
  CLEAR_FILTER,
  GET_PROJECTS_SUCCESS,
  GET_PROJECTS_FAIL,
} from '../types';

import projects from '../../projects';

export const projectsContext = createContext();

export const ProjectsState = ({ children }) => {
  const initialState = {
    projects: null,
    project: null,
    filter: null,
    loading: false,
    errors: null,
  };

  const [state, dispatch] = useReducer(projectsReducer, initialState);

  // Get projects
  const getProjects = async () => {
    try {
      /** @TODO make requst to a server */
      dispatch({ type: GET_PROJECTS_SUCCESS, payload: projects });
    } catch (err) {
      dispatch({ type: GET_PROJECTS_FAIL, payload: err });
    }
  };

  // Set current project / get project detail
  const setCurrent = (project) =>
    dispatch({ type: SET_CURRENT, payload: project });

  // Clear current
  const clearCurrent = () => dispatch({ type: CLEAR_CURRENT });

  // Filter projects
  const filterProjects = (filter) => {
    const projects = state.projects.filter((project) =>
      project.tech.includes(filter)
    );

    if (projects && filter !== 'all') {
      return dispatch({ type: FILTER, payload: projects });
    }

    if (filter === 'all') {
      return dispatch({ type: CLEAR_FILTER });
    }
  };

  return (
    <projectsContext.Provider
      value={{
        projects: state.projects,
        project: state.project,
        loading: state.loading,
        errors: state.errors,
        filter: state.filter,
        getProjects,
        setCurrent,
        clearCurrent,
        filterProjects,
      }}
    >
      {children}
    </projectsContext.Provider>
  );
};
