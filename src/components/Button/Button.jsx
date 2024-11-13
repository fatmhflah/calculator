export default function Button({ value, type, onPress }) {
  return (
    <button className="button" type={type} onClick={() => onPress(value)}>
      {value}
    </button>
  );
}

// export default function Button({ value, type, onPress }) {
//   return (
//     <button className="button" type={type} onClick={onPress}>
//       {value}
//     </button>
//   );
// }
