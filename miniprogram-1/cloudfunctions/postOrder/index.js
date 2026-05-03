// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init({
  env: 'fast-user-8g4jwduwa40bfd7d',
  traceUser: true,
})
// 这里不用在加wx.了
// 内容改完要进行保存，并上传云端
const db = cloud.database()
// 云函数入口函数
// event 用于接收前端传递来的数据
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  
  // await 的作用是等待异步请求完成，然后再return
  var user_tel = event.tel;
  var truename = event.truename;
  var intro = event.intro;
  var imgurl = event.imgurl;
  var address = event.address;
  var createtime = Date.now();
  var user_id = wxContext.OPENID;

  return await db.collection('order').add({
    data: {
      user_tel,
      truename,
      intro,
      imgurl,
      address,
      createtime,
      user_id,
      endtime:'',
      isExpedited:false,
      maintainer_id:'',
      rate:0,
      status:0,
    }
  })

}