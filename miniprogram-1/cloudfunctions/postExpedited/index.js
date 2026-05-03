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
  var _id = event._id;
  // var openid=OPENID
  // 判断该用户是否已经存在于数据库（根据openid查询）
  return await db.collection('order').doc(_id).update({
    data: {
      isExpedited:true
    }
  })

}