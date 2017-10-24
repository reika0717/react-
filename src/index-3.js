import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//props
//親コンポーネントから子コンポーネントにデータを引き渡す手段
//No,5に改めて表記
//statusとセットで覚える
//timeとかanyは属性と呼べる

//() → 基本的にJSXの世界
//({}) → ()で囲まれた{}がJSの世界


// const Clock = (props) => (
//   <h1>{props.time}</h1>
// )
// /* STEP 1*/
// const Clock = props => (  //引数が一つしかない場合（）を省略できる
//   <h1>{props.time}</h1>
// )
//
// /* STEP 2*/
// const Clock = props => <h1>{props.time}</h1>  　//JSXの話：コンポーネントが一行の時は（）が省略できる
//
// /* STEP 3*/
// const Clock = props => {
//   const time = props.time
//
//   return(         //途中でJSを書きたい時はこのようにする
//   <h1>{time}</h1>
//    )
// }

/* STEP 4*/
/*
{
  props:{
    time: ~,
    some: ~
  }
}
=>こうしたい
    time: ~,
    some: ~     //これを解体と呼ぶ
*/

const Clock = ({time}) => <h1>{time}</h1>//JSの話：　引数のメンバーは、このように直接展開できる
                                         //deconstructorと呼ばれる（デコント）

ReactDOM.render(
  <Clock time={(new Date()).toLocaleTimeString()} any={ "Hello React" }/>,
  document.getElementById('root')
)

/** Work
Clockのアロー関数を、より簡単に表記して下さい。
*/
