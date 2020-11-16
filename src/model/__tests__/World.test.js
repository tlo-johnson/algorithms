import World from "../../model/world";

test("should be able to add blocked nodes (i.e. nodes that can't be passed through)", () => {
  const blockedNodes = [
    { x: randomCoordinate(), y: randomCoordinate() },
    { x: randomCoordinate(), y: randomCoordinate() },
  ];

  const world = new World();
  blockedNodes.forEach((x) => world.addBlockedNode(x));

  expect(world.blockedNodes).toEqual(blockedNodes);
});

test("should be able to remove blocked nodes", () => {
  const removedNode = { x: randomCoordinate(), y: randomCoordinate() };
  const otherNodes = [];
  for (let count = 0; count < 10; count++) otherNodes.push({ x: randomCoordinate(), y: randomCoordinate() });

  const world = new World();
  otherNodes.slice(0, 5).forEach((x) => world.addBlockedNode(x));
  world.addBlockedNode(removedNode);
  otherNodes.slice(5).forEach((x) => world.addBlockedNode(x));

  world.removeBlockedNode(removedNode);
  expect(world.blockedNodes).toEqual(otherNodes);
});

const randomCoordinate = () => Math.floor(Math.random() * 100);

