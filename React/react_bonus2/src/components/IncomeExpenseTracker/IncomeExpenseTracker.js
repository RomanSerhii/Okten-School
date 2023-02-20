import React, { useState } from "react";

function IncomeExpenseTracker() {
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  const handleIncomeChange = (e) => {
    setIncome(Number(e.target.value));
  };

  const handleExpenseChange = (e) => {
    setExpense(Number(e.target.value));
  };

  const balance = income - expense;

  return (
    <div>
      <h2>Income Expense Tracker</h2>
      <div>
        <label htmlFor="income">Income:</label>
        <input type="number" id="income" onChange={handleIncomeChange} />
      </div>
      <div>
        <label htmlFor="expense">Expense:</label>
        <input type="number" id="expense" onChange={handleExpenseChange} />
      </div>
      <div>
        <p>Balance: {balance}</p>
      </div>
    </div>
  );
}

export default IncomeExpenseTracker;
