import React from 'react'
import classes from './Slider.module.css'
import {connect} from 'react-redux'
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import RangeSlider from 'react-bootstrap-range-slider';
import {changeArraySize, changeSortingSpeed} from '../../store/action'

const slider = props => {
    let mobile = (window.innerWidth || document.body.clientWidth) < 600
    if (props.type === "sizeChanger"){
        return (
            <div className={classes.SliderContainer}>
                <p style={{color: '#2cd1ab'}}>Size of the Array</p>
                <RangeSlider className={classes.Slider} disabled={props.sorting} min={10} max={mobile ? 150 : 300} value={props.arraySize} onChange={changeEvent => props.changeArraySize(changeEvent.target.value)}/>
            </div>
        )
    } else if (props.type === "speedChanger"){
        return (
            <div className={classes.SliderContainer}>
                <p style={{color: '#2cd1ab'}}>Sorting Speed</p>
                <RangeSlider className={classes.Slider} disabled={props.sorting} min={1} max={100} value={props.sortSpeed} onChange={changeEvent => props.changeSortingSpeed(changeEvent.target.value)}/>
            </div>
        )
    }
    
}

const mapStateToProps = state => {
    return {
        arraySize: state.arraySize,
        sortSpeed: state.sortSpeed,
        sorting: state.sorting
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changeArraySize: (newArraySize) => dispatch(changeArraySize(newArraySize)),
        changeSortingSpeed: (newSpeed) => dispatch(changeSortingSpeed(newSpeed))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(slider)