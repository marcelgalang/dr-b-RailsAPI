class Api::ProductsController < ApplicationController

  def index
    render json: Product.order(:category_id).to_json(include: [ :category ])
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

  def update
    product = Product.find_by(id: params[:id])
    product.update(product_params)
    render json: product

  end

  def destroy
      product = Product.find_by(id: params[:id])
      product.update_attributes(product_params)
      respond_with prodcut, json: product
  end

  private

      def product_params
          params.require(:product).permit(:title, :description, :price, :inventory, :category_id, :id)
      end



end
