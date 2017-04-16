angular.module('app', []).controller('todoList', function() {
        var todList = this;
        todList.todos = [
          {text:'learn AngularJS', done:true},
          {text:'build an AngularJS app', done:false}];
     
        todList.addTodo = function() {
          todList.todos.push({text:todoList.todoText, done:false});
          todList.todoText = '';
        };
     
        todoList.remaining = function() {
          var count = 0;
          angular.forEach(todoList.todos, function(todo) {
            count += todo.done ? 0 : 1;
          });
          return count;
        };
      });


