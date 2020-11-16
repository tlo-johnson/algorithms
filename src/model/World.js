import { isEqual } from "./../util/nodeUtil";
class World {
  constructor() {
    this.blockedNodes = [];
  }

  addBlockedNode = (coordinate) => {
    this.blockedNodes.push(coordinate);
  };

  removeBlockedNode = (coordinate) => {
    let nodeToRemoveIndex = this.findNodeIndex(coordinate);
    return this.blockedNodes.splice(nodeToRemoveIndex, 1);
  };

  findNodeIndex = (node) => {
    return this.blockedNodes.findIndex((n) => isEqual(n, node));
  }
}

export default World;
