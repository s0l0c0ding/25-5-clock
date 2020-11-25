import { connect } from "react-redux";
import {startStopAction, countDownAction, resetAction, breakDcrementAction, breakIncrementAction, sessionDecrementAction, sessionIncrementAction} from '../redux/actions';
import CountDown from "./CountDown";
import React from "react";

function Timer(props) {

    React.useEffect(() => {
        if ( props.isRunning && props.current > 0) {
          setTimeout(() => props.countDownAction(), 1000);
        }
      });
    
    return (
        <div>
            <div id='break-label'>
                Break Length -- {props.break}
            </div>
            <div id='session-label'>
            Session Length -- {props.session}
            </div>
            <div id='timer-label'>
                {props.isSession ? 'Session' : 'Break'}
            </div>
            <div id='time-left'>
                <CountDown current = {props.current} />         
            </div>
            <button id='start_stop' onClick= {() => props.startStopAction()}>start/stop</button>
            <button id='reset' onClick= {() => props.resetAction()}>reset</button>
            <button id='break-decrement' onClick= {() => props.breakDcrementAction()}>break-decrement</button>
            <button id='break-increment' onClick= {() => props.breakIncrementAction()}>break-increment</button>
            <button id='session-increment' onClick= {() => props.sessionIncrementAction()}>session-increment</button>
            <button id='session-decrement' onClick= {() => props.sessionDecrementAction()}>session-decrement</button>
        </div>
    )
} 

const mapStateToProps = (state) => {
    return state;
}


const mapDispatchToProps = {
    startStopAction, countDownAction, 
    resetAction, breakDcrementAction,
    breakIncrementAction, sessionDecrementAction,
    sessionIncrementAction

}

export default connect(mapStateToProps, mapDispatchToProps)(Timer);