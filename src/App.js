import React, { Component } from 'react';
import { Button, SearchBar } from 'antd-mobile';
import css from './css.module.css';

class App extends Component {
  render() {
    return (
      <div className={css.page}>
        <SearchBar placeholder="搜索" maxLength={8} />

      </div>
    );
  }
}

export default App;
