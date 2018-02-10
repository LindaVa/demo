import React, { Component } from 'react';
import { Button, SearchBar } from 'antd-mobile';
import css from './css.less';

class App extends Component {
  render() {
    return (
      <div className="wrap page">
        <SearchBar placeholder="搜索" maxLength={8} />

      </div>
    );
  }
}

export default App;
