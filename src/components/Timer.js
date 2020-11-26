import { connect } from "react-redux";
import { startStopAction, countDownAction, resetAction, breakDcrementAction, breakIncrementAction, sessionDecrementAction, sessionIncrementAction } from '../redux/actions';
import CountDown from "./CountDown";
import React from "react";

function Timer(props) {

    React.useEffect(() => {
        const timOut = () => setTimeout(() => props.countDownAction(), 1000);
        if (props.isRunning) {
            timOut();
            clearTimeout(timOut);
        }
    });

    return (
        <div>
            <div id='break-label'>
                Break Length
            </div>
            <div id='break-length'>
                {props.break}
            </div>
            <div id='session-label'>
                Session Length
            </div>
            <div id='session-length'>
                {props.session}
            </div>

            <div id='timer-label'>
                {props.isSession ? 'Session' : 'Break'}
            </div>
            <div id='time-left'>
                <CountDown current={props.current} />
                </div>
            <audio id='beep' src='https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav'></audio>
            <button id='start_stop' onClick={() => props.startStopAction()}>start/stop</button>
            <button id='reset' onClick={() => props.resetAction()}>reset</button>
            <button id='break-decrement' onClick={() => props.breakDcrementAction()}>break-decrement</button>
            <button id='break-increment' onClick={() => props.breakIncrementAction()}>break-increment</button>
            <button id='session-increment' onClick={() => props.sessionIncrementAction()}>session-increment</button>
            <button id='session-decrement' onClick={() => props.sessionDecrementAction()}>session-decrement</button>
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