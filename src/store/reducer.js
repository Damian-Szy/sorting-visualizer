const generateArray = size => {
    let array = []
    for (let i = 0; i < size; i++){
        array.push(Math.floor(Math.random() * (350-10) + 10))
    }
    console.log(array)
    return array
}

const generateColorArray = (size, arrayColor) => {
    let array = []
    for (let i = 0; i < size; i++){
        array.push(arrayColor) // optional yellow #d18c2c
    }
    console.log(array)
    return array
}

const initialState = {
    arraySize: 20,
    sortSpeed: '50',
    sortType: '',
    sorting: false,
    arrayColor: '#ff59c7',
    selectedColor: '#f4fc00',
    pivotColor: '#e31414',
    sortedColor: '#002afc',
    array: generateArray(20),
    colorArray: generateColorArray(20, '#ff59c7')
}

const reducer = (state=initialState, action) => {
    switch (action.type){
        case "CHANGE_ARRAY_SIZE": 
        return {
            ...state, arraySize: action.newArraySize*1.0, array: generateArray(action.newArraySize), colorArray: generateColorArray(action.newArraySize, state.arrayColor)
        }
        case "GENERATE_NEW_ARRAY": 
        return {
            ...state, array: generateArray(state.arraySize), colorArray: generateColorArray(state.arraySize, state.arrayColor)
        }
        case "CHANGE_SORTING_SPEED":
            return {
                ...state, sortSpeed: action.newSpeed
            }
        case "CHANGE_SORTING_METHOD":
            console.log(action.newMethod)
            return {
                ...state, sortType: action.newMethod
            }
        case "CHANGE_BAR_HEIGHT":
            let newArr = [...state.array]
            newArr[action.index] = action.newHeight
            return {
                ...state, array: newArr
            }
        // eslint-disable-next-line no-duplicate-case
        case "CHANGE_BAR_COLOR":
            let newColorArr = [...state.colorArray]
            newColorArr[action.index] = action.newColor
            return {
                ...state, colorArray: newColorArr
            }
        case "CHANGE_ARRAY_COLOR":
            let newColorArray = generateColorArray(state.arraySize, action.newArrayColor)
            return {
                ...state, colorArray: newColorArray, arrayColor: action.newArrayColor
            }
        case "CHANGE_SELECTED_COLOR":
            return {
                ...state, selectColor: action.newSelectedColor
            }
        case "CHANGE_PIVOT_COLOR":
            return {
                ...state, pivotColor: action.newPivotColor
            }
        case "CHANGE_SORTED_COLOR":
            return {
                ...state, sortedColor: action.newSortedColor
            }
        default: return {...state};
    }
}

export default reducer