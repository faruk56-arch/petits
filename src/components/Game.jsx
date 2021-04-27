import React from 'react'
import Winner from '../assets/pic/winner.gif'
class Game extends React.Component {
    render() {
        return (
            <div>

                {
                    this.props.player1Tokens.indexOf(false) === -1 ? (<div className="winner" >
                        <p className="pWins"> <span className="spanP1">Player 1</span> Wins !</p>
                        <div className="offset-3" style={{ background: `url(${Winner})`, height: `${500}px`, backgroundRepeat: "no-repeat" }} />
                    </div>) :
                        <div className="winner" >
                            <p className="pWins"> <span className="spanP2">Player 2</span> Wins !</p>
                            <div className="offset-3" style={{ background: `url(${Winner})`, height: `${500}px`, backgroundRepeat: "no-repeat" }} />
                        </div>




                }





            </div>
        )
    }
}
export default Game;