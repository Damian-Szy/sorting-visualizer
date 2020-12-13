import React from 'react'
import {connect} from 'react-redux'
import classes from './FullArray.module.css'

// const sort = (array, colorArray, arraySize, changeBarHeight, changeBarColor) => {
//     let localArray = [...array]
//     // the array does change dynamically 
//     // therefore we should make each sort a dispatch
//     for (let i = 0; i<arraySize; i++){
//         for (let j = 0; j<arraySize; j++){
//             setTimeout(()=> {changeBarColor('yellow', j)}, 1000) 
//             setTimeout(()=> {changeBarColor('yellow', j+1)}, 1000) 
//             if (localArray[j] > localArray[j+1]){
//                 let temp = localArray[j]
//                 setTimeout(()=> {changeBarHeight(localArray[j+1], j)}, 1000) 
//                 localArray[j] = localArray[j+1]
//                 setTimeout(()=> {changeBarHeight(temp, j+1)}, 1000) 
//                 localArray[j+1] = temp
//             }
//             setTimeout(()=> {changeBarColor('#ff59c7', j)}, 1000) 
//             setTimeout(()=> {changeBarColor('#ff59c7', j+1)}, 1000) 
//         }
//     }
// }

const FullArray = props => {

    
    // let array = [...props.array]
    // let colorArray = [...props.colorArray]
    let width = window.innerWidth || document.body.clientWidth
    let height = window.innerHeight || document.body.clientHeight
    let mobile = width < 600;

    return (
    <div className={classes.Parent} style={{left: mobile ? '10px' : `${width/9}px`, marginTop: `${height/10}px`}}>
        {props.array.map((divHeight,index) => (
            <div className={classes.Bar} key={index} style={{backgroundColor: `${props.colorArray[index]}`, height: `${divHeight}px`, width: mobile ? '1px' : `${((width*0.8)/props.arraySize)-2}px`}}></div>
        ))}
        
    </div>)
}

const mapStateToProps = state => {
    return {
        arraySize: state.arraySize,
        array: state.array,
        colorArray: state.colorArray,
    }
}



export default connect(mapStateToProps)(FullArray)