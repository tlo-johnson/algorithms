import Node from "./../model/Node";
import DijkstraError from "./dijkstraError";

const SHIFT_INDEX = 1;

const startDijkstra = (nodes, startIndex, endNode) => {
    if (!isValidIndex(nodes, startIndex)) return new DijkstraError()

    return {
        startNode: nodes[startIndex - SHIFT_INDEX],
    }
};

const isValidIndex = (nodes, startIndex) => {
    return startIndex <= nodes.length && startIndex > SHIFT_INDEX
}

export default startDijkstra;
