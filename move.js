const number = [1, 2, 3, 4, 5];
function move(array, index, offset) {
  const position = index + offset;
  if (position >= array.length || position < 0) {
    console.error("invalid offset..");
    return;
  }
  const output = [...array];
  const element = output.splice(index, 1)[0];
  output.splice(position, 0, element);
  console.log(element);
  return output;
}
const output = move(number, 0, 0);
console.log(output);
