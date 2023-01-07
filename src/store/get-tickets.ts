import axios from "axios";

export const fetchTickets = () => {
   return async (dispatch){
      try {
         dispatch({ type: FETCH_TICKETS });
         const response = await axios.get('https://aviasales-test-api.kata.academy/search')
      } catch {
         
      }
   }
};
