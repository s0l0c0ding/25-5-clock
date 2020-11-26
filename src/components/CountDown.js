function CountDown(props) {
    const min = Math.floor(props.current/ 60);
    const sec = props.current-min*60;
    function addZeros(num){
        return num <10 ? '0'+num : num;
    }
    return(
    <div id='time-left'>
     {addZeros(min) + ':'+ addZeros(sec)}
    </div>
    )
}

export default CountDown;