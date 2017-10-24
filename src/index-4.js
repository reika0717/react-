import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//二つある書き出し方の二つ目（extendを使ったやり方）　↔︎　No.2
//superで親コンポーネントのコンストラクタを実行する
//その場所はコンストラクタの中
//constructorはnewした時に必ず実行されるメソッド　←JSの話
//propsを使わない場合はconstructorを使用しなくてもいい
//extendした場合はrenderメソッドを定義しなければいけない。その中でReactのコンポーネントを返してあげる。

class Clock extends React.Component {
  //  constructor (props) {
  //    super(props)
  //  }

  render () {
    const { current } = this.props //これもDeconstruct
    // 同じ　=> const time = this.props.time
    return (
      <h1>{current}.</h1>
    )
  }
}

/*
実際はこんなイメージ。それをJSXで。
ReactDOM.render(
  () => { new Clock({time: (new Date()).toLocaleTimeString()}) },
  document.getElementById('root')
)
*/
ReactDOM.render(
  <Clock current={(new Date()).toLocaleTimeString()} />,
  document.getElementById('root')
)

/** Work
• Clockコンポーネントが、props.time の代わりに props.current で受け取るようにしてください //定義と吐き出しのつながりを理解する
• Clockコンポーネントのconstructorメソッドを削除したうえで、同じ表示になるようにして下さい  //データがどのように親コンポーネントから子コンポーネントに渡されているか理解する
• Clockコンポーネントを、関数形式に書き変えて下さい
*/
