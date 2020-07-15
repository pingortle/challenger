class ChallengesController < ApplicationController
  def new
    @resource = Challenge.new
  end

  def create
    Challenge.create! params.require(:challenge).permit(:title)
    redirect_back fallback_location: root_path
  end
end
