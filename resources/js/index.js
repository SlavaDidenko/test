let text = "123123123";

const map = [1, 2, 3].map((item) => {
  return item;
});

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
  return x + y;
}

console.log(add(), main());

add(text);
main(map);
