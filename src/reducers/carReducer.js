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
         return { ...oldState, favs: action.car }
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
      default: {
         return oldState
      }
   }
}

export default carReducer 