import { useState } from "react";
import { ColoredMessage } from "./components/ColoredMessage";
export const App = () => {
  // Stateの定義
  const [num, setNum] = useState(0);
  // ボタンを押したときの処理
  const onClickButton = () => {
    alert();
    setNum(num + 1);
  };

  return (
    <div>
      <h1>Knock Knock</h1>
      <p>こんにちは</p>
      <ColoredMessage color="blue">お元気ですか？</ColoredMessage>
      <ColoredMessage color="pink">元気です！</ColoredMessage>
      <button onClick={onClickButton}>ボタン</button>
      <p>{num}</p>
    </div>
  );
};
