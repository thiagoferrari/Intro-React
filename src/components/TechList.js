import React, { Component } from 'react'

import TechItem from './TechItem'

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

    /**
     * REMOVENDO ITENS DA LISTA:
     */
    handleDelete = (tech) => {
        /* veja que o próprio filter vai deletar 
        (ele não retorna o item que foi clicado [innerHTML capturado]) */

        this.setState({ techs: this.state.techs.filter(t => t !== tech) })
    }

    render() {
        console.log('techs :>> ', this.state.techs);
        return (
            <form onSubmit={this.handleSubmit}>

                <ul>
                    {this.state.techs.map(tech => (
                        // aqui vamos criar um componente para mostrar os itens:
                        <TechItem // abaixo passamos props. ao componente (params. a função)
                            key={tech}
                            tech={tech}
                            onDelete={() => this.handleDelete(tech)}
                        />
                    ))}
                    <TechItem />

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

/**
 * APRENDIZADO: AS FUNÇÕES QUE VÃO MANIPULAR O STATE PRECISAM ESTAR NO MESMO ARQUIVO QUE O STATE ESTÁ,
 *  E SE PRECISAR USAR ESSA FUNÇÃO EM OUTRO COMPONENTE, PASSAR COMO PROPS. (PARÂMETROS)
 */

export default TechList