var TabSelector = React.createClass({displayName: "TabSelector",
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
      return React.createElement("li", {"data-value": item.value, 
          className: selected, 
          onClick: this.handleOnClick
        }, item.name)
    }, this);

    return React.createElement("div", {className: "tab-selector"}, 
      React.createElement("label", null, this.props.label), 
      React.createElement("ul", null, 
        tabs
      )
    )
  }

});
React.render(TabSelector, document.getElementById('example'));