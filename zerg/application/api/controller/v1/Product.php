<?php
namespace app\api\controller\v1;

use think\Controller;
use think\Request;
use app\api\validate\Count;
use app\lib\exception\ProductException;
use app\api\validate\IDMustBePositiveInt;
use app\api\model\Product as Product_model;

class Product extends Controller{

	public function getRecent($count=15){
		(new Count())->goCheck();
		$products = Product_model::getMostProduct($count);
		if($products->isEmpty()){
			throw new ProductException();
		}
		$products = $products->hidden(['summary']);
		return $products;
	}

	public function getALLByCategoryID($id){
		(new IDMustBePositiveInt())->goCheck();
		$products = Product_model::getProductsByCategoryID($id);
		if($products->isEmpty()){
			throw new ProductException();
		}
		$products = $products->hidden(['summary']);
		return $products;
	}

	public function getOne($id){
		(new IDMustBePositiveInt())->goCheck();
		$product = Product_model::getProductDetailByID($id);
		if($product->isEmpty()){
			throw new ProductException();
		}
		$product = $product->hidden(['summary']);
		return $product;
	}
}