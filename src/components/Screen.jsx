export default function Screen({ display, result }) {
  return (
    <div className="calculator__screen">
      <div className="history">{display}</div>
      <div className="result">{result}</div>
    </div>
  );
}
