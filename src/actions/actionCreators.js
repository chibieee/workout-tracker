function changeCycleView(num) {
    return {
        type: 'CHANGE_CYCLE_VIEW',
        num
    }
}
function changeDayName(index) {
    return {
        type: 'CHANGE_DAY_NAME',
        index
    }
}
function addWorkout(name) {
    return {
        type: 'ADD_WORKOUT',
        name
    }
}
