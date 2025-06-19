let balance = 0;
let income = 0;
let expenses = 0;
const transactions = [];

document.getElementById("add-transaction").addEventListener("click", () => {
  const desc = document.getElementById("description").value;
  const amt = parseFloat(document.getElementById("amount").value);

  if (!desc || isNaN(amt)) return alert("Enter valid description and amount");

  const transaction = { desc, amt };
  transactions.push(transaction);
  updateUI();
});

function updateUI() {
  const list = document.getElementById("transaction-list");
  list.innerHTML = "";

  balance = 0;
  income = 0;
  expenses = 0;

  transactions.forEach(t => {
    const li = document.createElement("li");
    li.textContent = `${t.desc}: $${t.amt.toFixed(2)}`;
    li.className = t.amt >= 0 ? "income" : "expense";
    list.appendChild(li);

    balance += t.amt;
    if (t.amt >= 0) income += t.amt;
    else expenses += t.amt;
  });

  document.getElementById("balance").textContent = balance.toFixed(2);
  document.getElementById("income").textContent = income.toFixed(2);
  document.getElementById("expenses").textContent = Math.abs(expenses).toFixed(2);
}