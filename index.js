angular.module('app', []).controller('todoCtrl', function() {
        var todoList = this;
        todoList.todos = [];
     
        todoList.addTodo = function() {
          todoList.todos.push({text:todoList.todoText, done:false});
          todoList.todoText = '';
        };
     
        todoList.remaining = function() {
          var count = 0;
          angular.forEach(todoList.todos, function(todo) {
            count += todo.done ? 0 : 1;
          });
          return count;
        };
      });


