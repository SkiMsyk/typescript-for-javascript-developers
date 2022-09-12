import axios from 'axios';

export {};

// udemy-utils.herokuapp.com/api/v1/articles?token=token123
let api_uri: string = 'https://udemy-utils.herokuapp.com/api/v1/articles?token=token123';

axios.get(api_uri).then(function(resp) {
  interface Article {
    id: number;
    title: string;
    description: string;
  }
  let articles: Article[];
  articles = resp.data;
  // articles = [
  //   {
  //     id: 1,
  //     title: 'title',
  //     description: 'description'
  //   }
  // ]
  console.log(articles);
});