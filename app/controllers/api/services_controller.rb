class Api::ServicesController < ApplicationController

  def index
    render json: Service.all.to_json(include: [:categories])
  end

end
