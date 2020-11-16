import Node from "./../../model/node";

test('Node should return x & y coordinate', () => {
    let node = new Node(2, 4);
    
    expect(node.x).isEqual(2);
    expect(node.y).isEqual(4);
})