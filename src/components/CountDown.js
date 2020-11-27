import { Progress } from 'antd';

function CountDown(props) {
    const min = Math.floor(props.current/ 60);
    const sec = props.current-min*60;
    function addZeros(num){
        return num <10 ? '0'+num : num;
    }
    const diplay= addZeros(min) + ':'+ addZeros(sec);
    
    const activeValue = props.isSession ? props.session : props.break;
    const perc = (1-props.current/60/activeValue)*100;

    return(
    <div  id="time-left" >
       <Progress type="circle" percent={perc} format={() => diplay}/>
    </div>
    )
}

export default CountDown;