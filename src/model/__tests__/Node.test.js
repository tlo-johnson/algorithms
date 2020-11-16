import Node from "./../node";

test("Node should return x & y coordinate", () => {
  let node = new Node(2, 4);

  expect(node.x).toEqual(2);
  expect(node.y).toEqual(4);
});

test("two nodes with the same coordinates should be equal", () => {
  const node = new Node(2, 4);
  const otherNode = new Node(2, 4);
  const result = node.equals(otherNode);

  expect(result).toBeTruthy();
});

test("two nodes with different coordinates should not be equal", () => {
  const node = new Node(randomCoordinate(), randomCoordinate());
  const otherNode = new Node(randomCoordinate(), randomCoordinate());
  const result = node.equals(otherNode);

  expect(result).toBeFalsy();
});

const randomCoordinate = () => Math.floor(Math.random() * 1000);

