const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const solution = (input) => {
  const [total, ...rest] = input;
  const N = Number(total);
  const arr = rest.map(Number);

  const result = [];
  const heap = new MinHeap((a, b) => {
    if (Math.abs(a) === Math.abs(b)) {
      return a - b;
    }

    return Math.abs(a) - Math.abs(b);
  });

  for (let i = 0; i < N; i++) {
    if (arr[i] === 0) {
      if (heap.size() === 0) {
        result.push(0);
      } else {
        result.push(heap.poll());
      }
    } else {
      heap.add(arr[i]);
    }
  }

  return result.join('\n');
};

class MinHeap {
  constructor(compare) {
    this.heap = [];
    this.compare = compare;
  }

  size() {
    return this.heap.length;
  }

  swap(idx1, idx2) {
    [this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]];
  }

  add(value) {
    this.heap.push(value);
    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      const parentIdx = Math.floor((index - 1) / 2);
      if (this.compare(this.heap[index], this.heap[parentIdx]) >= 0) break;
      this.swap(index, parentIdx);
      index = parentIdx;
    }
  }

  poll() {
    if (this.heap.length === 1) {
      return this.heap.pop();
    }

    const value = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();
    return value;
  }

  bubbleDown() {
    let index = 0;
    const n = this.heap.length;

    while (true) {
      let left = index * 2 + 1;
      let right = index * 2 + 2;
      let smallest = index;

      if (left < n && this.compare(this.heap[left], this.heap[smallest]) < 0)
        smallest = left;
      if (right < n && this.compare(this.heap[right], this.heap[smallest]) < 0)
        smallest = right;

      if (smallest === index) break;
      this.swap(index, smallest);
      index = smallest;
    }
  }
}

console.log(solution(input));
