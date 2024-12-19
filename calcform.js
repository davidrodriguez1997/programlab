// Function to calculate total price for each plate type
function calculateTotal() {
  const unit_price = {
    '45lbs': 50, // price per 45 lbs plate
    '35lbs': 40, // price per 35 lbs plate
    '25lbs': 30, // price per 25 lbs plate
    '10lbs': 15  // price per 10 lbs plate
  };

  const item_price = {};

  item_price['45lbs'] = $("#qty_45lbs").val() * unit_price['45lbs'];
  $("#price_45lbs").val(item_price['45lbs']);

  item_price['35lbs'] = $("#qty_35lbs").val() * unit_price['35lbs'];
  $("#price_35lbs").val(item_price['35lbs']);

  item_price['25lbs'] = $("#qty_25lbs").val() * unit_price['25lbs'];
  $("#price_25lbs").val(item_price['25lbs']);

  item_price['10lbs'] = $("#qty_10lbs").val() * unit_price['10lbs'];
  $("#price_10lbs").val(item_price['10lbs']);

  const total = item_price['45lbs'] + item_price['35lbs'] + item_price['25lbs'] + item_price['10lbs'];
  $("#total_value").text(total);
}

// Function to handle purchase process
function purchaseItems() {
  const quantities = {
    '45lbs': $("#qty_45lbs").val(),
    '35lbs': $("#qty_35lbs").val(),
    '25lbs': $("#qty_25lbs").val(),
    '10lbs': $("#qty_10lbs").val()
  };

  let purchaseSummary = 'Purchase Summary:\n\n';
  let totalItems = 0;

  for (let plate in quantities) {
    const quantity = parseInt(quantities[plate]);
    if (quantity > 0) {
      purchaseSummary += `${quantity} x ${plate} Plates\n`;
      totalItems += quantity;
    }
  }

  const totalPrice = $("#total_value").text();
  
  if (totalItems > 0) {
    purchaseSummary += `\nTotal Price: $${totalPrice}`;
    alert(purchaseSummary);
  } else {
    alert("Please select at least one plate to purchase.");
  }
}

// Event listeners
$(function() {
  $(".qty").on("change keyup", calculateTotal);
  $("#purchase_button").on("click", purchaseItems);
});

