<template>
  <div class="expense" style="width: 70%">
    <h1 class="fs-4">Expense Tracker</h1>

    <!-- balance -->
    <div class="d-flex flex-column">
      <div class="text-uppercase">your balance</div>
      <div class="fs-5">₱0.00</div>
    </div>

    <!-- income and expense -->
    <div class="inc-exp-container bg-light">
      <div>
        <h4>Income</h4>
        <p class="money plus">+₱0.00</p>
      </div>

      <div>
        <h4>Expense</h4>
        <p class="money minus">-₱0.00</p>
      </div>
    </div>

    <!-- transaction history -->
    <h5>History</h5>
    <ul class="list-group">
      <li
        class="list-group-item d-flex justify-content-between position-relative"
      >
        Paycheck <span class="badge bg-success">+₱0.00</span>
        <button class="btn btn-danger position-absolute delete-btn">X</button>
      </li>
      <li
        class="list-group-item d-flex justify-content-between position-relative"
      >
        Cash <span class="badge bg-danger">-₱0.00</span>
        <button class="btn btn-danger position-absolute delete-btn">X</button>
      </li>
    </ul>

    <!-- add transaction -->
    <div class="mt-4">
      <h5>Add new transaction</h5>
      <form>
        <div class="mb-3">
          <label for="text" class="form-label">Text</label>
          <input
            type="text"
            class="form-control"
            id="text"
            placeholder="Enter text..."
          />
        </div>
        <div class="mb-3">
          <label for="amount" class="form-label"
            >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input
            type="number"
            class="form-control"
            id="amount"
            placeholder="Enter amount..."
          />
        </div>
        <button type="submit" class="btn btn-primary">Add transaction</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.expense {
  font-family: "Lato", sans-serif;
  font-size: 16px;
  line-height: 1.5;
}

.inc-exp-container {
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  padding: 20px;
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
}

.money {
  font-size: 20px;
  letter-spacing: 1px;
  margin: 5px 0;
}

.money.plus {
  color: #2ecc71;
}

.money.minus {
  color: #c0392b;
}

.delete-btn {
  top: 0;
  right: -36px;
  visibility: hidden;
}

.list-group-item:hover .delete-btn {
  visibility: visible;
}
</style>
