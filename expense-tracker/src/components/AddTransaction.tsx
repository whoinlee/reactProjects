import React, { useState, useContext } from 'react';
//-- Contexts
import { GlobalContext } from '../contexts/GlobalState';
//-- Types
import { TransactionType } from '../datatypes/DataTypes';
//-- Styles
import '../styles/AddTransaction.css';


const AddTransaction = () => {
    const [text, setText ]= useState('');
    const [amount, setAmount]= useState(0);
    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = (e:React.FormEvent) => {
      e.preventDefault();
      
      const newTransaction:TransactionType = {
        id: Math.floor(Math.random() * 100000000),
        text,
        amount: +amount
      }
  
      addTransaction(newTransaction);
    }

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" value={text} placeholder="Enter text..." 
                 onChange={ e => setText(e.target.value) }/>
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input type="number" value={amount} placeholder="Enter amount..." 
                 onChange={ e => setAmount(Number(e.target.value)) }/>
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  )
}

export default AddTransaction