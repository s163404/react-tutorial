import { ColoredMessage } from "./components/ColoredMessage";
export const App = () => {
  // ボタンを押したときの処理
  const onClickButton = () => {
    alert();
  };

  return (
    <div>
      <h1>Knock Knock</h1>
      <p>こんにちは</p>
      <ColoredMessage color="orange" message="お元気ですか？" />
      <button onClick={onClickButton}>ボタン</button>
    </div>
  );
};
