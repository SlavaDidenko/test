let text = "";

const map = [1, 2, 3].map((item) => {
  return item;
});

console.log(text, map, "1");

function add(x, y) {
  // --->..return x + y;

  return x + y;
}

function main() {
  // --->var x = 5,
  // --->....y = 7;

  var x = 5,
    y = 7;

  console.log(x, y);
}

console.log(add(), main());
