var data = [
  {author: "Pete Hunt", text: "This is one comment"},
  {author: "Jordan Walke", text: "This is *another* comment"}
];
// tutorial9.js
var CommentBox = React.createClass({displayName: "CommentBox",
  render: function() {
    return (
      React.createElement("div", {className: "commentBox"}, 
        React.createElement("h1", null, "Comments"), 
        React.createElement(CommentList, {data: this.props.data}), 
        React.createElement(CommentForm, null)
      )
    );
  }
});

ReactDOM.render(
  React.createElement(CommentBox, {data: data}),
  document.getElementById('content')
);
/*var TabSelector = React.createClass({
  getInitialState: function () {
    return {selected: this.props.selected};
  },

  handleOnClick: function (evt) {
    this.setState({
        'selected': evt.target.getAttribute('data-value')
    })
  },

  render: function () {
    var tabs = this.props.data.map(function (item) {
      var selected = item.value == this.state.selected ? 'selected' : '';
      return <li data-value = {item.value} 
          className = {selected} 
          onClick = {this.handleOnClick}
        >{item.name}</li>
    }, this);

    return <div className = 'tab-selector'>
      <label>{this.props.label}</label>
      <ul>
        {tabs}
      </ul>
    </div>
  }
});*/

/*React.render(
  <TabSelector />,
  document.getElementById('example')
);*/