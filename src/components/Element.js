import React from 'react'
import Square from './Square.js'
import styled from 'styled-components'


class Element extends React.Component {

   

    render() {
        const Div = styled.div`
        position: relative;
        width: 130px;
        height: 130px;
        display: inline-block;
        `;


    return (
            <Div className='Element'>
                <Square />
            </Div>
        )
    }
}

export default Element