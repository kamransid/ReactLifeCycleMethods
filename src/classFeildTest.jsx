import React from 'react'

export default class Test extends React.Component{
    x = 10
    constructor(){
        super()
        console.log(`This is called with ${this.x}`)
    }
    render(){
        return(
            <div>Hi I am here</div>
        )
    }
}
