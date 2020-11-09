import Node from "./../model/Node";
import DijkstraError from "./dijkstraError";

const SHIFT_INDEX = 1;

const startDijkstra = (nodes, startIndex) => {
    if (startIndex > nodes.length || startIndex < SHIFT_INDEX) return new DijkstraError();
   
    return nodes[startIndex - SHIFT_INDEX];
};


export default startDijkstra;
