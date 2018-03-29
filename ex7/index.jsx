import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Member from './member'


ReactDOM.render(
    <Family lastName='Souto'>
        <Member name='Júnior' />
        <Member name='Marcos' />
    </Family>,
    document.getElementById('app')
)