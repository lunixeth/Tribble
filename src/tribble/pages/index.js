import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React, { useState, useEffect } from 'react' 
import {ethers} from 'ethers'

export default function Home() {  
  const createwallet = async () => {
    const createWallet = await ethers.Wallet.createRandom();
    console.log(createWallet, createWallet.mnemonic)
  }
  return (
    <div>
      <button onClick={createwallet}>Create Wallet</button>
    </div>
  )
}
