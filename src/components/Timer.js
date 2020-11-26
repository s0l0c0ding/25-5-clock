import { connect } from "react-redux";
import { startStopAction, countDownAction, resetAction, breakDcrementAction, breakIncrementAction, sessionDecrementAction, sessionIncrementAction } from '../redux/actions';
import CountDown from "./CountDown";
import React from "react";
import { Row, Col, Card, Button, Progress } from 'antd';
import { CaretDownOutlined, CaretUpOutlined } from '@ant-design/icons'

function Timer(props) {

    React.useEffect(() => {
        const timOut = () => setTimeout(() => props.countDownAction(), 1000);
        if (props.isRunning) {
            timOut();
        }
        clearTimeout(timOut);
    });
    
    const activeValue = props.isSession ? props.session : props.break;
    
    const min = Math.floor(props.current/ 60);
    const sec = props.current-min*60;
    function addZeros(num){
        return num <10 ? '0'+num : num;
    }
    const diplay= addZeros(min) + ':'+ addZeros(sec);
    
    return (
        <Card bodyStyle={{'min-width': '300px'}}>
            <Row>
                <Col span={12}>
                    <Row justify={'center'}>
                        <div id='break-label'>
                            Break Length
                    </div>
                    </Row>
                    <Row justify={"space-around"} >
                        <Button id='break-decrement' onClick={() => props.breakDcrementAction()} shape="circle" icon={<CaretDownOutlined />} />
                        <div id='break-length'>
                            {props.break}
                        </div>
                        <Button id='break-increment' onClick={() => props.breakIncrementAction()} shape="circle" icon={<CaretUpOutlined />} />
                    </Row>
                </Col>
                <Col span={12}>
                    <Row justify={'center'}>
                        <div id='session-label'>
                            Session Length
                     </div>
                    </Row>
                    <Row justify={"space-around"} >
                        <Button id='session-increment' onClick={() => props.sessionIncrementAction()} shape="circle" icon={<CaretUpOutlined />} />
                        <div id='session-length'>
                            {props.session}
                        </div>
                        <Button id='session-decrement' onClick={() => props.sessionDecrementAction()} shape="circle" icon={<CaretDownOutlined />} />
                    </Row>
                </Col>
            </Row>
            <div id='timer-label'>
                {props.isSession ? 'Session' : 'Break'}
            </div>
            <Progress type="circle" percent={(1-props.current/60/activeValue)*100} format={() => diplay}/>
            <div>
                <CountDown display={diplay} />
            </div>
            <audio id='beep' src='https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav'></audio>
            <Button id='start_stop' onClick={() => props.startStopAction()}>start/stop</Button>
            <Button id='reset' onClick={() => props.resetAction()}>reset</Button>

        </Card>
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