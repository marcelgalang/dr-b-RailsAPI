import { loadCartsSuccess } from '../modules/Carts'


  const requestHeaders = () => {
    return {
      'Content-Type': 'application/json',
    }
  }

  export const getAllCarts =() => dispatch => {

    fetch(`/api/carts`)
    .then(response => response.json())
    .then(carts => {
      dispatch(loadCartsSuccess(carts))
    })
    .catch(error => {
      return error;
      });
    }

  const updateCart=(cart)=> {
    const headers = Object.assign({'Content-Type': 'applicartion/json'}, this.requestHeaders());
    const request = new Request(`/api/carts/${cart.id}`, {
      method: 'PUT',
      headers: headers,
      body: JSON.stringify({cart: cart})
    });


    return fetch(request).then(response => {
      return response.json();
    }).cartch(error => {
      return error;
    });
  }


  export const createCart = (cart) => {
    const formattedCart = {
      product_ids: cart.addedIds,
      quantity_by_id: JSON.stringify(cart.quantityById),
    }

    console.log(cart)
    console.log(formattedCart)
    console.log(JSON.parse(formattedCart.quantity_by_id))

    fetch(`/api/carts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({cart: formattedCart})
    })
    .then(response =>  response.json()
    ).catch(error => {
      return error;
    });
  }

  const deletecart = (cart) => {
    const headers = Object.assign({'Content-Type': 'application/json'}, this.requestHeaders());
    const request = new Request(`/api/carts/${cart.id}`, {
      method: 'DELETE',
      headers: headers
    });

    return fetch(request).then(response => {
      return response.json();
    }).cartch(error => {
      return error;
    });
  }
