class Api::ProductsController < ApplicationController

  def index
    render json: Product.all.to_json
  end

  def show

      render json: Product.find_by(id: params[:id]).to_json
  end

  def create
      product = Product.create(product_params)
      if product.save
          render json: { id: product.id, success: 'ok' }
      else
          render json: { message: 'error' }, status: 412
      end
  end

  def destroy
      product = Product.find_by(id: params[:id])
      if product.delete
          render json: { sucess: 'ok' }
      else
          render json: { message: 'error' }, status: 412
      end
  end

  private

      def product_params
          params.require(:product).permit(:title, :description, :price, :quantity, :category_id)
      end



end
