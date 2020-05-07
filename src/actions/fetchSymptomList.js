import {API_ROOT} from '../services/api'

const fetchSymptomList = () => {
  return (dispatch) => {
    fetch(`${API_ROOT}/symptoms`)
    .then(resp => resp.json())
    .then(json => {
      console.log(json);
      dispatch({ type: "GET_SYMPTOMS", symptomChoices: json})
      })
  }
}

export default fetchSymptomList