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
                <select className={classes.Dropdown} name="color" id="arrayColor" form="colorform" onChange={() => props.changeArrayColor(document.getElementById("arrayColor").value)}>
                    <option className={classes.Option} value="#ff59c7">Pink</option>
                    <option className={classes.Option} value="#f4fc00">Yellow</option>
                    <option className={classes.Option} value="#002afc">Blue</option>
                    <option className={classes.Option} value="#e31414">Red</option>
                </select>
                </div>
            )
        case "lookingColor":
            return (
                <div className={classes.Div}>
                <label className={classes.Label} for="cars">Selected Bar Color:</label>
                <select className={classes.Dropdown} name="color" id="selectedColor" form="colorform" onChange={() => props.changeSelectedColor(document.getElementById("selectedColor").value)}>
                    <option className={classes.Option} value="#f4fc00">Yellow</option>
                    <option className={classes.Option} value="#ff59c7">Pink</option>
                    <option className={classes.Option} value="#002afc">Blue</option>
                    <option className={classes.Option} value="#e31414">Red</option>
                </select>
                </div>
            )
        case "pivotColor":
            return (
                <div className={classes.Div}>
                <label className={classes.Label} for="cars">Pivot color:</label>
                <select className={classes.Dropdown} name="color" id="pivotColor" form="colorform" onChange={() => props.changePivotColor(document.getElementById("pivotColor").value)}>
                    <option className={classes.Option} value="#e31414">Red</option>
                    <option className={classes.Option} value="#ff59c7">Pink</option>
                    <option className={classes.Option} value="#f4fc00">Yellow</option>
                    <option className={classes.Option} value="#002afc">Blue</option>
                </select>
                </div>
            )
        case "sortedColor":
            return (
                <div className={classes.Div}>
                <label className={classes.Label} for="cars">Sorted array color:</label>
                <select className={classes.Dropdown} name="color" id="lookingColor" form="colorform" onChange={() => props.changeSortedColor(document.getElementById("lookingColor").value)}>
                    <option className={classes.Option} value="#002afc">Blue</option>
                    <option className={classes.Option} value="#ff59c7">Pink</option>
                    <option className={classes.Option} value="#f4fc00">Yellow</option>
                    <option className={classes.Option} value="#e31414">Red</option>
                </select>
                </div>
            )
        default: return;
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

export default connect(null, mapDispatchToProps)(dropDown)