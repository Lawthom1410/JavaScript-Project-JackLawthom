import React, {Component} from 'react';
import Axios from 'axios';
import { Card } from './Card';

export class BlackJack extends Component{
    constructor(){
        super();
        this.state = {
            playerCardList: [],
            opponentCardList: [],
            playerScore: 0,
            opponentScore: 0,
            isStick: 0
        }
    }

    componentDidMount(){
        this.addPlayerCard();
        this.addPlayerCard();
        this.addopponentCard();
        this.addopponentCard();
        this.addopponentCard();
        this.addopponentCard();
        this.addopponentCard();
    }

    componentDidUpdate(){
        if(this.state.playerScore > 21){
            this.onStick();
        }
    }

    updatePlayerScore = (score) => {
        this.setState({
            playerScore: this.state.playerScore + score
        })       
    }

    updateopponentScore = (score) => {
        this.setState({
            opponentScore: this.state.opponentScore + score
        })       
    }

    

    addPlayerCard = () => {
        if (!this.state.onStick){
            let cardList = this.state.playerCardList;
            cardList.push(Math.floor(Math.random()*400)+1);
            this.setState({
                cardList: cardList
            })
        }
    }

    addopponentCard = () => {
        let cardList = this.state.opponentCardList;
        cardList.push(Math.floor(Math.random()*400)+1);
        this.setState({
            cardList: cardList
        })
    }

    onStick = () => {
        if(this.state.isStick == 0){
            this.setState({
                isStick: 1
            })
        }
    }

    render(){
        let opponentScore;
        let btnDisabled;
        let result;
        if (this.state.isStick){
            opponentScore = this.state.opponentScore;
            btnDisabled = true;
            let playerScore = this.state.playerScore;
            if(opponentScore <= 21 && opponentScore >= playerScore){
                result = "You Lose!"
            } else if (playerScore > 21) {
                result = "Bust! You Lose!"
            } else {
                result = "You Win!"
            }
        } else {
            opponentScore = "--";
            btnDisabled = false;
        }

        return(
            <div>
                <h2>{result}</h2>
                <div className="row">
                    <div className="col">
                        <h2>Opponent's Score: </h2>
                        <h2>{opponentScore}</h2>
                    </div>
                </div>
                <div className="row">
                    {this.state.opponentCardList.map(id => <Card id={id} updateScore={this.updateopponentScore} isShown={this.state.isStick} />)}
                </div>
                <div className="row mt-5">
                    <div className="col">
                        <button className="btn btn-success m-3 btn-lg" onClick={this.onStick} disabled={btnDisabled}>Stick</button>
                    </div>
                    <div className="col">
                        <h2>Your Score: </h2>
                        <h2>{this.state.playerScore}</h2>
                    </div>
                    <div className="col">
                        <button className="btn btn-success m-3 btn-lg" onClick={this.addPlayerCard} disabled={btnDisabled}>Hit</button>
                    </div>
                </div>
                <div className="row">

                </div>
                <div className="row">
                    {this.state.playerCardList.map(id => <Card id={id} updateScore={this.updatePlayerScore} isShown={1} />)}
                </div>
            </div>
        )
    }
}