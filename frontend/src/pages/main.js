import React from 'react';

export default function Main({ match }) {
    console.log('FODASEEEEEEE')
    return <h1>{match.params.id}</h1>
}