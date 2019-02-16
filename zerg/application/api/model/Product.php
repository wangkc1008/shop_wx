<?php
namespace app\api\model;

use app\api\model\BaseModel;

class Product extends BaseModel{
	protected $hidden = [
		'create_time','update_time','pivot','delete_time','category_id','from'
	];
	public function getMainImgUrlAttr($value,$data){
		return $this->prefixImgUrl($value,$data);
	}

	public static function getMostProduct($count){
		$result = self::limit($count)->order('create_time desc')->select();
		return $result;
	}

	public static function getProductsByCategoryID($id){
		$result = self::where('category_id','=',$id)->select();
		return $result;
	}

	public static function getProductDetailByID($id){
		//闭包 传入query对象 对关联模型中的元素进行排序
		$result = self::with([
			'productImgs'=>function($query){
				$query->with(['images'])->order('order asc');
		}])
		->with(['productProperty'])->select($id);
		return $result;
	}
	//命名不加下划线
	public function productImgs(){
		//关联模型 外键 主键
		return $this->hasMany('ProductImage','product_id','id');
	}

	public function productProperty(){
		//关联模型 外键 主键
		return $this->hasMany('ProductProperty','product_id','id');
	}
}