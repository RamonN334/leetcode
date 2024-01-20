
const MinStack = function() {
  this.stack = [];
};

/** 
* @param {number} val
* @return {void}
*/
MinStack.prototype.push = function(val) {
    this.stack.push({
        value: val,
        min: this.stack.length === 0 ? val : Math.min(val, this.getMin()),
    });
};

/**
* @return {void}
*/
MinStack.prototype.pop = function() {
  this.stack.pop();
};

/**
* @return {number}
*/
MinStack.prototype.top = function() {
  return this.stack[this.stack.length - 1].value;
};

/**
* @return {number}
*/
MinStack.prototype.getMin = function() {
  return this.stack[this.stack.length - 1].min;
};

/** 
* Your MinStack object will be instantiated and called as such:
* var obj = new MinStack()
* obj.push(val)
* obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.getMin()
*/

const obj = new MinStack();
obj.push(-2);
obj.push(0);
obj.push(-3);
console.log(obj.getMin());
obj.pop();
console.log(obj.top());
console.log(obj.getMin());