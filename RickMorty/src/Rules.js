import React, {Component} from 'react';

export class Rules extends Component{
    render(){
        let cardStyle = {
            marginLeft: "2rem",
            marginRight: "2rem"
        }

        let characterStyle = {
            minWidth: "18rem",
            maxWidth: "18rem",
            marginLeft: "auto",
            marginRight: "auto"
        }

        return(
            <div>
                <h1>Rules</h1>
                <p className="text-muted my-4">The aim is to get a total score as close to 21 without going over. Get a total score closer than your opponent to win!</p>
                <div className="card" style={cardStyle}>
                    <div className="card-header">
                        <h2>Card Points</h2>
                    </div>
                    <div className="card-body">
                        <ul className="list-group">
                            <div className="row">
                                <div className="col" style={characterStyle}>
                                    <li className="list-group-item bg-light">
                                        <strong>Rick</strong>
                                    </li>
                                    <li className="list-group-item mb-2">
                                        <p>Rick Sanchez (C-137): 11</p>
                                        <p>Any other Rick: 8</p>
                                    </li>
                                </div>
                                <div className="col" style={characterStyle}>
                                    <li className="list-group-item bg-light">
                                        <strong>Morty</strong>
                                    </li>
                                    <li className="list-group-item mb-2">
                                        <p>Morty Smith (C-137): 10</p>
                                        <p>Any other Morty: 7</p>
                                    </li>
                                </div>
                                <div className="col" style={characterStyle}>
                                    <li className="list-group-item bg-light">
                                        <strong>Family</strong>
                                    </li>
                                    <li className="list-group-item mb-2">
                                        <p>Summer/Beth/Jerry Smith (Replacement Dimension): 9</p>
                                        <p>Any other Summer/Beth/Jerry: 8</p>
                                    </li>
                                </div>
                                <div className="col" style={characterStyle}>
                                    <li className="list-group-item bg-light">
                                        <strong>Background Characters</strong>
                                    </li>
                                    <li className="list-group-item mb-2">
                                        <p>Any other character: Points=No. of episodes</p>
                                    </li>
                                </div>
                            </div>
                        </ul>
                        
                    </div>
                </div>
            </div>
        )
    }
}