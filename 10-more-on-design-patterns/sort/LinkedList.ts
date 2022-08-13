import {Sorter} from "./Sorter";
import * as process from "process";

class Node {
    next: Node | null;

    constructor(public data: number) {
        this.next = null;
    }
}

export class LinkedList extends Sorter {
    head: Node | null;

    constructor() {
        super();
        this.head = null;
    }

    add(data: number): void {
        const node = new Node(data);

        if (!this.head) {
            this.head = node;
            return;
        }

        let tail = this.head;
        while (tail.next) {
            tail = tail.next;
        }

        tail.next = node;
    }

    get length(): number {
        if (!this.head) {
            return 0;
        }

        let node = this.head;
        let count = 0;

        while (node.next) {
            count++;
            node = node.next;
        }

        return count;
    }

    at(index: number): Node {
        if (!this.head) {
            throw new Error('Index out of bounds!');
        }

        let counter = 0;
        let node: Node | null = this.head;

        while (node) {
            if (counter == index) {
                return node;
            }

            counter++;
            node = node.next;
        }

        throw new Error('Index out of bounds!');
    }

    compare(leftIndex: number, rightIndex: number): boolean {
        if (!this.head) {
            throw new Error('List is empty');
        }

        return this.at(leftIndex).data < this.at(rightIndex).data;
    }

    swap(leftIndex: number, rightIndex: number): void {
        const leftNode = this.at(leftIndex);
        const rightNode = this.at(rightIndex);

        const temp = leftNode.data;
        leftNode.data = rightNode.data;
        rightNode.data = temp;
    }

    print(): void {
        if (!this.head) {
            return;
        }

        let node: Node | null = this.head;

        while (node.next) {
            process.stdout.write(node.data + '->');
            node = node.next;
        }
        console.log(node.data);
    }
}
