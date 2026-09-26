export type SwipeAction = {
  candidateId: string;
  direction: "left" | "right";
};

export class SwipeQueue {
  private queue: SwipeAction[] = [];

  enqueue(action: SwipeAction) {
    this.queue.push(action);
  }

  drain(max = 10) {
    return this.queue.splice(0, max);
  }

  get size() {
    return this.queue.length;
  }
}
