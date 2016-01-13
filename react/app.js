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
    var s0 = React.createElement('span',{className:"cell",onClick:this.clicked.bind(this,0),key:"c0"},this.state.row.name+" = "+this.state.row.c[0]);
    var s1 = React.createElement('span',{className:"cell",onClick:this.clicked.bind(this,1),key:"c1"},this.state.row.text+" = "+this.state.row.c[1]);
    var s2 = React.createElement('span',{className:"cell",onClick:this.clicked.bind(this,2),key:"c2"},"a = "+this.state.row.c[2]);
    var s3 = React.createElement('span',{className:"cell",onClick:this.clicked.bind(this,3),key:"c3"},"a = "+this.state.row.c[3]);
    var s4 = React.createElement('span',{className:"cell",onClick:this.clicked.bind(this,4),key:"c4"},"a = "+this.state.row.c[4]);
    var s5 = React.createElement('span',{className:"cell",onClick:this.clicked.bind(this,5),key:"c5"},"a = "+this.state.row.c[5]);
    var s6 = React.createElement('span',{className:"cell",onClick:this.clicked.bind(this,6),key:"c6"},"a = "+this.state.row.c[6]);
    var s7 = React.createElement('span',{className:"cell",onClick:this.clicked.bind(this,7),key:"c7"},"a = "+this.state.row.c[7]);
    var s8 = React.createElement('span',{className:"cell",onClick:this.clicked.bind(this,8),key:"c8"},"a = "+this.state.row.c[8]);
    var s9 = React.createElement('span',{className:"cell",onClick:this.clicked.bind(this,9),key:"c9"},"a = "+this.state.row.c[9]);
    var s10 = React.createElement('span',{className:"cell",onClick:this.clicked.bind(this,10),key:"c10"},"a = "+this.state.row.c[10]);
    var s11 = React.createElement('span',{className:"cell",onClick:this.clicked.bind(this,11),key:"c11"},"a = "+this.state.row.c[11]);
    var s12 = React.createElement('span',{className:"cell",onClick:this.clicked.bind(this,12),key:"c12"},"a = "+this.state.row.c[12]);

    var div = React.createElement('div', null, [s0,s1,s2,s3,s4,s5,s6,s7,s8,s9,s10,s11,s12]);
    return div;

    // return (
    //   <div>
    //     <span className="cell" onClick={this.clicked.bind(this,0)}>{this.state.row.name} = <i>{this.state.row.c[0]}</i></span>
    //     <span className="cell" onClick={this.clicked.bind(this,1)}>{this.state.row.text} = <i>{this.state.row.c[1]}</i></span>
    //     <span className="cell" onClick={this.clicked.bind(this,2)}>a = <i>{this.state.row.c[2]}</i></span>
    //     <span className="cell" onClick={this.clicked.bind(this,3)}>b = <i>{this.state.row.c[3]}</i></span>
    //     <span className="cell" onClick={this.clicked.bind(this,4)}>c = <i>{this.state.row.c[4]}</i></span>
    //     <span className="cell" onClick={this.clicked.bind(this,5)}>d = <i>{this.state.row.c[5]}</i></span>
    //     <span className="cell" onClick={this.clicked.bind(this,6)}>e = <i>{this.state.row.c[6]}</i></span>
    //     <span className="cell" onClick={this.clicked.bind(this,7)}>f = <i>{this.state.row.c[7]}</i></span>
    //     <span className="cell" onClick={this.clicked.bind(this,8)}>g = <i>{this.state.row.c[8]}</i></span>
    //     <span className="cell" onClick={this.clicked.bind(this,9)}>h = <i>{this.state.row.c[9]}</i></span>
    //     <span className="cell" onClick={this.clicked.bind(this,10)}>i = <i>{this.state.row.c[10]}</i></span>
    //     <span className="cell" onClick={this.clicked.bind(this,11)}>j = <i>{this.state.row.c[11]}</i></span>
    //     <span className="cell" onClick={this.clicked.bind(this,12)}>k = <i>{this.state.row.c[12]}</i></span>
    //   </div>
    // );
  }
});

var App = React.createClass({
  getInitialState: function() {
    return {
      rows:[]
    }
  },

  start: function() {
    console.log("start");
    var rows = [];
    for(var i = 0;i<5000;i++) {
      var cols = [1,1,1,1,1,1,1,1,1,1,1,1,1];
      rows.push({"name":"Item"+i,"text":"This is "+i+" comment","c":cols});
    }
    this.setState({rows:rows});
  },

  createRow: function(item,index) {
    return React.createElement(Row,{key:index,data:item});
    // return <Row key={index} data={item} />;
  },

  render: function() {
    var rows = this.state.rows.map(this.createRow);
    var btn = React.createElement('button',{key:"b1",onClick:this.start},"start");
    var div = React.createElement('div', null, [btn,rows]);
    return div;

    // return (
    //   <div>
    //     <button onClick={this.start}>start</button>
    //     {rows}
    //   </div>
    // );
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('content')
);
