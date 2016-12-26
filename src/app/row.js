const React = require('react');

require('./css/row.css');

class Row extends React.Component{
    
    render(){
        return(
            <tr>
                <td>{this.props.number}</td>
                <td>
                    <a>
                        <img src={this.props.camper.img} className="user"/>
                        <span>{this.props.camper.username}</span>
                    </a>
                </td>
                <td className="recent">{this.props.camper.recent}</td>
                <td className="all-time">{this.props.camper.alltime}</td>
            </tr>
        )
    }
}

module.exports = Row;