export const changeArraySize = newArraySize => {
    return {
        type:"CHANGE_ARRAY_SIZE",
        newArraySize: newArraySize
    }
}

export const setNewArray = array => {
    return {
        type: "SET_NEW_ARRAY",
        array: array
    }
}

export const generateNewArray = () => {
    return {
        type: "GENERATE_NEW_ARRAY",

    }
}

export const changeSortingSpeed = newSpeed => {
    return {
        type: "CHANGE_SORTING_SPEED",
        newSpeed: newSpeed
    }
}

export const changeSortingMethod = method => {
    return {
        type: "CHANGE_SORTING_METHOD",
        newMethod: method
    }
}

export const changeBarHeight = (newHeight, index) => {
    return {
        type: "CHANGE_BAR_HEIGHT",
        newHeight: newHeight,
        index: index
    }
}

export const changeBarColor = (newColor, index) => {
    return {
        type: "CHANGE_BAR_COLOR",
        newColor: newColor,
        index: index
    }
}

export const changeArrayColor = newColor => {
    return {
        type: "CHANGE_ARRAY_COLOR",
        newArrayColor: newColor
    }
}

export const changeSelectedColor = newColor => {
    return {
        type: "CHANGE_SELECTED_COLOR",
        newSelectedColor: newColor
    }
}

export const changePivotColor = newColor => {
    return {
        type: "CHANGE_PIVOT_COLOR",
        newPivotColor: newColor
    }
}

export const changeSortedColor = newColor => {
    return {
        type: "CHANGE_SORTED_COLOR",
        newSortedColor: newColor
    }
}

export const startSorting = () => {
    return {
        type: "START_SORTING"
    }
}

export const stopSorting = () => {
    return {
        type: "STOP_SORTING"
    }
}