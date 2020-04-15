import React, { useState } from 'react';
import { generatePushId } from '../helpers';
import { firebase } from '../firebase';
import { useProjectsValue } from '../context';

export const AddProject = ({ shouldShow = false }) => {
  const [show, setShow] = useState(shouldShow);
  const [projectName, setProjectName] = useState('');

  const projectId = generatePushId();
  const { setProjects } = useProjectsValue();

  const addProject = () =>
    projectName &&
    firebase
      .firestore()
      .collection('projects')
      .add({ projectId, name: projectName, userId: 'YTBgchv69aTZefrM2tbh' })
      .then(() => {
        setProjects([]);
        setProjectName('');
        setShow(false);
      });

  return (
    <div className="add-project" data-testId="add-project">
      {show && (
        <div className="add-project__input">
          <input
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            className="add-project__name"
            data-testid="project-name"
            type="text"
            placeholder="Name your project"
          />
          <button
            className="add-project__submit"
            type="button"
            onClick={() => addProject()}
            data-testid="add-project-submit"
          >
            Add Project
          </button>

          <span
            className="add-project-cancel"
            data-testid="hide-project-overlay"
            onClick={() => setShow(false)}
          ></span>
        </div>
      )}
      <span className="add-project__plus">+</span>
      <span
        data-testid="add-project-action"
        className="add-project__text"
        onClick={() => setShow(!show)}
      >
        Add Project
      </span>
    </div>
  );
};
