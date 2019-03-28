export function changeCycleView(num) {
    return {
        type: 'CHANGE_CYCLE_VIEW',
        num
    }
}
export function changeDayName(index) {
    return {
        type: 'CHANGE_DAY_NAME',
        index
    }
}
export function addWorkout(name) {
    return {
        type: 'ADD_WORKOUT',
        name
    }
}
