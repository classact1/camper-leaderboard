const React = require('react');

let Row = require('./row');
require('./css/table.css');

class Table extends React.Component{
    
    //mapping data sent via parent component
    prepareRows(){
        var campers = this.props.recent;
        campers = campers.map(function(camper,index){
            return(
                <Row camper = {camper} key = {index} number = {index+1}/>
            );
        }.bind(this));
        
        return campers;
    }
    
    render(){
        return(
        
            <table className="table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Camper name</th>
                  <th className="recent">Points in past 30 days</th>
                  <th className="all-time">All time points</th>
                </tr>
              </thead>

              <tbody>
                {this.prepareRows()}
              </tbody>
            </table>
            
        )
    }
}

module.exports = Table;