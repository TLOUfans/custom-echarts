export const encodeData = (() => {
  const Base64 = {
    // private property
    _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    // public method for encoding
    encode: function (input) {
      var output = "";
      var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
      var i = 0;
      input = Base64._utf8_encode(input);
      while (i < input.length) {
        chr1 = input.charCodeAt(i++);
        chr2 = input.charCodeAt(i++);
        chr3 = input.charCodeAt(i++);
        enc1 = chr1 >> 2;
        enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
        enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
        enc4 = chr3 & 63;
        if (isNaN(chr2)) {
          enc3 = enc4 = 64;
        } else if (isNaN(chr3)) {
          enc4 = 64;
        }
        output = output +
          this._keyStr.charAt(enc1) + this._keyStr.charAt(enc2) +
          this._keyStr.charAt(enc3) + this._keyStr.charAt(enc4);
      }
      return output;
    },

    // public method for decoding
    decode: function (input) {
      var output = "";
      var chr1, chr2, chr3;
      var enc1, enc2, enc3, enc4;
      var i = 0;
      input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
      while (i < input.length) {
        enc1 = this._keyStr.indexOf(input.charAt(i++));
        enc2 = this._keyStr.indexOf(input.charAt(i++));
        enc3 = this._keyStr.indexOf(input.charAt(i++));
        enc4 = this._keyStr.indexOf(input.charAt(i++));
        chr1 = (enc1 << 2) | (enc2 >> 4);
        chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
        chr3 = ((enc3 & 3) << 6) | enc4;
        output = output + String.fromCharCode(chr1);
        if (enc3 != 64) {
          output = output + String.fromCharCode(chr2);
        }
        if (enc4 != 64) {
          output = output + String.fromCharCode(chr3);
        }
      }
      output = Base64._utf8_decode(output);
      return output;
    },

    // private method for UTF-8 encoding
    _utf8_encode: function (string) {
      string = string.replace(/\r\n/g, "\n");
      var utftext = "";
      for (var n = 0; n < string.length; n++) {
        var c = string.charCodeAt(n);
        if (c < 128) {
          utftext += String.fromCharCode(c);
        } else if ((c > 127) && (c < 2048)) {
          utftext += String.fromCharCode((c >> 6) | 192);
          utftext += String.fromCharCode((c & 63) | 128);
        } else {
          utftext += String.fromCharCode((c >> 12) | 224);
          utftext += String.fromCharCode(((c >> 6) & 63) | 128);
          utftext += String.fromCharCode((c & 63) | 128);
        }
      }
      return utftext;
    },

    // private method for UTF-8 decoding
    _utf8_decode: function (utftext) {
      var string = "";
      var i = 0;
      var c = c1 = c2 = 0;
      while (i < utftext.length) {
        c = utftext.charCodeAt(i);
        if (c < 128) {
          string += String.fromCharCode(c);
          i++;
        } else if ((c > 191) && (c < 224)) {
          c2 = utftext.charCodeAt(i + 1);
          string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
          i += 2;
        } else {
          c2 = utftext.charCodeAt(i + 1);
          c3 = utftext.charCodeAt(i + 2);
          string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
          i += 3;
        }
      }
      return string;
    },

    rc4: function (data) {
      var key = "PowerM3";
      var seq = Array(256); //int
      var das = Array(data.length); //code of data
      for (var i = 0; i < 256; i++)
        seq[i] = i;
      var j = 0;
      for (var i = 0; i < 256; i++) {
        var j = (j + seq[i] + key.charCodeAt(i % key.length)) % 256;
        var temp = seq[i];
        seq[i] = seq[j];
        seq[j] = temp;
      }
      for (var i = 0; i < data.length; i++)
        das[i] = data.charCodeAt(i);
      for (var x = 0; x < das.length; x++) {
        var i = (i + 1) % 256;
        var j = (j + seq[i]) % 256;
        var temp = seq[i];
        seq[i] = seq[j];
        seq[j] = temp;
        var k = (seq[i] + seq[j]) % 256;
        das[x] = String.fromCharCode(das[x] ^ seq[k]);
      }
      return das.join('');
    }
  }

  const base64swhere = (str) => {
    if (str == undefined || str.length == 0)
      return "";
    return encodeURIComponent(Base64.rc4(str));
  }

  const base64encode = (str) => {
    if (str == undefined || str.length == 0)
      return "";
    return Base64.encode(str);
  }

  const saveDataPackToString = (pack) => {
    var temp = {};
    var rlt = "{";
    for (var kw in pack) {
      if (typeof (kw) == "function") continue;
      if (temp[kw] != undefined) continue;
      if (rlt.length > 1) rlt += ",";
      rlt += "\"" + kw + "\":" + JSON.stringify(pack[kw]);
    }
    rlt += "}";
    return rlt;
  }

  return (pack) => {
    let jdata = {}
    jdata.jsonData = base64swhere(saveDataPackToString(pack))
    jdata.Params = base64encode(JSON.stringify({
      IsRegHuman: '1'
    }))
    jdata.formId = 'd91ab7fb-c2fc-4b2b-8a1e-98489bfa416f'
    jdata.encode = 'r4'
    return jdata
  }
})()

export const createPack = (data) => {
  let pack = {
    NPMS_ECH_Setting: {
      keyWordType: null,
      data: [{
        BarSetting: data.barSetting,
        PieSetting: data.pieSetting,
        UserID: data.userID
      }]
    }
  }
  if(data.id) {
    pack.NPMS_ECH_Setting.data[0].ID = data.id
    pack.NPMS_ECH_Setting.data[0]._state = 'modified'
  } else {
    pack.NPMS_ECH_Setting.data[0]._state = 'added'
  }
  return pack
}
