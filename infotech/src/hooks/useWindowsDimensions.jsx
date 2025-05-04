import React from "react";
import { useState, useEffect } from "react";

const getWindowsDimensions = (returnOnlyWidth, returnOnlyHeight) => {

    //windows is the global browser object that represents the windows/tab
    const width = window.innerWidth;
    const height = window.innerHeight

    //Returning a object with width and height  
    if(returnOnlyWidth == true)
    {
        return { width }
    }
    else if(returnOnlyHeight == true)
    {
        return { height }
    }
    else{
        return {
            width,
            height
        }
    }
}

/*
    EXPLANATION OF debounce FUNCTION
What is debounce?
    Well debounce is a technique that used to limit the number of functions is executed(Called) over time,
    tipically in reponse to user actions line typing or resizing a window. It ensures that the function dosent run too frequently
    by only executing it after a certain amount of time.

Code:
    Arguments:
        fn: fn is the function that you want to execute. 
        delay: The amount of time(in milliseconds) that the function shoud wait before executing after the last call
    
    Body of Function:
        timeoutId: This a variable to store the Id of the timer set by setTimeout(). 
        The setTimeout() function return a id why? because if you want to cancel the timeout before it runs you need to have the id
        Example: clearTimeout(timeoutId); This cancels the scheduled function from running.
        Other Example: 
            const timeoutId = setTimeout(() => {
                console.log("You won't see this!");
            }, 5000);
            clearTimeout(timeoutId); // Cancels it

        args: args is a array that collects all the arguments passed to the function when it is invoked.
        ... (spread/rest): is a syntax that allows you to collect all arguments passed into the function into an array.
        Example:
            function printAll(...args) {
                console.log("You passed:", args);
            }
            printAll("apple", "banana", "cherry");
            Output: You passed: [ 'apple', 'banana', 'cherry' ]

        You might be asking how does clearing a time out if we are not passing the id in the arguments...Closure

        What is Closure in js:
            A closure is a feature in JavaScript where an inner function "remembers" variables from its outer function, even after the outer function has finished executing.
*/

const debounce = (fn, delay) => {
    let timeoutId;
    return (...args) => {
        clearTimeout(timeoutId)
        timeoutId = setTimeout(() => fn(...args), delay);
    }
}

const useWindowDimensions = (returnOnlyWidth=false, returnOnlyHeight=false) => {
    const [windowDimensions, setWindowDimensions] = useState(getWindowsDimensions(returnOnlyWidth, returnOnlyHeight))

    useEffect(() => {
        //Set the new widht and height everty time the handleResize Function is call
        const handleResize = debounce(() => {
            setWindowDimensions(getWindowsDimensions());
        }, 150);

        //When the windows resizes then we are going to called the handleResize function to resize the window widht and height
        window.addEventListener('resize',handleResize)
        
        //This will remove the event listener when the component unmoints or the effect re-runs
        //And will also cause memory leaks
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return windowDimensions;
}

export default useWindowDimensions;