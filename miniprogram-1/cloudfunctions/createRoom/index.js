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
  var res1;
  var res2;
  var res3;
  var avatarUrl;
  var nickName;
  var createtime = Date.now();
  var user_id = wxContext.OPENID;
  // 判断当前用户是否已经与客服建立对话
  return await db.collection('chatroom').where({
    customer_id: user_id
  }).count().then(res => {
    res2 = res
    if (res2.total > 0) {
      return db.collection('chatroom').where({
        customer_id: user_id

      }).get().then(res => {
        // 已存在返回roomid
        return {
          roomid: res.data[0]._id,
          OPENID: user_id
        }

      })
    } else {
      // 获取当前用户的微信头像昵称
      return db.collection('login-users').where({
        OPENID: user_id
      }).get().then(res => {
        avatarUrl = res.data[0].avatarUrl,
          nickName = res.data[0].nickName
          managerLevel=res.data[0].managerLevel
        // 创建并返回roomid
        return db.collection('chatroom').add({
          data: {
            customer_id: user_id,
            // 后期可以在此添加，指定客服id
            service_id: '',
            createtime: createtime,
            avatarUrl,
            nickName,
            managerLevel
          }
        }).then(res => {
          return {
            roomid: res._id,
            OPENID: user_id

          }
        })
      })

    }
  })

}