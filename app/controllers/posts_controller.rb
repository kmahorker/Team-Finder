class PostsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def new
  end

  def index
    @posts = Post.all
  end

  def show
    @post = Post.find(params[:id])
  end

  def update
    post = Post.find(params[:id])
    post.increment!(:upvote_count)
    # @post.update(upvote_count: @post.upvote_count)
  end

  def create
      @post = Post.new(post_params)
      @post.save
      redirect_to @post
  end

  private
    def post_params
      params.require(:post).permit(:title, :description)
    end
end
