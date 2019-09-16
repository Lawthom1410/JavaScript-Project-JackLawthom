import React, {Component} from 'react';
import Axios from 'axios';

export class Card extends Component{
    constructor(){
        super();
        this.state = {
            name: "",
            score: 0,
            img: "",
            origin:""
        }
    }

    // hideCard = () => {
    //     this.setState({
    //         isShown: 0
    //     })
    // }

    componentDidMount(){
        Axios.get(`https://rickandmortyapi.com/api/character/` + this.props.id).then((res) => {
            let cardData = res.data;
            let name = res.data.name;
            let score;
            let origin;

            if(name === "Rick Sanchez" && cardData.origin.name === "Earth (C-137)"){
                score = 11
            } else if (name.includes("Rick")) {
                score = 8
            }

            else if(name === "Morty Smith" && cardData.origin.name === "Earth (C-137)"){
                score = 10
            } else if (name.includes("Morty")) {
                score = 7
            }

            else if((name === "Summer Smith" || name === "Beth Smith" || name === "Jerry Smith") && cardData.origin.name === "Earth (Replacement Dimension)"){
                score = 9
            } else if(name.includes("Summer") || name.includes("Beth") || name.includes("Jerry")){
                score = 6
            }

            else {
                score = res.data.episode.length
            }

            if(name === "Rick Sanchez" || name==="Morty Smith" || name==="Summer Smith" || name==="Beth Smith" || name==="Jerry Smith"){
                origin = cardData.origin.name
            }
            
            this.props.updateScore(score);

            
            this.setState({
                name: name,
                score: score,
                img: cardData.image,
                origin: origin
            })
        })
 
    }


    render(){
        let cardStyle = {
            width: "200px",
            height: "300px"
        }
        

        let imgStyle = {
            width: "150px"
        }
        
        if(this.props.isShown){
            return(
                <div className="card mx-auto my-2" style={cardStyle}>
                    <div className="card-header">
                        <div className="row">
                            <p className="col">{this.state.name}</p>
                            <h5 className="col">{this.state.score}</h5>
                        </div>
                    </div>
                    <div className="card-body bg-light">
                        <img style={imgStyle} src={this.state.img} />
                        <small>{this.state.origin}</small>
                    </div>
                </div>
            )
        } else{
            return(
                <div className="card mx-auto my-2" style={cardStyle}>
                    <div className="card-body bg-dark">
                        <img style={imgStyle} src="https://i.pinimg.com/originals/0c/e9/53/0ce95363dc99e77d6210c2335b9eb23d.jpg" />
                    </div>
                </div>
            )
        }
    }
}