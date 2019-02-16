import {Base} from '../../utils/base.js';
class Home extends Base{

  constructor(){
    super();
  }
  getBannerData(id,callBack){
    var params = {
      url: 'banner/' + id,
      sCallBack:function(res){
        callBack && callBack(res[0].items);
      }
    }
      
    this.request(params);
    // wx.request({
    //   url: 'http://www.tp5.cn/api/v1/banner/' + id,
    //   method:'GET',
    //   success:function(res){
    //     // console.log(res);
    //     callBack(res);
    //   }
    // })
  }
  getThemeData(callBack) {
    var params = {
      url: 'theme?ids=1,2,3',
      sCallBack: function (res) {
        callBack && callBack(res);
      }
    }

    this.request(params);
  }
  getRecentProducts(callBack) {
    var params = {
      url: 'product/recent/',
      sCallBack: function (res) {
        callBack && callBack(res);
      }
    }

    this.request(params);
  }
}
export {Home};