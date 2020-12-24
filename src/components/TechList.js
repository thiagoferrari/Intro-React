import React, { Component } from 'react'

class TechList extends Component {
    // aqui posso usar constructor, mas usamos plugin loader no babel [+clean]
    state = {
        techs: ['Node.js', 'ReactJS', 'React Native']
    }

    render() {
        console.log('this.state :>> ', this.state);

        return (
            <ul>
                <li>Node.js</li>
                <li>ReactJS</li>
                <li>React Native</li>
            </ul>
        )
    }
}

export default TechList