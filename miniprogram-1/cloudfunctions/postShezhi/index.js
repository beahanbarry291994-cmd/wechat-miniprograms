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
  // let {
  //   OPENID,
  //   APPID,
  //   UNIONID
  // } = cloud.getWXContext()
  // await 的作用是等待异步请求完成，然后再return
  var hdpic = event.hdpic;
  var username = event.username;
  var sex = event.sex;
  var birth = event.birth;
  var area = event.area;
  var phone = event.phone;
  var qianming = event.qianming;
  var id = event.id;
  // var openid=OPENID
  // 判断该用户是否已经存在于数据库（根据openid查询）
  return await db.collection('login-users').doc(id).update({
    data: {

      username,
      hdpic,
      sex,
      birth,
      area,
      phone,
      qianming
    }
  })

}