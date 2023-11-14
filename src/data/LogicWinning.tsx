export function LogicWinning(val: string[]) {
  const combos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let combo of combos) {
    const [a, b, c] = combo;

    if (val[a] && val[a] === val[b] && val[a] === val[c]) {
      return val[a];
    }
  }

  return "";
}
