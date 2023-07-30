
let cartData = JSON.parse(localStorage['cart']||'[]');

export const renderCart = () => {
  $('#listProdcts').empty(); 
  // gatLocal()
  cartData.forEach(({ product, quantity}) => {
    const cartItem = getItemTemplate(product, quantity)
    $('#listProdcts').append(cartItem);
  });
  $('#idCount').html(cartData.length);
  if (cartData.length > 0) {
    $('.count').css('display', 'flex');
  } else {
    $('.count').css('display', 'none');
  }
  viewEvents();
}

const getItemTemplate = (product, quantity) =>
  `<div class="border cartProdcuts p-2 d-flex justify-content-between">
    <div>
      ${product.name}
      <i class="fa fa-trash remove-item" data-id="${product.id}"></i>
      <div class="d-flex">
        <button class="btn-dark plus-btn" data-id="${product.id}">+</button>
        <input type="number" min="1" value="${quantity}" class="cart-quantity-input">
        <button class="btn-dark minus-btn" data-id="${product.id}">-</button><br>
      </div>
    </div>
    <img src="${product.img}" class="product-image w-25">
  </div>`;

export const addToCart = (product, quantity) => {
  const existingProduct = cartData.find(item => item.product.id == product.id);
  if (existingProduct) {
    existingProduct.quantity += quantity;
  } else {
    cartData.push({ product, quantity });
  }
  renderCart();
  saveCartToLocalStorage();
};

const viewEvents = () => {
  $('.plus-btn').off('click').on('click', e => changeQuantity(e, 1)); 
  $('.minus-btn').off('click').on('click', e =>  changeQuantity(e, -1));
  $('.remove-item').off('click').on('click', removeItem);
  $('#cartIcon').off('click').on('click', () => $('#cartModal').css('display', 'flex'));
  $('#checkoutButton').off('click').on('click', () => $('#cartModal').css('display', 'none'));
}

const removeItem = (e)=> {
  const id = $(e.target).data("id");
  const index = cartData.findIndex(item => item.product.id == id);
  cartData.splice(index, 1);
  renderCart();
}

const changeQuantity = (e, quantity) => {
  const id = $(e.target).data("id");
  const cartItem = cartData.find(item => item.product.id == id);
  if(!(cartItem.quantity + quantity))
    return;
  cartItem.quantity += quantity;
  renderCart();
}

const saveCartToLocalStorage = () => {
  localStorage.setItem("cart" ,JSON.stringify(cartData))
}
