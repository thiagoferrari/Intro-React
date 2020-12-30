import React, { Component } from 'react'

import TechItem from './TechItem'

class TechList extends Component {
    // aqui posso usar constructor, mas usamos plugin loader no babel [+clean]
    state = { /* state É IMUTÁVEL (até nas propriedades) */
        newTech: '',
        techs: []
    }

    // exec quando componente aparece em tela
    componentDidMount() {
        //carregando array prontas em localStorage:
        const techs = localStorage.getItem('techs')

        if (techs) {
            this.setState({ techs: JSON.parse(techs) })
        }
    }

    // exec sempre que houver alterações nas props ou estado
    componentDidUpdate(_, prevState) {
        // verif. se prevState (previous State) é diferente state.techs atual (se teve update)
        if (prevState.techs !== this.state.techs) {

            // salvando array no localStorage:
            localStorage.setItem('techs', JSON.stringify(this.state.techs))
        }

    }

    // exec quando o componente deixa de existir
    componentWillMount() {

    }

    /**
     * abaixo PRECISAMOS de arrow function para ter acesso ao this (var. internas)
     */
    handleInputChange = e => {
        //setState vai setar novos valores no state
        this.setState({ newTech: e.target.value }) // target.value aqui é o valor dentro do input
    }

    /**
    * NÃO PODEMOS USAR PUSH PARA ACRENCENTAR NO STATE ! VAMOS CLONAR O STATE: SPREAD OPERATOR + NOVO VALOR
    */
    handleSubmit = e => {
        e.preventDefault()

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

    /**
     * APRENDIZADO: AS FUNÇÕES QUE VÃO MANIPULAR O STATE PRECISAM ESTAR NO MESMO ARQUIVO QUE O STATE ESTÁ,
     *  E SE PRECISAR USAR ESSA FUNÇÃO EM OUTRO COMPONENTE, PASSAR COMO PROPS. (PARÂMETROS)
     */
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