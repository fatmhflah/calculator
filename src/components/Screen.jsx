export default function Screen({ value }) {
  return (
    <div className="calculator__screen">
      <div className="history">{value}</div>
      <div className="result">580000</div>
    </div>
  );
}
