import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export class Home extends Component{
    render(){
        let btnStyle = {
            width: "10rem"
        }
        return(
            <div>
                <h1>Rick and Morty BlackJack!</h1>
                <div className="row">
                    <div className="col">
                <Link to="/play"><input type="button" className="btn btn-lg btn-success my-5" value="Play" style={btnStyle} /></Link>
                </div>
                </div>
                <img className="App-log" src="https://i2.wp.com/metro.co.uk/wp-content/uploads/2019/05/rick-and-morty-main-new-2-9192.jpg?quality=90&strip=all&zoom=1&resize=644%2C453&ssl=1"></img>
            </div>
        )
    }
}