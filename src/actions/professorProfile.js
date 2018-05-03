import { createAction } from 'redux-actions';

export const UPDATE_PROFESSOR_PROFILE = 'UPDATE_PROFESSOR_PROFILE';
export const updateProfessorProfile = createAction(
  UPDATE_PROFESSOR_PROFILE,
  (professorId, payload) => {
    const url = `${process.env.REACT_APP_API_ROOT}/professors/${professorId}`;
    const params = {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: { 'Content-Type': 'application/json' },
    };

    return fetch(url, params)
    .then(response => response.json());
  }
);