// add two numbers

// create a few test case with liked list and log the sum as a linked list

// Definition for singly-linked list.
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

// Function to add two numbers represented by linked lists
function addTwoNumbers(l1, l2) {
    let dummyHead = new ListNode(0); // Dummy node to simplify code
    let p = l1, q = l2, current = dummyHead;
    let carry = 0;

    while (p !== null || q !== null || carry !== 0) {
        let x = (p !== null) ? p.val : 0;
        let y = (q !== null) ? q.val : 0;

        let sum = x + y + carry;
        carry = Math.floor(sum / 10);
        sum = sum % 10;

        current.next = new ListNode(sum);
        current = current.next;

        if (p !== null) p = p.next;
        if (q !== null) q = q.next;
    }

    return dummyHead.next;
}

// Utility function to print linked list
function printList(node) {
    let result = [];
    while (node !== null) {
        result.push(node.val);
        node = node.next;
    }
    console.log(result.join(' -> '));
}

// Test cases

// Test case 1
let l1 = new ListNode(2, new ListNode(4, new ListNode(3))); // 342
let l2 = new ListNode(5, new ListNode(6, new ListNode(4))); // 465
let result = addTwoNumbers(l1, l2);
console.log("Test case 1:");
printList(result); // Expected output: 7 -> 0 -> 8

// Test case 2
l1 = new ListNode(0); // 0
l2 = new ListNode(0); // 0
result = addTwoNumbers(l1, l2);
console.log("Test case 2:");
printList(result); // Expected output: 0

// Test case 3
l1 = new ListNode(9, new ListNode(9)); // 99
l2 = new ListNode(1); // 1
result = addTwoNumbers(l1, l2);
console.log("Test case 3:");
printList(result); // Expected output: 0 -> 0 -
