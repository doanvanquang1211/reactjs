var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var app = document.querySelector(".root");
var timer = document.querySelector(".main");
var list = document.querySelector(".list");

var HelloMessage = function (_React$Component) {
    _inherits(HelloMessage, _React$Component);

    function HelloMessage() {
        _classCallCheck(this, HelloMessage);

        return _possibleConstructorReturn(this, (HelloMessage.__proto__ || Object.getPrototypeOf(HelloMessage)).apply(this, arguments));
    }

    _createClass(HelloMessage, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "p",
                    null,
                    "Xin ch\xE0o: ",
                    this.props.name
                )
            );
        }
    }]);

    return HelloMessage;
}(React.Component);

ReactDOM.render(React.createElement(HelloMessage, { name: "Quang" }), app);

var Timer = function (_React$Component2) {
    _inherits(Timer, _React$Component2);

    function Timer(props) {
        _classCallCheck(this, Timer);

        var _this2 = _possibleConstructorReturn(this, (Timer.__proto__ || Object.getPrototypeOf(Timer)).call(this, props));

        _this2.state = {
            seconds: 0
        };

        return _this2;
    }

    _createClass(Timer, [{
        key: "tick",
        value: function tick() {
            this.setState({
                seconds: this.state.seconds + 1
            });
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            var _this3 = this;

            this.time = setInterval(function () {
                _this3.tick();
            }, 1000);
        }
    }, {
        key: "componentWillunmount",
        value: function componentWillunmount() {
            clearInterval(this.time);
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                "Gi\xE2y: ",
                this.state.seconds
            );
        }
    }]);

    return Timer;
}(React.Component);

ReactDOM.render(React.createElement(Timer, null), timer);

var App = function (_React$Component3) {
    _inherits(App, _React$Component3);

    function App(props) {
        _classCallCheck(this, App);

        var _this4 = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this4.state = {
            items: [],
            text: ''
        };
        _this4.handleChange = _this4.handleChange.bind(_this4);
        _this4.handleSubmit = _this4.handleSubmit.bind(_this4);
        return _this4;
    }

    _createClass(App, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "h3",
                    null,
                    "Danh s\xE1ch c\xF4ng vi\u1EC7c"
                ),
                React.createElement(TodoApp, { items: this.state.items }),
                React.createElement(
                    "form",
                    { onSubmit: this.handleSubmit },
                    React.createElement(
                        "label",
                        null,
                        "B\u1EA1n c\u1EA7n l\xE0m g\xEC"
                    ),
                    React.createElement("input", { type: "text", value: this.state.text, onChange: this.handleChange }),
                    React.createElement(
                        "button",
                        null,
                        "Th\xEAm #",
                        this.state.items.length + 1
                    )
                )
            );
        }
    }, {
        key: "handleChange",
        value: function handleChange(e) {
            this.setState({
                text: e.target.value
            });
        }
    }, {
        key: "handleSubmit",
        value: function handleSubmit(e) {
            e.preventDefault();
            if (this.state.text.length === 0) {
                return;
            }
            var newItem = {
                text: this.state.text,
                id: Date.now()
            };
            this.setState(function (state) {
                return {
                    items: state.items.concat(newItem), text: ''
                };
            });
        }
    }]);

    return App;
}(React.Component);

var TodoApp = function (_React$Component4) {
    _inherits(TodoApp, _React$Component4);

    function TodoApp() {
        _classCallCheck(this, TodoApp);

        return _possibleConstructorReturn(this, (TodoApp.__proto__ || Object.getPrototypeOf(TodoApp)).apply(this, arguments));
    }

    _createClass(TodoApp, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "ul",
                null,
                this.props.items.map(function (item) {
                    return React.createElement(
                        "li",
                        { key: item.id },
                        item.text
                    );
                })
            );
        }
    }]);

    return TodoApp;
}(React.Component);

ReactDOM.render(React.createElement(App, null), list);