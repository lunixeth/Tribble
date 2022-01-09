import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React, { useState, useEffect } from 'react' 
import {ethers} from 'ethers'
import checkWallet from '../utils/checkWallet'

export default function Home() {  
  checkWallet();
  const [ wallet, setWallet ] = useState();
  const [ mnemonic, setMnemonic ] = useState();
  const createwallet = async () => {
    const createWallet = await ethers.Wallet.createRandom();
    console.log(createWallet, createWallet.mnemonic)
    setWallet(createWallet)
    setMnemonic(createWallet.mnemonic)
  }
  return (
    <div>
      <button onClick={createwallet}>Create Wallet</button>
      {JSON.stringify(wallet)}
      {JSON.stringify(mnemonic)}
    </div>
  )
}
