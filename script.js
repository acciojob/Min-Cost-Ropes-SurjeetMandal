class MinHeap {
    constructor() {
        this.heap = [];
    }

    insert(value) {
        this.heap.push(value);
        this.heapifyUp();
    }

    extractMin() {
        if (this.isEmpty()) {
            return null;
        }

        if (this.heap.length === 1) {
            return this.heap.pop();
        }

        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
        return min;
    }

    isEmpty() {
        return this.heap.length === 0;
    }

    heapifyUp() {
        let currentIndex = this.heap.length - 1;
        while (currentIndex > 0) {
            const parentIndex = Math.floor((currentIndex - 1) / 2);
            if (this.heap[parentIndex] <= this.heap[currentIndex]) {
                break;
            }
            this.swap(parentIndex, currentIndex);
            currentIndex = parentIndex;
        }
    }

    heapifyDown() {
        let currentIndex = 0;
        while (true) {
            let leftChildIndex = 2 * currentIndex + 1;
            let rightChildIndex = 2 * currentIndex + 2;
            let smallestChildIndex = currentIndex;

            if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] < this.heap[smallestChildIndex]) {
                smallestChildIndex = leftChildIndex;
            }

            if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[smallestChildIndex]) {
                smallestChildIndex = rightChildIndex;
            }

            if (smallestChildIndex === currentIndex) {
                break;
            }

            this.swap(currentIndex, smallestChildIndex);
            currentIndex = smallestChildIndex;
        }
    }

    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }
}

function mincost(arr) {
    const minHeap = new MinHeap();
    arr.forEach(ropeLength => minHeap.insert(ropeLength));

    let cost = 0;

    while (minHeap.heap.length > 1) {
        const rope1 = minHeap.extractMin();
        const rope2 = minHeap.extractMin();
        const mergeCost = rope1 + rope2;
        cost += mergeCost;
        minHeap.insert(mergeCost);
    }

    return cost;
}

// Example usage:
const arr = [4, 3, 2, 6];
console.log(mincost(arr)); // Output should be 29
module.exports=mincost;
