class World {

  constructor() {
    this.blockedNodes = [];
  }

  addBlockedNode = (coordinate) => {
    this.blockedNodes.push(coordinate);
  };

  removeBlockedNode = () => {}
}

export default World;
