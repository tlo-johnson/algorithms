import Node from "./../model/Node";
import DijkstraError from "./dijkstraError";

const SHIFT_INDEX = 1;

const startDijkstra = (nodes, startIndex, endIndex) => {
  if (!isValidIndex(nodes, startIndex) || !isValidIndex(nodes, endIndex)) return new DijkstraError();

  return {
    startNode: nodes[startIndex - SHIFT_INDEX],
    endNode: nodes[endIndex - SHIFT_INDEX],
  };
};

const isValidIndex = (nodes, index) => {
  return index >= SHIFT_INDEX && index - SHIFT_INDEX < nodes.length;
};

export default startDijkstra;

