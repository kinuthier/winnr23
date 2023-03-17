import React from 'react'
import {
    StarIcon,
    CurrencyDollarIcon,
    ArrowPathIcon,
    ArrowUturnDownIcon,
} from '@heroicons/react/24/solid'
import { 
    useContract,
    useContractRead,
    useContractWrite, 
 } from '@thirdweb-dev/react'
import { ethers } from 'ethers';
import { currency } from '../Constant';
import toast from 'react-hot-toast';

function AdminControls() {
    const { contract, isLoading } = useContract(
        "0x8F5A1857d5Adceda80468B66ccE568f6e7C94B46"
    );

    const { data: totalCommission } = useContractRead (
        contract,
        "operatorTotalCommission"
    )

    const { mutateAsync:DrawWinnerTicket } = useContractWrite(
        contract,
        "DrawWinnerTicket"
    )

    const {mutateAsync: RefundAll } = useContractWrite( contract, "RefundAll") 

    const {mutateAsync: restartDraw } = useContractWrite( contract, "restartDraw") 

    const {mutateAsync: WithdrawCommission } = useContractWrite( contract, "WithdrawCommission")

    const DrawWinner =async () => {
        const notification = toast.loading("Picking a lucky winner...");

        try {
            const data = await DrawWinnerTicket([{}])

            toast.success("A winner has been selected!", {
                id: notification,
            });
            console.info("contract call success", data);
        } catch (err) {
            toast.error("Whoops something went wrong!",{
                id:notification,
            })

            console.error("contract call failure", err);
        }
    }

    const onWithdrawCommission =async () => {
        const notification = toast.loading("Withdrawing commission...");

        try {
            const data = await WithdrawCommission([{}])

            toast.success("Your Bag has been secured successfully G!", {
                id: notification,
            });
            console.info("contract call success", data);
        } catch (err) {
            toast.error("Dang, something went wrong!",{
                id:notification,
            })

            console.error("contract call failure", err);
        }
    }

    
    const onRestartDraw =async () => {
        const notification = toast.loading("Restarting Draw...");

        try {
            const data = await restartDraw([{}])

            toast.success("Draw restarted successfully!", {
                id: notification,
            });
            console.info("contract call success", data);
        } catch (err) {
            toast.error("Dang, something went wrong!",{
                id:notification,
            })

            console.error("contract call failure", err);
        }
    }

    const onRefundAll =async () => {
        const notification = toast.loading("Refunding All...");

        try {
            const data = await RefundAll([{}])

            toast.success("All refunded successfully!", {
                id: notification,
            });
            console.info("contract call success", data);
        } catch (err) {
            toast.error("Whoops, something went wrong!",{
                id:notification,
            })

            console.error("contract call failure", err);
        }
    }

  return (
    <div className='text-white text-center px-5 py-3 rounded-md border-yellow-400'>
      <h2 className='font-bold'>CoreCS Admin Controls</h2>
      <p className='mb-5'>Commission Bag made: {""}
      {totalCommission &&
         ethers.utils.formatEther(totalCommission?.toString())
        } {""}
      {currency}
      </p>

      <div className='flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2'>
        <button onClick={DrawWinner} className='admin-button'>
            <StarIcon className='h-6 mx-auto mb-2'/>
            Draw Winner
        </button>
        <button onClick={onWithdrawCommission} className='admin-button'>
            <CurrencyDollarIcon className='h-6 mx-auto mb-2'/>
            Withdraw Commission
        </button>
        <button onClick={onRestartDraw} className='admin-button'>
            <ArrowPathIcon className='h-6 mx-auto mb-2'/>
            Restart Draw
        </button>
        <button onClick={onRefundAll} className='admin-button'>
            <ArrowUturnDownIcon className='h-6 mx-auto mb-2'/>
            Refund All
        </button>
      </div>
    </div>
  )
}

export default AdminControls
