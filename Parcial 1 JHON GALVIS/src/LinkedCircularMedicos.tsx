import { NodeMedicos } from "./NodeMedicos";
import type { medico } from "./NodeMedicos";

export class LinkedListMedicos {
    head: NodeMedicos| null;
    tail: NodeMedicos | null;
    length: number;
    
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    append(value: medico){
        const newNode = new NodeMedicos(value);

        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
            newNode.next = newNode;    
        }else{
            if (this.tail) this.tail.next = newNode;
            newNode.next = this.head;
            this.tail = newNode;
        }

        this.length ++;
    }
    
}