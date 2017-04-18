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

  export const updateCart=(cart)=> {

    fetch(`/api/carts/${cart.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({cart: cart})
    })
    .then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }


  export const createCart = (cart) => {
    const formattedCart = {
      product_ids: cart.addedIds,
      quantity_by_id: JSON.stringify(cart.quantityById),
    }
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
