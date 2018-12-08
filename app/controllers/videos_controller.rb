class VideosController < ApplicationController
  def index
    @videos = Video.all
  end

  def create
    video = Video.new
    video.code = params[:htmlcode]
    video.save
    redirect_to action: "index"
  end

  def destroy
    @code = Video.find(params[:id])
    @code.destroy
    redirect_to action: "index"
  end
end
