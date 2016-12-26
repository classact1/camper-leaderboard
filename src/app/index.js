const React = require('react');
const ReactDOM = require('react-dom');

//module requires
require('./css/index.css');
let Table = require('./table');
let Header = require('./header');

class Leaderboard extends React.Component{
    constructor(){
        super();
        this.state={
            recent: [],
            allTime: []
        }
    }
    
    componentDidMount(){
        this.fetchData("https://fcctop100.herokuapp.com/api/fccusers/top/recent");
    }
    
    render(){
        return (
            
            <div>
            <Header/>
            <Table recent={this.state.recent} allTime={this.state.allTime}/>
            </div>
        )
    }

    fetchData(source){
      fetch(source)
        .then(function(response) {
        return response.json();
      })
        .then(function(json) {  
        this.setState({
          recent: json
        });
      }.bind(this))
        .catch(function(error) {
        console.error('Fetch:' + error);
      });
    }
    
};

ReactDOM.render(<Leaderboard/>, document.getElementById('container'));