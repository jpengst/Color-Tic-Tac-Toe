import React, { Component } from 'react';
import './App.css';

class Gameboard extends Component {
    constructor(props){
        super(props)
        this.state = {
            squares: {
                square1: 'white',
                square2: 'white',
                square3: 'white',
                square4: 'white',
                square5: 'white',
                square6: 'white',
                square7: 'white',
                square8: 'white',
                square9: 'white'
            },
            userTurn: 'pink',
            counter: 1
        }
    }

    clickedSquare(event){
        let name = event.target.id
        let {squares, userTurn, counter} = this.state

        if(squares[name] === 'white'){
            if(userTurn === 'pink'){
                userTurn = 'blue'
                squares[name] = 'blue'
            }else{
                userTurn = 'pink'
                squares[name] = 'pink'
            }
        }
        this.setState({
            squares: squares,
            userTurn: userTurn,
            counter: counter + 1
        })
        console.log(counter);
        if(squares.square1 === 'blue' && squares.square2 === 'blue' && squares.square3 === 'blue' || squares.square1 === 'pink' && squares.square2 === 'pink' && squares.square3 === 'pink'){
            alert('Player ' + userTurn + ' wins!');
            window.location.reload()
        }
        if(squares.square4 === 'blue' && squares.square5 === 'blue' && squares.square6 === 'blue' || squares.square4 === 'pink' && squares.square5 === 'pink' && squares.square6 === 'pink'){
            alert('Player ' + userTurn + ' wins!');
            window.location.reload()
        }
        if(squares.square7 === 'blue' && squares.square8 === 'blue' && squares.square9 === 'blue' || squares.square7 === 'pink' && squares.square8 === 'pink' && squares.square9 === 'pink'){
            alert('Player ' + userTurn + ' wins!');
            window.location.reload()
        }
        if(squares.square1 === 'blue' && squares.square4 === 'blue' && squares.square7 === 'blue' || squares.square1 === 'pink' && squares.square4 === 'pink' && squares.square7 === 'pink'){
            alert('Player ' + userTurn + ' wins!');
            window.location.reload()
        }
        if(squares.square2 === 'blue' && squares.square5 === 'blue' && squares.square8 === 'blue' || squares.square2 === 'pink' && squares.square5 === 'pink' && squares.square8 === 'pink'){
            alert('Player ' + userTurn + ' wins!');
            window.location.reload()
        }
        if(squares.square3 === 'blue' && squares.square6 === 'blue' && squares.square9 === 'blue' || squares.square3 === 'pink' && squares.square6 === 'pink' && squares.square9 === 'pink'){
            alert('Player ' + userTurn + ' wins!');
            window.location.reload()
        }
        if(squares.square1 === 'blue' && squares.square5 === 'blue' && squares.square9 === 'blue' || squares.square1 === 'pink' && squares.square5 === 'pink' && squares.square9 === 'pink'){
            alert('Player ' + userTurn + ' wins!');
            window.location.reload()
        }
        if(squares.square3 === 'blue' && squares.square5 === 'blue' && squares.square7 === 'blue' || squares.square3 === 'pink' && squares.square5 === 'pink' && squares.square7 === 'pink'){
            alert('Player ' + userTurn + ' wins!');
            window.location.reload()
        }
        if(counter === 9){
            alert('Tie!')
            window.location.reload()
        }
    }

  render() {
    return (
      <div className="board">
          <div className='square1' style={{background:this.state.squares.square1}} id='square1' onClick={this.clickedSquare.bind(this)}></div>
          <div className='square2' style={{background:this.state.squares.square2}} id='square2' onClick={this.clickedSquare.bind(this)}></div>
          <div className='square3' style={{background:this.state.squares.square3}} id='square3' onClick={this.clickedSquare.bind(this)}></div>
          <div className='square4' style={{background:this.state.squares.square4}} id='square4' onClick={this.clickedSquare.bind(this)}></div>
          <div className='square5' style={{background:this.state.squares.square5}} id='square5' onClick={this.clickedSquare.bind(this)}></div>
          <div className='square6' style={{background:this.state.squares.square6}} id='square6' onClick={this.clickedSquare.bind(this)}></div>
          <div className='square7' style={{background:this.state.squares.square7}} id='square7' onClick={this.clickedSquare.bind(this)}></div>
          <div className='square8' style={{background:this.state.squares.square8}} id='square8' onClick={this.clickedSquare.bind(this)}></div>
          <div className='square9' style={{background:this.state.squares.square9}} id='square9' onClick={this.clickedSquare.bind(this)}></div>
      </div>
    );
  }
}
export default Gameboard;
