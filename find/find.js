const findSumOfMissingNumbers = (sequence) => {
  // O(n)
  const count = sequence.length + 2;
  const sum = calculateSumOfSequence(count);
  const sumOfSequence = sequence.reduce((acc, number) => {
    return acc + number;
  }, 0);
  return sum - sumOfSequence;
};

const calculateSumOfSequence = (count) => ((count * (count + 1)) / 2);

const checkSequenceHasTwoMissingNumbers = (sequence) => {
  const last = sequence[sequence.length - 1];
  return last - 2 === sequence.length;
};

const calculateHalfSums = (sequence, average) => {
  // O(n)
  let sumLeft = 0;
  let sumRight = 0;
  for (const number of sequence) {
    if (number <= average) {
      sumLeft += number;
    } else
      sumRight += number;
  }
  return [sumLeft, sumRight];
};

const findMissingNumberWithAverageHalf = (sequence) => {
  // O(n)
  if(!checkSequenceHasTwoMissingNumbers(sequence)) {
    throw new Error('The sequence array does not have two missing numbers');
  }
  const sum = findSumOfMissingNumbers(sequence);
  const average = Math.floor(sum / 2);
  const count = sequence.length + 2;
  const [sumLeft, sumRight] = calculateHalfSums(sequence, average);
  const sumOfFullSequence = calculateSumOfSequence(count);
  const sumAverage = calculateSumOfSequence(average);
  const first = (sumAverage - sumLeft);
  const second = sumOfFullSequence - sumAverage - sumRight;

  return [first, second];
};

export default findMissingNumberWithAverageHalf;
