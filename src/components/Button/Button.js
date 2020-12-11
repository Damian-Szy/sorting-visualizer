import React from 'react' 
import { generateNewArray, changeSortingMethod, changeBarColor, changeBarHeight} from '../../store/action';
import classes from './Button.module.css'
import {connect} from 'react-redux'
import {mergeSort, quickSort, heapSort, bubbleSort, insertionSort, selectionSort, bucketSort} from '../../sortingAlgorithms/sortingAlgorithms'

const button = props => {
    const onClickHandler = () => {
        switch(props.type){
            case 'Generate New Array': props.generateNewArray(); break;
            case 'Sort!': 
                switch(props.sortType){
                    case 'Merge Sort': mergeSort(props.array, props.arraySize, (height, color) => props.changeBarHeight(height, color), (color, index) => props.changeBarColor(color, index), props.sortSpeed); break;
                    case 'Quick Sort': quickSort(props.array, props.arraySize, (height, color) => props.changeBarHeight(height, color), (color, index) => props.changeBarColor(color, index), props.sortSpeed); break;
                    case 'Heap Sort': heapSort(props.array, props.arraySize, (height, color) => props.changeBarHeight(height, color), (color, index) => props.changeBarColor(color, index), props.sortSpeed); break;
                    case 'Bubble Sort': bubbleSort(props.array, props.arraySize, (height, color) => props.changeBarHeight(height, color), (color, index) => props.changeBarColor(color, index), props.sortSpeed); break;
                    case 'Insertion Sort': insertionSort(props.array, props.arraySize, (height, color) => props.changeBarHeight(height, color), (color, index) => props.changeBarColor(color, index), props.sortSpeed); break;
                    case 'Selection Sort': selectionSort(props.array, props.arraySize, (height, color) => props.changeBarHeight(height, color), (color, index) => props.changeBarColor(color, index), props.sortSpeed, props.arrayColor, props.selectedColor, props.pivotColor, props.sortedColor); break;
                    case 'Bucket Sort': bucketSort(props.array, props.arraySize, (height, color) => props.changeBarHeight(height, color), (color, index) => props.changeBarColor(color, index), props.sortSpeed); break;
                    default: window.alert('Please select a sorting type first'); break;
                } break;
            
            default: props.changeSortingMethod(props.type);
        }
    }
    return (
        <button className={classes.Button} onClick={onClickHandler}>{props.type}</button>
    )
}

const mapStateToProps = state => {
    return {
        array: state.array, 
        arraySize: state.arraySize, 
        sortSpeed: state.sortSpeed,
        sortType: state.sortType,
        arrayColor: state.arrayColor,
        selectedColor: state.selectedColor,
        pivotColor: state.pivotColor,
        sortedColor: state.sortedColor
    }   
}

const mapDispatchToProps = dispatch => {
    return {
        generateNewArray: () => dispatch(generateNewArray()),
        changeSortingMethod: method => dispatch(changeSortingMethod(method)),
        changeBarHeight: (newHeight, index) => dispatch(changeBarHeight(newHeight, index)), 
        changeBarColor: (newColor, index) => dispatch(changeBarColor(newColor, index))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(button)