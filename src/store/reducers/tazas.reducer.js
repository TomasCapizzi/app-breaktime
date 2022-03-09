import { FILTER_TAZA, SELECT_TAZA } from '../actions/tazas.action';

import { TAZAS } from '../../utils/data/tazas';

const initialState = {
    tazas: TAZAS,
    filteredTaza: [],
    selected: null
}

const TazasReducer = (state = initialState, action) => {
   switch(action.type) {
         case SELECT_TAZA:
             return {
                 ...state,
                 selected: state.tazas.find(taza => taza.id === action.tazaId)
             }
        case FILTER_TAZA:
            return {
                ...state,
                filteredTaza: state.tazas.filter(taza => taza.category === action.categoryId)
            }
        default:
            return state;
   }
}

export default TazasReducer;