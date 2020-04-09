$editor = function() {
  var e = $('<div class="notepad-editor"><textarea spellcheck="false" auto-size="none"></textarea></div>')
    , i = e.find("textarea")
    , s = {
      posHandler: null,
      contentHandler: null,
      wrap: !1
  }
    , t = !1;
  function o() {
      var t = i.val().substr(0, i[0].selectionStart).split("\n");
      return t[t.length - 1].length + 1
  }
  function c() {
      return i.val().substr(0, i[0].selectionStart).split("\n").length
  }
  function n(t) {
      t ? (i.attr("wrap", "soft"),
      i.css({
          "overflow-x": "hidden"
      })) : (i.attr("wrap", "off"),
      i.css({
          "overflow-x": "scroll"
      }))
  }
  return i.keyup(function() {
      s.posHandler(c(), o()),
      s.contentHandler("" !== i.val())
  }),
  i.keypress(function() {
      s.posHandler(c(), o())
  }),
  i.mousedown(function() {
      t = !0
  }),
  i.mouseup(function() {
      t = !1
  }),
  i.mousemove(function() {
      t && s.posHandler(c(), o())
  }),
  i.click(function() {
      s.posHandler(c(), o())
  }),
  {
      show: function(t) {
          $.extend(s, t),
          $("body").append(e),
          i.trigger("focus"),
          n(s.wrap)
      },
      resize: function(t) {
          t ? e.css({
              bottom: "21px"
          }) : e.css({
              bottom: "0"
          })
      },
      focus: function() {
          i.focus()
      },
      getTotalLn: function() {
          return i.val().split("\n").length
      },
      getRow: c,
      getCol: o,
      setWrap: n,
      selectAll: function() {
          var t = i.val().length;
          i[0].selectionStart = 0,
          i[0].selectionEnd = t,
          i.select()
      },
      insertDataTime: function() {
          var t = i.val()
            , e = t.substring(0, i[0].selectionStart)
            , n = t.substring(i[0].selectionEnd, t.length);
          t = e + (new Date).toLocaleString() + n,
          i.val(t),
          i.focus(),
          s.posHandler(c(), o())
      },
      gotoLn: function(t) {
          for (var e = 0, n = i.val().split("\n"), l = 0; l < t - 1; l++)
              e += n[l].length + 1;
          i[0].selectionStart = e,
          i[0].selectionEnd = e,
          i.focus(),
          s.posHandler(c(), o())
      },
      bingSearch: function() {
          var t = i[0].selectionStart
            , e = i[0].selectionEnd;
          if (t === e)
              window.open("https://cn.bing.com/", "_blank");
          else {
              var n = i.val().substring(t, e);
              window.open("https://cn.bing.com/search?q=" + n, "_blank")
          }
      },
      search: function(t) {
          var e = i.val()
            , n = t.content;
          t.capitalSense || (e = e.toLowerCase(),
          n = n.toLowerCase());
          var l, a = i[0].selectionEnd;
          l = "down" === t.direction ? e.indexOf(n, a) : e.substr(0, i[0].selectionStart).lastIndexOf(n),
          -1 !== l ? (i[0].selectionStart = l,
          i[0].selectionEnd = l + n.length,
          s.posHandler(c(), o())) : alert('找不到 "' + t.content + '"')
      },
      setFont: function(t) {
          i.css({
              "font-family": t.family,
              "font-size": t.size + "pt"
          }),
          "斜体" !== t.style ? "粗体" !== t.style ? "粗偏斜体" !== t.style || i.css({
              "font-weight": "bold",
              "font-style": "italic"
          }) : i.css({
              "font-weight": "bold"
          }) : i.css({
              "font-style": "italic"
          })
      }
  }
}()