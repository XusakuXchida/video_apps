class VideoController < ApplicationController
  def index
    @videos = Video.all
  end

  def create
    htmlcode = params[:htmlcode]
    @code = Video.new(code: htmlcode)
    @code.save
    redirect_to "/video"
  end
end
