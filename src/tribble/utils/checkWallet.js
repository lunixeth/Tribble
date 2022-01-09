import React, { useState, useEffect } from 'react'

const checkWallet = () => {
    const [ wallet, setWallet ] = useState();
    useEffect(()=> {
        // Use cookies to check for a wallet,
        // If wallet is found then setWallet as JWT privateKey
        console.log('No wallet was found..')
    }, [])
    return (
        <div>
            
        </div>
    )
}

export default checkWallet
