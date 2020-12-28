import React, { Component } from 'react'

class TechList extends Component {
    // aqui posso usar constructor, mas usamos plugin loader no babel [+clean]
    state = { /* state É IMUTÁVEL (até nas propriedades) */
        newTech: '',
        techs: ['Node.js', 'ReactJS', 'React Native']
    }


    /**
     * abaixo PRECISAMOS de arrow function para ter acesso ao this (var. internas)
     */
    handleInputChange = e => {
        //setState vai setar novos valores no state
        this.setState({ newTech: e.target.value }) // target.value aqui é o valor dentro do input
    }

    handleSubmit = e => {
        e.preventDefault()

        /**
         * NÃO PODEMOS USAR PUSH PARA ACRENCENTAR NO STATE !
         * VAMOS CLONAR O STATE: SPREAD OPERATOR + NOVO VALOR
         */
        this.setState({
            techs: [...this.state.techs, this.state.newTech],
            newTech: '' // vai voltar no html um input limpo
        })
    }

    render() {
        console.log('techs :>> ', this.state.techs);
        return ( // aqui precisamos de um container e <> é um, técnica chamada fragment
            <form onSubmit={this.handleSubmit}>
                <ul>
                    {this.state.techs.map(tech => <li key={tech}>{tech}</li>)}
                </ul>
                <input type='text'
                    onChange={this.handleInputChange}
                    value={this.state.newTech}
                />
                <button type='submit'>Enviar</button>
            </form>
        )
    }
}

export default TechList