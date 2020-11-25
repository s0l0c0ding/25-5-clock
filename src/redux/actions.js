export const START_STOP = 'START_STOP';
export const RESET = 'RESET';
export const BREAK_DECREMENT = 'break-decrement';
export const BREAK_INCREMENT = 'BREAK_INCREMENT';
export const SESSION_DECREMENT = 'SESSION_DECREMENT';
export const SESSION_INCREMENT = 'SESSION_INCREMENT';
export const COUNTDOWN = 'COUNTDOWN';

export const startStopAction = () => {
    
    return {
        type: START_STOP
    }
}

export const countDownAction = () => {
    return {
        type: COUNTDOWN
    }
}

export const resetAction = () => {
    return {
        type: RESET
    }
}

export const breakDcrementAction = (data) => {
    return {
        type: BREAK_DECREMENT,
        payload: data
    }
}

export const breakIncrementAction = (data) => {
    return {
        type: BREAK_INCREMENT,
        payload: data
    }
}

export const sessionDecrementAction = (data) => {
    return {
        type: SESSION_DECREMENT,
        payload: data
    }
}

export const sessionIncrementAction = (data) => {
    return {
        type: SESSION_INCREMENT,
        payload: data
    }
}