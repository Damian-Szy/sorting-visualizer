

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// functionality ideas
// dropdown to change colour of array, items looking at, and sorted subarray

const swap = async (arr, left, right, changeBarHeight) =>  {
    const temp = arr[left]
    changeBarHeight(arr[right], left)
    changeBarHeight(temp, right)
    arr[left] = arr[right]
    arr[right] = temp;
  }
  
const partition = async (arr, low, high, changeBarHeight, changeBarColor, sortSpeed, arrayColor, selectedColor, pivotColor, sortedColor) => {
    //Pick the first element as pivot
    let pivot = arr[high];
    let i = low;
    
    //Partition the array into two parts using the pivot
    for(let j = low; j < high; j++){
        changeBarColor(selectedColor, j)
        changeBarColor(pivotColor, i)
        await sleep(sortSpeed)
        if(arr[j] <= pivot){    
        await swap(arr, i, j,  (height, index) => changeBarHeight(height, index));
        changeBarColor(arrayColor, j)
        changeBarColor(arrayColor, i)
        i++;
        }
        changeBarColor(arrayColor, j)
        changeBarColor(arrayColor, i)
    }
    
    await swap(arr, i, high,  (height, index) => changeBarHeight(height, index));
    
    //Return the pivot index
    return i;
};

export const quickSort = async (array, arraySize, changeBarHeight, changeBarColor, sortSpeed, arrayColor, selectedColor, pivotColor, sortedColor) => {
    sortSpeed = 120000/(sortSpeed*arraySize)
    // speed = 100, size = 300, timeout of 4
    let localArray = [...array]
    //Stack for storing start and end index
    let stack = [];
    
    //Get the start and end index
    let start = 0;
    let end = localArray.length - 1;
    
    //Push start and end index in the stack
    stack.push({x: start, y: end});
    
    //Iterate the stack
    while(stack.length){
        //Get the start and end from the stack
        const { x, y } = stack.shift();
        
        //Partition the array along the pivot
        const PI = await partition(localArray, x, y, (height, index) => changeBarHeight(height, index), (color, index) => changeBarColor(color, index), sortSpeed, arrayColor, selectedColor, pivotColor, sortedColor);
        
        //Push sub array with less elements than pivot into the stack
        if(PI - 1 > x){
        stack.push({x: x, y: PI - 1});
        }
        
        //Push sub array with greater elements than pivot into the stack
        if(PI + 1 < y){
        stack.push({x: PI + 1, y: y});
        }
    }
    for (let i = 0; i < arraySize; i++){
        await sleep(10)
        changeBarColor(sortedColor, i)
    }
}

export const bubbleSort = async (array, arraySize, changeBarHeight, changeBarColor, sortSpeed, arrayColor, selectedColor, pivotColor, sortedColor) => {
    sortSpeed = 2500000/(sortSpeed*arraySize*arraySize)
    let localArray = [...array]
    // the array does change dynamically 
    // therefore we should make each sort a dispatch
    for (let i = 0; i<arraySize; i++){
        // setTimeout(() => {
            // isSorted optimizes in that if we loop through and its already sorted, we can stop
            let isSorted = true;
            for (let j = 0; j<arraySize-i; j++){
                changeBarColor(selectedColor, j)
                changeBarColor(selectedColor, j+1)
                await sleep(sortSpeed)
                if (localArray[j] > localArray[j+1]){
                    let temp = localArray[j]
                    let temp2 = localArray[j+1]
                    localArray[j] = temp2
                    localArray[j+1] = temp
                    await sleep(sortSpeed)
                    changeBarHeight(temp2, j)
                    changeBarHeight(temp, j+1)
                    isSorted = false;
                } 
                changeBarColor(arrayColor, j)
                changeBarColor(arrayColor, j+1)
            }
            changeBarColor(sortedColor, arraySize-1-i)
            changeBarColor(sortedColor, arraySize-i)
            if (isSorted === true){
                for (let k = 0; k < i; k++){
                    changeBarColor(sortedColor, k)
                }
                break;
            }
        // }, i*100)
    }
}

export const insertionSort = async (array, arraySize, changeBarHeight, changeBarColor, sortSpeed, arrayColor, selectedColor, pivotColor, sortedColor) => {
    sortSpeed = 8000000/(sortSpeed*arraySize*arraySize)
    let localArray = [...array]
    for (let i = 0; i < arraySize; i++) {
        changeBarColor(sortedColor, i)
        let key = localArray[i];
        let j = i - 1;
        while (j >= 0 && localArray[j] > key) {
            changeBarColor(selectedColor, j)
            await sleep(sortSpeed)
            changeBarHeight(localArray[j], j+1)
            localArray[j + 1] = localArray[j];
            changeBarColor(sortedColor, j)
            j -= 1;
        }
        changeBarHeight(key, j+1)
        localArray[j + 1] = key;
        changeBarColor(sortedColor, i)
    }
}

export const selectionSort = async (array, arraySize, changeBarHeight, changeBarColor, sortSpeed, arrayColor, selectedColor, pivotColor, sortedColor) => {
    sortSpeed = 4000000/(sortSpeed*arraySize*arraySize)
    let localArray = [...array]
    for(let i = 0; i < arraySize; i++) {
        // Finding the smallest number in the subarray
        let min = i;
        for(let j = i+1; j < arraySize; j++){
            changeBarColor(selectedColor, j)
            changeBarColor(pivotColor, min)
            await sleep(sortSpeed)
            if(localArray[j] < localArray[min]) {
                changeBarColor(arrayColor, min)
                min=j; 
            } else {
                changeBarColor(arrayColor, j)
            }
            
         }
         if (min !== i) {
             changeBarColor(selectedColor, i)
             // Swapping the elements
             await sleep(100)
             changeBarHeight(localArray[min], i);
             changeBarHeight(localArray[i], min);
             [localArray[i], localArray[min]] = [localArray[min], localArray[i]]  
         }
        changeBarColor(sortedColor,i)
        await sleep(sortSpeed)
        if (min !== i){
            changeBarColor(arrayColor,min)
        } 
    }
}