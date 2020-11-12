import World from "../../model/world";

test("should be able to add blocked nodes (i.e. nodes that can't be passed through)", () => {
  const randomCoordinate = () => Math.floor(Math.random() * 100);
  const blockedNodes = [
    {x: randomCoordinate(), y: randomCoordinate()},
    {x: randomCoordinate(), y: randomCoordinate()},
  ];

  const world = new World();
  blockedNodes.forEach((x) => world.addBlockedNode(x));

  expect(world.blockedNodes).toEqual(blockedNodes);
});

