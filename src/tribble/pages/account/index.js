import React, { useState, useEffect } from 'react'
import { setCookies, getCookie, getCookies, checkCookies } from 'cookies-next';
import jsonwebtoken from "jsonwebtoken"
import Router from 'next/router'
import { ethers } from 'ethers';

const index = () => {
    const [ wallet, setWallet ] = useState();
    const [ address, setAddress ] = useState();
    const [ balance, setBalance ] = useState();
    useEffect(()=> {
        const checker = async () => {
            const pKey = await getCookie('pKey');
            if (!pKey) {
                Router.push('/')
            } else {
                const token = await jsonwebtoken.verify(pKey, '39D89D8N28DN29HD28HD2983HDH');
                setWallet(token.pKey)
                console.log(pKey)
            }
        }
        const connectToEthers = async () => {
            const url = "https://eth-mainnet.alchemyapi.io/v2/aw_ATN5yoZ578XsQUVEhaevmchG9e_iT";
            const connection = new ethers.getDefaultProvider('ropsten');
            const wallet = new ethers.Wallet("0xa20ebe7abaa90b8df996edd2ed3e3dddbc673546dc9d456708cde41afcce50f6")
            const signer = wallet.connect(connection);
            const address = await signer.getAddress();
            setAddress(address)
            const balance = await signer.getBalance();
            const final_balance = await ethers.utils.formatEther(balance);
            setBalance(final_balance)
            console.log(address);
        }
        // console.log(checker)
        checker();
        connectToEthers();
    }, [])
    return (
        <div>
            <h3>Your Address is : {address}</h3>
            {JSON.stringify(wallet)}
            <h3>Your Balance is : {JSON.stringify(balance)} ETH</h3>
        </div>
    )
}

export default index
