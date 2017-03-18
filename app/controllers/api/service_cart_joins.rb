class Api::ServiceCartJoins< ApplicationController
  before_action :initialize_cart, only: [:create]

  def create
    service = Service.find(params[:item_id])
    @service_cart_joins = current_cart.add_item(item.id)
    respond_to do |format|
      if @service_cart_joins.save
        render json:
      else
        redirect_to store_path
      end
    end
  end
end
