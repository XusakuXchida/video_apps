class VideosController < ApplicationController
  def index
    @videos = Video.all
    @video = nil
    # respond_to do |format|
    #   format.html
    #   format.js
    # end
  end

  def create
    @video = Video.new
    url = params[:htmlcode] #https://www.youtube.com/watch?v=ZQ51WJybK2k
    url = url.match(/https:\/\/www.youtube.com\/watch\?v=(.+)/)
    vid = url[1][0..10]

    # <iframe width="560" height="315" src="https://www.youtube.com/embed/ZQ51WJybK2k" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    htmlcode = "<iframe width='560' height='315' src='https://www.youtube.com/embed/#{vid}'
     frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>"
    @video.code = htmlcode
    # @video.code = params[:htmlcode]
    @video.save
    render :index
    # redirect_to action: "index"
  end

  def destroy
    video = Video.find(params[:id])
    video.destroy
    render json: { video: @video }
    # redirect_to action: "index"
  end
end
