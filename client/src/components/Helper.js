export const uniqueId = str => {
  if (!str) {
    str = "";
  }
  if (str.length > 3) {
    try {
      str = str.split("-");
      let newStr = "";
      str.map(s => {
        newStr = newStr + s.charAt(0);
        return s;
      })
      str = newStr;
    }
    catch (e) {
      str = "";
      console.log(e);
    }
  }
  return str + new Date().valueOf() + Math.random().toFixed(0).substring(0);
}

export const cloneObj = data => {
  return JSON.parse(JSON.stringify(data));
}

export const formatMoney = function (t, e = "$ {{amount}}") {
  function o(t, e) {
    return void 0 === t ? e : t
  }
  function i(t, e, i, r) {
    e = o(e, 2);
    i = o(i, ",");
    r = o(r, ".");
    if (isNaN(t) || null == t)
      return 0;
    t = (t / 100).toFixed(e);
    var n = t.split(".");
    return n[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1" + i) + (n[1] ? r + n[1] : "")
  }
  "string" == typeof t && (t = t.replace(".", ""));
  var r = ""
    , n = /\{\{\s*(\w+)\s*\}\}/
    , a = e || this.money_format;
  switch (a.match(n)[1]) {
    case "amount":
      r = i(t, 2);
      break;
    case "amount_no_decimals":
      r = i(t, 0);
      break;
    case "amount_with_comma_separator":
      r = i(t, 2, ".", ",");
      break;
    case "amount_with_space_separator":
      r = i(t, 2, " ", ",");
      break;
    case "amount_with_period_and_space_separator":
      r = i(t, 2, " ", ".");
      break;
    case "amount_no_decimals_with_comma_separator":
      r = i(t, 0, ".", ",");
      break;
    case "amount_no_decimals_with_space_separator":
      r = i(t, 0, " ");
      break;
    case "amount_with_apostrophe_separator":
      r = i(t, 2, "'", ".")
      break
    default:
      r = i(t, 2);
  }
  return a.replace(n, r)
}

export const smoothScroll = (ele, padding) => {
  let element = document.querySelector(ele);
  if (!element) {
    console.error("Element not found to scroll");
    return false;
  }
  let topPostion = element.offsetTop;
  if (padding) {
    topPostion = topPostion + padding;
  }
  window.scroll({
    top: topPostion,
    behavior: 'smooth'
  });
}

export const iFrameScroll = (ele, padding) => {
  let win = window.frames[0];
  if (win) {
    let obj = { name: "scroll", element: ele, padding: padding };
    win.postMessage(JSON.stringify(obj));
  }
}

export const convertSettingObj = settings => {
  var obj = {};
  settings.map(setting => {
    let value = setting.value;
    if (!value) {
      value = "";
    }
    obj[setting.id] = value;
    return setting;
  })
  return obj;
}