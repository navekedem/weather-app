import { City } from "../models/city"

const favouritesReducer = (state:City[] = [], action:{city:City,type:string}) => {
    switch (action.type) {
        case 'ADD_FAVOURITE':
            return [ ...state, action.city]
          case 'REMOVE_FAVOURITE':
            return state.filter(city => city.cityKey !== action.city.cityKey);
        default:
            return state
    }
}

export default favouritesReducer;