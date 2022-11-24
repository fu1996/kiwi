import * as React from 'react';
import A from './2'

class B extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">{I18N.src.App.hELLO}</p>
        <div className="btns">
          <span className="btn" onClick={this.changeLang.bind(this, 'zh-CN')}>
            {I18N.src.App.zhongWenJianTi}</span>
          <span className={I18N.template(I18N.src.1.tRUEHa, { val1: true ? I18N.src.1.haHa : I18N.src.1.niHao })} onClick={this.changeLang.bind(this, 'en-US')}>
            English
          </span>
          <span className="btn" onClick={this.changeLang.bind(this, 'zh-TW')}>
            {I18N.src.App.zhongWenFanTi}</span>
        </div>
        <br />
        <p>
          <span>{I18N.common.test}</span>
        </p>
      </div>
    );
  }
}

export default B;
