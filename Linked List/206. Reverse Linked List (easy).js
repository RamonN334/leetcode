/**
 * Definition for singly-linked list.
 **/
function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = function(head) {
  let prev = null
  while (head !== null) {
      let current = head
      head = head.next
      current.next = prev
      prev = current
  }
  return prev
};

const head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
const result = reverseList(head);
console.log(result);