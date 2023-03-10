
const findNumberSimplePassWithSet = (sequence) => {
  // O(n)
  const maxCount = 2;
  const missed = [];
  const sequenceValues = sequence.values();
  let curr = sequenceValues.next().value;
  for (const i of sequenceValues) {
    if (curr + 1 !== i) {
      missed.push(curr + 1);
      if (missed.length === maxCount) {
        break;
      }
    }
    curr = i;
  }
  return missed;
};

export default findNumberSimplePassWithSet;
