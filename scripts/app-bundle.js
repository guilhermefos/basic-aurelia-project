define('app',['exports', './todo'], function (exports, _todo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.App = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var App = exports.App = function () {
    function App() {
      _classCallCheck(this, App);

      this.heading = 'Todos';
      this.todos = [];
      this.todoDescription = '';
    }

    App.prototype.addTodo = function addTodo() {
      if (this.todoDescription) {
        this.todos.push(new _todo.Todo(this.todoDescription));
        this.todoDescription = '';
      }
    };

    App.prototype.removeTodo = function removeTodo(todo) {
      var index = this.todos.indexOf(todo);
      if (index !== -1) {
        this.todos.splice(index, 1);
      }
    };

    return App;
  }();
});
define('environment',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    debug: true,
    testing: true
  };
});
define('main',['exports', './environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;

  var _environment2 = _interopRequireDefault(_environment);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  Promise.config({
    warnings: {
      wForgottenReturn: false
    }
  });

  function configure(aurelia) {
    aurelia.use.standardConfiguration().feature('resources');

    if (_environment2.default.debug) {
      aurelia.use.developmentLogging();
    }

    if (_environment2.default.testing) {
      aurelia.use.plugin('aurelia-testing');
    }

    aurelia.start().then(function () {
      return aurelia.setRoot();
    });
  }
});
define('todo',["exports"], function (exports) {
	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}

	var Todo = exports.Todo = function Todo(description) {
		_classCallCheck(this, Todo);

		this.description = description;
		this.done = false;
	};
});
define('resources/index',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;
  function configure(config) {}
});
define('text!app.html', ['module'], function(module) { module.exports = "<template>\n  <h1>${heading}</h1>\n\n  <form submit.trigger=\"addTodo()\">\n  \t<input type=\"text\" value.bind=\"todoDescription\">\n  \t<button type=\"submit\">Add Todo</button>\n  </form>\n\n  <ul>\n  \t<li repeat.for=\"todo of todos\">\n  \t\t<input type=\"checkbox\" checked.bind=\"todo.done\">\n  \t\t<span css=\"text-decoration: ${todo.done ? 'line-through' : 'none'}\">\n  \t\t\t${todo.description}\n  \t\t</span>\n  \t\t<button click.trigger=\"removeTodo(todo)\">Remove</button>\n  \t</li>\n  </ul>\n</template>\n"; });
//# sourceMappingURL=app-bundle.js.map