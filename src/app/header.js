const React = require('react');

class Header extends React.Component{
    render(){
        return(
            <div className="row">
                <div className="col-xs-12" id="title">
                    <img src="./app/img/freecodecamp_logo.svg" alt="" id="logo"></img>
                    <h3>Leaderboard</h3>
                </div> 
            </div>
        )
    }
}

module.exports = Header;