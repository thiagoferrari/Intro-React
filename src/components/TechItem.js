import React from 'react'
import PropTypes from 'prop-types'

// como aqui dentro não vou ter uma var STATE, não preciso de criar o componente dentro de uma class

function TechItem({ tech, onDelete }) { // pegando props.
    return (
        <li>
            {tech}
            <button onClick={onDelete} type='button' >Remover</button>
        </li>
    )
}

// setando valor padrão do prop. tech, caso não seja info.
TechItem.defaultProps = {
    tech: 'Oculto'
}


// validando se o prop. está de acordo com seu tipo:
TechItem.PropTypes = {
    tech: PropTypes.string,
    onDelete: PropTypes.func.isRequired,
}

export default TechItem