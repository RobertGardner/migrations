var TodoStore = (function () {
    function TodoStore() {
        this.todos = [{ text: 'Alice', done: false }, { text: 'Bob', done: true }];
    }
    TodoStore.prototype.add = function (item) {
        this.todos.unshift({ text: item, done: false });
    };
    return TodoStore;
})();
exports.TodoStore = TodoStore;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL1RvZG9TdG9yZS50cyJdLCJuYW1lcyI6WyJUb2RvU3RvcmUiLCJUb2RvU3RvcmUuY29uc3RydWN0b3IiLCJUb2RvU3RvcmUuYWRkIl0sIm1hcHBpbmdzIjoiQUFLQTtJQUdFQTtRQUNFQyxJQUFJQSxDQUFDQSxLQUFLQSxHQUFHQSxDQUFDQSxFQUFFQSxJQUFJQSxFQUFFQSxPQUFPQSxFQUFFQSxJQUFJQSxFQUFFQSxLQUFLQSxFQUFFQSxFQUFFQSxFQUFFQSxJQUFJQSxFQUFFQSxLQUFLQSxFQUFFQSxJQUFJQSxFQUFFQSxJQUFJQSxFQUFFQSxDQUFDQSxDQUFDQTtJQUM3RUEsQ0FBQ0E7SUFFREQsdUJBQUdBLEdBQUhBLFVBQUlBLElBQVlBO1FBQ2RFLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLE9BQU9BLENBQUNBLEVBQUVBLElBQUlBLEVBQUVBLElBQUlBLEVBQUVBLElBQUlBLEVBQUVBLEtBQUtBLEVBQUVBLENBQUNBLENBQUNBO0lBQ2xEQSxDQUFDQTtJQUNIRixnQkFBQ0E7QUFBREEsQ0FWQSxBQVVDQSxJQUFBO0FBVlksaUJBQVMsWUFVckIsQ0FBQSIsImZpbGUiOiJzZXJ2aWNlcy9Ub2RvU3RvcmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgaW50ZXJmYWNlIFRvRG8ge1xuICB0ZXh0OiBzdHJpbmc7XG4gIGRvbmU6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjbGFzcyBUb2RvU3RvcmUge1xuICB0b2RvczogQXJyYXk8VG9Ebz47XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy50b2RvcyA9IFt7IHRleHQ6ICdBbGljZScsIGRvbmU6IGZhbHNlIH0sIHsgdGV4dDogJ0JvYicsIGRvbmU6IHRydWUgfV07XG4gIH1cblxuICBhZGQoaXRlbTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy50b2Rvcy51bnNoaWZ0KHsgdGV4dDogaXRlbSwgZG9uZTogZmFsc2UgfSk7XG4gIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=