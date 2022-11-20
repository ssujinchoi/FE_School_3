
## 트리
1. 더 lite한 모델을 만들기 위해 (js에서는 그렇게 의미가 크진않다.)
2. 확장성
3. OOP철학에 맞기 때문
```js
const tree = {
    root: {
        value : 5,
        left : {
            value: 3,
            left: {
                value: 1,
                left: null,
                right: null
            },
            right: {
                value: 4,
                left: null,
                right: null
            }
        },
        right: {
            value: 8,
            left: {
                value: 6,
                left: null,
                right: null
            },
            right: {
                value: 9,
                left: null,
                right: null
            }
        }
    }
}
////////////////////////////////////////
class Node {
    constructor(data){
        this.data = data
        // this.child = [] // 2진트리가 아닌 트리를 만들 때 사용할 수 있습니다.
        this.left = null
        this.right = null
    }
}

root = new Node(55)
node1 = new Node(53)
node2 = new Node(99)
node3 = new Node(37)
node4 = new Node(54)

root.left = node1;
root.right = node2;

node1.left = node3;
node1.right = node4;

root.data
// 55
root.left.data
// 53
root.left.left.data
// 37
root.left.right.data
// 54
```

*트리구현(완벽한 이진트리가 아닙니다)

```js
class Node {
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null
    }
}

class Tree {
    constructor(data) {
        let init = new Node(data)
        //this.child = [] // 이진트리가 아닌 트리를 만들 때 사용가능
        this.root = init
        this.length = 0
    }
    insert(data) {
        let newNode = new Node(data)
        let nowNode = this.root // root부터 순회한다.

        while(nowNode) {
            if(data == nowNode.data) {
                // 들어온 값이 존재하는 값이면 트리에 값을 추가하지 않는다.
                return
            } else if(data < nowNode.data) { // 들어온 data가 현재노드보다 작다면
            // 해당 데이터 부분이 비어있으면 데이터를 넣고, 비어있지 않으면 계속 타고 내려감
                if(!nowNode.left) {
                    nowNode.left = newNode
                    this.length += 1
                    return
                }
                nowNode = nowNode.left
            } else if(data > nowNode.data) { // 들어온 data가 현재노드보다 크다면
            // 해당 데이터 부분이 비어있으면 데이터를 넣고, 비어있지 않으면 계속 타고 내려감
                if(!nowNode.right) {
                    nowNode.right = newNode
                    this.length += 1
                    return
                }
                nowNode = nowNode.right
            }
        }
    }
}

///////// 트리순회

class Node {
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null
    }
}

class Tree {
    constructor(data) {
        let init = new Node(data)
        //this.child = [] // 이진트리가 아닌 트리를 만들 때 사용가능
        this.root = init
        this.length = 0
    }
    insert(data) {
        let newNode = new Node(data)
        let nowNode = this.root // root부터 순회한다.

        while(nowNode) {
            if(data == nowNode.data) {
                // 들어온 값이 존재하는 값이면 트리에 값을 추가하지 않는다.
                return
            } else if(data < nowNode.data) { // 들어온 data가 현재노드보다 작다면
            // 해당 데이터 부분이 비어있으면 데이터를 넣고, 비어있지 않으면 계속 타고 내려감
                if(!nowNode.left) {
                    nowNode.left = newNode
                    this.length += 1
                    return
                }
                nowNode = nowNode.left
            } else if(data > nowNode.data) { // 들어온 data가 현재노드보다 크다면
            // 해당 데이터 부분이 비어있으면 데이터를 넣고, 비어있지 않으면 계속 타고 내려감
                if(!nowNode.right) {
                    nowNode.right = newNode
                    this.length += 1
                    return
                }
                nowNode = nowNode.right
            }
        }
    }

    // 깊스너큐
    DFS() {
        // 깊이우선 탐색, DFS(Depth First Search)
        // Stack 이용
        let visited = []
        let st = [this.root]

        while(st.length !== 0) {
            let current = st.pop()

            if(current.right) {
                st.push(current.right)
            }
            if(current.left) {
                st.push(current.left)
            } 
            visited.push(current.data)
        }
        return visited
    }

    BFS() {
        // 너비우선 탐색, BFS(Breadth First Search)
        // Queue 이용
        let visited = []
        let que = [this.root]

        while(que.length !== 0) {
            let current = st.shift()

            if(current.right) {
                que.push(current.right)
            }
            if(current.left) {
                que.push(current.left)
            } 
            visited.push(current.data)
        }
        return visited
    }
}

let t = new Tree(5)
t.insert(3)
t.insert(8)
t.insert(1)
t.insert(4)
t.insert(6)
t.insert(9)
t.DFS()
t.BFS()
```