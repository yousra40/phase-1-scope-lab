var customerName = "bob";

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

function setBestCustomer() {
  bestCustomer = "not bob";
}

function overwriteBestCustomer() {
  return (bestCustomer = "maybe bob");
}

const LeastFavoriteCustomer = "Some initial name";

function changeLeastFavoriteCustomer() {
  return (LeastFavoriteCustomer = "New name");
}
