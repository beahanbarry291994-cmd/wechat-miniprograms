// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env: 'fast-user-8g4jwduwa40bfd7d',
  traceUser: true,
})
// 这里不用在加wx.了
// 内容改完要进行保存，并上传云端
const db = cloud.database()
const _ = db.command
// 云函数入口函数
// event 用于接收前端传递来的数据
exports.main = async (event, context) => {
  var key = event.key
  // await 的作用是等待异步请求完成，然后再return
  // 模糊查询，当标签或者菜名有出现给定值的则返回该条记录
  return await db.collection('allfood').where(_.or([{
    name: db.RegExp({
      regexp: key,
      //从搜索栏中获取的value作为规则进行匹配。
      options: 'i',
      //大小写不区分
    })
  }, {
    biaoqian: db.RegExp({
      regexp: key,
      //从搜索栏中获取的value作为规则进行匹配。
      options: 'i',
      //大小写不区分
    })
  }, {
    leibie: db.RegExp({
      regexp: key,
      //从搜索栏中获取的value作为规则进行匹配。
      options: 'i',
      //大小写不区分
    })
  }])).get()
}