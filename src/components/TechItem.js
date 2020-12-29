import React from 'react'

// como aqui dentro não vou ter uma var STATE, não preciso de criar o componente dentro de uma class

function TechItem({ tech, onDelete }) { // pegando props.
    return (
        <li>
            {tech}
            <button onClick={onDelete} type='button' >Remover</button>
        </li>
    )
}

export default TechItem