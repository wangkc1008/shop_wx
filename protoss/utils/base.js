import {Config} from '../utils/config.js';

class Base{
  constructor(){
    this.baseRequestUrl = Config.restUrl;
  }

  request(params){
    var url = this.baseRequestUrl + params.url;
    if(!params.type){
      params.type = 'get';
    }
    wx.request({
      url:  url,
      data: params.data,
      method: params.type,
      header: {
        'content-type':'application/json',
        'token':wx.getStorageSync('token')
      },
      success: function(res){
        // if(params.sCallBack){
        //   params.sCallBack(res);
        // }
        params.sCallBack&&params.sCallBack(res.data);
      },
      fail:function(error){
        console.log(error);
      }
    })
  }
  /*获得元素上的绑定的值*/
  getDataSet(event, key) {
    return event.currentTarget.dataset[key];
  };
}
export {Base};