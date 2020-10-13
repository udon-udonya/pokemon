class PokemonsController < ApplicationController
  def new
    return if params[:search].blank?
    raw_response = Faraday.get "https://pokeapi.co/api/v2/pokemon/#{params[:search]}"
    if raw_response.status == 200
      @response = JSON.parse(raw_response.body)
    else
      redirect_to new_pokemon_path, notice: "#{raw_response.status}エラー！"
    end
  end
end
