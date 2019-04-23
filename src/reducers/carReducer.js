const initialState = {
   allCars: null,
   favs: null
}


const carReducer = (oldState = initialState, action) => {
   switch (action.type) {
      case 'CARS': {
         return { ...oldState, allCars: action.data }
      }
      case 'FAVS': {
         return { ...oldState, favs: action.car }
      }
      default: {
         return oldState
      }
   }
}

export default carReducer 