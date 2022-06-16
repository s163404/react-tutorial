export const App = () => {
  // ボタンを押したときの処理
  const onClickButton = () => {
    alert();
  };

  return (
    <div>
      <h1>　Knock Knock</h1>
      <p>こんにちは</p>
      <button onClick={onClickButton}>ボタン</button>
    </div>
  );
};
