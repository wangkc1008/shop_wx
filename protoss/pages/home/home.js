// pages/home/home.js
import {Home} from 'home-model.js'
var home = new Home();

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  onLoad:function(){
    this._loadData();
  },
  //私有方法
  _loadData:function(){
    var id = 1;
    home.getBannerData(id,this.callBackBanner);
    home.getThemeData(this.callBackTheme);
    home.getRecentProducts(this.callBackRecent);
  },
  /*跳转到商品详情*/
  onProductsItemTap: function (event) {
    var id = home.getDataSet(event, 'id');
    wx.navigateTo({
      url: '../product/product?id=' + id
    })
  },

  /*跳转到主题列表*/
  onThemesItemTap: function (event) {
    var id = home.getDataSet(event, 'id');
    var name = home.getDataSet(event, 'name');
    wx.navigateTo({
      url: '../theme/theme?id=' + id + '&name=' + name
    })
  },
  callBackBanner:function(res){
    console.log(res);
    this.setData({
      'bannerArr':res
    });
  },
  callBackTheme: function (res) {
    console.log(res);
    this.setData({
      'themeArr': res
    });
  },
  callBackRecent: function (res) {
    console.log(res);
    this.setData({
      'productsArr': res
    });
  }
})