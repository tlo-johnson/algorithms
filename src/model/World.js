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

  findNodeIndex = (coordinate) => {
    return this.blockedNodes.findIndex((node) => node.x === coordinate.x && node.y === coordinate.y);
  }
}

export default World;
