const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// functionality ideas
// dropdown to change colour of array, items looking at, and sorted subarray
  

export const mergeSort = async (array, arraySize, changeBarHeight, changeBarColor, sortSpeed) => {}

const partition = async (arr, start, end, changeBarHeight, changeBarColor) => {
    // animations hella broke on quicksort
    // Taking the last element as the pivot
    const pivotValue = arr[end];
    let pivotIndex = start; 
    for (let i = start; i < end; i++) {
        changeBarColor('yellow', i)
        changeBarColor('red', pivotValue)
        await sleep(10)
        if (arr[i] < pivotValue) {
            // Swapping elements
            await sleep(10)
            changeBarHeight(arr[pivotIndex], i);
            changeBarHeight(arr[i], pivotIndex);
            [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
            // Moving to next element
            pivotIndex++;
        }
        changeBarColor('#ff59c7', i)
        changeBarColor('#ff59c7', pivotValue)
    }
    // Putting the pivot value in the middle
    await sleep(10)
    changeBarHeight(arr[end], pivotIndex);
    changeBarHeight(arr[pivotIndex], end);
    [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]] 
    return pivotIndex;
};

export const quickSort = async (array, arraySize, changeBarHeight, changeBarColor, sortSpeed) => {
    let localArray = [...array]
    // Creating an array that we'll use as a stack, using the push() and pop() functions
    let stack = [];
    
    // Adding the entire initial array as an "unsorted subarray"
    stack.push(0);
    stack.push(arraySize - 1);
    
    // There isn't an explicit peek() function
    // The loop repeats as long as we have unsorted subarrays
    while(stack[stack.length - 1] >= 0){
        
        // Extracting the top unsorted subarray
    	let end = stack.pop();
        let start = stack.pop();
        
        let pivotIndex = await partition(localArray, start, end, changeBarHeight, changeBarColor);
        
        // If there are unsorted elements to the "left" of the pivot,
        // we add that subarray to the stack so we can sort it later
        if (pivotIndex - 1 > start){
        	stack.push(start);
            stack.push(pivotIndex - 1);
		}
        
        // If there are unsorted elements to the "right" of the pivot,
        // we add that subarray to the stack so we can sort it later
        if (pivotIndex + 1 < end){
        	stack.push(pivotIndex + 1);
            stack.push(end);
        }
    }
}

export const heapSort = async (array, arraySize, changeBarHeight, changeBarColor, sortSpeed) => {}


export const bubbleSort = async (array, arraySize, changeBarHeight, changeBarColor, sortSpeed) => {
    sortSpeed = 200
    let localArray = [...array]
    // the array does change dynamically 
    // therefore we should make each sort a dispatch
    for (let i = 0; i<arraySize; i++){
        // setTimeout(() => {
            // isSorted optimizes in that if we loop through and its already sorted, we can stop
            let isSorted = true;
            for (let j = 0; j<arraySize; j++){
                changeBarColor('yellow', j)
                changeBarColor('yellow', j+1)
                await sleep(1/(arraySize*arraySize) * 5)
                if (localArray[j] > localArray[j+1]){
                    let temp = localArray[j]
                    let temp2 = localArray[j+1]
                    localArray[j] = temp2
                    localArray[j+1] = temp
                    await sleep(i*5)
                    changeBarHeight(temp2, j)
                    changeBarHeight(temp, j+1)
                    isSorted = false;
                }
                await sleep(i*5)
                changeBarColor('#ff59c7', j)
                changeBarColor('#ff59c7', j+1)
            }
            if (isSorted === true){
                break;
            }
        // }, i*100)
    }
}

export const insertionSort = async (array, arraySize, changeBarHeight, changeBarColor, sortSpeed) => {
    let localArray = [...array]
    for (let i = 1; i < arraySize; i++) {
        changeBarColor('red', i)
        let key = localArray[i];
        let j = i - 1;
        while (j >= 0 && localArray[j] > key) {
            changeBarColor('yellow', j)
            await sleep(100)
            changeBarHeight(localArray[j], j+1)
            localArray[j + 1] = localArray[j];
            changeBarColor('red', j)
            j -= 1;
            await sleep(100)
        }
        changeBarHeight(key, j+1)
        localArray[j + 1] = key;
        changeBarColor('red', i)
    }
}

export const selectionSort = async (array, arraySize, changeBarHeight, changeBarColor, sortSpeed, arrayColor, selectedColor, pivotColor, sortedColor) => {
    let localArray = [...array]
    for(let i = 0; i < arraySize; i++) {
        // Finding the smallest number in the subarray
        let min = i;
        for(let j = i+1; j < arraySize; j++){
            changeBarColor(selectedColor, j)
            changeBarColor(pivotColor, min)
            await sleep(100)
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
             await sleep(100)
         }
        changeBarColor(sortedColor,i)
        if (min !== i){
            changeBarColor(arrayColor,min)
        } 
    }
}

export const bucketSort = async (array, arraySize, changeBarHeight, changeBarColor, sortSpeed) => {

}