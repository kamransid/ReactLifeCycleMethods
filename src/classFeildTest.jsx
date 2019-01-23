import React from 'react'

export default class Test extends React.Component{
    x = 10
    constructor(){
        super()
        console.log(`This is called with ${this.x}`)
    }
    /**
     * 
     * Warning: Test: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method
     * 
     * 
     */
    getDerivedStateFromProps(){
        console.log('Hi i am in getDerivedStateFromProps')
    }
    render(){
        return(
            <div>Hi I am here</div>
        )
    }
}
