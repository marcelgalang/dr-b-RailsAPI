class Api::CategoriesController < ApplicationController

  def index
    render json: Category.all.to_json(include: [:products])
  end

  def show
      render json: Category.find_by(id: params[:id]).to_json(include: [ :services ])
  end



  private

      def category_params
          params.require(:category).permit(:title, services_ids: [])
      end



end
