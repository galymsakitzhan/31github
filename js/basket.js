$(document).ready(function() {
  // Shopping Cart
  let cartItems = [];

  // Add to Cart Button Click Event
  $('.add-to-cart').click(function() {
      let productId = $(this).data('product-id');
      let product = {
          id: productId,
          name: $(this).closest('.card-body').find('.card-title').text(),
          price: 10.00,
          quantity: 1
      };

      // Check if product already exists in cart
      let existingProduct = cartItems.find(item => item.id === productId);
      if (existingProduct) {
          existingProduct.quantity++;
      } else {
          cartItems.push(product);
      }

      updateCart();
  });

  // Update Cart
  function updateCart() {
      let cartTotal = 0;
      let cartItemsHtml = '';

      cartItems.forEach(item => {
          let total = item.price * item.quantity;
          cartTotal += total;

          cartItemsHtml += `
              <tr>
                  <td>${item.name}</td>
                  <td>$${item.price.toFixed(2)}</td>
                  <td>${item.quantity}</td>
                  <td>$${total.toFixed(2)}</td>
                  <td>
                      <button class="btn btn-sm btn-danger remove-from-cart" data-product-id="${item.id}">Remove</button>
                  </td>
              </tr>
          `;
      });

      $('#cart-items').html(cartItemsHtml);
      $('#cart-total').text('$' + cartTotal.toFixed(2));

      if (cartItems.length > 0) {
          $('#shopping-cart').show();
      } else {
          $('#shopping-cart').hide();
      }
  }

  // Remove from Cart Button Click Event
  $(document).on('click', '.remove-from-cart', function() {
      let productId = $(this).data('product-id');
      cartItems = cartItems.filter(item => item.id !== productId);
      updateCart();
  });
});