import axios from 'axios'

//登陆
export const Login = () => {
  return new Promise((resolve, reject) => {
    try {
      $.post('/Account/Login', {
        logintype: "PowerEncode",
        language: "%C2%B2%10%04%0E%11",
        usercode: "%C2%A9%1CD%241",
        userpass: "",
        verifycode: "%2C%C2%8E6%C2%9Dd%C2%8C%C2%8B%C3%86C%C2%A6%C3%82%C3%94%01%C3%BC%5DP%C2%B9C%C3%88"
      }, resolve);
    } catch (err) {
      reject(err);
    }
  })
}

export const queryDataSource = (data) => {
  return new Promise((resolve, reject) => {
    try {
      $.post('/Form/GridPageLoad', {
        KeyWord: data.KeyWord,
        KeyWordType: data.KeyWordType || 'BO',
        select: data.select || "",
        sort: data.sort || "",
        index: data.index || "0",
        size: data.size || "15",
        swhere: data.swhere || ""
      }, resolve)
    } catch (err) {
      reject(err)
    }
  })
}


//保存图标配置信息
export const saveSetting = (data) => {
  return new Promise((resolve, reject) => {
    try {
      $.post('/Form/SaveWebForm', data, resolve)
    } catch(err) {
      reject(err)
    }
  })
}

//查询图标配置信息
export const querySetting = (data) => {
  return new Promise((resolve, reject) => {
    try {
      $.post('/Form/GridPageLoad', {
        KeyWord: 'NPMS_ECH_Setting',
        KeyWordType: 'BO',
        select: data.select || 'Setting',
        sort: data.sort || '',
        index: data.index || '0',
        size: data.size || '15',
        swhere: data.swhere || ''
      }, resolve)
    } catch(err) {
      reject(err)
    }
  })
}
