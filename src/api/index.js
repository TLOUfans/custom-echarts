import axios from 'axios'

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

export const bidApplication = () => {
  return new Promise((resolve, reject) => {
    try {
      $.post('/Form/GridPageLoad', {
        KeyWord: 'NPMS_BID_BidApplication',
        KeyWordType: 'BO',
        select: "",
        sort: "",
        index: "0",
        size: "15",
        swhere: ""
      })
    } catch (err) {
      reject(err)
    }
  })
}
