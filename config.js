/**
 * 小程序配置文件
 */

// 此处主机域名修改成解决方案分配的域名
var host1 = 'redlight.natapp1.cc';
var host2 = 'redlight.duapp.com';

// var config = {

//     // 下面的地址配合云端 Demo 工作
//     service: {
//         host1,
//         // 登录地址，用于建立会话
//         loginUrl: `http://${host1}/api/access_token`,
//         stuInfoUrl: `http://${host1}/api/stuinfo/`,
//         gradeUrl: `http://${host1}/api/grade/`,
//         examUrl: `http://${host1}/api/exam/`,
//     }
// };

var config = {

  // 下面的地址配合云端 Demo 工作
  service: {
    host2,
    // 登录地址，用于建立会话
    loginUrl: `https://${host2}/api/access_token`,
    stuInfoUrl: `https://${host2}/api/stuinfo/`,
    gradeUrl: `https://${host2}/api/grade/`,
    examUrl: `https://${host2}/api/exam/`,
  }
};

module.exports = config;
