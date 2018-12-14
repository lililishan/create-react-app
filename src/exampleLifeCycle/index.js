import React from "react"

const name = '生命周期实例~~~'
class ExampleLifeCycle extends React.PureComponent {
    state = {
        opacity :1,
    }
    componentDidMount = () => {
        setInterval(() => {
            let opacity = this.state.opacity
            opacity -= .05
            if(opacity < 0.1) {
                opacity = 1
            }
            this.setState( {opacity : opacity})
        }, 100)
        
    }
    render() {
        return (
            <div >
                <h1 style={{opacity: this.state.opacity}}>{name}</h1>
            </div>
        )
    }
}

export default ExampleLifeCycle

