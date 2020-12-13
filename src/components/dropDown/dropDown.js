import React from 'react'
import classes from './dropDown.module.css'
import {changeArrayColor, changeSelectedColor, changePivotColor, changeSortedColor} from '../../store/action'
import {connect} from 'react-redux'

const dropDown = props => {
    // change dropdowns depending on which sort is selected, as some sorts dont have pivots and instead have minimums, etc 
    switch(props.type){
        case "arrayColor":
            return (
                <div className={classes.Div}>
                <label className={classes.Label} for="cars">Array Color:</label>
                <select className={classes.Dropdown} disabled={props.sorting} style={{color: props.arrayColor}} name="color" id="arrayColor" form="colorform" onChange={() => props.changeArrayColor(document.getElementById("arrayColor").value)}>
                    <option className={classes.Option} value="#ff59c7">Pink</option>
                    <option className={classes.Option} value="#f4fc00">Yellow</option>
                    <option className={classes.Option} value="#002afc">Blue</option>
                    <option className={classes.Option} value="#e31414">Red</option>
                </select>
                </div>
            )
        case "selectedColor":
            return (
                <div className={classes.Div}>
                <label className={classes.Label} for="cars">Selected Bar Color:</label>
                <select className={classes.Dropdown} disabled={props.sorting} style={{color: props.selectedColor}} name="color" id="selectedColor" form="colorform" onChange={() => props.changeSelectedColor(document.getElementById("selectedColor").value)}>
                    <option className={classes.Option} value="#f4fc00">Yellow</option>
                    <option className={classes.Option} value="#ff59c7">Pink</option>
                    <option className={classes.Option} value="#002afc">Blue</option>
                    <option className={classes.Option} value="#e31414">Red</option>
                </select>
                </div>
            )
        case "pivotColor":
            if (props.sortType === "Quick Sort"){
                return (
                    <div className={classes.Div}>
                    <label className={classes.Label} for="cars">Pivot Color:</label>
                    <select className={classes.Dropdown} disabled={props.sorting} style={{color: props.pivotColor}} name="color" id="pivotColor" form="colorform" onChange={() => props.changePivotColor(document.getElementById("pivotColor").value)}>
                        <option className={classes.Option} value="#e31414">Red</option>
                        <option className={classes.Option} value="#ff59c7">Pink</option>
                        <option className={classes.Option} value="#f4fc00">Yellow</option>
                        <option className={classes.Option} value="#002afc">Blue</option>
                    </select>
                    </div>
                )
            } else{return null}
        case "minColor":
            if (props.sortType === "Selection Sort"){
                return (
                    <div className={classes.Div}>
                    <label className={classes.Label} for="cars">Minimum Value Color:</label>
                    <select className={classes.Dropdown} disabled={props.sorting} style={{color: props.pivotColor}} name="color" id="minColor" form="colorform" onChange={() => props.changePivotColor(document.getElementById("minColor").value)}>
                        <option className={classes.Option} value="#e31414">Red</option>
                        <option className={classes.Option} value="#ff59c7">Pink</option>
                        <option className={classes.Option} value="#f4fc00">Yellow</option>
                        <option className={classes.Option} value="#002afc">Blue</option>
                    </select>
                    </div>
                ) 
            }else { return null;}
        case "sortedColor":
            return (
                <div className={classes.Div}>
                <label className={classes.Label} for="cars">Sorted array color:</label>
                <select className={classes.Dropdown} disabled={props.sorting} style={{color: props.sortedColor}} name="color" id="lookingColor" form="colorform" onChange={() => props.changeSortedColor(document.getElementById("lookingColor").value)}>
                    <option className={classes.Option} value="#002afc">Blue</option>
                    <option className={classes.Option} value="#ff59c7">Pink</option>
                    <option className={classes.Option} value="#f4fc00">Yellow</option>
                    <option className={classes.Option} value="#e31414">Red</option>
                </select>
                </div>
            )
        default: return null;
    }
    
}

const mapStateToProps = state => {
    return{
        sortType: state.sortType,
        sorting: state.sorting,
        arrayColor: state.arrayColor,
        selectedColor: state.selectedColor,
        pivotColor: state.pivotColor,
        sortedColor: state.sortedColor
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changeArrayColor: newColor => dispatch(changeArrayColor(newColor)),
        changeSelectedColor: newColor => dispatch(changeSelectedColor(newColor)),
        changePivotColor: newColor => dispatch(changePivotColor(newColor)),
        changeSortedColor: newColor => dispatch(changeSortedColor(newColor))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(dropDown)