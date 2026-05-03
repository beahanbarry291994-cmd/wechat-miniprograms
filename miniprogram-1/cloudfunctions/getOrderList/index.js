// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env: 'fast-user-8g4jwduwa40bfd7d',
  traceUser: true,
})
const db = cloud.database()

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  // 获得请求主体身份
  var managerLevel = event.managerLevel
  if (managerLevel == 1) {
    return await db.collection('order').where({
      maintainer_id: wxContext.OPENID
    }).orderBy('createtime', 'desc').get()

  } else if (managerLevel == 2) {
    return await db.collection('order').orderBy('createtime', 'desc').get()
  } else {


    return await db.collection('order').where({
      user_id: wxContext.OPENID
    }).orderBy('createtime', 'desc').get()
  }

}