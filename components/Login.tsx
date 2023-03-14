import { useMetamask, useWalletConnect, useCoinbaseWallet } from '@thirdweb-dev/react';
import React from 'react'

function Login() {
  const connectWithMetaMask = useMetamask();
  const connectWithWalletConnect = useWalletConnect();
  const connectWithCoinbaseWallet = useCoinbaseWallet();
  return ( 
  <div className=' bg-gradient-to-r from-pink-900 to-purple-900 min-h-screen flex flex-col items-center justify-center text-center'>
    <div className='flex flex-col items-center mb-9'>
      <img 
      className='rounded-full h-36 w-36 mb-9' 
      src='https://imgur.com/c0MlhjN.png' 
      alt="" />
      <h1 className='text-5xl text-white font-bold'>Win today, Everyday.</h1>
      <h2 className='text-yellow-400 mt-6'>Get started by logging in with your wallet.</h2>
      <button 
      onClick={connectWithMetaMask} 
      className={`${'bg-white'} hover:bg-yellow-500 text-black px-8 py-5 mt-10 rounded-lg shadow-lg font-bold`}>
        Login with Metamask
      </button>
      <button 
      onClick={connectWithWalletConnect} 
      className={`${'bg-white'} hover:bg-blue-400 text-black px-8 py-5 mt-10 rounded-lg shadow-lg font-bold`}>
        Login with WalletConnect
      </button>
      <button 
      onClick={connectWithCoinbaseWallet} 
      className={`${'bg-white'} hover:bg-blue-600 text-black px-8 py-5 mt-10 rounded-lg shadow-lg font-bold`}>
        Login with CoinbaseWallet
      </button>
    </div>
  </div>
  )
}

export default Login