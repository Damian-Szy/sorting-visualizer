import React from 'react' 
import { generateNewArray, changeSortingMethod, changeBarColor, changeBarHeight, startSorting, stopSorting} from '../../store/action';
import classes from './Button.module.css'
import {connect} from 'react-redux'
import {quickSort, bubbleSort, insertionSort, selectionSort} from '../../sortingAlgorithms/sortingAlgorithms'

const button = props => {
    const onClickHandler = async () => {
        switch(props.type){
            case 'Generate New Array': props.generateNewArray(); break;
            case 'Sort!': 
                if (props.sorted){
                    window.alert("Please generate a new array first")
                    break;
                }
                switch(props.sortType){
                    case 'Quick Sort':props.startSorting(); await quickSort(props.array, props.arraySize, (height, color) => props.changeBarHeight(height, color), (color, index) => props.changeBarColor(color, index), props.sortSpeed, props.arrayColor, props.selectedColor, props.pivotColor, props.sortedColor);props.stopSorting(); break;
                    case 'Bubble Sort':props.startSorting(); await bubbleSort(props.array, props.arraySize, (height, color) => props.changeBarHeight(height, color), (color, index) => props.changeBarColor(color, index), props.sortSpeed, props.arrayColor, props.selectedColor, props.pivotColor, props.sortedColor); props.stopSorting(); break;
                    case 'Insertion Sort':props.startSorting(); await insertionSort(props.array, props.arraySize, (height, color) => props.changeBarHeight(height, color), (color, index) => props.changeBarColor(color, index), props.sortSpeed, props.arrayColor, props.selectedColor, props.pivotColor, props.sortedColor); props.stopSorting(); break;
                    case 'Selection Sort':props.startSorting(); await selectionSort(props.array, props.arraySize, (height, color) => props.changeBarHeight(height, color), (color, index) => props.changeBarColor(color, index), props.sortSpeed, props.arrayColor, props.selectedColor, props.pivotColor, props.sortedColor); props.stopSorting(); break;
                    default: window.alert('Please select a sorting type first'); break;
                }
                break;
            
            default: props.changeSortingMethod(props.type);
        }
    }
    return (
        <button className={classes.Button} disabled={props.sorting} onClick={onClickHandler}>{props.type}</button>
    )
}

const mapStateToProps = state => {
    return {
        array: state.array, 
        colorArray: state.colorArray,
        arraySize: state.arraySize, 
        sortSpeed: state.sortSpeed,
        sortType: state.sortType,
        arrayColor: state.arrayColor,
        selectedColor: state.selectedColor,
        pivotColor: state.pivotColor,
        sortedColor: state.sortedColor,
        sorting: state.sorting,
        sorted: state.sorted
    }   
}

const mapDispatchToProps = dispatch => {
    return {
        generateNewArray: () => dispatch(generateNewArray()),
        changeSortingMethod: method => dispatch(changeSortingMethod(method)),
        changeBarHeight: (newHeight, index) => dispatch(changeBarHeight(newHeight, index)), 
        changeBarColor: (newColor, index) => dispatch(changeBarColor(newColor, index)),
        startSorting: () => dispatch(startSorting()),
        stopSorting: () => dispatch(stopSorting())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(button)