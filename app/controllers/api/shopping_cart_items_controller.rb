class Api::ShoppingCartItemsController < ApplicationController
  def create
    @shopping_cart_item = ShoppingCartItem.new()
    unless @shopping_cart_id.save
    render json: @shopping_cart_id.errors.full_messsages, status: 422
    end
  end

  def destroy
    @shopping_cart_item = ShoppingCartItem.find_by(id: params[:id])
    if @shopping_cart.destroy
      render '/api/shopping_cart_items/show'
    else
      render json: @shopping_cart_id.errors.full_messsages, status: 422
    end
  end

  private
  def shopping_cart_item_params
    params.require(:cart_item).permit(:shopping_cart_id, :product_id, :quantity)
  end
end
