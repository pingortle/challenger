class ChallengesController < ApplicationController
  def index
    @resources = Challenge.all
  end

  def show
    @resource = Challenge.find(params[:id])
  end

  def new
    @resource = Challenge.new
  end

  def create
    Challenge.create! params.require(:challenge).permit(:title)
    redirect_to challenges_path
  end
end
