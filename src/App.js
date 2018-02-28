import React, { Component } from 'react';
import { Flex, Button, SearchBar, Tabs, List } from 'antd-mobile';
import css from './css.module.css';

const tabs = [
    { title: 'First Tab' },
    { title: 'Second Tab' },
    { title: 'Third Tab' },
];
const Item = List.Item;

class App extends Component {
  render() {
    return (
      <div className={css.page}>
        <SearchBar className={css.searchBar} placeholder="搜索" maxLength={8} />
        <div className={css.tabBar}>
          <Tabs tabs={tabs}
                initalPage={'t2'}
          >
            <div className={css.contentGroup}>
              <Flex wrap="wrap" className={css.btnFlex}>
                <Button className={css.btn}>First</Button>
                <Button className={css.btn}>Second</Button>
                <Button className={css.btn}>Third</Button>
                <Button className={css.btn}>Fourth</Button>
                <Button className={css.btn}>Fifth</Button>
                <Button className={css.btn}>这里的文字很长</Button>
                <Button className={css.btn}>Sixth</Button>
              </Flex>
            </div>
            <div className={css.contentGroup}>
              <List>
                <Item>
                  <div className={css.subTitle}>当前城市</div>
                  <Flex wrap="wrap" className={css.btnFlex}>
                    <Button className={css.btn}>深圳</Button>
                  </Flex>
                </Item>
                <Item>
                  <div className={css.subTitle}>A</div>
                </Item>
                <Item>
                  <div className={css.subTitle}>鞍山</div>
                </Item>
                <Item>
                  <div className={css.subTitle}>安庆</div>
                </Item>
                <Item>
                  <div className={css.subTitle}>安阳</div>
                </Item>
                <Item>
                  <div className={css.subTitle}>安康</div>
                </Item>
                <Item>
                  <div className={css.subTitle}>安丘</div>
                </Item>
                <Item>
                  <div className={css.subTitle}>安顺</div>
                </Item>
              </List>
            </div>
            <div className={css.contentGroup}>

            </div>
          </Tabs>
        </div>

      </div>
    );
  }
}

export default App;
