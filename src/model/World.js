class World {
  constructor() {
    this.blockedNodes = [];
  }

  addBlockedNode = (coordinate) => {
    this.blockedNodes.push(coordinate);
  };

  removeBlockedNode = () => {
    this.blockedNodes = [];
  };
}

export default World;
