// Check cookies for wallet and then setState as the JWT Encrypted privateKey of the user.


import React, { useState, useEffect } from 'react'
import { setCookies, getCookie, getCookies, checkCookies } from 'cookies-next';

const checkWallet = () => {
    const [ wallet, setWallet ] = useState();
    useEffect(()=> {
        // Use cookies to check for a wallet,
        // If wallet is found then setWallet as JWT privateKey
        const checker = async () => {
            const pKey = await getCookie('pKey');
            console.log(pKey)
        }
        // console.log(checker)
        checker();
    }, [])
    return (
        <div>
            
        </div>
    )
}

export default checkWallet
