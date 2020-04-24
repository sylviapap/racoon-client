import {API_ROOT} from '../services/api'

export const fetchInitialMap = () => {
    return (dispatch) => {
        fetch(`${API_ROOT}/map_markers`)
        .then(resp => resp.json())
        .then(json => {
            dispatch({ type: "GET_MAP", initialMap: json})
        })
    }
}