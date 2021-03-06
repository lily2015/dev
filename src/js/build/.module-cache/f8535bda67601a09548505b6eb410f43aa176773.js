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
  }
});