class ApplicationController < ActionController::API
  def initialize_cart
    if session[:cart_id]
      @cart = Cart.find(session[:cart_id])
    else
      @cart = Cart.create
      session[:cart_id] = @cart.id
    end
  end

  def current_cart
    @current_cart ||= Cart.find(session[:cart_id]) if session[:cart_id]
  end
  helper_method :current_cart
end
