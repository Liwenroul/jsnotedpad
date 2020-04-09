var $menubar = function() {
  var o, c = $('<div class="notepad-menubar"></div>'), d = [], r = -1;
  function e() {
      !function() {
          for (var t = $('<ul class="menu-title"></ul>'), e = 0; e < o.length; e++) {
              var n = $('<li class="title"></li>');
              n.html(o[e].title),
              n.attr("data-id", e),
              t.append(n),
              n.click(function(t) {
                  var e = Number(this.dataset.id);
                  r = -1 === r ? (d[e].css({
                      display: "inline-block"
                  }),
                  e) : r !== e ? (d[r].css({
                      display: "none"
                  }),
                  d[e].css({
                      display: "inline-block"
                  }),
                  e) : (d[r].css({
                      display: "none"
                  }),
                  -1),
                  t.stopPropagation()
              }),
              n.hover(function() {
                  if (-1 !== r) {
                      var t = Number(this.dataset.id);
                      d[r].css({
                          display: "none"
                      }),
                      d[t].css({
                          display: "inline-block"
                      }),
                      r = t
                  }
              })
          }
          c.append(t)
      }(),
      function() {
          for (var t = 0; t < o.length; t++) {
              for (var e = $('<ul class="menus"></ul>'), n = o[t].menuItems, l = 0; l < n.length; l++)
                  if ("hr" !== n[l].title) {
                      var a = $('<li class="menu-item"></li>');
                      if (a.html(n[l].title),
                      a.attr("data-x", t),
                      a.attr("data-y", l),
                      "" !== n[l].shortcut) {
                          var i = $('<span class="shortcut"></span>');
                          i.html(n[l].shortcut),
                          a.append(i)
                      }
                      n[l].enabled || a.addClass("disabled"),
                      e.append(a),
                      a.click(function(t) {
                          if (t.stopPropagation(),
                          !$(this).hasClass("disabled")) {
                              var e = this.dataset.x
                                , n = this.dataset.y;
                              d[e].css({
                                  display: "none"
                              }),
                              r = -1,
                              o[e].menuItems[n].handler()
                          }
                      })
                  } else {
                      var s = $('<li class="menu-hr"></li>');
                      e.append(s)
                  }
              e.css({
                  width: o[t].width,
                  left: o[t].left,
                  display: "none"
              }),
              c.append(e),
              d.push(e)
          }
      }(),
      $("body").append(c)
  }
  return {
      show: function(t) {
          o = t,
          e()
      },
      checked: function(t, e, n) {
          var l = d[t].find(".menu-item")[e];
          n ? $(l).prepend($('<span class="checked">✓</span>')[0]) : $(l).find(".checked").remove()
      },
      enabled: function(t, e, n) {
          var l = d[t].find(".menu-item")[e];
          n ? $(l).removeClass("disabled") : $(l).addClass("disabled")
      },
      hideMenu: function() {
          -1 !== r && (d[r].css({
              display: "none"
          }),
          r = -1)
      }
  }
}()