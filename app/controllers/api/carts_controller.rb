class Api::CartsController < ApplicationController
  before_filter :set_cart
  # def index
  #   render json: Cart.all.to_json(include: [:categories])
  # end

  def show
      render json: Cart.find_by(id: params[:id]).to_json
  end

  def create
      cart = Cart.create(cart_params)
      if cart.save
          render json: { id: cart.id, success: 'ok' }
      else
          render json: { message: 'error' }, status: 412
      end
  end

  def destroy
      cart = Cart.find_by(id: params[:id])
      if cart.delete
          render json: { sucess: 'ok' }
      else
          render json: { message: 'error' }, status: 412
      end
  end

  private

  def cart_params
    params.require(:cart).permit(:id)
  end

  def set_cart
    @cart = Cart.find(params[:id])
  end


end
