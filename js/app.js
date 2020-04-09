var np = {
  config: {
      appContainer: ".notepad-app"
  },
  bShowStatusBar: !1,
  bWrap: !1,
  fontFamily: "Arial",
  fontStype: "常规",
  fontSize: "16",
  fontHandler: function(t) {
      np.fontFamily = t.family,
      np.fontStype = t.style,
      np.fontSize = t.size,
      $editor.setFont(t)
  }
}              // Notepad 主程序对象

np.config = {
  'appContainer': '.notepad-app'
};

// np.bShowStatusBar = false;   // 是否显示状态栏
np.bLineWrap = false;