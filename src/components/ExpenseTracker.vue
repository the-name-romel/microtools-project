<script setup>
import { computed, ref } from "vue";

const transactions = ref(
  JSON.parse(localStorage.getItem("transactions")) || []
);

const total = computed(() => {
  return transactions?.value
    .map((transaction) => transaction.amount)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);
});

const income = computed(() => {
  return transactions?.value
    .filter((transaction) => transaction.amount > 0)
    .map((transaction) => transaction.amount)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);
});

const expense = computed(() => {
  return transactions?.value
    .filter((transaction) => transaction.amount < 0)
    .map((transaction) => transaction.amount)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);
});

const text = ref("");
const amount = ref("");

const onSubmit = () => {
  if (!text.value || !amount.value) {
    alert("Please add a text and amount");
    return;
  }

  const newTransaction = {
    id: Math.floor(Math.random() * 100000000),
    text: text.value,
    amount: +amount.value,
  };

  transactions.value.push(newTransaction);

  // Store transactions in local storage
  localStorage.setItem("transactions", JSON.stringify(transactions.value));

  text.value = "";
  amount.value = "";
};

const onDelete = (id) => {
  transactions.value = transactions.value.filter((t) => t.id !== id);
  localStorage.setItem("transactions", JSON.stringify(transactions.value));
};
</script>

<template>
  <div class="expense" style="width: 70%">
    <h1 class="fs-4">Expense Tracker</h1>

    <!-- balance -->
    <div class="d-flex flex-column">
      <div class="text-uppercase">your balance</div>
      <div class="fs-5">₱{{ total }}</div>
    </div>

    <!-- income and expense -->
    <div class="inc-exp-container bg-light">
      <div>
        <h4>Income</h4>
        <p class="money plus">+₱{{ income }}</p>
      </div>

      <div>
        <h4>Expense</h4>
        <p class="money minus">₱{{ expense }}</p>
      </div>
    </div>

    <!-- transaction history -->
    <h5>History</h5>
    <div v-if="!transactions.length">No transactions yet.</div>
    <ul class="list-group">
      <li
        v-for="transaction in transactions"
        :key="transaction.id"
        class="list-group-item d-flex justify-content-between position-relative"
      >
        {{ transaction.text }}
        <span
          class="badge bg-success"
          v-bind:class="transaction.amount < 0 ? 'bg-danger' : 'bg-success'"
          >₱{{ transaction.amount }}</span
        >
        <button
          @click="onDelete(transaction.id)"
          class="btn btn-danger position-absolute delete-btn"
        >
          X
        </button>
      </li>
    </ul>

    <!-- add transaction -->
    <div class="mt-4">
      <h5>Add new transaction</h5>
      <form @submit.prevent="onSubmit">
        <div class="mb-3">
          <label for="text" class="form-label">Text</label>
          <input
            v-model="text"
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
            v-model="amount"
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
