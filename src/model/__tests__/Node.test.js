import Node from "./../node";

test("Node should return x & y coordinate", () => {
  let node = new Node(2, 4);

  expect(node.x).toEqual(2);
  expect(node.y).toEqual(4);
});

