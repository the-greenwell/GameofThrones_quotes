import axios from 'axios';

class QuoteService {

  quoteByChar(char){
    return axios.get(process.env.REACT_APP_QUOTE_API + '/by/' + char, {
      headers: {
        'x-rapidapi-host': process.env.REACT_APP_API_HOST,
        'x-rapidapi-key': process.env.REACT_APP_API_KEY,
      }
    })
  }

  randomQuote(){
    return axios.get(process.env.REACT_APP_QUOTE_API + '/random', {
      headers: {
        'x-rapidapi-host': process.env.REACT_APP_API_HOST,
        'x-rapidapi-key': process.env.REACT_APP_API_KEY,
      }
    })
  }

}

export default new QuoteService();
