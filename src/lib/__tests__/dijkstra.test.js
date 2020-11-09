import Node from "../../model/node";
import DijkstraError from "../dijkstraError";
import startDijkstra from "../dijkstra";

describe("when dijkstra's algorithm is started", () => {
  test("should find the starting node", () => {
    const firstNode = new Node();
    const secondNode = new Node();
    const nodes = [firstNode, secondNode];
    const startIndex = 2;

    const startingNode = startDijkstra(nodes, startIndex).startNode;
    expect(startingNode).toBe(secondNode);
  });

  [2, 0].forEach((startIndex) => {
    test(`should use valid start nodes: startIndex is ${startIndex}`, () => {
      const firstNode = new Node();
      const nodes = [firstNode];

      const startingNode = startDijkstra(nodes, startIndex);
      expect(startingNode).toBeInstanceOf(DijkstraError);
    });
  });

    test(`should use valid end nodes`, () => {
      const firstNode = new Node();
      const secondNode = new Node();
      const thirdNode = new Node();

      const startIndex = 1;
      const endIndex = 4;
      const nodes = [firstNode, secondNode, thirdNode];

      const endNode = startDijkstra(nodes, startIndex, endIndex).endNode;
      expect(endNode).toBeInstanceOf(DijkstraError)
    })
});
