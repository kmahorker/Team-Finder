require 'test_helper'

class RabbitsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @rabbit = rabbits(:one)
  end

  test "should get index" do
    get rabbits_url
    assert_response :success
  end

  test "should get new" do
    get new_rabbit_url
    assert_response :success
  end

  test "should create rabbit" do
    assert_difference('Rabbit.count') do
      post rabbits_url, params: { rabbit: { age: @rabbit.age, name: @rabbit.name } }
    end

    assert_redirected_to rabbit_url(Rabbit.last)
  end

  test "should show rabbit" do
    get rabbit_url(@rabbit)
    assert_response :success
  end

  test "should get edit" do
    get edit_rabbit_url(@rabbit)
    assert_response :success
  end

  test "should update rabbit" do
    patch rabbit_url(@rabbit), params: { rabbit: { age: @rabbit.age, name: @rabbit.name } }
    assert_redirected_to rabbit_url(@rabbit)
  end

  test "should destroy rabbit" do
    assert_difference('Rabbit.count', -1) do
      delete rabbit_url(@rabbit)
    end

    assert_redirected_to rabbits_url
  end
end
