import React, { Component } from 'react';
import { Flex, Button, SearchBar, Tabs, List, Popover, Icon, NavBar } from 'antd-mobile';
import css from './css/css.module.css';

const tabs = [
    { title: 'First Tab' },
    { title: 'Second Tab' },
    { title: 'Third Tab' },
];
const Item = List.Item;
const ItemT = Popover.Item;
const myImg = src => <img src={`https://gw.alipayobjects.com/zos/rmsportal/${src}.svg`} className="am-icon am-icon-xs" alt="" />;

class App extends Component {
    state = {
        visible: false,
        selected: '',
    };
    onSelect = (opt) => {
        this.setState({
            selected: opt.props.value,
        });
    };
    handleVisibleChange = (visible) => {
        this.setState({
            visible,
        });
    };
  render() {
    return (
      <div className={css.page}>
        <SearchBar className={css.searchBar} placeholder="搜索" maxLength={8} />
        <div className={css.tabBar}>
          <Tabs tabs={tabs}>
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
                <List>
                    <Item>
                        <NavBar
                            mode="light"
                            rightContent={
                                <Popover mask
                                         overlayClassName="fortest"
                                         overlayStyle={{ color: 'currentColor' }}
                                         visible={this.state.visible}
                                         overlay={[
                                             (<ItemT key="4" value="scan" icon={myImg('tOtXhkIWzwotgGSeptou')} data-seed="logId">Scan</ItemT>),
                                             (<ItemT key="5" value="special" icon={myImg('PKAgAqZWJVNwKsAJSmXd')} style={{ whiteSpace: 'nowrap' }}>My Qrcode</ItemT>),
                                             (<ItemT key="6" value="special" icon={myImg('PKAgAqZWJVNwKsAJSmXd')} style={{ whiteSpace: 'nowrap' }}>aaaaa</ItemT>),
                                             (<ItemT key="7" value="button ct" icon={myImg('uQIYTFeRrjPELImDRrPt')}>
                                                 <span style={{ marginRight: 5 }}>Help</span>
                                             </ItemT>),
                                         ]}
                                         align={{
                                             overflow: { adjustY: 0, adjustX: 0 },
                                             offset: [-10, 0],
                                         }}
                                         onVisibleChange={this.handleVisibleChange}
                                         onSelect={this.onSelect}
                                >
                                    <div style={{
                                        height: '100%',
                                        padding: '0 15px',
                                        marginRight: '-15px',
                                        display: 'flex',
                                        alignItems: 'center',
                                    }}
                                    >
                                        <Icon type="ellipsis" />
                                    </div>
                                </Popover>
                            }
                        >
                            气泡
                        </NavBar>
                    </Item>
                </List>
            </div>
          </Tabs>
        </div>
      </div>
    );
  }
}
export default App;
