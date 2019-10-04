import update from 'immutability-helper';


const initialState = {
   allCars: null,
   favs: []
}


const carReducer = (oldState = initialState, action) => {
   switch (action.type) {
      case 'CARS': {
         return { ...oldState, allCars: action.data }
      }
      case 'FAVS': {
         return { ...oldState, favs: [...oldState.favs, (action.car)] }
      }
      case 'UPDATEFAV': {
         return update(oldState, {
            allCars: {
               [action.id]: {
                  favorite: { $set: action.bool }
               }
            }
         })
      }
      case 'RMVFAV': {
         return { ...oldState, favs: [...oldState.favs.filter(favCar => favCar !== action.car)] }
      }
      default: {
         return oldState
      }
   }
}

export default carReducer 