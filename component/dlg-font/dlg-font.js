var $dlgFont = function() {
    var e = $('<div class="notepad-dlg-mask notepad-dlg-font"><div class="dialogbox notepad-dlgbox"><div class="notepad-dlg-titlebar"><p class="title">字体</p><span class="close-btn" title="关闭">✖</span></div><div class="main notepad-dlg-main"><div class="font-family"><p>字体(F):</p></div><div class="font-style"><p>字形(Y):</p></div><div class="font-size"><p>大小(S):</p></div><fieldset class="sample"><legend>示例</legend><p class="sample-txt">AaBbYyZz</p></fieldset><div class="script"><label>脚本(R):<br><select><option value="西欧语言">西欧语言</option><option value="中文 GB2312">中文 GB2312</option></select></label></div><input class="btn-ok btn" type="button" value="确定"><input class="btn-cancel btn" type="button" value="取消"></div></div></div>')
      , n = e.find(".btn-ok")
      , l = e.find(".close-btn")
      , a = e.find(".btn-cancel")
      , t = e.find(".sample-txt")
      , i = e.find(".notepad-dlg-titlebar")
      , s = ["Agency FB", "Algerian", "Arial", "Arial Rounded MT", "Axure Handwriting", "Bahnschrift", "Baskerville Old Face", "Bauhaus 93", "Bell MT", "Berlin Sans FB", "Bernard MT", "BlackAdder ITC"]
      , o = ["常规", "斜体", "粗体", "粗偏斜体"]
      , c = ["8", "9", "10", "11", "12", "14", "16", "18", "20", "22", "24", "26", "28", "36", "48", "72"]
      , d = {
        family: "Arial",
        style: "常规",
        size: "16",
        okHandler: null
    };
    function r() {
        t.css({
            "font-family": d.family,
            "font-size": d.size + "pt"
        }),
        "斜体" !== d.style ? "粗体" !== d.style ? "粗偏斜体" !== d.style || t.css({
            "font-weight": "bold",
            "font-style": "italic"
        }) : t.css({
            "font-weight": "bold"
        }) : t.css({
            "font-style": "italic"
        })
    }
    function u() {
        e.remove()
    }
    return {
        show: function(t) {
            $.extend(d, t),
            $("body").append(e),
            (new comList).show({
                container: ".notepad-dlg-font .font-family",
                width: "176px",
                list: s,
                select: s.indexOf(d.family),
                isFont: !0,
                selectHandler: function(t) {
                    d.family = s[t],
                    r()
                }
            }),
            (new comList).show({
                container: ".notepad-dlg-font .font-style",
                width: "132px",
                list: o,
                select: o.indexOf(d.style),
                isFontStyle: !0,
                selectHandler: function(t) {
                    d.style = o[t],
                    r()
                }
            }),
            (new comList).show({
                container: ".notepad-dlg-font .font-size",
                width: "64px",
                list: c,
                select: c.indexOf(d.size),
                selectHandler: function(t) {
                    d.size = c[t],
                    r()
                }
            }),
            r(),
            e.find(".dialogbox").draggable({
                handle: i
            }),
            l.click(u),
            a.click(u),
            n.click(function() {
                d.okHandler({
                    family: d.family,
                    style: d.style,
                    size: d.size
                }),
                u()
            }),
            e.click(function(t) {
                t.stopPropagation()
            })
        }
    }
}()