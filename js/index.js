var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;} /* Dribble Design */
/* https://dribbble.com/shots/4998808-Daily-UI-019-Leaderboard */var

Main = function (_React$Component) {_inherits(Main, _React$Component);function Main() {_classCallCheck(this, Main);return _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).apply(this, arguments));}_createClass(Main, [{ key: "render", value: function render()
    {
      return (
        React.createElement("div", { "class": "main" },
          this.props.children));


    } }]);return Main;}(React.Component);var


Header = function (_React$Component2) {_inherits(Header, _React$Component2);function Header() {_classCallCheck(this, Header);return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));}_createClass(Header, [{ key: "render", value: function render()
    {
      return (
        React.createElement("div", { className: "header" },
          React.createElement("div", { className: "header-logo" },
            React.createElement("img", { src: "https://seeklogo.com/images/B/binance-coin-bnb-logo-97F9D55608-seeklogo.com.png", alt: "logo" })),

          React.createElement("div", { className: "header-text" },
            React.createElement("span", { className: "header-text-title" }, "Cryptocurrency"),
            React.createElement("span", { className: "header-text-subtitle bold" }, "Leaderboard"))));



    } }]);return Header;}(React.Component);var


List = function (_React$Component3) {_inherits(List, _React$Component3);
  function List(props) {_classCallCheck(this, List);var _this3 = _possibleConstructorReturn(this, (List.__proto__ || Object.getPrototypeOf(List)).call(this,
    props));

    _this3.state = {
      data: null };return _this3;

  }_createClass(List, [{ key: "componentDidMount", value: function componentDidMount()

    {var _this4 = this;
      var data = [];
      fetch("https://api.coinmarketcap.com/v2/ticker/?limit=10").
      then(function (d) {return d.json();}).
      then(function (crypto) {

        for (var prop in crypto.data) {
          data.push(crypto.data[prop]);
        }

        data.sort(function (a, b) {
          return a.rank - b.rank;
        });

        _this4.setState({
          data: data });

      });
    } }, { key: "checkPositive", value: function checkPositive(

    item) {
      return item[0] !== '-';
    } }, { key: "renderElements", value: function renderElements()

    {var _this5 = this;
      return this.state.data.map(function (item, index) {
        return React.createElement("div", { className: "row" },
          React.createElement("div", { className: "column-left flex-grow-2" },
            React.createElement("div", { className: "divider-2" },
              React.createElement("div", { className: "logo" },
                React.createElement("img", { src: "https://s2.coinmarketcap.com/static/img/coins/32x32/" + item.id + ".png", alt: "" + item.name })),

              React.createElement("div", { className: "price" },
                React.createElement("span", { className: "bold size-16" }, item.name),
                React.createElement("span", { className: "size-13" }, numeral(item.quotes.USD.price).format('0,0.000'))))),



          React.createElement("div", { className: "column " + (_this5.checkPositive(String(item.quotes.USD.percent_change_1h)) ? "green" : "red") },
            React.createElement("i", { className: "fas fa-sort-up" }),
            React.createElement("span", null, item.quotes.USD.percent_change_1h, "%")));


      });
    } }, { key: "render", value: function render()

    {
      console.log(this.state);
      return (
        React.createElement("div", { className: "content" },
          this.state.data ? this.renderElements() : null));


    } }]);return List;}(React.Component);var



Card = function (_React$Component4) {_inherits(Card, _React$Component4);function Card() {_classCallCheck(this, Card);return _possibleConstructorReturn(this, (Card.__proto__ || Object.getPrototypeOf(Card)).apply(this, arguments));}_createClass(Card, [{ key: "render", value: function render()
    {
      return (
        React.createElement(Main, null,
          React.createElement(Header, null),
          React.createElement(List, null)));


    } }]);return Card;}(React.Component);

ReactDOM.render(React.createElement(Card, null), document.getElementById('app'));