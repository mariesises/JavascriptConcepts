// Amazon shopping 
const user = {
    name: 'Kevin',
    active: true,
    cart: [],
    purchases: []
}

let amazonHistory = []
const compose = (f, g) => (...args) => f(g(...args));
purchaseItem(
    addItemToCart,
    applyTaxToItems,
    buyItem,
    emptyUserCart
)(user, { name: 'laptop', price: 200 });

function purchaseItem(...fns) {
    return fns.reduce(compose)
}

function addItemToCart(user, item) {
    amazonHistory.push(user);
    const updateCart = user.cart.concat(item)
    return Object.assign({}, user, { cart: updateCart })
}

function applyTaxToItems(user) {
    amazonHistory.push(user);
    const { cart } = user;
    const taxRate = 1.3;
    const updatedCart = cart.map(item => {
        return {
            name: item.name,
            price: item.price * taxRate
        }
    })
    return Object.assign({}, user, { cart: updatedCart })
}
function buyItem(user) {
    amazonHistory.push(user);
    return Object.assign({}, user, { purchases: user.cart })
}
function emptyUserCart(user) {
    amazonHistory.push(user);
    return Object.assign({}, user, { cart: [] })
}

console.log(user)
console.log(amazonHistory)

//Implement a cart feature:
// 1. Add items to cart.
// 2. Add 3% tax to item in cart
// 3. Buy item: cart --> purchases
// 4. Empty cart

//Bonus:
// accept refunds.
// Track user history.
//
const user2 = {
    name: 'Kim',
    active: true,
    cart: [],
    purchases: []
  }
  const history1 = [];
  const compose2 = (f, g) => (...args) => f(g(...args))
  const pipe = (f, g) => (...args) => g(f(...args))
  const purchaseItem  = (...fns) => fns.reduce(compose2);
  const purchaseItem2  = (...fns) => fns.reduce(pipe);
  purchaseItem2(
    addItemToCart,
    applyTaxToItems,
    buyItem,
    emptyUserCart,
  )(user2, {name: 'laptop', price: 60})
  // purchaseItem(
  //   emptyUserCart,
  //   buyItem,
  //   applyTaxToItems,
  //   addItemToCart
  // )(user, {name: 'laptop', price: 50})
  function addItemToCart(user2, item) {
    history1.push(user2)
    const updatedCart = user2.cart.concat(item)
    return Object.assign({}, user2, {cart: updatedCart});
  }
  
  function applyTaxToItems(user2) {
    history1.push(user2)
    const {cart} = user2;
    const taxRate = 1.3;
    const updatedCart = cart.map(item => {
      return {
        name: item.name,
        price: item.price*taxRate
      }
    })
    return Object.assign({}, user2, { cart: updatedCart });
  }
  
  function buyItem(user2) {
    history1.push(user2)
    const itemsInCart = user2.cart;
    return Object.assign({}, user2, { purchases: itemsInCart });
  }
  function emptyUserCart(user2) {
    history1.push(user2)
    return Object.assign({}, user2, { cart: [] });
  }
  
  function refundItem() {
  
  }
  
  function getUserState() {
  
  }
  
  function goBack() {
  
  }
  
  function goForward() {
  
  }

  console.log(history1)