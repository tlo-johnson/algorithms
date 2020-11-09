import Node from "../../model/node";
import DijkstraError from "../dijkstraError";
import startDijkstra from "../dijkstra";

describe("when dijkstra's algorithm is started", () => {
  test("should find the starting node", () => {
    const firstNode = new Node();
    const secondNode = new Node();
    const nodes = [firstNode, secondNode];
    const startIndex = 2;
    const endIndex = 2;

    const result = startDijkstra(nodes, startIndex, endIndex);
    expect(result.startNode).toBe(secondNode);
  });

  [1, 2, 3, 4].forEach((startIndex) => {
    test(`should be able to use all nodes as a start node: startIndex is ${startIndex}`, () => {
      const firstNode = new Node();
      const secondNode = new Node();
      const thirdNode = new Node();
      const fourthNode = new Node();
      const nodes = [firstNode, secondNode, thirdNode, fourthNode];
      const endIndex = 2;

      const result = startDijkstra(nodes, startIndex, endIndex);
      expect(result.startNode).toBe(nodes[startIndex]);
    });
  });

  [2, 0].forEach((startIndex) => {
    test(`should use valid start nodes: startIndex is ${startIndex}`, () => {
      const firstNode = new Node();
      const nodes = [firstNode];
      const endIndex = 1;

      const result = startDijkstra(nodes, startIndex, endIndex);
      expect(result).toBeInstanceOf(DijkstraError);
    });
  });

  test(`should use valid end nodes`, () => {
    const firstNode = new Node();
    const secondNode = new Node();
    const thirdNode = new Node();

    const startIndex = 1;
    const endIndex = 4;
    const nodes = [firstNode, secondNode, thirdNode];

    const result = startDijkstra(nodes, startIndex, endIndex);
    expect(result).toBeInstanceOf(DijkstraError);
  });
});
