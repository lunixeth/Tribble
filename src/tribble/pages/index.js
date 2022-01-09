import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React, { useState, useEffect } from 'react' 
import {ethers} from 'ethers'
import checkWallet from '../utils/checkWallet'
import jsonwebtoken from 'jsonwebtoken';
import { setCookies, getCookie, getCookies, checkCookies } from 'cookies-next';


export default function Home() {  
  checkWallet();
  const [ wallet, setWallet ] = useState();
  const [ privateKey, setPrivateKey ] = useState();
  const [ mnemonic, setMnemonic ] = useState();
  const createwallet = async () => {
    const createWallet = await ethers.Wallet.createRandom();
    console.log(createWallet, createWallet.mnemonic)
    setWallet(createWallet)
    setMnemonic(createWallet.mnemonic)
    const token = jsonwebtoken.sign({pKey: createWallet.privateKey}, '39D89D8N28DN29HD28HD2983HDH')
    console.log(token);
    setCookies('pKey', token)
    setPrivateKey(createWallet.privateKey)
  }
  return (
    <div>
      <button onClick={createwallet}>Create Wallet</button>
      {JSON.stringify(wallet)}
      {JSON.stringify(mnemonic)}
      {JSON.stringify(privateKey)}
    </div>
  )
}
