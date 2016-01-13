var Row = React.createClass({
  getInitialState: function() {
    return {
      row:this.props.data
    }
  },
  clicked: function(i,e) {
    this.state.row.c[i]++;
    this.setState({row:this.state.row});
  },
  render: function() {
    return (
      <div>
        <span className="cell" onClick={this.clicked.bind(this,0)}>{this.state.row.name} = <i>{this.state.row.c[0]}</i></span>
        <span className="cell" onClick={this.clicked.bind(this,1)}>{this.state.row.text} = <i>{this.state.row.c[1]}</i></span>
        <span className="cell" onClick={this.clicked.bind(this,2)}>a = <i>{this.state.row.c[2]}</i></span>
        <span className="cell" onClick={this.clicked.bind(this,3)}>b = <i>{this.state.row.c[3]}</i></span>
        <span className="cell" onClick={this.clicked.bind(this,4)}>c = <i>{this.state.row.c[4]}</i></span>
        <span className="cell" onClick={this.clicked.bind(this,5)}>d = <i>{this.state.row.c[5]}</i></span>
        <span className="cell" onClick={this.clicked.bind(this,6)}>e = <i>{this.state.row.c[6]}</i></span>
        <span className="cell" onClick={this.clicked.bind(this,7)}>f = <i>{this.state.row.c[7]}</i></span>
        <span className="cell" onClick={this.clicked.bind(this,8)}>g = <i>{this.state.row.c[8]}</i></span>
        <span className="cell" onClick={this.clicked.bind(this,9)}>h = <i>{this.state.row.c[9]}</i></span>
        <span className="cell" onClick={this.clicked.bind(this,10)}>i = <i>{this.state.row.c[10]}</i></span>
        <span className="cell" onClick={this.clicked.bind(this,11)}>j = <i>{this.state.row.c[11]}</i></span>
        <span className="cell" onClick={this.clicked.bind(this,12)}>k = <i>{this.state.row.c[12]}</i></span>
      </div>
    );
  }
});

var App = React.createClass({
  getInitialState: function() {
    return {
      rows:[]
    }
  },

  start: function() {
    var rows = [];
    for(var i = 0;i<5000;i++) {
      var cols = [1,1,1,1,1,1,1,1,1,1,1,1,1];
      rows.push({"name":"Item"+i,"text":"This is "+i+" comment","c":cols});
    }
    this.setState({rows:rows});
  },

  createRow: function(item,index) {
    return <Row key={index} data={item} />;
  },

  render: function() {
    var rows = this.state.rows.map(this.createRow);

    return (
      <div>
        <button onClick={this.start}>start</button>
        {rows}
      </div>
    );
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('content')
);
