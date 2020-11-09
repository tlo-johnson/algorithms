import Node from "./../model/Node";
import DijkstraError from "./dijkstraError";

const SHIFT_INDEX = 1;

const startDijkstra = (nodes, startIndex, endIndex) => {
  if (!isValidIndex(nodes, startIndex) || !isValidIndex(nodes, endIndex)) return new DijkstraError();

  return {
    startNode: nodes[startIndex - SHIFT_INDEX],
  };
};

const isValidIndex = (nodes, index) => {
  return index <= nodes.length && index > SHIFT_INDEX;
};

export default startDijkstra;
