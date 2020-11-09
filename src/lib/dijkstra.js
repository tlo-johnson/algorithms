import Node from "./../model/Node"

const SHIFT_INDEX = 1;

const startDijkstra = (nodes, startIndex) => {
    return nodes[startIndex - SHIFT_INDEX];
};

export default startDijkstra;
