import React from 'react'

export default class Test extends React.Component{
    x = 10
    constructor(){
        super()
        this.state = {
            visible : true
        }
        console.log(`This is called with ${this.x}`)
    }

    static getDerivedStateFromProps(){
        console.log('Hi i am in getDerivedStateFromProps')
    }

    static componentDidMount(){
        console.log('I am in componentDidMount')
    }


    handle(){
        this.setState({
            visible:false
        })
    }
    render(){
        console.log('I am in render')
        return(
             
             <div onClick={this.handle.bind(this)}>Hi I am here {console.log('I am in render return last line !!!!')}</div>
        )
    }
}
