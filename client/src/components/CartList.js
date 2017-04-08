import React, {PropTypes} from 'react';

const CartList = ({carts}) => {
  return (
      <ul className="list-group">
        {carts.key.map(cart =>
          <li className="list-group-item" key={cart.id}>
            {cart.id}
          </li>
        )}
      </ul>
  );
};

CartList.propTypes = {
  carts: PropTypes.object.isRequired
};

export default CartList;
