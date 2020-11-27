import { connect } from "react-redux";
import { startStopAction, countDownAction, resetAction, breakDcrementAction, breakIncrementAction, sessionDecrementAction, sessionIncrementAction } from '../redux/actions';
import CountDown from "./CountDown";
import React from "react";
import { Row, Col, Card, Button } from 'antd';
import { CaretDownOutlined, CaretUpOutlined, RedoOutlined,PlaySquareOutlined } from '@ant-design/icons'

function Timer(props) {

    React.useEffect(() => {
        const timOut = () => setTimeout(() => props.countDownAction(), 1000);
        if (props.isRunning) {
            timOut();
            clearTimeout(timOut);
        }
    });

    return (
        <Card bodyStyle={{ 'min-width': '300px' }}>
            <Row gutter={[16, 24]}>
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
            <Row justify={"center"} gutter={[16, 24]}>
            <div id='timer-label'>
                {props.isSession ? 'Session' : 'Break'}
            </div>
            </Row>
            <Row justify={"center"} gutter={[16, 10]}>
            <CountDown current={props.current} isSession={props.isSession} session={props.session} break={props.break} />
            </Row>
            <audio id='beep' src='https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav'></audio>
            <Row justify={"space-around"} gutter={[16, 2]}>
            <Button id='start_stop' onClick={() => props.startStopAction()} shape={"circle"} icon={<PlaySquareOutlined />}/>
            <Button id='reset' onClick={() => props.resetAction()} shape={"circle"} icon={<RedoOutlined />}/>
            </Row>
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