/**
 * Definition for singly-linked list.
 **/
function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
const mergeTwoLists = function(list1, list2) {
  let resultList = null;
  if (list1 && list2) {
    if (list1.val < list2.val) {
      resultList = list1;
      resultList.next = mergeTwoLists(list1.next, list2);
    } else {
      resultList = list2;
      resultList.next = mergeTwoLists(list1, list2.next);
    }
  } else if (list1) {
    resultList = list1;
  } else if (list2) {
    resultList = list2;
  }
  return resultList;
};

const list1 = new ListNode(1, new ListNode(2, new ListNode(4)));
const list2 = new ListNode(1, new ListNode(3, new ListNode(4)));
const result = mergeTwoLists(list1, list2);
console.log(result);
