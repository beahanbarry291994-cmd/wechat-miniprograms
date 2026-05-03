// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env: 'fast-user-8g4jwduwa40bfd7d',
  traceUser: true,
})
const db = cloud.database()

// 云函数入口函数
exports.main = async (event, context) => {
  const _id = event._id;
  const status = event.status
  const maintainer_id = event.maintainer_id
  const isExpedited = event.isExpedited
  const endtime = Date.now();

  // 派单和拒单
  if (status == 1 || status == 0) {

    return await db.collection('order').doc(_id).update({
      data: {

        status,
        maintainer_id
      }
    })
  }
  // 完成订单
  else if (status == 3) {
    return await db.collection('order').doc(_id).update({
      data: {

        status,
        endtime
      }
    })
  }
  // 加急
  else if (isExpedited == true) {
    return await db.collection('order').doc(_id).update({
      data: {

        isExpedited
      }
    })
  }
  // 其他（完成、接单、退单）
  else {
    return await db.collection('order').doc(_id).update({
      data: {

        status
      }
    })
  }

}