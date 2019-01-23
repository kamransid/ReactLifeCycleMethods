import React from 'react'

export default class Test extends React.Component{
    x = 10
    constructor(){
        super()
        console.log(`This is called with ${this.x}`)
    }
    /**
     * 
     * Warning: `Test` uses `getDerivedStateFromProps` but its initial state is undefined. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `Test`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape
     * 
     */
    /**
     * 
     * Warning: Test.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.
     * 
     * 
     */
    static getDerivedStateFromProps(){
        console.log('Hi i am in getDerivedStateFromProps')
    }
    render(){
        return(
            <div>Hi I am here</div>
        )
    }
}
