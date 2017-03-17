class Api::ServicesController < ApplicationController

  def index
    render json: Service.all.to_json(include: [:categories])
  end

  def show
      binding.pry
      render json: Service.find_by(id: params[:id]).to_json(include: [ :categories ])
  end

  def create
      service = Service.create(service_params)
      if service.save
          render json: { id: service.id, success: 'ok' }
      else
          render json: { message: 'error' }, status: 412
      end
  end

  def destroy
      service = Service.find_by(id: params[:id])
      if service.delete
          render json: { sucess: 'ok' }
      else
          render json: { message: 'error' }, status: 412
      end
  end

  private

      def service_params
          params.require(:service).permit(:title, :description, :price, category_ids: [])
      end



end
