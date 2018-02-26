import React from 'react'
import { Link } from 'react-router-dom'

export const Score = ({score}) => (
    <div className={'score'}>
        <p>Score: {score}</p>
        <p>
            <Link to = {''}>
                end game
            </Link>
        </p>
    </div>
)