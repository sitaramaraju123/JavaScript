function hello() {
  var x = "hello world";
  let y = x.split(" ");
  let a = y[0].split("");
  let b = y[1].split("");
  let hello, world;
  for (let i = 0; i <= a.length - 1; i++) {
    if (i === 0) {
      hello = a[i].toUpperCase();
    } else if (i != 0) {
      hello += a[i];
    }
  }
  for (let j = 0; j <= b.length - 1; j++) {
    if (j === 0) {
      world = b[j].toUpperCase();
    } else if (j != 0) {
      world += b[j];
    }
  }
  return hello.concat(" " + world);
}
console.log(hello());
