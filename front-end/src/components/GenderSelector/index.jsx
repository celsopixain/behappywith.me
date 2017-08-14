import React from 'react'
import './index.css'
import GenderButton from '../GenderButton'

export default function GenderSelector(props) {
    const masculino = props.genero==='m';
    const feminino = props.genero==='f';

    return (
        <div
            className={
                props.valorInvalido ?
                'gender-selector gender-selector-invalido' :
                'gender-selector'
            }
        >
            <GenderButton
                selecionado={masculino}
                codigo={0}
                genero={'m'}
                atualizarGenero={props.atualizarGenero}
            />
            <GenderButton
                selecionado={feminino}
                codigo={0}
                genero={'f'}
                atualizarGenero={props.atualizarGenero}
            />
        </div>
    )
}