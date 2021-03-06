import classes from "./App.module.css";
import Button from './components/Button/Button'
import Slider from './components/Slider/Slider'
import FullArray from './containers/FullArray'
import DropDown from './components/dropDown/dropDown'
import React from 'react'

const App = props => {
  return (
    <div className={classes.App}>
      <header className={classes.Header}>
        <p className={classes.Title}>Sorting Visualizer</p>
      </header>
      <Button type="Quick Sort"/>
      <Button type="Bubble Sort"/>
      <Button type="Insertion Sort"/>
      <Button type="Selection Sort"/>
      <div style={{display: 'block'}}>
        <Slider type="sizeChanger"/>
        <Slider type="speedChanger"/>
      </div>
      <div style={{display: 'block'}}>
        <DropDown type="arrayColor"/>
        <DropDown type="selectedColor"/>
        <DropDown type="minColor"/>
        <DropDown type="pivotColor"/>
        <DropDown type="sortedColor"/>
      </div>
      <Button type="Generate New Array"/>
      <Button type="Sort!"/>
      <FullArray/>
    </div>
  );
}


export default App;
