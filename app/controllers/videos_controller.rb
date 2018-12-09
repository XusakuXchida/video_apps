class VideosController < ApplicationController
  def index
    @videos = Video.all

    # respond_to do |format|
    #   format.html
    #   format.js
    # end
  end

  def create
    video = Video.new
    video.code = params[:htmlcode]
    video.save
    # redirect_to action: "index"
  end

  def destroy
    video = Video.find(params[:id])
    video.destroy
    render json: { video: @video }
    # redirect_to action: "index"
  end
end
