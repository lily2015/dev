var data = [
  {author: "Pete Hunt", text: "This is one comment"},
  {author: "Jordan Walke", text: "This is *another* comment"}
];

var CommentList = React.createClass({displayName: "CommentList",
  render: function() {
    var commentNodes = this.props.data.map(function (comment) {
      return (
        React.createElement(Comment, {author: comment.author}, 
          comment.text
        )
      );
    });
    return (
      React.createElement("div", {className: "commentList"}, 
        commentNodes
      )
    );
  }
});

var CommentForm = React.createClass({displayName: "CommentForm",
  render: function() {
    return (
      React.createElement("form", {className: "commentForm"}, 
        React.createElement("input", {type: "text", placeholder: "Your name"}), 
        React.createElement("input", {type: "text", placeholder: "Say something..."}), 
        React.createElement("input", {type: "submit", value: "Post"})
      )
    );
  }
});

React.render(
  React.createElement(CommentBox, {data: data}),
  document.getElementById('example')
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