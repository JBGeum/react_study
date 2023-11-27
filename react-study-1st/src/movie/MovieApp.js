import React, { Component } from 'react';
import axios from 'axios';

class MovieApp extends Component {
  state = {
    isLoading: true,
    movies: [],
  };

  getMovies = async () => {
    // 구조 분해 할당으로 가져오는 것 추천
    const {
      data: {
        data: { movies },
      },
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json');
    // axios는 개발자도구 - Network 탭에서 Name으로 동작 확인 가능

    // 아래와 같이 객체에 접근하는 방식은 비추천
    console.log(movies.data.data.movies);
    // this.setState({ movies : movies }); 와 동일
    this.setState({ movies, isLoading: false });
  };

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? 'Now Loading...' : 'Load Completed!'}</div>;
  }
}

export default MovieApp;
