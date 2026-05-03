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


  var roomid = event.roomid;
  var content = event.content;
  var createtime = Date.now();
  var user_id = wxContext.OPENID;
  var type = event.type
  return await db.collection('chatdetail').add({
    data: {
      sender_id: user_id,
      createtime,
      type,
      content,
      roomid
    }
  })

}