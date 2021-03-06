/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/web/js/main.min.js":
/*!**************************************!*\
  !*** ./resources/web/js/main.min.js ***!
  \**************************************/
/***/ (function(module, exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_LOCAL_MODULE_0__, __WEBPACK_LOCAL_MODULE_0__exports;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function loadHtml5LightBox(t) {
  !function (e) {
    e.fn.html5lightbox = function (i) {
      var s = this;
      s.options = e.extend({
        freelink: "http://html5box.com/",
        defaultvideovolume: 1,
        autoclose: !1,
        autoclosedelay: 0,
        insideiframe: !1,
        autoresizecontent: !0,
        defaultwidth: 960,
        defaultheight: 540,
        autoplay: !0,
        loopvideo: !1,
        html5player: !0,
        responsive: !0,
        nativehtml5controls: !1,
        videohidecontrols: !1,
        nativecontrolsonfirefox: !0,
        nativecontrolsonie: !0,
        imagekeepratio: !0,
        maxheight: !1,
        useflashonie9: !0,
        useflashonie10: !0,
        useflashonie11: !1,
        useflashformp4onfirefox: !1,
        enablepdfjs: !0,
        openpdfinnewtaboniphone: !1,
        openpdfinnewtabonipad: !1,
        googleanalyticsaccount: "",
        arrowloop: !0,
        showall: !1,
        shownavigation: !0,
        thumbwidth: 96,
        thumbheight: 72,
        thumbgap: 4,
        thumbtopmargin: 12,
        thumbbottommargin: 12,
        thumbborder: 1,
        thumbbordercolor: "transparent",
        thumbhighlightbordercolor: "#fff",
        thumbopacity: 1,
        navbuttonwidth: 32,
        overlaybgcolor: "#000",
        overlayopacity: .9,
        bgcolor: "#fff",
        bordersize: 8,
        borderradius: 0,
        bordermargin: 16,
        bordertopmargin: 48,
        bordertopmarginsmall: 48,
        barautoheight: !0,
        barheight: 64,
        responsivebarheight: !1,
        smallscreenheight: 415,
        barheightonsmallheight: 64,
        notkeepratioonsmallheight: !1,
        loadingwidth: 64,
        loadingheight: 64,
        resizespeed: 400,
        fadespeed: 400,
        jsfolder: t,
        skinsfoldername: "skins/default/",
        loadingimage: "lightbox-loading.gif",
        nextimage: "lightbox-next.png",
        previmage: "lightbox-prev.png",
        closeimage: "lightbox-close.png",
        playvideoimage: "lightbox-playvideo.png",
        titlebgimage: "lightbox-titlebg.png",
        navarrowsprevimage: "lightbox-navprev.png",
        navarrowsnextimage: "lightbox-navnext.png",
        navarrowsalwaysshowontouch: !0,
        navarrowsbottomscreenwidth: 479,
        closeonoverlay: !0,
        alwaysshownavarrows: !1,
        showplaybutton: !0,
        playimage: "lightbox-play.png",
        pauseimage: "lightbox-pause.png",
        fullscreenmode: !1,
        fullscreencloseimage: "lightbox-close-fullscreen.png",
        fullscreennextimage: "lightbox-next-fullscreen.png",
        fullscreenprevimage: "lightbox-prev-fullscreen.png",
        fullscreennomargin: !1,
        fullscreenmodeonsmallscreen: !1,
        fullscreennomarginonsmallscreen: !1,
        fullscreensmallscreenwidth: 736,
        fullscreenbgcolor: "rgba(0, 0, 0, 0.9)",
        fullscreennomargintextinside: !1,
        videobgcolor: "#000",
        html5videoposter: "",
        showtitle: !0,
        titlestyle: "bottom",
        titleinsidecss: "color:#fff; font-size:16px; font-family:Arial,Helvetica,sans-serif; overflow:hidden; text-align:left; margin:4px 8px;",
        titlebottomcss: "color:#333; font-size:16px; font-family:Arial,Helvetica,sans-serif; overflow:hidden; text-align:left;",
        showdescription: !0,
        descriptioninsidecss: "color:#fff; font-size:12px; font-family:Arial,Helvetica,sans-serif; overflow:hidden; text-align:left; margin:4px 0px 0px; padding: 0px;",
        descriptionbottomcss: "color:#333; font-size:12px; font-family:Arial,Helvetica,sans-serif; overflow:hidden; text-align:left; margin:4px 0px 0px; padding: 0px;",
        fullscreentitlebottomcss: "color:#fff; font-size:16px; font-family:Arial,Helvetica,sans-serif; overflow:hidden; text-align:left; margin:4px 8px 8px;",
        fullscreendescriptionbottomcss: "color:#fff; font-size:12px; font-family:Arial,Helvetica,sans-serif; overflow:hidden; text-align:left; margin:4px 0px 0px; padding: 0px;",
        showtitleprefix: !0,
        titleprefix: "%NUM / %TOTAL",
        autoslide: !1,
        slideinterval: 5e3,
        showtimer: !0,
        timerposition: "bottom",
        timerheight: 2,
        timercolor: "#dc572e",
        timeropacity: 1,
        initvimeo: !0,
        inityoutube: !0,
        initsocial: !0,
        showsocial: !1,
        socialposition: "position:absolute;top:100%;right:0;",
        socialpositionsmallscreen: "position:absolute;top:100%;right:0;left:0;",
        socialdirection: "horizontal",
        socialbuttonsize: 32,
        socialbuttonfontsize: 18,
        socialrotateeffect: !0,
        showfacebook: !0,
        showtwitter: !0,
        showpinterest: !0,
        imagepercentage: 75,
        sidetobottomscreenwidth: 479,
        errorwidth: 280,
        errorheight: 48,
        errorcss: "text-align:center; color:#ff0000; font-size:14px; font-family:Arial, sans-serif;",
        enabletouchswipe: !0,
        supportesckey: !0,
        supportarrowkeys: !0,
        version: "3.3",
        stamp: !0,
        freemark: "72,84,77,76,53,32,76,105,103,104,116,98,111,120,32,70,114,101,101,32,86,101,114,115,105,111,110",
        watermark: "",
        watermarklink: ""
      }, i), "undefined" != typeof html5lightbox_options && html5lightbox_options && e.extend(s.options, html5lightbox_options), e("div.html5lightbox_options").length && e.each(e("div.html5lightbox_options").data(), function (t, e) {
        s.options[t.toLowerCase()] = e;
      }), e("div#html5lightbox_options").length && e.each(e("div#html5lightbox_options").data(), function (t, e) {
        s.options[t.toLowerCase()] = e;
      }), e("div#html5lightbox_general_options").length && e.each(e("div#html5lightbox_general_options").data(), function (t, e) {
        s.options[t.toLowerCase()] = e;
      });
      var n = s.options.defaultwidth,
          o = s.options.defaultheight;
      s.options.types = ["IMAGE", "FLASH", "VIDEO", "YOUTUBE", "VIMEO", "PDF", "MP3", "WEB", "FLV", "DAILYMOTION", "DIV", "WISTIA", "IFRAMEVIDEO"], s.options.htmlfolder = window.location.href.substr(0, window.location.href.lastIndexOf("/") + 1), s.options.skinsfolder = s.options.skinsfoldername, s.options.skinsfolder.length > 0 && "/" != s.options.skinsfolder[s.options.skinsfolder.length - 1] && (s.options.skinsfolder += "/"), "/" != s.options.skinsfolder.charAt(0) && "http:" != s.options.skinsfolder.substring(0, 5) && "https:" != s.options.skinsfolder.substring(0, 6) && (s.options.skinsfolder = s.options.jsfolder + s.options.skinsfolder);

      for (var r = ["loadingimage", "nextimage", "previmage", "closeimage", "playvideoimage", "titlebgimage", "navarrowsprevimage", "navarrowsnextimage", "playimage", "pauseimage", "fullscreencloseimage", "fullscreennextimage", "fullscreenprevimage"], a = 0; a < r.length; a++) {
        s.options[r[a]] && "http://" != s.options[r[a]].substring(0, 7).toLowerCase() && "https://" != s.options[r[a]].substring(0, 8).toLowerCase() && (s.options[r[a]] = s.options.skinsfolder + s.options[r[a]]);
      }

      var l,
          h = "",
          c = s.options.freemark.split(",");

      for (a = 0; a < c.length; a++) {
        h += String.fromCharCode(c[a]);
      }

      s.options.freemark = h;
      var u = "hmtamgli5cboxh.iclolms";

      for (a = 1; a <= 5; a++) {
        u = u.slice(0, a) + u.slice(a + 1);
      }

      for (l = u.length, a = 0; a < 5; a++) {
        u = u.slice(0, l - 9 + a) + u.slice(l - 8 + a);
      }

      -1 != s.options.htmlfolder.indexOf(u) && (s.options.stamp = !1), s.options.flashInstalled = !1;

      try {
        new ActiveXObject("ShockwaveFlash.ShockwaveFlash") && (s.options.flashInstalled = !0);
      } catch (t) {
        navigator.mimeTypes["application/x-shockwave-flash"] && (s.options.flashInstalled = !0);
      }

      s.options.html5VideoSupported = !!document.createElement("video").canPlayType, s.options.isChrome = null != navigator.userAgent.match(/Chrome/i), s.options.isFirefox = null != navigator.userAgent.match(/Firefox/i), s.options.isOpera = null != navigator.userAgent.match(/Opera/i) || null != navigator.userAgent.match(/OPR\//i), s.options.isSafari = null != navigator.userAgent.match(/Safari/i), s.options.isIE11 = null != navigator.userAgent.match(/Trident\/7/) && null != navigator.userAgent.match(/rv:11/), s.options.isIE = null != navigator.userAgent.match(/MSIE/i) && !s.options.isOpera, s.options.isIE10 = null != navigator.userAgent.match(/MSIE 10/i) && !this.options.isOpera, s.options.isIE9 = null != navigator.userAgent.match(/MSIE 9/i) && !s.options.isOpera, s.options.isIE8 = null != navigator.userAgent.match(/MSIE 8/i) && !s.options.isOpera, s.options.isIE7 = null != navigator.userAgent.match(/MSIE 7/i) && !s.options.isOpera, s.options.isIE6 = null != navigator.userAgent.match(/MSIE 6/i) && !s.options.isOpera, s.options.isIE678 = s.options.isIE6 || s.options.isIE7 || s.options.isIE8, s.options.isIE6789 = s.options.isIE6 || s.options.isIE7 || s.options.isIE8 || s.options.isIE9, s.options.isAndroid = null != navigator.userAgent.match(/Android/i), s.options.isIPad = null != navigator.userAgent.match(/iPad/i), s.options.isIPhone = null != navigator.userAgent.match(/iPod/i) || null != navigator.userAgent.match(/iPhone/i), s.options.isIOS = s.options.isIPad || s.options.isIPhone, s.options.isMobile = s.options.isAndroid || s.options.isIPad || s.options.isIPhone, s.options.isIOSLess5 = s.options.isIPad && s.options.isIPhone && (null != navigator.userAgent.match(/OS 4/i) || null != navigator.userAgent.match(/OS 3/i)), s.options.supportCSSPositionFixed = !s.options.isIE6 && !s.options.isIOSLess5, s.options.iequirksmode = s.options.isIE6789 && "CSS1Compat" != document.compatMode, s.options.isTouch = "ontouchstart" in window;
      var p = document.createElement("video");

      if (s.options.canplaymp4 = p && p.canPlayType && p.canPlayType("video/mp4").replace(/no/, ""), s.options.isMobile && (s.options.autoplay = !1), s.options.isFirefox && s.options.nativecontrolsonfirefox && (s.options.nativehtml5controls = !0), (s.options.isIE6789 || s.options.isIE10 || s.options.isIE11) && s.options.nativecontrolsonie && (s.options.nativehtml5controls = !0), s.options.navheight = 0, s.options.thumbgap += 2 * s.options.thumbborder, s.options.resizeTimeout = -1, s.slideTimeout = null, s.autosliding = !1, s.elemArray = new Array(), s.options.curElem = -1, s.defaultoptions = e.extend({}, s.options), s.options.googleanalyticsaccount && !window._gaq && (window._gaq = window._gaq || [], window._gaq.push(["_setAccount", s.options.googleanalyticsaccount]), window._gaq.push(["_trackPageview"]), e.getScript("https://ssl.google-analytics.com/ga.js")), s.options.initvimeo) {
        d = document.createElement("script");
        (f = document.getElementsByTagName("script")[0]).parentNode.insertBefore(d, f);
      }

      if (s.options.inityoutube) {
        var d;
        (d = document.createElement("script")).src = "https://www.youtube.com/iframe_api";
        var f = document.getElementsByTagName("script")[0];
        f.parentNode.insertBefore(d, f);
      }

      s.options.initsocial && e("head").append('<link rel="stylesheet" href="' + s.options.jsfolder + 'icons/css/fontello.css" type="text/css" />'), s.showing = !1, s.disableEscKey = function (t) {
        t ? s.disableesckeyinfullscreen = !0 : setTimeout(function () {
          s.disableesckeyinfullscreen = !1;
        }, 1e3);
      }, s.supportKeyboard = function () {
        s.disableesckeyinfullscreen = !1, e(document).keyup(function (t) {
          s.showing && (!s.disableesckeyinfullscreen && s.options.supportesckey && 27 == t.keyCode ? s.finish() : s.options.supportarrowkeys && (39 == t.keyCode ? s.gotoSlide(-1) : 37 == t.keyCode && s.gotoSlide(-2)));
        }), s.options.supportesckey && (document.addEventListener("MSFullscreenChange", function () {
          s.disableEscKey(null != document.msFullscreenElement);
        }, !1), document.addEventListener("webkitfullscreenchange", function () {
          s.disableEscKey(document.webkitIsFullScreen);
        }, !1));
      }, s.supportKeyboard(), s.init = function () {
        s.showing = !1, s.readData(), s.createMarkup(), s.initSlide();
      }, s.readData = function () {
        s.each(function () {
          if ("a" == this.nodeName.toLowerCase() || "area" == this.nodeName.toLowerCase()) {
            var t = e(this),
                i = "mediatype" in t.data() ? t.data("mediatype") : s.checkType(t.attr("href"));

            if (!(i < 0)) {
              for (var n = 0; n < s.elemArray.length; n++) {
                if (t.attr("href") == s.elemArray[n][1]) return;
              }

              var o = t.data("title") ? t.data("title") : t.attr("title");
              s.elemArray.push(new Array(i, t.attr("href"), o, t.data("group"), t.data("width"), t.data("height"), t.data("webm"), t.data("ogg"), t.data("thumbnail"), t.data("description")));
            }
          }
        });
      }, s.createMarkup = function () {
        if (e(window).width() <= s.options.fullscreensmallscreenwidth && (s.options.fullscreenmodeonsmallscreen && (s.options.fullscreenmode = !0, s.options.fullscreennomarginonsmallscreen && (s.options.fullscreennomargin = !0)), s.options.fullscreenmode && s.options.fullscreennomarginonsmallscreen && (s.options.fullscreennomargin = !0)), s.options.fullscreenmode && s.options.fullscreennomargin && (s.options.bgcolor = s.options.fullscreenbgcolor, s.options.bordersize = 0, s.options.bordermargin = 0, s.options.bordertopmargin = 0, s.options.bordertopmarginsmall = 0, s.options.fullscreennomargintextinside ? s.options.titlestyle = "inside" : (s.options.titlebottomcss = s.options.fullscreentitlebottomcss, s.options.descriptionbottomcss = s.options.fullscreendescriptionbottomcss)), s.options.barheightoriginal = s.options.barheight, s.options.responsivebarheight) {
          (window.innerHeight ? window.innerHeight : e(window).height()) <= s.options.smallscreenheight && (s.options.barheight = s.options.barheightonsmallheight);
        }

        s.options.titlecss || (s.options.titlecss = "inside" == s.options.titlestyle ? s.options.titleinsidecss : s.options.titlebottomcss), s.options.descriptioncss || (s.options.descriptioncss = "inside" == s.options.titlestyle ? s.options.descriptioninsidecss : s.options.descriptionbottomcss), s.options.titlecss = e.trim(s.options.titlecss), s.options.titlecss.length > 1 && ("{" == s.options.titlecss.charAt(0) && (s.options.titlecss = s.options.titlecss.substring(1)), "}" == s.options.titlecss.charAt(s.options.titlecss.length - 1) && (s.options.titlecss = s.options.titlecss.substring(0, s.options.titlecss.length - 1))), s.options.descriptioncss = e.trim(s.options.descriptioncss), s.options.descriptioncss.length > 1 && ("{" == s.options.descriptioncss.charAt(0) && (s.options.descriptioncss = s.options.descriptioncss.substring(1)), "}" == s.options.descriptioncss.charAt(s.options.descriptioncss.length - 1) && (s.options.descriptioncss = s.options.descriptioncss.substring(0, s.options.descriptioncss.length - 1))), s.options.errorcss = e.trim(s.options.errorcss), s.options.errorcss.length > 1 && ("{" == s.options.errorcss.charAt(0) && (s.options.errorcss = s.options.errorcss.substring(1)), "}" == s.options.errorcss.charAt(s.options.errorcss.length - 1) && (s.options.errorcss = s.options.errorcss.substring(0, s.options.errorcss.length - 1)));
        var t = ".html5-hide {display:none !important;} #html5box-html5-lightbox #html5-text {" + s.options.titlecss + "}";
        t += "#html5box-html5-lightbox .html5-description {" + s.options.descriptioncss + "}", t += "#html5box-html5-lightbox .html5-error {" + s.options.errorcss + "}", (s.options.navarrowsalwaysshowontouch || s.options.alwaysshownavarrows) && (t += "#html5box-html5-lightbox .html5-prev-touch {left:0px;top:50%;margin-top:-16px;margin-left:-32px;} #html5box-html5-lightbox .html5-next-touch {right:0px;top:50%;margin-top:-16px;margin-right:-32px;}", t += "@media (max-width: " + s.options.navarrowsbottomscreenwidth + "px) { #html5box-html5-lightbox .html5-prev-touch {top:100%;left:0;margin:0;} #html5box-html5-lightbox .html5-next-touch {top:100%;right:0;margin:0;} }"), t += "#html5box-html5-lightbox .html5-prev-fullscreen {display:block;} #html5box-html5-lightbox .html5-next-fullscreen {display:block;} #html5box-html5-lightbox .html5-prev-bottom-fullscreen {display:none;} #html5box-html5-lightbox .html5-next-bottom-fullscreen {display:none;}", t += "@media (max-width: " + s.options.navarrowsbottomscreenwidth + "px) {#html5box-html5-lightbox .html5-prev-fullscreen {display:none;} #html5box-html5-lightbox .html5-next-fullscreen {display:none;} #html5box-html5-lightbox .html5-prev-bottom-fullscreen {display:block;} #html5box-html5-lightbox .html5-next-bottom-fullscreen {display:block;} }", "right" == s.options.titlestyle ? (t += "#html5box-html5-lightbox #html5-elem-wrap {width:" + s.options.imagepercentage + "%;height:100%;} #html5box-html5-lightbox #html5-elem-data-box {min-height:100%;}", t += "@media (max-width: " + s.options.sidetobottomscreenwidth + "px) {#html5box-html5-lightbox #html5-elem-wrap {width:100%;height:auto;} #html5box-html5-lightbox #html5-elem-data-box {width:100%;height:auto;min-height:0;}}") : "left" == s.options.titlestyle && (t += "#html5box-html5-lightbox #html5-elem-wrap {height:100%;} #html5box-html5-lightbox #html5-elem-data-box {width:" + String(100 - s.options.imagepercentage) + "%;min-height:100%;}", t += "@media (max-width: " + s.options.sidetobottomscreenwidth + "px) {#html5box-html5-lightbox #html5-elem-wrap {width:100%;height:auto;} #html5box-html5-lightbox #html5-elem-data-box {width:100%;height:auto;min-height:0;}}"), t += ".html5-rotate { border-radius:50%; -webkit-transition:-webkit-transform .4s ease-in; transition: transform .4s ease-in; } .html5-rotate:hover { -webkit-transform: rotate(360deg); transform: rotate(360deg); }", t += "@media (max-width: " + s.options.navarrowsbottomscreenwidth + "px) {#html5-social {" + s.options.socialpositionsmallscreen + "}}", e("head").append("<style type='text/css' data-creator='html5box-html5-lightbox'>" + t + "</style>"), s.$lightbox = e("<div id='html5box-html5-lightbox' style='display:none;top:0px;left:0px;width:100%;height:100%;z-index:9999998;text-align:center;'><div id='html5-lightbox-overlay' style='display:block;position:absolute;top:0px;left:0px;width:100%;min-height:100%;background-color:" + s.options.overlaybgcolor + ";opacity:" + s.options.overlayopacity + ";filter:alpha(opacity=" + Math.round(100 * s.options.overlayopacity) + ");'></div><div id='html5-lightbox-box' style='display:block;position:relative;margin:0px auto;'><div id='html5-elem-box' style='display:block;position:relative;width:100%;overflow-x:hidden;overflow-y:auto;height:100%;margin:0px auto;text-align:center;box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;'><div id='html5-elem-wrap' style='display:block;position:relative;margin:0px auto;text-align:center;box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;background-color:" + s.options.bgcolor + ";'><div id='html5-loading' style='display:none;position:absolute;top:0px;left:0px;text-align:center;width:100%;height:100%;background:url(\"" + s.options.loadingimage + "\") no-repeat center center;'></div><div id='html5-error' class='html5-error' style='display:none;position:absolute;padding:" + s.options.bordersize + "px;text-align:center;width:" + s.options.errorwidth + "px;height:" + s.options.errorheight + "px;'>The requested content cannot be loaded.<br />Please try again later.</div><div id='html5-image' style='display:none;position:relative;top:0px;left:0px;width:100%;height:100%;" + (s.options.iequirksmode ? "margin" : "padding") + ":" + s.options.bordersize + "px;text-align:center;box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;'></div></div></div><div id='html5-watermark' style='display:none;position:absolute;left:" + String(s.options.bordersize + 2) + "px;top:" + String(s.options.bordersize + 2) + "px;'></div></div></div>"), s.options.positionFixed = s.options.supportCSSPositionFixed && s.options.responsive && !s.options.iequirksmode, s.$lightbox.css({
          position: s.options.positionFixed ? "fixed" : "absolute"
        }), s.$lightbox.appendTo("body"), s.$lightboxBox = e("#html5-lightbox-box", s.$lightbox), s.$elem = e("#html5-elem-box", s.$lightbox), s.$elemWrap = e("#html5-elem-wrap", s.$lightbox), s.$loading = e("#html5-loading", s.$lightbox), s.$error = e("#html5-error", s.$lightbox), s.$image = e("#html5-image", s.$lightbox), s.options.fullscreenmode && s.options.fullscreennomargin && s.$elem.css({
          overflow: "hidden"
        });
        var i = "<div id='html5-elem-data-box' style='display:none;box-sizing:border-box;'><div id='html5-text' style='display:block;overflow:hidden;'></div></div>";

        if ("left" == s.options.titlestyle ? s.$elem.prepend(i) : s.$elem.append(i), s.$elemData = e("#html5-elem-data-box", s.$lightbox), s.$text = e("#html5-text", s.$lightbox), s.options.borderradius > 0 && (s.$elem.css({
          "border-radius": s.options.borderradius + "px",
          "-moz-border-radius": s.options.borderradius + "px",
          "-webkit-border-radius": s.options.borderradius + "px"
        }), "inside" == s.options.titlestyle ? s.$elemWrap.css({
          "border-radius": s.options.borderradius + "px",
          "-moz-border-radius": s.options.borderradius + "px",
          "-webkit-border-radius": s.options.borderradius + "px"
        }) : "bottom" == s.options.titlestyle && (s.$elemWrap.css({
          "border-top-left-radius": s.options.borderradius + "px",
          "-moz-top-left-border-radius": s.options.borderradius + "px",
          "-webkit-top-left-border-radius": s.options.borderradius + "px",
          "border-top-right-radius": s.options.borderradius + "px",
          "-moz-top-right-border-radius": s.options.borderradius + "px",
          "-webkit-top-right-border-radius": s.options.borderradius + "px"
        }), s.$elemData.css({
          "border-bottom-left-radius": s.options.borderradius + "px",
          "-moz-top-bottom-border-radius": s.options.borderradius + "px",
          "-webkit-bottom-left-border-radius": s.options.borderradius + "px",
          "border-bottom-right-radius": s.options.borderradius + "px",
          "-moz-bottom-right-border-radius": s.options.borderradius + "px",
          "-webkit-bottom-right-border-radius": s.options.borderradius + "px"
        }))), "right" == s.options.titlestyle || "left" == s.options.titlestyle ? (s.$lightboxBox.css({
          "background-color": s.options.bgcolor
        }), "right" == s.options.titlestyle ? (s.$elemWrap.css({
          position: "relative",
          "float": "left"
        }), s.$elemData.css({
          position: "relative",
          overflow: "hidden",
          padding: s.options.bordersize + "px"
        })) : (s.$elemWrap.css({
          position: "relative",
          overflow: "hidden"
        }), s.$elemData.css({
          position: "relative",
          "float": "left",
          padding: s.options.bordersize + "px"
        }))) : "inside" == s.options.titlestyle ? (s.$elemData.css(_defineProperty({
          position: "absolute",
          margin: s.options.bordersize + "px",
          bottom: 0,
          left: 0,
          "background-color": "#333"
        }, "background-color", "rgba(51, 51, 51, 0.6)")), s.$text.css({
          padding: s.options.bordersize + "px " + 2 * s.options.bordersize + "px"
        })) : (s.$elemData.css({
          position: "relative",
          width: "100%",
          height: s.options.barautoheight ? "auto" : s.options.barheight + "px",
          padding: "0 0 " + s.options.bordersize + "px 0",
          "background-color": s.options.bgcolor,
          "text-align": "left"
        }), s.options.fullscreenmode && s.options.fullscreennomargin || s.$text.css({
          margin: "0 " + s.options.bordersize + "px"
        })), s.options.showsocial) {
          var n = '<div id="html5-social" style="display:none;' + s.options.socialposition + '">',
              o = ("horizontal" == s.options.socialdirection ? "display:inline-block;" : "display:block;") + "margin:4px;",
              r = "display:table-cell;width:" + s.options.socialbuttonsize + "px;height:" + s.options.socialbuttonsize + "px;font-size:" + s.options.socialbuttonfontsize + "px;border-radius:50%;color:#fff;vertical-align:middle;text-align:center;cursor:pointer;padding:0;";
          s.options.showfacebook && (n += '<div class="html5-social-btn' + (s.options.socialrotateeffect ? " html5-rotate" : "") + ' html5-social-facebook" style="' + o + '"><div class="mh-icon-facebook" style="' + r + 'background-color:#3b5998;"></div></div>'), s.options.showtwitter && (n += '<div class="html5-social-btn' + (s.options.socialrotateeffect ? " html5-rotate" : "") + ' html5-social-twitter" style="' + o + '"><div class="mh-icon-twitter" style="' + r + 'background-color:#03b3ee;"></div></div>'), s.options.showpinterest && (n += '<div class="html5-social-btn' + (s.options.socialrotateeffect ? " html5-rotate" : "") + ' html5-social-pinterest" style="' + o + '"><div class="mh-icon-pinterest" style="' + r + 'background-color:#c92228;"></div></div>'), n += '<div style="clear:both;"></div></div>', s.$lightboxBox.append(n), e(".html5-social-btn", s.$lightbox).click(function () {
            var t = window.location.href + (window.location.href.indexOf("?") < 0 ? "?" : "&") + "html5lightboxshare=" + encodeURIComponent(s.currentElem[1]),
                i = s.currentElem[2],
                n = s.currentElem[1];
            if (0 == s.currentElem[0]) n = s.absoluteUrl(s.currentElem[1]);else if (3 == s.currentElem[0]) n = "https://img.youtube.com/vi/" + s.getYoutubeId(s.currentElem[1]) + "/0.jpg";else {
              var o = e('.html5lightbox[href="' + s.currentElem[1] + '"]');
              if (o.length > 0) if (o.data("shareimage") && o.data("shareimage").length > 0) n = s.absoluteUrl(o.data("shareimage"));else if (o.data("thumbnail") && o.data("thumbnail").length > 0) n = s.absoluteUrl(o.data("thumbnail"));else {
                var r = e("img", o);
                r.length > 0 && (n = s.absoluteUrl(r.attr("src")));
              }
            }
            var a = 2 == s.currentElem[0] || 3 == s.currentElem[0] || 4 == s.currentElem[0] || 8 == s.currentElem[0] || 9 == s.currentElem[0] || 11 == s.currentElem[0] || 12 == s.currentElem[0];
            return e(this).hasClass("html5-social-facebook") ? window.open("https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(t) + "&t=" + encodeURIComponent(i), "_blank") : e(this).hasClass("html5-social-twitter") ? window.open("https://twitter.com/share?url=" + encodeURIComponent(t) + "&text=" + encodeURIComponent(i), "_blank") : e(this).hasClass("html5-social-pinterest") && window.open("https://pinterest.com/pin/create/bookmarklet/?media=" + encodeURIComponent(n) + "&url=" + encodeURIComponent(t) + "&description=" + encodeURIComponent(i) + "&is_video=" + (a ? "true" : "false"), "_blank"), !1;
          });
        }

        if (s.options.fullscreenmode ? (s.$lightbox.append("<div class='html5-next-fullscreen' style='cursor:pointer;position:absolute;right:" + s.options.bordersize + "px;top:50%;margin-top:-16px;'><img src='" + s.options.fullscreennextimage + "'></div><div class='html5-prev-fullscreen' style='cursor:pointer;position:absolute;left:" + s.options.bordersize + "px;top:50%;margin-top:-16px;'><img src='" + s.options.fullscreenprevimage + "'></div>"), s.$next = e(".html5-next-fullscreen", s.$lightbox), s.$prev = e(".html5-prev-fullscreen", s.$lightbox), s.$lightboxBox.append("<div class='html5-next-bottom-fullscreen' style='cursor:pointer;position:absolute;top:100%;right:0;margin-top:8px;'><img src='" + s.options.fullscreennextimage + "'></div><div class='html5-prev-bottom-fullscreen' style='cursor:pointer;position:absolute;top:100%;left:0;margin-top:8px;'><img src='" + s.options.fullscreenprevimage + "'></div>"), s.$nextbottom = e(".html5-next-bottom-fullscreen", s.$lightbox), s.$prevbottom = e(".html5-prev-bottom-fullscreen", s.$lightbox), s.$nextbottom.click(function () {
          s.nextArrowClicked();
        }), s.$prevbottom.click(function () {
          s.prevArrowClicked();
        }), s.$lightbox.append("<div id='html5-close-fullscreen' style='display:block;cursor:pointer;position:absolute;top:0;right:0;margin-top:0;margin-right:0;'><img src='" + s.options.fullscreencloseimage + "'></div>"), s.$close = e("#html5-close-fullscreen", s.$lightbox)) : (s.$elemWrap.append("<div id='html5-next' style='display:none;cursor:pointer;position:absolute;right:" + s.options.bordersize + "px;top:50%;margin-top:-16px;'><img src='" + s.options.nextimage + "'></div><div id='html5-prev' style='display:none;cursor:pointer;position:absolute;left:" + s.options.bordersize + "px;top:50%;margin-top:-16px;'><img src='" + s.options.previmage + "'></div>"), s.$next = e("#html5-next", s.$lightbox), s.$prev = e("#html5-prev", s.$lightbox), (s.options.isTouch && s.options.navarrowsalwaysshowontouch || s.options.alwaysshownavarrows) && (s.$lightboxBox.append("<div class='html5-next-touch' style='display:block;cursor:pointer;position:absolute;'><img src='" + s.options.nextimage + "'></div><div class='html5-prev-touch' style='display:block;cursor:pointer;position:absolute;'><img src='" + s.options.previmage + "'></div>"), s.$nexttouch = e(".html5-next-touch", s.$lightbox), s.$prevtouch = e(".html5-prev-touch", s.$lightbox), s.$nexttouch.click(function () {
          s.nextArrowClicked();
        }), s.$prevtouch.click(function () {
          s.prevArrowClicked();
        })), s.$lightboxBox.append("<div id='html5-close' style='display:none;cursor:pointer;position:absolute;top:0;right:0;margin-top:-16px;margin-right:-16px;'><img src='" + s.options.closeimage + "'></div>"), s.$close = e("#html5-close", s.$lightbox)), s.$watermark = e("#html5-watermark", s.$lightbox), s.options.stamp) s.$watermark.html("<a href='" + s.options.freelink + "' style='text-decoration:none;' title='jQuery Lightbox'><div style='display:block;width:170px;height:20px;text-align:center;border-radius:3px;-moz-border-radius:3px;-webkit-border-radius:3px;background-color:#fff;color:#333;font:12px Arial,sans-serif;'><div style='line-height:20px;'>" + s.options.freemark + "</div></div></a>");else if (s.options.watermark) {
          var a = "<img src='" + s.options.watermark + "' style='border:none;' />";
          s.options.watermarklink && (a = "<a href='" + s.options.watermarklink + "' target='_blank'>" + a + "</a>"), s.$watermark.html(a);
        }
        s.options.closeonoverlay && e("#html5-lightbox-overlay", s.$lightbox).click(s.finish), s.$close.click(s.finish), s.$next.click(function () {
          s.nextArrowClicked();
        }), s.$prev.click(function () {
          s.prevArrowClicked();
        }), e(window).resize(function () {
          clearTimeout(s.options.resizeTimeout), s.options.resizeTimeout = setTimeout(function () {
            s.resizeWindow();
          }, 500);
        }), e(window).scroll(function () {
          s.scrollBox();
        }), e(window).on("orientationchange", function (t) {
          s.options.isMobile && s.resizeWindow();
        }), s.options.isIPhone && (s.options.windowInnerHeight = window.innerHeight, setInterval(function () {
          s.options.windowInnerHeight != window.innerHeight && (s.options.windowInnerHeight = window.innerHeight, s.resizeWindow());
        }, 500)), s.options.enabletouchswipe && s.enableSwipe();
      }, s.slideTimer = function (t, e, i) {
        var s = this;
        s.timeout = t;
        var n = null,
            o = 0,
            r = !1,
            a = !1,
            l = !1;
        return this.pause = function () {
          a && (r = !0, clearInterval(n));
        }, this.resume = function (t) {
          l && !t || (l = !1, a && r && (r = !1, n = setInterval(function () {
            (o += 50) > s.timeout && (clearInterval(n), e && e()), i && i(o / s.timeout);
          }, 50)));
        }, this.stop = function () {
          clearInterval(n), i && i(-1), o = 0, r = !1, a = !1;
        }, this.start = function () {
          o = 0, r = !1, a = !0, n = setInterval(function () {
            (o += 50) > s.timeout && (clearInterval(n), e && e()), i && i(o / s.timeout);
          }, 50);
        }, this.startandpause = function () {
          o = 0, r = !0, a = !0, l = !0;
        }, this;
      }, s.updateTimer = function (t) {
        var i = Math.round(100 * t);
        i > 100 && (i = 100), i < 0 && (i = 0), e("#html5-timer", s.$lightbox).css({
          display: "block",
          width: i + "%"
        });
      }, s.initSlide = function () {
        s.autosliding = !1, s.slideTimeout = s.slideTimer(s.options.slideinterval, function () {
          s.gotoSlide(-1);
        }, s.options.showtimer ? function (t) {
          s.updateTimer(t);
        } : null), s.options.autoslide && (s.slideTimeout.stop(), s.autosliding = !0);
      }, s.nextArrowClicked = function () {
        s.options.nextElem <= s.options.curElem && s.options.onlastarrowclicked && window[s.options.onlastarrowclicked] && "function" == typeof window[s.options.onlastarrowclicked] && window[s.options.onlastarrowclicked](), s.gotoSlide(-1);
      }, s.prevArrowClicked = function () {
        s.options.prevElem >= s.options.curElem && s.options.onfirstarrowclicked && window[s.options.onfirstarrowclicked] && "function" == typeof window[s.options.onfirstarrowclicked] && window[s.options.onfirstarrowclicked](), s.gotoSlide(-2);
      }, s.calcNextPrevElem = function () {
        s.options.nextElem = -1, s.options.prevElem = -1, s.options.inGroup = !1, s.options.groupIndex = 0, s.options.groupCount = 0;

        for (var t = s.elemArray[s.options.curElem][3], e = 0; e < s.elemArray.length; e++) {
          s.matchGroup(t, s.elemArray[e][3]) && (e == s.options.curElem && (s.options.groupIndex = s.options.groupCount), s.options.groupCount++);
        }

        var i,
            n = s.elemArray[s.options.curElem][3];

        if (void 0 != n && null != n) {
          for (i = s.options.curElem + 1; i < s.elemArray.length; i++) {
            if (s.matchGroup(n, s.elemArray[i][3])) {
              s.options.nextElem = i;
              break;
            }
          }

          if (s.options.nextElem < 0) for (i = 0; i < s.options.curElem; i++) {
            if (s.matchGroup(n, s.elemArray[i][3])) {
              s.options.nextElem = i;
              break;
            }
          }

          if (s.options.nextElem >= 0) {
            for (i = s.options.curElem - 1; i >= 0; i--) {
              if (s.matchGroup(n, s.elemArray[i][3])) {
                s.options.prevElem = i;
                break;
              }
            }

            if (s.options.prevElem < 0) for (i = s.elemArray.length - 1; i > s.options.curElem; i--) {
              if (s.matchGroup(n, s.elemArray[i][3])) {
                s.options.prevElem = i;
                break;
              }
            }
          }
        }

        (s.options.nextElem >= 0 || s.options.prevElem >= 0) && (s.options.inGroup = !0);
      }, s.calcBoxPosition = function (t, i) {
        var n = t + 2 * s.options.bordersize,
            o = i + 2 * s.options.bordersize,
            r = window.innerHeight ? window.innerHeight : e(window).height(),
            a = Math.round((r - s.options.navheight) / 2 - o / 2);
        "bottom" == s.options.titlestyle && (a -= Math.round(s.options.barheight / 2));
        var l = e(window).width() < s.options.navarrowsbottomscreenwidth ? s.options.bordertopmarginsmall : s.options.bordertopmargin;

        if (a < l && (a = l), s.options.insideiframe && window.self != window.top && parent.window.jQuery && parent.window.jQuery("#" + s.options.iframeid).length) {
          var h = parent.window.jQuery("#" + s.options.iframeid).offset().top,
              c = parent.window.document.body.scrollTop;
          a = l, a += c > h ? c - h : 0;
        }

        return [n, o, a];
      }, s.hideNavArrows = function () {
        var t = !1,
            e = !1;
        s.options.inGroup && ((s.options.arrowloop || !s.options.arrowloop && s.options.prevElem < s.options.curElem) && (t = !0), (s.options.arrowloop || !s.options.arrowloop && s.options.prevElem < s.options.curElem) && (e = !0)), t ? (s.$prev.removeClass("html5-hide"), s.$prevbottom && s.$prevbottom.removeClass("html5-hide"), s.$prevtouch && s.$prevtouch.removeClass("html5-hide")) : (s.$prev.addClass("html5-hide"), s.$prevbottom && s.$prevbottom.addClass("html5-hide"), s.$prevtouch && s.$prevtouch.addClass("html5-hide")), e ? (s.$next.removeClass("html5-hide"), s.$nextbottom && s.$nextbottom.removeClass("html5-hide"), s.$nexttouch && s.$nexttouch.removeClass("html5-hide")) : (s.$next.addClass("html5-hide"), s.$nextbottom && s.$nextbottom.addClass("html5-hide"), s.$nexttouch && s.$nexttouch.addClass("html5-hide"));
      }, s.clickHandler = function () {
        var t = e(this),
            i = {};
        if (e.each(t.data(), function (t, e) {
          i[t.toLowerCase()] = e;
        }), s.options = e.extend(s.options, s.defaultoptions, i), e(window).trigger("html5lightbox.lightboxshow"), s.init(), s.elemArray.length <= 0) return !0;
        s.hideObjects();

        for (var n = 0; n < s.elemArray.length && s.elemArray[n][1] != t.attr("href"); n++) {
          ;
        }

        if (n == s.elemArray.length) return !0;
        s.options.curElem = n, s.calcNextPrevElem(), s.reset(), s.$lightbox.show();
        var o = s.calcBoxPosition(s.options.loadingwidth, s.options.loadingheight),
            r = o[0],
            a = o[1],
            l = o[2];
        return s.options.iequirksmode ? s.$lightboxBox.css({
          top: l
        }) : s.$lightboxBox.css({
          "margin-top": l
        }), s.options.positionFixed || s.$lightboxBox.css("margin-top", e(window).scrollTop() + s.options.bordertopmargin), "left" == s.options.titlestyle || "right" == s.options.titlestyle ? s.$lightboxBox.css({
          width: r,
          height: a
        }) : (s.$lightboxBox.css({
          width: r,
          height: "auto"
        }), s.$elemWrap.css({
          width: r,
          height: a
        })), s.loadCurElem(), !1;
      }, s.loadThumbnail = function (t, i) {
        var n = new Image();
        e(n).on("load", function () {
          var n;
          n = this.width / this.height <= s.options.thumbwidth / s.options.thumbheight ? "width:100%;" : "height:100%;", e(".html5-nav-thumb").eq(i).html("<img style='" + n + "' src='" + t + "' />");
        }), n.src = t;
      }, s.matchGroup = function (t, i) {
        if (s.options.showall) return !0;
        if (!t || !i) return !1;
        var n = t.split(":"),
            o = i.split(":"),
            r = !1;

        for (var a in n) {
          if (e.inArray(n[a], o) > -1) {
            r = !0;
            break;
          }
        }

        return r;
      }, s.showNavigation = function () {
        if (s.options.shownavigation && s.currentElem && s.currentElem[3]) {
          var t,
              i = !1,
              n = s.currentElem[3];

          for (t = 0; t < s.elemArray.length; t++) {
            if (s.matchGroup(n, s.elemArray[t][3]) && s.elemArray[t][8] && s.elemArray[t][8].length > 0) {
              i = !0;
              break;
            }
          }

          if (i && (s.options.navheight = s.options.thumbheight + s.options.thumbtopmargin + s.options.thumbbottommargin, !(e(".html5-nav").length > 0))) {
            e("body").append("<div class='html5-nav' style='display:block;position:fixed;bottom:0;left:0;width:100%;height:" + s.options.navheight + "px;z-index:9999999;'><div class='html5-nav-container' style='position:relative;margin:" + s.options.thumbtopmargin + "px auto " + s.options.thumbbottommargin + "px;'><div class='html5-nav-prev' style='display:block;position:absolute;cursor:pointer;width:" + s.options.navbuttonwidth + 'px;height:100%;left:0;top:0;background:url("' + s.options.navarrowsprevimage + "\") no-repeat left center;'></div><div class='html5-nav-mask' style='display:block;position:relative;margin:0 auto;overflow:hidden;'><div class='html5-nav-list'></div></div><div class='html5-nav-next' style='display:block;position:absolute;cursor:pointer;width:" + s.options.navbuttonwidth + 'px;height:100%;right:0;top:0;background:url("' + s.options.navarrowsnextimage + "\") no-repeat right center;'></div></div></div>");
            var o = 0;

            for (t = 0; t < s.elemArray.length; t++) {
              s.matchGroup(n, s.elemArray[t][3]) && s.elemArray[t][8] && s.elemArray[t][8].length > 0 && (e(".html5-nav-list").append("<div class='html5-nav-thumb' data-arrayindex='" + t + "' style='float:left;overflow:hidden;cursor:pointer;opacity:" + s.options.thumbopacity + ";margin: 0 " + s.options.thumbgap / 2 + "px;width:" + s.options.thumbwidth + "px;height:" + s.options.thumbheight + "px;border:" + s.options.thumbborder + "px solid " + s.options.thumbbordercolor + ";'></div>"), this.loadThumbnail(s.elemArray[t][8], o), o++);
            }

            e(".html5-nav-thumb").hover(function () {
              e(this).css({
                opacity: 1
              }), e(this).css({
                border: s.options.thumbborder + "px solid " + s.options.thumbhighlightbordercolor
              });
            }, function () {
              e(this).css({
                opacity: s.options.thumbopacity
              }), e(this).css({
                border: s.options.thumbborder + "px solid " + s.options.thumbbordercolor
              });
            }), e(".html5-nav-thumb").click(function () {
              var t = e(this).data("arrayindex");
              t >= 0 && s.gotoSlide(t);
            }), s.options.totalwidth = o * (s.options.thumbgap + s.options.thumbwidth + 2 * s.options.thumbborder), e(".html5-nav-list").css({
              display: "block",
              position: "relative",
              "margin-left": 0,
              width: s.options.totalwidth + "px"
            }).append("<div style='clear:both;'></div>");
            var r = e(".html5-nav-mask"),
                a = e(".html5-nav-prev"),
                l = e(".html5-nav-next");
            a.click(function () {
              var t = e(".html5-nav-list"),
                  i = e(".html5-nav-next"),
                  n = e(window).width() - 2 * s.options.navbuttonwidth,
                  o = parseInt(t.css("margin-left")) + n;
              o >= 0 ? (o = 0, e(this).css({
                "background-position": "center left"
              })) : e(this).css({
                "background-position": "center right"
              }), o <= n - s.options.totalwidth ? i.css({
                "background-position": "center left"
              }) : i.css({
                "background-position": "center right"
              }), t.animate({
                "margin-left": o
              });
            }), l.click(function () {
              var t = e(".html5-nav-list"),
                  i = e(".html5-nav-prev"),
                  n = e(window).width() - 2 * s.options.navbuttonwidth,
                  o = parseInt(t.css("margin-left")) - n;
              o <= n - s.options.totalwidth ? (o = n - s.options.totalwidth, e(this).css({
                "background-position": "center left"
              })) : e(this).css({
                "background-position": "center right"
              }), o >= 0 ? i.css({
                "background-position": "center left"
              }) : i.css({
                "background-position": "center right"
              }), t.animate({
                "margin-left": o
              });
            });
            var h = e(window).width();
            s.options.totalwidth <= h ? (r.css({
              width: s.options.totalwidth + "px"
            }), a.hide(), l.hide()) : (r.css({
              width: h - 2 * s.options.navbuttonwidth + "px"
            }), a.show(), l.show());
          }
        }
      }, s.loadElem = function (t) {
        switch (s.currentElem = t, s.showing = !0, s.showNavigation(), s.$elem.off("mouseenter").off("mouseleave").off("mousemove"), s.$loading.show(), s.options.onshowitem && window[s.options.onshowitem] && "function" == typeof window[s.options.onshowitem] && window[s.options.onshowitem](t), t[0]) {
          case 0:
            var i = new Image();
            e(i).on("load", function () {
              s.showImage(t, i.width, i.height);
            }), e(i).on("error", function () {
              s.showError();
            }), i.src = t[1];
            break;

          case 1:
            s.showSWF(t);
            break;

          case 2:
          case 8:
            s.showVideo(t);
            break;

          case 3:
          case 4:
          case 9:
          case 11:
          case 12:
            s.showYoutubeVimeo(t);
            break;

          case 5:
            s.showPDF(t);
            break;

          case 6:
            s.showMP3(t);
            break;

          case 7:
            s.showWeb(t);
            break;

          case 10:
            s.showDiv(t);
        }

        s.options.googleanalyticsaccount && window._gaq && window._gaq.push(["_trackEvent", "Lightbox", "Open", t[1]]);
      }, s.loadCurElem = function () {
        s.loadElem(s.elemArray[s.options.curElem]);
      }, s.showError = function () {
        s.$loading.hide(), s.resizeLightbox(s.options.errorwidth, s.options.errorheight, !0, function () {
          s.$loading.hide(), s.$error.show(), s.$elem.fadeIn(s.options.fadespeed, function () {
            s.showData();
          });
        });
      }, s.calcTextWidth = function (t) {
        return t - 36;
      }, s.showTitle = function (t, i, n) {
        "inside" == s.options.titlestyle && s.$elemData.css({
          width: t + "px"
        });
        var o = "";
        s.options.showtitle && i && i.length > 0 && (o += i), s.options.inGroup && (s.options.showtitleprefix && (o = s.options.titleprefix.replace("%NUM", s.options.groupIndex + 1).replace("%TOTAL", s.options.groupCount) + " " + o), s.options.showplaybutton && (o = "<div id='html5-playpause' style='display:inline-block;cursor:pointer;vertical-align:middle;'><div id='html5-play' style='display:block;'><img src='" + s.options.playimage + "'></div><div id='html5-pause' style='display:none;'><img src='" + s.options.pauseimage + "'></div></div> " + o)), s.options.showdescription && n && n.length > 0 && (o += '<p class="html5-description">' + n + "</p>"), s.$text.html(o), s.options.inGroup && s.options.showplaybutton && (s.autosliding ? (e("#html5-play", s.$lightbox).hide(), e("#html5-pause", s.$lightbox).show()) : (e("#html5-play", s.$lightbox).show(), e("#html5-pause", s.$lightbox).hide()), e("#html5-play", s.$lightbox).click(function () {
          e("#html5-play", s.$lightbox).hide(), e("#html5-pause", s.$lightbox).show(), s.slideTimeout && (s.slideTimeout.stop(), s.slideTimeout.start(), s.autosliding = !0);
        }), e("#html5-pause", s.$lightbox).click(function () {
          e("#html5-play", s.$lightbox).show(), e("#html5-pause", s.$lightbox).hide(), s.slideTimeout && (s.slideTimeout.stop(), s.autosliding = !1);
        })), e("#html5-social", s.$lightbox).show();
      }, s.showImage = function (t, e, i) {
        var n, o;
        t[4] ? n = t[4] : (n = e, t[4] = e), t[5] ? o = t[5] : (o = i, t[5] = i);
        var r = s.calcElemSize({
          w: n,
          h: o
        }, s.options.imagekeepratio);
        s.resizeLightbox(r.w, r.h, !0, function () {
          s.$loading.hide(), s.showTitle(r.w, t[2], t[9]);
          var e = s.options.showtimer && s.options.inGroup ? "<div id='html5-timer' style='display:none;position:absolute;" + s.options.timerposition + ":0;left:0;width:0;height:" + s.options.timerheight + "px;background-color:" + s.options.timercolor + ";opacity:" + s.options.timeropacity + ";'></div>" : "";
          s.$image.show(), s.$image.html("<div id='html5-image-container' style='display:block;position:relative;width:100%;height:100%;" + (s.options.imagekeepratio ? "" : "overflow-x:auto;overflow-y:scroll;-ms-overflow-x:auto;-ms-overflow-y:scroll;") + "'><img src='" + t[1] + "' width='100%' height='" + (s.options.imagekeepratio ? "100%" : "auto") + "' />" + e + "</div>"), s.$elem.fadeIn(s.options.fadespeed, function () {
            s.showData();
          }), s.autosliding && (s.slideTimeout.stop(), s.slideTimeout.start());
        });
      }, s.showSWF = function (t) {
        var i = t[4] ? t[4] : n,
            r = t[5] ? t[5] : o,
            a = s.calcElemSize({
          w: i,
          h: r
        }, !0);
        i = a.w, r = a.h, s.resizeLightbox(i, r, !0, function () {
          s.$loading.hide(), s.showTitle(a.w, t[2], t[9]), s.$image.html("<div id='html5lightbox-swf' style='display:block;width:100%;height:100%;'></div>").show(), s.embedFlash(e("#html5lightbox-swf"), t[1], "window", {
            width: i,
            height: r
          }), s.$elem.show(), s.showData(), s.autosliding && (s.slideTimeout.stop(), s.slideTimeout.start());
        });
      }, s.showVideo = function (t) {
        s.slideTimeout.stop();
        var i = t[4] ? t[4] : n,
            r = t[5] ? t[5] : o,
            a = s.calcElemSize({
          w: i,
          h: r
        }, !0);
        i = a.w, r = a.h, s.resizeLightbox(i, r, !0, function () {
          s.$loading.hide(), s.showTitle(a.w, t[2], t[9]), s.$image.html("<div id='html5lightbox-video' style='display:block;width:100%;height:100%;overflow:hidden;background-color:" + s.options.videobgcolor + ";'></div>").show();
          var n = !1;

          if (s.options.isIE678 || 8 == t[0] || s.options.isIE9 && s.options.useflashonie9 || s.options.isIE10 && s.options.useflashonie10 || s.options.isIE11 && s.options.useflashonie11 ? n = !1 : s.options.isMobile ? n = !0 : !s.options.html5player && s.options.flashInstalled || !s.options.html5VideoSupported || (n = !0, (s.options.isFirefox || s.options.isOpera) && (t[6] || t[7] || s.options.canplaymp4 && !s.options.useflashformp4onfirefox || (n = !1))), n) {
            var o = t[1];
            (s.options.isFirefox || s.options.isOpera) && (t[6] ? o = t[6] : t[7] && (o = t[7])), s.embedHTML5Video(e("#html5lightbox-video"), o, s.options.autoplay, s.options.loopvideo);
          } else {
            var l = t[1];
            "/" != l.charAt(0) && "http:" != l.substring(0, 5) && "https:" != l.substring(0, 6) && (l = s.options.htmlfolder + l), s.embedFlash(e("#html5lightbox-video"), s.options.jsfolder + "html5boxplayer.swf", "transparent", {
              width: i,
              height: r,
              jsobjectname: "html5Lightbox",
              hidecontrols: s.options.videohidecontrols ? "1" : "0",
              hideplaybutton: "0",
              videofile: l,
              hdfile: "",
              ishd: "0",
              defaultvolume: s.options.defaultvideovolume,
              autoplay: s.options.autoplay ? "1" : "0",
              loop: s.options.loopvideo ? "1" : "0",
              errorcss: ".html5box-error" + s.options.errorcss,
              id: 0
            });
          }

          s.$elem.show(), s.showData();
        });
      }, s.loadNext = function () {
        e(window).trigger("html5lightbox.videofinished"), s.autosliding ? s.gotoSlide(-1) : s.options.autoclose && setTimeout(function () {
          s.finish();
        }, s.options.autoclosedelay);
      }, s.getYoutubeParams = function (t) {
        var e = {};
        if (t.indexOf("?") < 0) return e;

        for (var i = t.substring(t.indexOf("?") + 1).split("&"), s = 0; s < i.length; s++) {
          var n = i[s].split("=");
          n && 2 == n.length && "v" != n[0].toLowerCase() && (e[n[0].toLowerCase()] = n[1]);
        }

        return e;
      }, s.getYoutubeId = function (t) {
        var e = "",
            i = t.match(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\??v?=?))([^#\&\?]*).*/);
        return i && i[7] && 11 == i[7].length && (e = i[7]), e;
      }, s.prepareYoutubeHref = function (t) {
        var e = "https://www.youtube.com/embed/" + s.getYoutubeId(t),
            i = this.getYoutubeParams(t),
            n = !0;

        for (var o in i) {
          n ? (e += "?", n = !1) : e += "&", e += o + "=" + i[o];
        }

        return e;
      }, s.prepareDailymotionHref = function (t) {
        if (t.match(/\:\/\/.*(dai\.ly)/i)) {
          t = "https://www.dailymotion.com/embed/video/" + t.match(/(dai\.ly\/)([a-zA-Z0-9\-\_]+)/)[2];
        }

        return t;
      }, s.showYoutubeVimeo = function (t) {
        s.slideTimeout.stop();
        var i = t[4] ? t[4] : n,
            r = t[5] ? t[5] : o,
            a = s.calcElemSize({
          w: i,
          h: r
        }, !0);
        i = a.w, r = a.h, s.resizeLightbox(i, r, !0, function () {
          s.$loading.hide(), s.showTitle(a.w, t[2], t[9]), s.$image.html("<div id='html5lightbox-video' style='display:block;width:100%;height:100%;overflow:hidden;'></div>").show();
          var i = t[1],
              n = "";
          if (3 == t[0] && (n = s.getYoutubeId(i), i = s.prepareYoutubeHref(i)), 9 == t[0] && (i = s.prepareDailymotionHref(i)), s.options.autoplay && (i += i.indexOf("?") < 0 ? "?" : "&", 11 == t[0] ? i += "autoPlay=true" : i += "autoplay=1"), s.options.loopvideo) switch (i += i.indexOf("?") < 0 ? "?" : "&", t[0]) {
            case 3:
              i += "loop=1&playlist=" + n;
              break;

            case 4:
            case 9:
              i += "loop=1";
              break;

            case 11:
              i += "endVideoBehavior=loop";
          }
          if (3 == t[0] ? (i.indexOf("?") < 0 ? i += "?wmode=transparent&rel=0" : i += "&wmode=transparent&rel=0", s.options.videohidecontrols && (i += "&controls=0&showinfo=0"), i += "&enablejsapi=1&origin=" + document.location.protocol + "//" + document.location.hostname) : 4 == t[0] && (i += i.indexOf("?") < 0 ? "?" : "&", i += "api=1&player_id=html5boxiframevideo"), e("#html5lightbox-video").html("<iframe style='margin:0;padding:0;border:0;' id='html5boxiframevideo' width='100%' height='100%' src='" + i + "' frameborder='0' webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>"), s.$elem.show(), s.showData(), 3 == t[0] && "object" == (typeof YT === "undefined" ? "undefined" : _typeof(YT)) && "function" == typeof YT.Player) s.ytplayer = new YT.Player("html5boxiframevideo", {
            events: {
              onStateChange: function onStateChange(t) {
                t.data == YT.PlayerState.ENDED && (e(window).trigger("html5lightbox.videofinished"), s.autosliding ? s.gotoSlide(-1) : s.options.autoclose && setTimeout(function () {
                  s.finish();
                }, s.options.autoclosedelay));
              }
            }
          });else if (4 == t[0] && "function" == typeof $f) {
            var o = e("#html5boxiframevideo")[0];
            s.vimeoPlayer = $f(o), s.vimeoPlayer.addEvent("ready", function () {
              s.vimeoPlayer.addEvent("finish", function (t) {
                e(window).trigger("html5lightbox.videofinished"), s.autosliding ? s.gotoSlide(-1) : s.options.autoclose && setTimeout(function () {
                  s.finish();
                }, s.options.autoclosedelay);
              });
            });
          }
        });
      }, s.showPDF = function (t) {
        if (s.options.enablepdfjs) {
          if (s.options.isIPhone && s.options.openpdfinnewtaboniphone || s.options.isIPad && s.options.openpdfinnewtabonipad) {
            return (i = window.open(t[1], "_blank")).focus(), void s.finish();
          }

          var e = t[1];
          "http:" != e.substring(0, 5) && "https:" != e.substring(0, 6) && (e = s.absoluteUrl(e)), t[0] = 7, t[1] = s.options.jsfolder + "pdfjs/web/viewer.html?file=" + encodeURIComponent(e), s.showWeb(t);
        } else {
          if (s.options.isIPhone || s.options.isIPad || s.options.isAndroid || s.options.isIE || s.options.isIE11) {
            var i = window.open(t[1], "_blank");
            return i.focus(), void s.finish();
          }

          t[0] = 7, s.showWeb(t);
        }
      }, s.showMP3 = function (t) {}, s.showDiv = function (t) {
        var i = e(window).width(),
            n = window.innerHeight ? window.innerHeight : e(window).height(),
            o = t[4] ? t[4] : i,
            r = t[5] ? t[5] : n - s.options.navheight,
            a = s.calcElemSize({
          w: o,
          h: r
        }, !1);
        o = a.w, r = a.h, s.resizeLightbox(o, r, !0, function () {
          s.$loading.hide(), s.showTitle(a.w, t[2], t[9]), s.$image.html("<div id='html5lightbox-div' style='display:block;width:100%;height:" + (s.options.autoresizecontent ? "auto" : "100%") + ";" + (s.options.isIOS ? "-webkit-overflow-scrolling:touch;overflow-y:scroll;" : "overflow:auto;") + "'></div>").show();
          var i = t[1];
          e(i).length > 0 ? e("#html5lightbox-div").html(e(i).html()) : e("#html5lightbox-div").html("<div class='html5-error'>The specified div ID does not exist.</div>"), s.$elem.show(), s.showData(), s.options.autoresizecontent && s.resizeWindow(), s.autosliding && (s.slideTimeout.stop(), s.slideTimeout.start());
        });
      }, s.isSameDomain = function (t) {
        if ("http:" != t.substring(0, 5) && "https:" != t.substring(0, 6)) return !0;
        var e = document.createElement("a");
        e.setAttribute("href", t);
        var i = e.protocol == document.location.protocol && e.host == document.location.host && e.port == document.location.port;
        return e = null, i;
      }, s.showWeb = function (t) {
        var i = e(window).width(),
            n = window.innerHeight ? window.innerHeight : e(window).height(),
            o = t[4] ? t[4] : i,
            r = t[5] ? t[5] : n - s.options.navheight,
            a = s.calcElemSize({
          w: o,
          h: r
        }, !1);
        o = a.w, r = a.h, s.resizeLightbox(o, r, !0, function () {
          s.$loading.hide(), s.showTitle(a.w, t[2], t[9]), s.$image.html("<div id='html5lightbox-web' style='display:block;width:100%;height:100%;" + (s.options.isIOS ? "-webkit-overflow-scrolling:touch;overflow-y:scroll;" : "") + "'></div>").show(), e("#html5lightbox-web").html("<iframe style='margin:0;padding:0;border:0;' id='html5lightbox-web-iframe' width='100%' height='100%' src='" + t[1] + "' frameborder='0' webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>"), s.$elem.show(), s.showData(), s.options.autoresizecontent && s.isSameDomain(t[1]) && (e("#html5lightbox-web-iframe", s.$lightbox).data("sameorigin", !0), e("#html5lightbox-web-iframe", s.$lightbox).on("load", function () {
            e(this).data("sameoriginloaded", !0), s.resizeWindow();
          })), s.autosliding && (s.slideTimeout.stop(), s.slideTimeout.start());
        });
      }, s.scrollBox = function () {}, s.resizeWindow = function () {
        if (s.currentElem && s.options.responsive) {
          var t = e(window).width(),
              i = window.innerHeight ? window.innerHeight : e(window).height();
          s.options.responsivebarheight && (i <= s.options.smallscreenheight ? s.options.barheight = s.options.barheightonsmallheight : s.options.barheight = s.options.barheightoriginal, "bottom" == s.options.titlestyle && "auto" != s.options.barautoheight && s.$elemData.css({
            height: s.options.barheight + "px",
            "max-height": s.options.barheight + "px"
          }));
          var r, a, l;
          7 == s.currentElem[0] || 10 == s.currentElem[0] ? (r = s.currentElem[4] ? s.currentElem[4] : t, a = s.currentElem[5] ? s.currentElem[5] : i - s.options.navheight, l = !1) : (r = s.currentElem[4] ? s.currentElem[4] : n, a = s.currentElem[5] ? s.currentElem[5] : o, l = 0 != s.currentElem[0] || s.options.imagekeepratio);
          var h = s.calcElemSize({
            w: r,
            h: a
          }, l),
              c = s.calcBoxPosition(h.w, h.h),
              u = c[0],
              p = c[1],
              d = c[2];

          if (s.$lightboxBox.css({
            "margin-top": d
          }), s.options.positionFixed || s.$lightboxBox.css("margin-top", e(window).scrollTop() + s.options.bordertopmargin), "left" == s.options.titlestyle || "right" == s.options.titlestyle ? s.$lightboxBox.css({
            width: u,
            height: p
          }) : (s.$lightboxBox.css({
            width: u,
            height: "auto"
          }), s.$elemWrap.css({
            width: u,
            height: p
          })), "inside" == s.options.titlestyle && s.$elemData.css({
            width: h.w + "px"
          }), s.options.autoresizecontent && (7 == s.currentElem[0] || 10 == s.currentElem[0])) {
            var f = !1;

            if (7 == s.currentElem[0] && e("#html5lightbox-web-iframe", s.$lightbox).length > 0 && e("#html5lightbox-web-iframe", s.$lightbox).data("sameoriginloaded")) {
              var m = e("#html5lightbox-web-iframe", s.$lightbox)[0];
              m && m.contentWindow && m.contentWindow.document && m.contentWindow.document.documentElement.offsetHeight && a > m.contentWindow.document.documentElement.offsetHeight && (a = m.contentWindow.document.documentElement.offsetHeight, f = !0);
            } else if (10 == s.currentElem[0] && e("#html5lightbox-div", s.$lightbox).length > 0) {
              var g = e("#html5lightbox-div", s.$lightbox).height();
              a > g && (a = g, f = !0);
            }

            f && (h = s.calcElemSize({
              w: r,
              h: a
            }, l), u = (c = s.calcBoxPosition(h.w, h.h))[0], p = c[1], d = c[2], s.$lightboxBox.css({
              "margin-top": d
            }), s.options.positionFixed || s.$lightboxBox.css("margin-top", e(window).scrollTop() + s.options.bordertopmargin), "left" == s.options.titlestyle || "right" == s.options.titlestyle ? s.$lightboxBox.css({
              height: p
            }) : (s.$lightboxBox.css({
              height: "auto"
            }), s.$elemWrap.css({
              height: p
            })));
          }

          if (!(e(".html5-nav").length <= 0)) {
            e(".html5-nav-list").css({
              "margin-left": 0
            });

            var _ = e(".html5-nav-mask"),
                v = e(".html5-nav-prev"),
                b = e(".html5-nav-next"),
                t = e(window).width();

            s.options.totalwidth <= t ? (_.css({
              width: s.options.totalwidth + "px"
            }), v.hide(), b.hide()) : (_.css({
              width: t - 2 * s.options.navbuttonwidth + "px"
            }), v.show(), b.show());
          }
        }
      }, s.calcElemSize = function (t, i) {
        if (!s.options.responsive) return t;
        var n = e(window).width();
        n = n || e(document).width();
        var o = window.innerHeight ? window.innerHeight : e(window).height();
        o = o || e(document).height(), ("left" == s.options.titlestyle || "right" == s.options.titlestyle) && n > s.options.sidetobottomscreenwidth && (t.w = 100 * t.w / s.options.imagepercentage);
        var r = e(window).width() < s.options.navarrowsbottomscreenwidth ? s.options.bordertopmarginsmall : s.options.bordertopmargin,
            a = o - s.options.navheight - 2 * s.options.bordersize - 2 * r;
        "bottom" == s.options.titlestyle && (a -= s.options.barheight), (("left" == s.options.titlestyle || "right" == s.options.titlestyle) && n <= s.options.sidetobottomscreenwidth || s.options.notkeepratioonsmallheight && o <= s.options.smallscreenheight) && (i = !1), t.h > a ? (i && (t.w = Math.round(t.w * a / t.h)), t.h = a) : s.options.maxheight && (t.h = a);
        var l = n - 2 * s.options.bordersize - 2 * s.options.bordermargin;
        return (s.options.fullscreenmode && n > s.options.navarrowsbottomscreenwidth || (s.options.isTouch && s.options.navarrowsalwaysshowontouch || s.options.alwaysshownavarrows) && n > s.options.navarrowsbottomscreenwidth) && (l -= 64), t.w > l && (i && (t.h = Math.round(t.h * l / t.w)), t.w = l), t;
      }, s.showData = function () {
        s.$text.text().length > 0 && s.$elemData.show(), "bottom" != s.options.titlestyle && "inside" != s.options.titlestyle || s.$lightboxBox.css({
          height: "auto"
        }), s.$text.text().length > 0 && "bottom" == s.options.titlestyle && s.$elemData.css({
          "max-height": s.options.barheight + "px"
        }), e("#html5-lightbox-overlay", s.$lightbox).css({
          height: Math.max(e(window).height(), e(document).height())
        }), e(window).trigger("html5lightbox.lightboxopened");
      }, s.resizeLightbox = function (t, i, n, o) {
        s.hideNavArrows();
        var r = s.calcBoxPosition(t, i),
            a = r[0],
            l = r[1],
            h = r[2];

        if (s.$loading.hide(), s.$watermark.hide(), s.options.nextElem <= s.options.curElem && s.options.onlastitem && window[s.options.onlastitem] && "function" == typeof window[s.options.onlastitem] && window[s.options.onlastitem](s.currentElem), s.options.prevElem >= s.options.curElem && s.options.onfirstitem && window[s.options.onfirstitem] && "function" == typeof window[s.options.onfirstitem] && window[s.options.onfirstitem](s.currentElem), s.options.fullscreenmode || s.options.isTouch && s.options.navarrowsalwaysshowontouch || s.options.alwaysshownavarrows || (s.$elem.on("mouseenter mousemove", function () {
          (s.options.arrowloop && s.options.prevElem >= 0 || !s.options.arrowloop && s.options.prevElem >= 0 && s.options.prevElem < s.options.curElem) && s.$prev.fadeIn(), (s.options.arrowloop && s.options.nextElem >= 0 || !s.options.arrowloop && s.options.nextElem >= 0 && s.options.nextElem > s.options.curElem) && s.$next.fadeIn();
        }), s.$elem.on("mouseleave", function () {
          s.$next.fadeOut(), s.$prev.fadeOut();
        })), s.$lightboxBox.css({
          "margin-top": h
        }), s.options.positionFixed || s.$lightboxBox.css("margin-top", e(window).scrollTop() + s.options.bordertopmargin), "left" == s.options.titlestyle || "right" == s.options.titlestyle) {
          c = n ? s.options.resizespeed : 0;
          a == s.$lightboxBox.width() && l == s.$lightboxBox.height() && (c = 0), s.$lightboxBox.animate({
            width: a
          }, c).animate({
            height: l
          }, c, function () {
            s.onAnimateFinish(o);
          });
        } else {
          var c = n ? s.options.resizespeed : 0;
          a == s.$elemWrap.width() && l == s.$elemWrap.height() && (c = 0), s.$lightboxBox.css({
            width: a,
            height: "auto"
          }), s.$elemWrap.animate({
            width: a
          }, c).animate({
            height: l
          }, c, function () {
            s.onAnimateFinish(o);
          });
        }
      }, s.onAnimateFinish = function (t) {
        s.$loading.show(), s.$watermark.show(), s.$close.show(), s.$elem.css({
          "background-color": s.options.bgcolor
        }), t();
      }, s.reset = function () {
        s.options.stamp && s.$watermark.hide(), s.showing = !1, s.$image.empty(), s.$text.empty(), s.$error.hide(), s.$loading.hide(), s.$image.hide(), "bottom" != s.options.titlestyle && "inside" != s.options.titlestyle || s.$elemData.hide(), s.options.fullscreenmode || s.$close.hide(), s.$elem.css({
          "background-color": ""
        });
      }, s.resetNavigation = function () {
        s.options.navheight = 0, e(".html5-nav").remove();
      }, s.finish = function () {
        e("#html5-lightbox-video", s.$lightbox).length && e("#html5-lightbox-video", s.$lightbox).attr("src", ""), e("head").find("style").each(function () {
          "html5box-html5-lightbox" == e(this).data("creator") && e(this).remove();
        }), s.slideTimeout.stop(), s.reset(), s.resetNavigation(), s.$lightbox.remove(), e("#html5box-html5-lightbox").remove(), s.showObjects(), s.options.oncloselightbox && window[s.options.oncloselightbox] && "function" == typeof window[s.options.oncloselightbox] && window[s.options.oncloselightbox](s.currentElem), s.onLightboxClosed && "function" == typeof s.onLightboxClosed && s.onLightboxClosed(s.currentElem);
      }, s.pauseSlide = function () {}, s.playSlide = function () {}, s.gotoSlide = function (t) {
        if (-1 == t) {
          if (s.options.nextElem < 0) return;
          s.options.curElem = s.options.nextElem;
        } else if (-2 == t) {
          if (s.options.prevElem < 0) return;
          s.options.curElem = s.options.prevElem;
        } else t >= 0 && (s.options.curElem = t);

        s.autosliding && s.slideTimeout.stop(), s.calcNextPrevElem(), s.reset(), s.loadCurElem();
      }, s.enableSwipe = function () {
        s.$elem.html5lightboxTouchSwipe({
          preventWebBrowser: !1,
          swipeLeft: function swipeLeft() {
            s.gotoSlide(-1);
          },
          swipeRight: function swipeRight() {
            s.gotoSlide(-2);
          }
        });
      }, s.hideObjects = function () {
        e("select, embed, object").css({
          visibility: "hidden"
        });
      }, s.showObjects = function () {
        e("select, embed, object").css({
          visibility: "visible"
        });
      }, s.embedHTML5Video = function (t, i, n, o) {
        t.html("<div style='display:block;width:100%;height:100%;position:relative;'><video id='html5-lightbox-video' width='100%' height='100%'" + (s.options.html5videoposter && s.options.html5videoposter.length > 0 ? "poster='" + s.options.html5videoposter + "'" : "") + (n ? " autoplay" : "") + (o ? " loop" : "") + (s.options.nativehtml5controls && !s.options.videohidecontrols ? " controls='controls'" : "") + " src='" + i + "'></div>"), s.options.nativehtml5controls || (e("video", t).data("src", i), e("video", t).lightboxHTML5VideoControls(s.options.skinsfolder, s, s.options.videohidecontrols, !1, s.options.defaultvideovolume)), e("video", t).off("ended").on("ended", function () {
          e(window).trigger("html5lightbox.videofinished"), s.autosliding ? s.gotoSlide(-1) : s.options.autoclose && setTimeout(function () {
            s.finish();
          }, s.options.autoclosedelay);
        });
      }, s.embedFlash = function (t, i, n, o) {
        if (s.options.flashInstalled) {
          var r = {
            pluginspage: "http://www.adobe.com/go/getflashplayer",
            quality: "high",
            allowFullScreen: "true",
            allowScriptAccess: "always",
            type: "application/x-shockwave-flash"
          };
          r.width = "100%", r.height = "100%", r.src = i, r.flashVars = e.param(o), r.wmode = n;
          var a = "";

          for (var l in r) {
            a += l + "=" + r[l] + " ";
          }

          t.html("<embed " + a + "/>");
        } else t.html("<div class='html5lightbox-flash-error' style='display:block; position:relative;text-align:center; width:100%; left:0px; top:40%;'><div class='html5-error'><div>The required Adobe Flash Player plugin is not installed</div><br /><div style='display:block;position:relative;text-align:center;width:112px;height:33px;margin:0px auto;'><a href='http://www.adobe.com/go/getflashplayer'><img src='http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif' alt='Get Adobe Flash player' width='112' height='33'></img></a></div></div>");
      }, s.checkType = function (t) {
        return t ? t.match(/\.(jpg|gif|png|bmp|jpeg)(.*)?$/i) ? 0 : t.match(/[^\.]\.(swf)\s*$/i) ? 1 : t.match(/\.(mp4|m4v|ogv|ogg|webm)(.*)?$/i) ? 2 : t.match(/\:\/\/.*(youtube\.com)/i) || t.match(/\:\/\/.*(youtu\.be)/i) ? 3 : t.match(/\:\/\/.*(vimeo\.com)/i) ? 4 : t.match(/\:\/\/.*(dailymotion\.com)/i) || t.match(/\:\/\/.*(dai\.ly)/i) ? 9 : t.match(/[^\.]\.(pdf)\s*$/i) ? 5 : t.match(/[^\.]\.(mp3)\s*$/i) ? 6 : t.match(/[^\.]\.(flv)\s*$/i) ? 8 : t.match(/\#\w+/i) ? 10 : t.match(/\:\/\/.*(wistia)/i) ? 11 : 7 : -1;
      }, s.getURLParams = function () {
        for (var t = {}, e = window.location.search.substring(1).split("&"), i = 0; i < e.length; i++) {
          var s = e[i].split("=");
          s && 2 == s.length && (t[s[0].toLowerCase()] = unescape(s[1]));
        }

        return t;
      }, s.absoluteUrl = function (t) {
        var e = document.createElement("a");
        return e.href = t, e.protocol + "//" + e.host + e.pathname + e.search + e.hash;
      }, s.showLightbox = function (t, i, n, o, r, a, l, h, c) {
        s.options = e.extend(s.options, s.defaultoptions), e(window).trigger("html5lightbox.lightboxshow"), s.init(), s.reset(), s.$lightbox.show();
        var u = s.calcBoxPosition(s.options.loadingwidth, s.options.loadingheight),
            p = u[0],
            d = u[1],
            f = u[2];
        s.$lightboxBox.css({
          "margin-top": f
        }), s.options.positionFixed || s.$lightboxBox.css("margin-top", e(window).scrollTop() + s.options.bordertopmargin), "left" == s.options.titlestyle || "right" == s.options.titlestyle ? s.$lightboxBox.css({
          width: p,
          height: d
        }) : (s.$lightboxBox.css({
          width: p,
          height: "auto"
        }), s.$elemWrap.css({
          width: p,
          height: d
        })), s.loadElem(new Array(t, i, n, null, o, r, a, l, h, c));
      }, s.addItem = function (t, e, i, n, o, r, a, l, h, c) {
        type = c && c >= 0 ? c : s.checkType(t), s.elemArray.push(new Array(type, t, e, i, n, o, r, a, l, h));
      }, s.showItem = function (t) {
        if (s.options = e.extend(s.options, s.defaultoptions), e(window).trigger("html5lightbox.lightboxshow"), s.init(), s.elemArray.length <= 0) return !0;
        s.hideObjects();

        for (var i = 0; i < s.elemArray.length && s.elemArray[i][1] != t; i++) {
          ;
        }

        if (i == s.elemArray.length) return !0;
        s.options.curElem = i, s.calcNextPrevElem(), s.reset(), s.$lightbox.show();
        var n = s.calcBoxPosition(s.options.loadingwidth, s.options.loadingheight),
            o = n[0],
            r = n[1],
            a = n[2];
        return s.$lightboxBox.css({
          "margin-top": a
        }), s.options.positionFixed || s.$lightboxBox.css("margin-top", e(window).scrollTop() + s.options.bordertopmargin), "left" == s.options.titlestyle || "right" == s.options.titlestyle ? s.$lightboxBox.css({
          width: o,
          height: r
        }) : (s.$lightboxBox.css({
          width: o,
          height: "auto"
        }), s.$elemWrap.css({
          width: o,
          height: r
        })), s.loadCurElem(), !1;
      }, s.off("click").click(s.clickHandler), s.each(function () {
        var t = e(this),
            i = !1,
            s = 0;
        if ("undefined" != typeof html5lightbox_options && html5lightbox_options && ("autoopen" in html5lightbox_options && (i = html5lightbox_options.autoopen), "autoopendelay" in html5lightbox_options && (s = html5lightbox_options.autoopendelay)), i = t.data("autoopen") ? t.data("autoopen") : i, s = t.data("autoopendelay") ? t.data("autoopendelay") : s, i) return setTimeout(function () {
          t.click();
        }, s), !1;
      });
      var m = s.getURLParams();

      if ("html5lightboxshare" in m) {
        var g = decodeURIComponent(m.html5lightboxshare),
            _ = e('.html5lightbox[href="' + g + '"]');

        _.length > 0 && _.click();
      }

      return s;
    };
  }(jQuery), function (t) {
    t.fn.html5lightboxTouchSwipe = function (e) {
      var i = {
        preventWebBrowser: !1,
        swipeLeft: null,
        swipeRight: null,
        swipeTop: null,
        swipeBottom: null
      };
      return e && t.extend(i, e), this.each(function () {
        function e(t) {
          s = -1, n = -1, o = -1, r = -1;
        }

        var s = -1,
            n = -1,
            o = -1,
            r = -1;

        try {
          t(this).on("touchstart", function (t) {
            var i = t.originalEvent;
            i.targetTouches.length >= 1 ? (s = i.targetTouches[0].pageX, n = i.targetTouches[0].pageY) : e();
          }), t(this).on("touchmove", function (t) {
            i.preventWebBrowser && t.preventDefault();
            var s = t.originalEvent;
            s.targetTouches.length >= 1 ? (o = s.targetTouches[0].pageX, r = s.targetTouches[0].pageY) : e();
          }), t(this).on("touchend", function (t) {
            o > 0 || r > 0 ? (Math.abs(o - s) > Math.abs(r - n) ? o > s ? i.swipeRight && i.swipeRight.call() : i.swipeLeft && i.swipeLeft.call() : r > n ? i.swipeBottom && i.swipeBottom.call() : i.swipeTop && i.swipeTop.call(), e()) : e();
          }), t(this).on("touchcancel", e);
        } catch (t) {}
      });
    };
  }(jQuery), function (t) {
    t.fn.lightboxHTML5VideoControls = function (e, i, s, n, o) {
      var r = ("ontouchstart" in window),
          a = r ? "touchstart" : "mousedown",
          l = r ? "touchmove" : "mousemove",
          h = r ? "touchcancel" : "mouseup",
          c = r ? 48 : 36,
          u = null,
          p = null,
          d = !1,
          f = !0,
          m = null != navigator.userAgent.match(/iPod/i) || null != navigator.userAgent.match(/iPhone/i),
          g = t(this).data("ishd"),
          _ = t(this).data("hd"),
          v = t(this).data("src"),
          b = t(this);

      if (b.get(0).removeAttribute("controls"), m) {
        var y = b.height() - c;
        b.css({
          height: y
        });
      }

      var w = t("<div class='html5boxVideoPlay'></div>");
      m || (b.after(w), w.css({
        position: "absolute",
        top: "50%",
        left: "50%",
        display: "block",
        cursor: "pointer",
        width: 64,
        height: 64,
        "margin-left": -32,
        "margin-top": -32,
        "background-image": "url('" + e + "html5boxplayer_playvideo.png')",
        "background-position": "center center",
        "background-repeat": "no-repeat"
      }).on("click", function () {
        b.get(0).play();
      }));
      var x = t("<div class='html5boxVideoFullscreenBg'></div>"),
          T = t("<div class='html5boxVideoControls'><div class='html5boxVideoControlsBg'></div><div class='html5boxPlayPause'><div class='html5boxPlay'></div><div class='html5boxPause'></div></div><div class='html5boxTimeCurrent'>--:--</div><div class='html5boxFullscreen'></div><div class='html5boxHD'></div><div class='html5boxVolume'><div class='html5boxVolumeButton'></div><div class='html5boxVolumeBar'><div class='html5boxVolumeBarBg'><div class='html5boxVolumeBarActive'></div></div></div></div><div class='html5boxTimeTotal'>--:--</div><div class='html5boxSeeker'><div class='html5boxSeekerBuffer'></div><div class='html5boxSeekerPlay'></div><div class='html5boxSeekerHandler'></div></div><div style='clear:both;'></div></div>");
      b.after(T), b.after(x), x.css({
        display: "none",
        position: "fixed",
        left: 0,
        top: 0,
        bottom: 0,
        right: 0,
        "z-index": 2147483647
      }), T.css({
        display: "block",
        position: "absolute",
        width: "100%",
        height: c,
        left: 0,
        bottom: 0,
        right: 0,
        "max-width": "640px",
        margin: "0 auto"
      });

      var k = function k() {
        f = !0;
      };

      b.on("click", function () {
        f = !0;
      }).hover(function () {
        f = !0;
      }, function () {
        f = !1;
      }), s || setInterval(function () {
        f && (T.show(), f = !1, clearTimeout(u), u = setTimeout(function () {
          b.get(0).paused || T.fadeOut();
        }, 5e3));
      }, 250), t(".html5boxVideoControlsBg", T).css({
        display: "block",
        position: "absolute",
        width: "100%",
        height: "100%",
        left: 0,
        top: 0,
        "background-color": "#000000",
        opacity: .7,
        filter: "alpha(opacity=70)"
      }), t(".html5boxPlayPause", T).css({
        display: "block",
        position: "relative",
        width: "32px",
        height: "32px",
        margin: Math.floor((c - 32) / 2),
        "float": "left"
      });
      var C = t(".html5boxPlay", T),
          S = t(".html5boxPause", T);
      C.css({
        display: "block",
        position: "absolute",
        top: 0,
        left: 0,
        width: "32px",
        height: "32px",
        cursor: "pointer",
        "background-image": "url('" + e + "html5boxplayer_playpause.png')",
        "background-position": "top left"
      }).hover(function () {
        t(this).css({
          "background-position": "bottom left"
        });
      }, function () {
        t(this).css({
          "background-position": "top left"
        });
      }).on("click", function () {
        b.get(0).play();
      }), S.css({
        display: "none",
        position: "absolute",
        top: 0,
        left: 0,
        width: "32px",
        height: "32px",
        cursor: "pointer",
        "background-image": "url('" + e + "html5boxplayer_playpause.png')",
        "background-position": "top right"
      }).hover(function () {
        t(this).css({
          "background-position": "bottom right"
        });
      }, function () {
        t(this).css({
          "background-position": "top right"
        });
      }).on("click", function () {
        b.get(0).pause();
      });
      var P = t(".html5boxTimeCurrent", T),
          E = t(".html5boxTimeTotal", T),
          A = t(".html5boxSeeker", T),
          D = t(".html5boxSeekerPlay", T),
          O = t(".html5boxSeekerBuffer", T),
          R = t(".html5boxSeekerHandler", T);

      if (P.css({
        display: "block",
        position: "relative",
        "float": "left",
        "line-height": c + "px",
        "font-weight": "normal",
        "font-size": "12px",
        margin: "0 8px",
        "font-family": "Arial, Helvetica, sans-serif",
        color: "#fff"
      }), E.css({
        display: "block",
        position: "relative",
        "float": "right",
        "line-height": c + "px",
        "font-weight": "normal",
        "font-size": "12px",
        margin: "0 8px",
        "font-family": "Arial, Helvetica, sans-serif",
        color: "#fff"
      }), A.css({
        display: "block",
        cursor: "pointer",
        overflow: "hidden",
        position: "relative",
        height: "10px",
        "background-color": "#222",
        margin: Math.floor((c - 10) / 2) + "px 4px"
      }).on(a, function (t) {
        var e = (r ? t.originalEvent.touches[0] : t).pageX - A.offset().left;
        D.css({
          width: e
        }), b.get(0).currentTime = e * b.get(0).duration / A.width(), A.on(l, function (t) {
          var e = (r ? t.originalEvent.touches[0] : t).pageX - A.offset().left;
          D.css({
            width: e
          }), b.get(0).currentTime = e * b.get(0).duration / A.width();
        });
      }).on(h, function () {
        A.off(l);
      }), O.css({
        display: "block",
        position: "absolute",
        left: 0,
        top: 0,
        height: "100%",
        "background-color": "#444"
      }), D.css({
        display: "block",
        position: "absolute",
        left: 0,
        top: 0,
        height: "100%",
        "background-color": "#fcc500"
      }), !m && (b.get(0).requestFullscreen || b.get(0).webkitRequestFullScreen || b.get(0).mozRequestFullScreen || b.get(0).webkitEnterFullScreen || b.get(0).msRequestFullscreen)) {
        var $ = function $(e) {
          T.css({
            position: e ? "fixed" : "absolute"
          });
          var i = M.css("background-position") ? M.css("background-position").split(" ")[1] : M.css("background-position-y");
          M.css({
            "background-position": (e ? "right" : "left") + " " + i
          }), x.css({
            display: e ? "block" : "none"
          }), e ? (t(document).on("mousemove", k), T.css({
            "z-index": 2147483647
          })) : (t(document).off("mousemove", k), T.css({
            "z-index": ""
          }));
        };

        document.addEventListener("MSFullscreenChange", function () {
          d = null != document.msFullscreenElement;
          var t = null != navigator.userAgent.match(/Trident\/7/) && null != navigator.userAgent.match(/rv:11/),
              e = null != navigator.userAgent.match(/MSIE/i) && !this.options.isOpera;
          (t || e) && (d || b.get(0).removeAttribute("controls")), $(d);
        }, !1), document.addEventListener("fullscreenchange", function () {
          d = document.fullscreen, $(document.fullscreen);
        }, !1), document.addEventListener("mozfullscreenchange", function () {
          d = document.mozFullScreen, null != navigator.userAgent.match(/Firefox/i) && (d ? b.get(0).setAttribute("controls", "controls") : b.get(0).removeAttribute("controls")), $(document.mozFullScreen);
        }, !1), document.addEventListener("webkitfullscreenchange", function () {
          d = document.webkitIsFullScreen, $(document.webkitIsFullScreen);
        }, !1), b.get(0).addEventListener("webkitbeginfullscreen", function () {
          d = !0;
        }, !1), b.get(0).addEventListener("webkitendfullscreen", function () {
          d = !1;
        }, !1), t("head").append("<style type='text/css'>video::-webkit-media-controls { display:none !important; }</style>");
        var M = t(".html5boxFullscreen", T);
        M.css({
          display: "block",
          position: "relative",
          "float": "right",
          width: "32px",
          height: "32px",
          margin: Math.floor((c - 32) / 2),
          cursor: "pointer",
          "background-image": "url('" + e + "html5boxplayer_fullscreen.png')",
          "background-position": "left top"
        }).hover(function () {
          var e = t(this).css("background-position") ? t(this).css("background-position").split(" ")[0] : t(this).css("background-position-x");
          t(this).css({
            "background-position": e + " bottom"
          });
        }, function () {
          var e = t(this).css("background-position") ? t(this).css("background-position").split(" ")[0] : t(this).css("background-position-x");
          t(this).css({
            "background-position": e + " top"
          });
        }).on("click", function () {
          !function (t) {
            if (t) {
              var e = null != navigator.userAgent.match(/Trident\/7/) && null != navigator.userAgent.match(/rv:11/),
                  i = null != navigator.userAgent.match(/MSIE/i) && !this.options.isOpera;
              (e || i) && b.get(0).setAttribute("controls", "controls"), b.get(0).requestFullscreen ? b.get(0).requestFullscreen() : b.get(0).webkitRequestFullScreen ? b.get(0).webkitRequestFullScreen() : b.get(0).mozRequestFullScreen ? b.get(0).mozRequestFullScreen() : b.get(0).webkitEnterFullScreen && b.get(0).webkitEnterFullScreen(), b.get(0).msRequestFullscreen && b.get(0).msRequestFullscreen();
            } else document.cancelFullScreen ? document.cancelFullScreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitCancelFullScreen ? document.webkitCancelFullScreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.msExitFullscreen && document.msExitFullscreen();
          }(d = !d);
        });
      }

      if (_) {
        t(".html5boxHD", T).css({
          display: "block",
          position: "relative",
          "float": "right",
          width: "32px",
          height: "32px",
          margin: Math.floor((c - 32) / 2),
          cursor: "pointer",
          "background-image": "url('" + e + "html5boxplayer_hd.png')",
          "background-position": (g ? "right" : "left") + " center"
        }).on("click", function () {
          g = !g, t(this).css({
            "background-position": (g ? "right" : "left") + " center"
          }), i.isHd = g;
          var e = b.get(0).isPaused;
          b.get(0).setAttribute("src", (g ? _ : v) + "#t=" + b.get(0).currentTime), e ? m || b.get(0).pause() : b.get(0).play();
        });
      }

      b.get(0).volume = o;
      var I = 0 == o ? 1 : o,
          L = b.get(0).volume;

      if (b.get(0).volume = L / 2 + .1, b.get(0).volume === L / 2 + .1) {
        b.get(0).volume = L;
        var N = t(".html5boxVolume", T),
            z = t(".html5boxVolumeButton", T),
            j = t(".html5boxVolumeBar", T),
            F = t(".html5boxVolumeBarBg", T),
            H = t(".html5boxVolumeBarActive", T);
        N.css({
          display: "block",
          position: "relative",
          "float": "right",
          width: "32px",
          height: "32px",
          margin: Math.floor((c - 32) / 2)
        }).hover(function () {
          clearTimeout(p);
          var t = b.get(0).volume;
          H.css({
            height: Math.round(100 * t) + "%"
          }), j.show();
        }, function () {
          clearTimeout(p), p = setTimeout(function () {
            j.hide();
          }, 1e3);
        }), z.css({
          display: "block",
          position: "absolute",
          top: 0,
          left: 0,
          width: "32px",
          height: "32px",
          cursor: "pointer",
          "background-image": "url('" + e + "html5boxplayer_volume.png')",
          "background-position": "top " + (L > 0 ? "left" : "right")
        }).hover(function () {
          var e = t(this).css("background-position") ? t(this).css("background-position").split(" ")[0] : t(this).css("background-position-x");
          t(this).css({
            "background-position": e + " bottom"
          });
        }, function () {
          var e = t(this).css("background-position") ? t(this).css("background-position").split(" ")[0] : t(this).css("background-position-x");
          t(this).css({
            "background-position": e + " top"
          });
        }).on("click", function () {
          var e = b.get(0).volume;
          e > 0 ? (I = e, e = 0) : e = I;
          var i = t(this).css("background-position") ? t(this).css("background-position").split(" ")[1] : t(this).css("background-position-y");
          z.css({
            "background-position": (e > 0 ? "left" : "right") + " " + i
          }), b.get(0).volume = e, H.css({
            height: Math.round(100 * e) + "%"
          });
        }), j.css({
          display: "none",
          position: "absolute",
          left: 4,
          bottom: "100%",
          width: 24,
          height: 80,
          "margin-bottom": Math.floor((c - 32) / 2),
          "background-color": "#000000",
          opacity: .7,
          filter: "alpha(opacity=70)"
        }), F.css({
          display: "block",
          position: "relative",
          width: 10,
          height: 68,
          margin: 7,
          cursor: "pointer",
          "background-color": "#222"
        }), H.css({
          display: "block",
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "100%",
          "background-color": "#fcc500"
        }), F.on(a, function (t) {
          var e = 1 - ((r ? t.originalEvent.touches[0] : t).pageY - F.offset().top) / F.height();
          e = e > 1 ? 1 : e < 0 ? 0 : e, H.css({
            height: Math.round(100 * e) + "%"
          }), z.css({
            "background-position": "left " + (e > 0 ? "top" : "bottom")
          }), b.get(0).volume = e, F.on(l, function (t) {
            var e = 1 - ((r ? t.originalEvent.touches[0] : t).pageY - F.offset().top) / F.height();
            e = e > 1 ? 1 : e < 0 ? 0 : e, H.css({
              height: Math.round(100 * e) + "%"
            }), z.css({
              "background-position": "left " + (e > 0 ? "top" : "bottom")
            }), b.get(0).volume = e;
          });
        }).on(h, function () {
          F.off(l);
        });
      }

      var X = function X(t) {
        var e = Math.floor(t / 3600),
            i = e < 10 ? "0" + e : e,
            s = Math.floor((t - 3600 * e) / 60),
            n = s < 10 ? "0" + s : s,
            o = Math.floor(t - (3600 * e + 60 * s)),
            r = n + ":" + (o < 10 ? "0" + o : o);
        return e > 0 && (r = i + ":" + r), r;
      };

      n && w.hide(), s && T.hide();

      try {
        b.on("play", function () {
          n || w.hide(), s || (C.hide(), S.show());
        }), b.on("pause", function () {
          n || w.show(), s || (T.show(), clearTimeout(u), C.show(), S.hide());
        }), b.on("ended", function () {
          t(window).trigger("html5lightbox.videoended"), n || w.show(), s || (T.show(), clearTimeout(u), C.show(), S.hide());
        }), b.on("timeupdate", function () {
          var t = b.get(0).currentTime;

          if (t) {
            P.text(X(t));
            var e = b.get(0).duration;

            if (e) {
              E.text(X(e));
              var i = A.width(),
                  s = Math.round(i * t / e);
              D.css({
                width: s
              }), R.css({
                left: s
              });
            }
          }
        }), b.on("progress", function () {
          if (b.get(0).buffered && b.get(0).buffered.length > 0 && !isNaN(b.get(0).buffered.end(0)) && !isNaN(b.get(0).duration)) {
            var t = A.width();
            O.css({
              width: Math.round(t * b.get(0).buffered.end(0) / b.get(0).duration)
            });
          }
        });
      } catch (t) {}
    };
  }(jQuery), jQuery(document).ready(function () {
    "undefined" == typeof html5Lightbox && (html5Lightbox = jQuery(".html5lightbox").html5lightbox());
  });
}

!function (t, e) {
  "object" == ( false ? 0 : _typeof(module)) && "object" == _typeof(module.exports) ? module.exports = t.document ? e(t, !0) : function (t) {
    if (!t.document) throw new Error("jQuery requires a window with a document");
    return e(t);
  } : e(t);
}("undefined" != typeof window ? window : this, function (t, e) {
  function i(t) {
    var e = "length" in t && t.length,
        i = V.type(t);
    return "function" !== i && !V.isWindow(t) && (!(1 !== t.nodeType || !e) || "array" === i || 0 === e || "number" == typeof e && e > 0 && e - 1 in t);
  }

  function s(t, e, i) {
    if (V.isFunction(e)) return V.grep(t, function (t, s) {
      return !!e.call(t, s, t) !== i;
    });
    if (e.nodeType) return V.grep(t, function (t) {
      return t === e !== i;
    });

    if ("string" == typeof e) {
      if (et.test(e)) return V.filter(e, t, i);
      e = V.filter(e, t);
    }

    return V.grep(t, function (t) {
      return H.call(e, t) >= 0 !== i;
    });
  }

  function n(t, e) {
    for (; (t = t[e]) && 1 !== t.nodeType;) {
      ;
    }

    return t;
  }

  function o() {
    q.removeEventListener("DOMContentLoaded", o, !1), t.removeEventListener("load", o, !1), V.ready();
  }

  function r() {
    Object.defineProperty(this.cache = {}, 0, {
      get: function get() {
        return {};
      }
    }), this.expando = V.expando + r.uid++;
  }

  function a(t, e, i) {
    var s;
    if (void 0 === i && 1 === t.nodeType) if (s = "data-" + e.replace(dt, "-$1").toLowerCase(), "string" == typeof (i = t.getAttribute(s))) {
      try {
        i = "true" === i || "false" !== i && ("null" === i ? null : +i + "" === i ? +i : pt.test(i) ? V.parseJSON(i) : i);
      } catch (t) {}

      ut.set(t, e, i);
    } else i = void 0;
    return i;
  }

  function l() {
    return !0;
  }

  function h() {
    return !1;
  }

  function c() {
    try {
      return q.activeElement;
    } catch (t) {}
  }

  function u(t, e) {
    return V.nodeName(t, "table") && V.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t;
  }

  function p(t) {
    return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t;
  }

  function d(t) {
    var e = At.exec(t.type);
    return e ? t.type = e[1] : t.removeAttribute("type"), t;
  }

  function f(t, e) {
    for (var i = 0, s = t.length; s > i; i++) {
      ct.set(t[i], "globalEval", !e || ct.get(e[i], "globalEval"));
    }
  }

  function m(t, e) {
    var i, s, n, o, r, a, l, h;

    if (1 === e.nodeType) {
      if (ct.hasData(t) && (o = ct.access(t), r = ct.set(e, o), h = o.events)) {
        delete r.handle, r.events = {};

        for (n in h) {
          for (i = 0, s = h[n].length; s > i; i++) {
            V.event.add(e, n, h[n][i]);
          }
        }
      }

      ut.hasData(t) && (a = ut.access(t), l = V.extend({}, a), ut.set(e, l));
    }
  }

  function g(t, e) {
    var i = t.getElementsByTagName ? t.getElementsByTagName(e || "*") : t.querySelectorAll ? t.querySelectorAll(e || "*") : [];
    return void 0 === e || e && V.nodeName(t, e) ? V.merge([t], i) : i;
  }

  function _(t, e) {
    var i = e.nodeName.toLowerCase();
    "input" === i && _t.test(t.type) ? e.checked = t.checked : ("input" === i || "textarea" === i) && (e.defaultValue = t.defaultValue);
  }

  function v(e, i) {
    var s,
        n = V(i.createElement(e)).appendTo(i.body),
        o = t.getDefaultComputedStyle && (s = t.getDefaultComputedStyle(n[0])) ? s.display : V.css(n[0], "display");
    return n.detach(), o;
  }

  function b(t) {
    var e = q,
        i = $t[t];
    return i || ("none" !== (i = v(t, e)) && i || (Rt = (Rt || V("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), (e = Rt[0].contentDocument).write(), e.close(), i = v(t, e), Rt.detach()), $t[t] = i), i;
  }

  function y(t, e, i) {
    var s,
        n,
        o,
        r,
        a = t.style;
    return (i = i || Lt(t)) && (r = i.getPropertyValue(e) || i[e]), i && ("" !== r || V.contains(t.ownerDocument, t) || (r = V.style(t, e)), It.test(r) && Mt.test(e) && (s = a.width, n = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = r, r = i.width, a.width = s, a.minWidth = n, a.maxWidth = o)), void 0 !== r ? r + "" : r;
  }

  function w(t, e) {
    return {
      get: function get() {
        return t() ? void delete this.get : (this.get = e).apply(this, arguments);
      }
    };
  }

  function x(t, e) {
    if (e in t) return e;

    for (var i = e[0].toUpperCase() + e.slice(1), s = e, n = Xt.length; n--;) {
      if ((e = Xt[n] + i) in t) return e;
    }

    return s;
  }

  function T(t, e, i) {
    var s = zt.exec(e);
    return s ? Math.max(0, s[1] - (i || 0)) + (s[2] || "px") : e;
  }

  function k(t, e, i, s, n) {
    for (var o = i === (s ? "border" : "content") ? 4 : "width" === e ? 1 : 0, r = 0; 4 > o; o += 2) {
      "margin" === i && (r += V.css(t, i + mt[o], !0, n)), s ? ("content" === i && (r -= V.css(t, "padding" + mt[o], !0, n)), "margin" !== i && (r -= V.css(t, "border" + mt[o] + "Width", !0, n))) : (r += V.css(t, "padding" + mt[o], !0, n), "padding" !== i && (r += V.css(t, "border" + mt[o] + "Width", !0, n)));
    }

    return r;
  }

  function C(t, e, i) {
    var s = !0,
        n = "width" === e ? t.offsetWidth : t.offsetHeight,
        o = Lt(t),
        r = "border-box" === V.css(t, "boxSizing", !1, o);

    if (0 >= n || null == n) {
      if ((0 > (n = y(t, e, o)) || null == n) && (n = t.style[e]), It.test(n)) return n;
      s = r && (B.boxSizingReliable() || n === t.style[e]), n = parseFloat(n) || 0;
    }

    return n + k(t, e, i || (r ? "border" : "content"), s, o) + "px";
  }

  function S(t, e) {
    for (var i, s, n, o = [], r = 0, a = t.length; a > r; r++) {
      (s = t[r]).style && (o[r] = ct.get(s, "olddisplay"), i = s.style.display, e ? (o[r] || "none" !== i || (s.style.display = ""), "" === s.style.display && gt(s) && (o[r] = ct.access(s, "olddisplay", b(s.nodeName)))) : (n = gt(s), "none" === i && n || ct.set(s, "olddisplay", n ? i : V.css(s, "display"))));
    }

    for (r = 0; a > r; r++) {
      (s = t[r]).style && (e && "none" !== s.style.display && "" !== s.style.display || (s.style.display = e ? o[r] || "" : "none"));
    }

    return t;
  }

  function P(t, e, i, s, n) {
    return new P.prototype.init(t, e, i, s, n);
  }

  function E() {
    return setTimeout(function () {
      Wt = void 0;
    }), Wt = V.now();
  }

  function A(t, e) {
    var i,
        s = 0,
        n = {
      height: t
    };

    for (e = e ? 1 : 0; 4 > s; s += 2 - e) {
      i = mt[s], n["margin" + i] = n["padding" + i] = t;
    }

    return e && (n.opacity = n.width = t), n;
  }

  function D(t, e, i) {
    for (var s, n = (Qt[e] || []).concat(Qt["*"]), o = 0, r = n.length; r > o; o++) {
      if (s = n[o].call(i, e, t)) return s;
    }
  }

  function O(t, e, i) {
    var s,
        n,
        o = 0,
        r = Ut.length,
        a = V.Deferred().always(function () {
      delete l.elem;
    }),
        l = function l() {
      if (n) return !1;

      for (var e = Wt || E(), i = Math.max(0, h.startTime + h.duration - e), s = 1 - (i / h.duration || 0), o = 0, r = h.tweens.length; r > o; o++) {
        h.tweens[o].run(s);
      }

      return a.notifyWith(t, [h, s, i]), 1 > s && r ? i : (a.resolveWith(t, [h]), !1);
    },
        h = a.promise({
      elem: t,
      props: V.extend({}, e),
      opts: V.extend(!0, {
        specialEasing: {}
      }, i),
      originalProperties: e,
      originalOptions: i,
      startTime: Wt || E(),
      duration: i.duration,
      tweens: [],
      createTween: function createTween(e, i) {
        var s = V.Tween(t, h.opts, e, i, h.opts.specialEasing[e] || h.opts.easing);
        return h.tweens.push(s), s;
      },
      stop: function stop(e) {
        var i = 0,
            s = e ? h.tweens.length : 0;
        if (n) return this;

        for (n = !0; s > i; i++) {
          h.tweens[i].run(1);
        }

        return e ? a.resolveWith(t, [h, e]) : a.rejectWith(t, [h, e]), this;
      }
    }),
        c = h.props;

    for (function (t, e) {
      var i, s, n, o, r;

      for (i in t) {
        if (s = V.camelCase(i), n = e[s], o = t[i], V.isArray(o) && (n = o[1], o = t[i] = o[0]), i !== s && (t[s] = o, delete t[i]), (r = V.cssHooks[s]) && ("expand" in r)) {
          o = r.expand(o), delete t[s];

          for (i in o) {
            (i in t) || (t[i] = o[i], e[i] = n);
          }
        } else e[s] = n;
      }
    }(c, h.opts.specialEasing); r > o; o++) {
      if (s = Ut[o].call(h, t, c, h.opts)) return s;
    }

    return V.map(c, D, h), V.isFunction(h.opts.start) && h.opts.start.call(t, h), V.fx.timer(V.extend(l, {
      elem: t,
      anim: h,
      queue: h.opts.queue
    })), h.progress(h.opts.progress).done(h.opts.done, h.opts.complete).fail(h.opts.fail).always(h.opts.always);
  }

  function R(t) {
    return function (e, i) {
      "string" != typeof e && (i = e, e = "*");
      var s,
          n = 0,
          o = e.toLowerCase().match(rt) || [];
      if (V.isFunction(i)) for (; s = o[n++];) {
        "+" === s[0] ? (s = s.slice(1) || "*", (t[s] = t[s] || []).unshift(i)) : (t[s] = t[s] || []).push(i);
      }
    };
  }

  function $(t, e, i, s) {
    function n(a) {
      var l;
      return o[a] = !0, V.each(t[a] || [], function (t, a) {
        var h = a(e, i, s);
        return "string" != typeof h || r || o[h] ? r ? !(l = h) : void 0 : (e.dataTypes.unshift(h), n(h), !1);
      }), l;
    }

    var o = {},
        r = t === ce;
    return n(e.dataTypes[0]) || !o["*"] && n("*");
  }

  function M(t, e) {
    var i,
        s,
        n = V.ajaxSettings.flatOptions || {};

    for (i in e) {
      void 0 !== e[i] && ((n[i] ? t : s || (s = {}))[i] = e[i]);
    }

    return s && V.extend(!0, t, s), t;
  }

  function I(t, e, i, s) {
    var n;
    if (V.isArray(e)) V.each(e, function (e, n) {
      i || me.test(t) ? s(t, n) : I(t + "[" + ("object" == _typeof(n) ? e : "") + "]", n, i, s);
    });else if (i || "object" !== V.type(e)) s(t, e);else for (n in e) {
      I(t + "[" + n + "]", e[n], i, s);
    }
  }

  function L(t) {
    return V.isWindow(t) ? t : 9 === t.nodeType && t.defaultView;
  }

  var N = [],
      z = N.slice,
      j = N.concat,
      F = N.push,
      H = N.indexOf,
      X = {},
      W = X.toString,
      Y = X.hasOwnProperty,
      B = {},
      q = t.document,
      V = function V(t, e) {
    return new V.fn.init(t, e);
  },
      U = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
      Q = /^-ms-/,
      G = /-([\da-z])/gi,
      Z = function Z(t, e) {
    return e.toUpperCase();
  };

  V.fn = V.prototype = {
    jquery: "2.1.4",
    constructor: V,
    selector: "",
    length: 0,
    toArray: function toArray() {
      return z.call(this);
    },
    get: function get(t) {
      return null != t ? 0 > t ? this[t + this.length] : this[t] : z.call(this);
    },
    pushStack: function pushStack(t) {
      var e = V.merge(this.constructor(), t);
      return e.prevObject = this, e.context = this.context, e;
    },
    each: function each(t, e) {
      return V.each(this, t, e);
    },
    map: function map(t) {
      return this.pushStack(V.map(this, function (e, i) {
        return t.call(e, i, e);
      }));
    },
    slice: function slice() {
      return this.pushStack(z.apply(this, arguments));
    },
    first: function first() {
      return this.eq(0);
    },
    last: function last() {
      return this.eq(-1);
    },
    eq: function eq(t) {
      var e = this.length,
          i = +t + (0 > t ? e : 0);
      return this.pushStack(i >= 0 && e > i ? [this[i]] : []);
    },
    end: function end() {
      return this.prevObject || this.constructor(null);
    },
    push: F,
    sort: N.sort,
    splice: N.splice
  }, V.extend = V.fn.extend = function () {
    var t,
        e,
        i,
        s,
        n,
        o,
        r = arguments[0] || {},
        a = 1,
        l = arguments.length,
        h = !1;

    for ("boolean" == typeof r && (h = r, r = arguments[a] || {}, a++), "object" == _typeof(r) || V.isFunction(r) || (r = {}), a === l && (r = this, a--); l > a; a++) {
      if (null != (t = arguments[a])) for (e in t) {
        i = r[e], s = t[e], r !== s && (h && s && (V.isPlainObject(s) || (n = V.isArray(s))) ? (n ? (n = !1, o = i && V.isArray(i) ? i : []) : o = i && V.isPlainObject(i) ? i : {}, r[e] = V.extend(h, o, s)) : void 0 !== s && (r[e] = s));
      }
    }

    return r;
  }, V.extend({
    expando: "jQuery" + ("2.1.4" + Math.random()).replace(/\D/g, ""),
    isReady: !0,
    error: function error(t) {
      throw new Error(t);
    },
    noop: function noop() {},
    isFunction: function isFunction(t) {
      return "function" === V.type(t);
    },
    isArray: Array.isArray,
    isWindow: function isWindow(t) {
      return null != t && t === t.window;
    },
    isNumeric: function isNumeric(t) {
      return !V.isArray(t) && t - parseFloat(t) + 1 >= 0;
    },
    isPlainObject: function isPlainObject(t) {
      return "object" === V.type(t) && !t.nodeType && !V.isWindow(t) && !(t.constructor && !Y.call(t.constructor.prototype, "isPrototypeOf"));
    },
    isEmptyObject: function isEmptyObject(t) {
      var e;

      for (e in t) {
        return !1;
      }

      return !0;
    },
    type: function type(t) {
      return null == t ? t + "" : "object" == _typeof(t) || "function" == typeof t ? X[W.call(t)] || "object" : _typeof(t);
    },
    globalEval: function globalEval(t) {
      var e,
          i = eval;
      (t = V.trim(t)) && (1 === t.indexOf("use strict") ? (e = q.createElement("script"), e.text = t, q.head.appendChild(e).parentNode.removeChild(e)) : i(t));
    },
    camelCase: function camelCase(t) {
      return t.replace(Q, "ms-").replace(G, Z);
    },
    nodeName: function nodeName(t, e) {
      return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase();
    },
    each: function each(t, e, s) {
      var n = 0,
          o = t.length,
          r = i(t);

      if (s) {
        if (r) for (; o > n && !1 !== e.apply(t[n], s); n++) {
          ;
        } else for (n in t) {
          if (!1 === e.apply(t[n], s)) break;
        }
      } else if (r) for (; o > n && !1 !== e.call(t[n], n, t[n]); n++) {
        ;
      } else for (n in t) {
        if (!1 === e.call(t[n], n, t[n])) break;
      }

      return t;
    },
    trim: function trim(t) {
      return null == t ? "" : (t + "").replace(U, "");
    },
    makeArray: function makeArray(t, e) {
      var s = e || [];
      return null != t && (i(Object(t)) ? V.merge(s, "string" == typeof t ? [t] : t) : F.call(s, t)), s;
    },
    inArray: function inArray(t, e, i) {
      return null == e ? -1 : H.call(e, t, i);
    },
    merge: function merge(t, e) {
      for (var i = +e.length, s = 0, n = t.length; i > s; s++) {
        t[n++] = e[s];
      }

      return t.length = n, t;
    },
    grep: function grep(t, e, i) {
      for (var s = [], n = 0, o = t.length, r = !i; o > n; n++) {
        !e(t[n], n) !== r && s.push(t[n]);
      }

      return s;
    },
    map: function map(t, e, s) {
      var n,
          o = 0,
          r = t.length,
          a = [];
      if (i(t)) for (; r > o; o++) {
        null != (n = e(t[o], o, s)) && a.push(n);
      } else for (o in t) {
        null != (n = e(t[o], o, s)) && a.push(n);
      }
      return j.apply([], a);
    },
    guid: 1,
    proxy: function proxy(t, e) {
      var i, s, n;
      return "string" == typeof e && (i = t[e], e = t, t = i), V.isFunction(t) ? (s = z.call(arguments, 2), n = function n() {
        return t.apply(e || this, s.concat(z.call(arguments)));
      }, n.guid = t.guid = t.guid || V.guid++, n) : void 0;
    },
    now: Date.now,
    support: B
  }), V.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (t, e) {
    X["[object " + e + "]"] = e.toLowerCase();
  });

  var K = function (t) {
    function e(t, e, i, s) {
      var n, o, r, a, l, h, u, d, f, m;
      if ((e ? e.ownerDocument || e : z) !== D && A(e), e = e || D, i = i || [], a = e.nodeType, "string" != typeof t || !t || 1 !== a && 9 !== a && 11 !== a) return i;

      if (!s && R) {
        if (11 !== a && (n = gt.exec(t))) if (r = n[1]) {
          if (9 === a) {
            if (!(o = e.getElementById(r)) || !o.parentNode) return i;
            if (o.id === r) return i.push(o), i;
          } else if (e.ownerDocument && (o = e.ownerDocument.getElementById(r)) && L(e, o) && o.id === r) return i.push(o), i;
        } else {
          if (n[2]) return G.apply(i, e.getElementsByTagName(t)), i;
          if ((r = n[3]) && b.getElementsByClassName) return G.apply(i, e.getElementsByClassName(r)), i;
        }

        if (b.qsa && (!$ || !$.test(t))) {
          if (d = u = N, f = e, m = 1 !== a && t, 1 === a && "object" !== e.nodeName.toLowerCase()) {
            for (h = T(t), (u = e.getAttribute("id")) ? d = u.replace(vt, "\\$&") : e.setAttribute("id", d), d = "[id='" + d + "'] ", l = h.length; l--;) {
              h[l] = d + p(h[l]);
            }

            f = _t.test(t) && c(e.parentNode) || e, m = h.join(",");
          }

          if (m) try {
            return G.apply(i, f.querySelectorAll(m)), i;
          } catch (t) {} finally {
            u || e.removeAttribute("id");
          }
        }
      }

      return C(t.replace(rt, "$1"), e, i, s);
    }

    function i() {
      function t(i, s) {
        return e.push(i + " ") > y.cacheLength && delete t[e.shift()], t[i + " "] = s;
      }

      var e = [];
      return t;
    }

    function s(t) {
      return t[N] = !0, t;
    }

    function n(t) {
      var e = D.createElement("div");

      try {
        return !!t(e);
      } catch (t) {
        return !1;
      } finally {
        e.parentNode && e.parentNode.removeChild(e), e = null;
      }
    }

    function o(t, e) {
      for (var i = t.split("|"), s = t.length; s--;) {
        y.attrHandle[i[s]] = e;
      }
    }

    function r(t, e) {
      var i = e && t,
          s = i && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || B) - (~t.sourceIndex || B);
      if (s) return s;
      if (i) for (; i = i.nextSibling;) {
        if (i === e) return -1;
      }
      return t ? 1 : -1;
    }

    function a(t) {
      return function (e) {
        return "input" === e.nodeName.toLowerCase() && e.type === t;
      };
    }

    function l(t) {
      return function (e) {
        var i = e.nodeName.toLowerCase();
        return ("input" === i || "button" === i) && e.type === t;
      };
    }

    function h(t) {
      return s(function (e) {
        return e = +e, s(function (i, s) {
          for (var n, o = t([], i.length, e), r = o.length; r--;) {
            i[n = o[r]] && (i[n] = !(s[n] = i[n]));
          }
        });
      });
    }

    function c(t) {
      return t && void 0 !== t.getElementsByTagName && t;
    }

    function u() {}

    function p(t) {
      for (var e = 0, i = t.length, s = ""; i > e; e++) {
        s += t[e].value;
      }

      return s;
    }

    function d(t, e, i) {
      var s = e.dir,
          n = i && "parentNode" === s,
          o = F++;
      return e.first ? function (e, i, o) {
        for (; e = e[s];) {
          if (1 === e.nodeType || n) return t(e, i, o);
        }
      } : function (e, i, r) {
        var a,
            l,
            h = [j, o];

        if (r) {
          for (; e = e[s];) {
            if ((1 === e.nodeType || n) && t(e, i, r)) return !0;
          }
        } else for (; e = e[s];) {
          if (1 === e.nodeType || n) {
            if (l = e[N] || (e[N] = {}), (a = l[s]) && a[0] === j && a[1] === o) return h[2] = a[2];
            if (l[s] = h, h[2] = t(e, i, r)) return !0;
          }
        }
      };
    }

    function f(t) {
      return t.length > 1 ? function (e, i, s) {
        for (var n = t.length; n--;) {
          if (!t[n](e, i, s)) return !1;
        }

        return !0;
      } : t[0];
    }

    function m(t, e, i, s, n) {
      for (var o, r = [], a = 0, l = t.length, h = null != e; l > a; a++) {
        (o = t[a]) && (!i || i(o, s, n)) && (r.push(o), h && e.push(a));
      }

      return r;
    }

    function g(t, i, n, o, r, a) {
      return o && !o[N] && (o = g(o)), r && !r[N] && (r = g(r, a)), s(function (s, a, l, h) {
        var c,
            u,
            p,
            d = [],
            f = [],
            g = a.length,
            _ = s || function (t, i, s) {
          for (var n = 0, o = i.length; o > n; n++) {
            e(t, i[n], s);
          }

          return s;
        }(i || "*", l.nodeType ? [l] : l, []),
            v = !t || !s && i ? _ : m(_, d, t, l, h),
            b = n ? r || (s ? t : g || o) ? [] : a : v;

        if (n && n(v, b, l, h), o) for (c = m(b, f), o(c, [], l, h), u = c.length; u--;) {
          (p = c[u]) && (b[f[u]] = !(v[f[u]] = p));
        }

        if (s) {
          if (r || t) {
            if (r) {
              for (c = [], u = b.length; u--;) {
                (p = b[u]) && c.push(v[u] = p);
              }

              r(null, b = [], c, h);
            }

            for (u = b.length; u--;) {
              (p = b[u]) && (c = r ? K(s, p) : d[u]) > -1 && (s[c] = !(a[c] = p));
            }
          }
        } else b = m(b === a ? b.splice(g, b.length) : b), r ? r(null, a, b, h) : G.apply(a, b);
      });
    }

    function _(t) {
      for (var e, i, s, n = t.length, o = y.relative[t[0].type], r = o || y.relative[" "], a = o ? 1 : 0, l = d(function (t) {
        return t === e;
      }, r, !0), h = d(function (t) {
        return K(e, t) > -1;
      }, r, !0), c = [function (t, i, s) {
        var n = !o && (s || i !== S) || ((e = i).nodeType ? l(t, i, s) : h(t, i, s));
        return e = null, n;
      }]; n > a; a++) {
        if (i = y.relative[t[a].type]) c = [d(f(c), i)];else {
          if ((i = y.filter[t[a].type].apply(null, t[a].matches))[N]) {
            for (s = ++a; n > s && !y.relative[t[s].type]; s++) {
              ;
            }

            return g(a > 1 && f(c), a > 1 && p(t.slice(0, a - 1).concat({
              value: " " === t[a - 2].type ? "*" : ""
            })).replace(rt, "$1"), i, s > a && _(t.slice(a, s)), n > s && _(t = t.slice(s)), n > s && p(t));
          }

          c.push(i);
        }
      }

      return f(c);
    }

    var v,
        b,
        y,
        w,
        x,
        T,
        k,
        C,
        S,
        P,
        E,
        A,
        D,
        O,
        R,
        $,
        M,
        I,
        L,
        N = "sizzle" + 1 * new Date(),
        z = t.document,
        j = 0,
        F = 0,
        H = i(),
        X = i(),
        W = i(),
        Y = function Y(t, e) {
      return t === e && (E = !0), 0;
    },
        B = 1 << 31,
        q = {}.hasOwnProperty,
        V = [],
        U = V.pop,
        Q = V.push,
        G = V.push,
        Z = V.slice,
        K = function K(t, e) {
      for (var i = 0, s = t.length; s > i; i++) {
        if (t[i] === e) return i;
      }

      return -1;
    },
        J = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        tt = "[\\x20\\t\\r\\n\\f]",
        et = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        it = et.replace("w", "w#"),
        st = "\\[" + tt + "*(" + et + ")(?:" + tt + "*([*^$|!~]?=)" + tt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + it + "))|)" + tt + "*\\]",
        nt = ":(" + et + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + st + ")*)|.*)\\)|)",
        ot = new RegExp(tt + "+", "g"),
        rt = new RegExp("^" + tt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + tt + "+$", "g"),
        at = new RegExp("^" + tt + "*," + tt + "*"),
        lt = new RegExp("^" + tt + "*([>+~]|" + tt + ")" + tt + "*"),
        ht = new RegExp("=" + tt + "*([^\\]'\"]*?)" + tt + "*\\]", "g"),
        ct = new RegExp(nt),
        ut = new RegExp("^" + it + "$"),
        pt = {
      ID: new RegExp("^#(" + et + ")"),
      CLASS: new RegExp("^\\.(" + et + ")"),
      TAG: new RegExp("^(" + et.replace("w", "w*") + ")"),
      ATTR: new RegExp("^" + st),
      PSEUDO: new RegExp("^" + nt),
      CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + tt + "*(even|odd|(([+-]|)(\\d*)n|)" + tt + "*(?:([+-]|)" + tt + "*(\\d+)|))" + tt + "*\\)|)", "i"),
      bool: new RegExp("^(?:" + J + ")$", "i"),
      needsContext: new RegExp("^" + tt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + tt + "*((?:-\\d)?\\d*)" + tt + "*\\)|)(?=[^-]|$)", "i")
    },
        dt = /^(?:input|select|textarea|button)$/i,
        ft = /^h\d$/i,
        mt = /^[^{]+\{\s*\[native \w/,
        gt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        _t = /[+~]/,
        vt = /'|\\/g,
        bt = new RegExp("\\\\([\\da-f]{1,6}" + tt + "?|(" + tt + ")|.)", "ig"),
        yt = function yt(t, e, i) {
      var s = "0x" + e - 65536;
      return s != s || i ? e : 0 > s ? String.fromCharCode(s + 65536) : String.fromCharCode(s >> 10 | 55296, 1023 & s | 56320);
    },
        wt = function wt() {
      A();
    };

    try {
      G.apply(V = Z.call(z.childNodes), z.childNodes), V[z.childNodes.length].nodeType;
    } catch (t) {
      G = {
        apply: V.length ? function (t, e) {
          Q.apply(t, Z.call(e));
        } : function (t, e) {
          for (var i = t.length, s = 0; t[i++] = e[s++];) {
            ;
          }

          t.length = i - 1;
        }
      };
    }

    b = e.support = {}, x = e.isXML = function (t) {
      var e = t && (t.ownerDocument || t).documentElement;
      return !!e && "HTML" !== e.nodeName;
    }, A = e.setDocument = function (t) {
      var e,
          i,
          s = t ? t.ownerDocument || t : z;
      return s !== D && 9 === s.nodeType && s.documentElement ? (D = s, O = s.documentElement, (i = s.defaultView) && i !== i.top && (i.addEventListener ? i.addEventListener("unload", wt, !1) : i.attachEvent && i.attachEvent("onunload", wt)), R = !x(s), b.attributes = n(function (t) {
        return t.className = "i", !t.getAttribute("className");
      }), b.getElementsByTagName = n(function (t) {
        return t.appendChild(s.createComment("")), !t.getElementsByTagName("*").length;
      }), b.getElementsByClassName = mt.test(s.getElementsByClassName), b.getById = n(function (t) {
        return O.appendChild(t).id = N, !s.getElementsByName || !s.getElementsByName(N).length;
      }), b.getById ? (y.find.ID = function (t, e) {
        if (void 0 !== e.getElementById && R) {
          var i = e.getElementById(t);
          return i && i.parentNode ? [i] : [];
        }
      }, y.filter.ID = function (t) {
        var e = t.replace(bt, yt);
        return function (t) {
          return t.getAttribute("id") === e;
        };
      }) : (delete y.find.ID, y.filter.ID = function (t) {
        var e = t.replace(bt, yt);
        return function (t) {
          var i = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
          return i && i.value === e;
        };
      }), y.find.TAG = b.getElementsByTagName ? function (t, e) {
        return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : b.qsa ? e.querySelectorAll(t) : void 0;
      } : function (t, e) {
        var i,
            s = [],
            n = 0,
            o = e.getElementsByTagName(t);

        if ("*" === t) {
          for (; i = o[n++];) {
            1 === i.nodeType && s.push(i);
          }

          return s;
        }

        return o;
      }, y.find.CLASS = b.getElementsByClassName && function (t, e) {
        return R ? e.getElementsByClassName(t) : void 0;
      }, M = [], $ = [], (b.qsa = mt.test(s.querySelectorAll)) && (n(function (t) {
        O.appendChild(t).innerHTML = "<a id='" + N + "'></a><select id='" + N + "-\f]' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && $.push("[*^$]=" + tt + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || $.push("\\[" + tt + "*(?:value|" + J + ")"), t.querySelectorAll("[id~=" + N + "-]").length || $.push("~="), t.querySelectorAll(":checked").length || $.push(":checked"), t.querySelectorAll("a#" + N + "+*").length || $.push(".#.+[+~]");
      }), n(function (t) {
        var e = s.createElement("input");
        e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && $.push("name" + tt + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || $.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), $.push(",.*:");
      })), (b.matchesSelector = mt.test(I = O.matches || O.webkitMatchesSelector || O.mozMatchesSelector || O.oMatchesSelector || O.msMatchesSelector)) && n(function (t) {
        b.disconnectedMatch = I.call(t, "div"), I.call(t, "[s!='']:x"), M.push("!=", nt);
      }), $ = $.length && new RegExp($.join("|")), M = M.length && new RegExp(M.join("|")), e = mt.test(O.compareDocumentPosition), L = e || mt.test(O.contains) ? function (t, e) {
        var i = 9 === t.nodeType ? t.documentElement : t,
            s = e && e.parentNode;
        return t === s || !(!s || 1 !== s.nodeType || !(i.contains ? i.contains(s) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(s)));
      } : function (t, e) {
        if (e) for (; e = e.parentNode;) {
          if (e === t) return !0;
        }
        return !1;
      }, Y = e ? function (t, e) {
        if (t === e) return E = !0, 0;
        var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
        return i || (1 & (i = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !b.sortDetached && e.compareDocumentPosition(t) === i ? t === s || t.ownerDocument === z && L(z, t) ? -1 : e === s || e.ownerDocument === z && L(z, e) ? 1 : P ? K(P, t) - K(P, e) : 0 : 4 & i ? -1 : 1);
      } : function (t, e) {
        if (t === e) return E = !0, 0;
        var i,
            n = 0,
            o = t.parentNode,
            a = e.parentNode,
            l = [t],
            h = [e];
        if (!o || !a) return t === s ? -1 : e === s ? 1 : o ? -1 : a ? 1 : P ? K(P, t) - K(P, e) : 0;
        if (o === a) return r(t, e);

        for (i = t; i = i.parentNode;) {
          l.unshift(i);
        }

        for (i = e; i = i.parentNode;) {
          h.unshift(i);
        }

        for (; l[n] === h[n];) {
          n++;
        }

        return n ? r(l[n], h[n]) : l[n] === z ? -1 : h[n] === z ? 1 : 0;
      }, s) : D;
    }, e.matches = function (t, i) {
      return e(t, null, null, i);
    }, e.matchesSelector = function (t, i) {
      if ((t.ownerDocument || t) !== D && A(t), i = i.replace(ht, "='$1']"), !(!b.matchesSelector || !R || M && M.test(i) || $ && $.test(i))) try {
        var s = I.call(t, i);
        if (s || b.disconnectedMatch || t.document && 11 !== t.document.nodeType) return s;
      } catch (t) {}
      return e(i, D, null, [t]).length > 0;
    }, e.contains = function (t, e) {
      return (t.ownerDocument || t) !== D && A(t), L(t, e);
    }, e.attr = function (t, e) {
      (t.ownerDocument || t) !== D && A(t);
      var i = y.attrHandle[e.toLowerCase()],
          s = i && q.call(y.attrHandle, e.toLowerCase()) ? i(t, e, !R) : void 0;
      return void 0 !== s ? s : b.attributes || !R ? t.getAttribute(e) : (s = t.getAttributeNode(e)) && s.specified ? s.value : null;
    }, e.error = function (t) {
      throw new Error("Syntax error, unrecognized expression: " + t);
    }, e.uniqueSort = function (t) {
      var e,
          i = [],
          s = 0,
          n = 0;

      if (E = !b.detectDuplicates, P = !b.sortStable && t.slice(0), t.sort(Y), E) {
        for (; e = t[n++];) {
          e === t[n] && (s = i.push(n));
        }

        for (; s--;) {
          t.splice(i[s], 1);
        }
      }

      return P = null, t;
    }, w = e.getText = function (t) {
      var e,
          i = "",
          s = 0,
          n = t.nodeType;

      if (n) {
        if (1 === n || 9 === n || 11 === n) {
          if ("string" == typeof t.textContent) return t.textContent;

          for (t = t.firstChild; t; t = t.nextSibling) {
            i += w(t);
          }
        } else if (3 === n || 4 === n) return t.nodeValue;
      } else for (; e = t[s++];) {
        i += w(e);
      }

      return i;
    }, (y = e.selectors = {
      cacheLength: 50,
      createPseudo: s,
      match: pt,
      attrHandle: {},
      find: {},
      relative: {
        ">": {
          dir: "parentNode",
          first: !0
        },
        " ": {
          dir: "parentNode"
        },
        "+": {
          dir: "previousSibling",
          first: !0
        },
        "~": {
          dir: "previousSibling"
        }
      },
      preFilter: {
        ATTR: function ATTR(t) {
          return t[1] = t[1].replace(bt, yt), t[3] = (t[3] || t[4] || t[5] || "").replace(bt, yt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4);
        },
        CHILD: function CHILD(t) {
          return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t;
        },
        PSEUDO: function PSEUDO(t) {
          var e,
              i = !t[6] && t[2];
          return pt.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : i && ct.test(i) && (e = T(i, !0)) && (e = i.indexOf(")", i.length - e) - i.length) && (t[0] = t[0].slice(0, e), t[2] = i.slice(0, e)), t.slice(0, 3));
        }
      },
      filter: {
        TAG: function TAG(t) {
          var e = t.replace(bt, yt).toLowerCase();
          return "*" === t ? function () {
            return !0;
          } : function (t) {
            return t.nodeName && t.nodeName.toLowerCase() === e;
          };
        },
        CLASS: function CLASS(t) {
          var e = H[t + " "];
          return e || (e = new RegExp("(^|" + tt + ")" + t + "(" + tt + "|$)")) && H(t, function (t) {
            return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "");
          });
        },
        ATTR: function ATTR(t, i, s) {
          return function (n) {
            var o = e.attr(n, t);
            return null == o ? "!=" === i : !i || (o += "", "=" === i ? o === s : "!=" === i ? o !== s : "^=" === i ? s && 0 === o.indexOf(s) : "*=" === i ? s && o.indexOf(s) > -1 : "$=" === i ? s && o.slice(-s.length) === s : "~=" === i ? (" " + o.replace(ot, " ") + " ").indexOf(s) > -1 : "|=" === i && (o === s || o.slice(0, s.length + 1) === s + "-"));
          };
        },
        CHILD: function CHILD(t, e, i, s, n) {
          var o = "nth" !== t.slice(0, 3),
              r = "last" !== t.slice(-4),
              a = "of-type" === e;
          return 1 === s && 0 === n ? function (t) {
            return !!t.parentNode;
          } : function (e, i, l) {
            var h,
                c,
                u,
                p,
                d,
                f,
                m = o !== r ? "nextSibling" : "previousSibling",
                g = e.parentNode,
                _ = a && e.nodeName.toLowerCase(),
                v = !l && !a;

            if (g) {
              if (o) {
                for (; m;) {
                  for (u = e; u = u[m];) {
                    if (a ? u.nodeName.toLowerCase() === _ : 1 === u.nodeType) return !1;
                  }

                  f = m = "only" === t && !f && "nextSibling";
                }

                return !0;
              }

              if (f = [r ? g.firstChild : g.lastChild], r && v) {
                for (d = (h = (c = g[N] || (g[N] = {}))[t] || [])[0] === j && h[1], p = h[0] === j && h[2], u = d && g.childNodes[d]; u = ++d && u && u[m] || (p = d = 0) || f.pop();) {
                  if (1 === u.nodeType && ++p && u === e) {
                    c[t] = [j, d, p];
                    break;
                  }
                }
              } else if (v && (h = (e[N] || (e[N] = {}))[t]) && h[0] === j) p = h[1];else for (; (u = ++d && u && u[m] || (p = d = 0) || f.pop()) && ((a ? u.nodeName.toLowerCase() !== _ : 1 !== u.nodeType) || !++p || (v && ((u[N] || (u[N] = {}))[t] = [j, p]), u !== e));) {
                ;
              }

              return (p -= n) === s || p % s == 0 && p / s >= 0;
            }
          };
        },
        PSEUDO: function PSEUDO(t, i) {
          var n,
              o = y.pseudos[t] || y.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
          return o[N] ? o(i) : o.length > 1 ? (n = [t, t, "", i], y.setFilters.hasOwnProperty(t.toLowerCase()) ? s(function (t, e) {
            for (var s, n = o(t, i), r = n.length; r--;) {
              s = K(t, n[r]), t[s] = !(e[s] = n[r]);
            }
          }) : function (t) {
            return o(t, 0, n);
          }) : o;
        }
      },
      pseudos: {
        not: s(function (t) {
          var e = [],
              i = [],
              n = k(t.replace(rt, "$1"));
          return n[N] ? s(function (t, e, i, s) {
            for (var o, r = n(t, null, s, []), a = t.length; a--;) {
              (o = r[a]) && (t[a] = !(e[a] = o));
            }
          }) : function (t, s, o) {
            return e[0] = t, n(e, null, o, i), e[0] = null, !i.pop();
          };
        }),
        has: s(function (t) {
          return function (i) {
            return e(t, i).length > 0;
          };
        }),
        contains: s(function (t) {
          return t = t.replace(bt, yt), function (e) {
            return (e.textContent || e.innerText || w(e)).indexOf(t) > -1;
          };
        }),
        lang: s(function (t) {
          return ut.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(bt, yt).toLowerCase(), function (e) {
            var i;

            do {
              if (i = R ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (i = i.toLowerCase()) === t || 0 === i.indexOf(t + "-");
            } while ((e = e.parentNode) && 1 === e.nodeType);

            return !1;
          };
        }),
        target: function target(e) {
          var i = t.location && t.location.hash;
          return i && i.slice(1) === e.id;
        },
        root: function root(t) {
          return t === O;
        },
        focus: function focus(t) {
          return t === D.activeElement && (!D.hasFocus || D.hasFocus()) && !!(t.type || t.href || ~t.tabIndex);
        },
        enabled: function enabled(t) {
          return !1 === t.disabled;
        },
        disabled: function disabled(t) {
          return !0 === t.disabled;
        },
        checked: function checked(t) {
          var e = t.nodeName.toLowerCase();
          return "input" === e && !!t.checked || "option" === e && !!t.selected;
        },
        selected: function selected(t) {
          return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected;
        },
        empty: function empty(t) {
          for (t = t.firstChild; t; t = t.nextSibling) {
            if (t.nodeType < 6) return !1;
          }

          return !0;
        },
        parent: function parent(t) {
          return !y.pseudos.empty(t);
        },
        header: function header(t) {
          return ft.test(t.nodeName);
        },
        input: function input(t) {
          return dt.test(t.nodeName);
        },
        button: function button(t) {
          var e = t.nodeName.toLowerCase();
          return "input" === e && "button" === t.type || "button" === e;
        },
        text: function text(t) {
          var e;
          return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase());
        },
        first: h(function () {
          return [0];
        }),
        last: h(function (t, e) {
          return [e - 1];
        }),
        eq: h(function (t, e, i) {
          return [0 > i ? i + e : i];
        }),
        even: h(function (t, e) {
          for (var i = 0; e > i; i += 2) {
            t.push(i);
          }

          return t;
        }),
        odd: h(function (t, e) {
          for (var i = 1; e > i; i += 2) {
            t.push(i);
          }

          return t;
        }),
        lt: h(function (t, e, i) {
          for (var s = 0 > i ? i + e : i; --s >= 0;) {
            t.push(s);
          }

          return t;
        }),
        gt: h(function (t, e, i) {
          for (var s = 0 > i ? i + e : i; ++s < e;) {
            t.push(s);
          }

          return t;
        })
      }
    }).pseudos.nth = y.pseudos.eq;

    for (v in {
      radio: !0,
      checkbox: !0,
      file: !0,
      password: !0,
      image: !0
    }) {
      y.pseudos[v] = a(v);
    }

    for (v in {
      submit: !0,
      reset: !0
    }) {
      y.pseudos[v] = l(v);
    }

    return u.prototype = y.filters = y.pseudos, y.setFilters = new u(), T = e.tokenize = function (t, i) {
      var s,
          n,
          o,
          r,
          a,
          l,
          h,
          c = X[t + " "];
      if (c) return i ? 0 : c.slice(0);

      for (a = t, l = [], h = y.preFilter; a;) {
        (!s || (n = at.exec(a))) && (n && (a = a.slice(n[0].length) || a), l.push(o = [])), s = !1, (n = lt.exec(a)) && (s = n.shift(), o.push({
          value: s,
          type: n[0].replace(rt, " ")
        }), a = a.slice(s.length));

        for (r in y.filter) {
          !(n = pt[r].exec(a)) || h[r] && !(n = h[r](n)) || (s = n.shift(), o.push({
            value: s,
            type: r,
            matches: n
          }), a = a.slice(s.length));
        }

        if (!s) break;
      }

      return i ? a.length : a ? e.error(t) : X(t, l).slice(0);
    }, k = e.compile = function (t, i) {
      var n,
          o = [],
          r = [],
          a = W[t + " "];

      if (!a) {
        for (i || (i = T(t)), n = i.length; n--;) {
          (a = _(i[n]))[N] ? o.push(a) : r.push(a);
        }

        (a = W(t, function (t, i) {
          var n = i.length > 0,
              o = t.length > 0,
              r = function r(s, _r, a, l, h) {
            var c,
                u,
                p,
                d = 0,
                f = "0",
                g = s && [],
                _ = [],
                v = S,
                b = s || o && y.find.TAG("*", h),
                w = j += null == v ? 1 : Math.random() || .1,
                x = b.length;

            for (h && (S = _r !== D && _r); f !== x && null != (c = b[f]); f++) {
              if (o && c) {
                for (u = 0; p = t[u++];) {
                  if (p(c, _r, a)) {
                    l.push(c);
                    break;
                  }
                }

                h && (j = w);
              }

              n && ((c = !p && c) && d--, s && g.push(c));
            }

            if (d += f, n && f !== d) {
              for (u = 0; p = i[u++];) {
                p(g, _, _r, a);
              }

              if (s) {
                if (d > 0) for (; f--;) {
                  g[f] || _[f] || (_[f] = U.call(l));
                }
                _ = m(_);
              }

              G.apply(l, _), h && !s && _.length > 0 && d + i.length > 1 && e.uniqueSort(l);
            }

            return h && (j = w, S = v), g;
          };

          return n ? s(r) : r;
        }(r, o))).selector = t;
      }

      return a;
    }, C = e.select = function (t, e, i, s) {
      var n,
          o,
          r,
          a,
          l,
          h = "function" == typeof t && t,
          u = !s && T(t = h.selector || t);

      if (i = i || [], 1 === u.length) {
        if ((o = u[0] = u[0].slice(0)).length > 2 && "ID" === (r = o[0]).type && b.getById && 9 === e.nodeType && R && y.relative[o[1].type]) {
          if (!(e = (y.find.ID(r.matches[0].replace(bt, yt), e) || [])[0])) return i;
          h && (e = e.parentNode), t = t.slice(o.shift().value.length);
        }

        for (n = pt.needsContext.test(t) ? 0 : o.length; n-- && (r = o[n], !y.relative[a = r.type]);) {
          if ((l = y.find[a]) && (s = l(r.matches[0].replace(bt, yt), _t.test(o[0].type) && c(e.parentNode) || e))) {
            if (o.splice(n, 1), !(t = s.length && p(o))) return G.apply(i, s), i;
            break;
          }
        }
      }

      return (h || k(t, u))(s, e, !R, i, _t.test(t) && c(e.parentNode) || e), i;
    }, b.sortStable = N.split("").sort(Y).join("") === N, b.detectDuplicates = !!E, A(), b.sortDetached = n(function (t) {
      return 1 & t.compareDocumentPosition(D.createElement("div"));
    }), n(function (t) {
      return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href");
    }) || o("type|href|height|width", function (t, e, i) {
      return i ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2);
    }), b.attributes && n(function (t) {
      return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value");
    }) || o("value", function (t, e, i) {
      return i || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue;
    }), n(function (t) {
      return null == t.getAttribute("disabled");
    }) || o(J, function (t, e, i) {
      var s;
      return i ? void 0 : !0 === t[e] ? e.toLowerCase() : (s = t.getAttributeNode(e)) && s.specified ? s.value : null;
    }), e;
  }(t);

  V.find = K, V.expr = K.selectors, V.expr[":"] = V.expr.pseudos, V.unique = K.uniqueSort, V.text = K.getText, V.isXMLDoc = K.isXML, V.contains = K.contains;
  var J = V.expr.match.needsContext,
      tt = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
      et = /^.[^:#\[\.,]*$/;
  V.filter = function (t, e, i) {
    var s = e[0];
    return i && (t = ":not(" + t + ")"), 1 === e.length && 1 === s.nodeType ? V.find.matchesSelector(s, t) ? [s] : [] : V.find.matches(t, V.grep(e, function (t) {
      return 1 === t.nodeType;
    }));
  }, V.fn.extend({
    find: function find(t) {
      var e,
          i = this.length,
          s = [],
          n = this;
      if ("string" != typeof t) return this.pushStack(V(t).filter(function () {
        for (e = 0; i > e; e++) {
          if (V.contains(n[e], this)) return !0;
        }
      }));

      for (e = 0; i > e; e++) {
        V.find(t, n[e], s);
      }

      return s = this.pushStack(i > 1 ? V.unique(s) : s), s.selector = this.selector ? this.selector + " " + t : t, s;
    },
    filter: function filter(t) {
      return this.pushStack(s(this, t || [], !1));
    },
    not: function not(t) {
      return this.pushStack(s(this, t || [], !0));
    },
    is: function is(t) {
      return !!s(this, "string" == typeof t && J.test(t) ? V(t) : t || [], !1).length;
    }
  });
  var it,
      st = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
  (V.fn.init = function (t, e) {
    var i, s;
    if (!t) return this;

    if ("string" == typeof t) {
      if (!(i = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : st.exec(t)) || !i[1] && e) return !e || e.jquery ? (e || it).find(t) : this.constructor(e).find(t);

      if (i[1]) {
        if (e = e instanceof V ? e[0] : e, V.merge(this, V.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : q, !0)), tt.test(i[1]) && V.isPlainObject(e)) for (i in e) {
          V.isFunction(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
        }
        return this;
      }

      return (s = q.getElementById(i[2])) && s.parentNode && (this.length = 1, this[0] = s), this.context = q, this.selector = t, this;
    }

    return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : V.isFunction(t) ? void 0 !== it.ready ? it.ready(t) : t(V) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), V.makeArray(t, this));
  }).prototype = V.fn, it = V(q);
  var nt = /^(?:parents|prev(?:Until|All))/,
      ot = {
    children: !0,
    contents: !0,
    next: !0,
    prev: !0
  };
  V.extend({
    dir: function dir(t, e, i) {
      for (var s = [], n = void 0 !== i; (t = t[e]) && 9 !== t.nodeType;) {
        if (1 === t.nodeType) {
          if (n && V(t).is(i)) break;
          s.push(t);
        }
      }

      return s;
    },
    sibling: function sibling(t, e) {
      for (var i = []; t; t = t.nextSibling) {
        1 === t.nodeType && t !== e && i.push(t);
      }

      return i;
    }
  }), V.fn.extend({
    has: function has(t) {
      var e = V(t, this),
          i = e.length;
      return this.filter(function () {
        for (var t = 0; i > t; t++) {
          if (V.contains(this, e[t])) return !0;
        }
      });
    },
    closest: function closest(t, e) {
      for (var i, s = 0, n = this.length, o = [], r = J.test(t) || "string" != typeof t ? V(t, e || this.context) : 0; n > s; s++) {
        for (i = this[s]; i && i !== e; i = i.parentNode) {
          if (i.nodeType < 11 && (r ? r.index(i) > -1 : 1 === i.nodeType && V.find.matchesSelector(i, t))) {
            o.push(i);
            break;
          }
        }
      }

      return this.pushStack(o.length > 1 ? V.unique(o) : o);
    },
    index: function index(t) {
      return t ? "string" == typeof t ? H.call(V(t), this[0]) : H.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    },
    add: function add(t, e) {
      return this.pushStack(V.unique(V.merge(this.get(), V(t, e))));
    },
    addBack: function addBack(t) {
      return this.add(null == t ? this.prevObject : this.prevObject.filter(t));
    }
  }), V.each({
    parent: function parent(t) {
      var e = t.parentNode;
      return e && 11 !== e.nodeType ? e : null;
    },
    parents: function parents(t) {
      return V.dir(t, "parentNode");
    },
    parentsUntil: function parentsUntil(t, e, i) {
      return V.dir(t, "parentNode", i);
    },
    next: function next(t) {
      return n(t, "nextSibling");
    },
    prev: function prev(t) {
      return n(t, "previousSibling");
    },
    nextAll: function nextAll(t) {
      return V.dir(t, "nextSibling");
    },
    prevAll: function prevAll(t) {
      return V.dir(t, "previousSibling");
    },
    nextUntil: function nextUntil(t, e, i) {
      return V.dir(t, "nextSibling", i);
    },
    prevUntil: function prevUntil(t, e, i) {
      return V.dir(t, "previousSibling", i);
    },
    siblings: function siblings(t) {
      return V.sibling((t.parentNode || {}).firstChild, t);
    },
    children: function children(t) {
      return V.sibling(t.firstChild);
    },
    contents: function contents(t) {
      return t.contentDocument || V.merge([], t.childNodes);
    }
  }, function (t, e) {
    V.fn[t] = function (i, s) {
      var n = V.map(this, e, i);
      return "Until" !== t.slice(-5) && (s = i), s && "string" == typeof s && (n = V.filter(s, n)), this.length > 1 && (ot[t] || V.unique(n), nt.test(t) && n.reverse()), this.pushStack(n);
    };
  });
  var rt = /\S+/g,
      at = {};
  V.Callbacks = function (t) {
    var e,
        i,
        s,
        n,
        o,
        r,
        a = [],
        l = !(t = "string" == typeof t ? at[t] || function (t) {
      var e = at[t] = {};
      return V.each(t.match(rt) || [], function (t, i) {
        e[i] = !0;
      }), e;
    }(t) : V.extend({}, t)).once && [],
        h = function h(u) {
      for (e = t.memory && u, i = !0, r = n || 0, n = 0, o = a.length, s = !0; a && o > r; r++) {
        if (!1 === a[r].apply(u[0], u[1]) && t.stopOnFalse) {
          e = !1;
          break;
        }
      }

      s = !1, a && (l ? l.length && h(l.shift()) : e ? a = [] : c.disable());
    },
        c = {
      add: function add() {
        if (a) {
          var i = a.length;
          !function e(i) {
            V.each(i, function (i, s) {
              var n = V.type(s);
              "function" === n ? t.unique && c.has(s) || a.push(s) : s && s.length && "string" !== n && e(s);
            });
          }(arguments), s ? o = a.length : e && (n = i, h(e));
        }

        return this;
      },
      remove: function remove() {
        return a && V.each(arguments, function (t, e) {
          for (var i; (i = V.inArray(e, a, i)) > -1;) {
            a.splice(i, 1), s && (o >= i && o--, r >= i && r--);
          }
        }), this;
      },
      has: function has(t) {
        return t ? V.inArray(t, a) > -1 : !(!a || !a.length);
      },
      empty: function empty() {
        return a = [], o = 0, this;
      },
      disable: function disable() {
        return a = l = e = void 0, this;
      },
      disabled: function disabled() {
        return !a;
      },
      lock: function lock() {
        return l = void 0, e || c.disable(), this;
      },
      locked: function locked() {
        return !l;
      },
      fireWith: function fireWith(t, e) {
        return !a || i && !l || (e = e || [], e = [t, e.slice ? e.slice() : e], s ? l.push(e) : h(e)), this;
      },
      fire: function fire() {
        return c.fireWith(this, arguments), this;
      },
      fired: function fired() {
        return !!i;
      }
    };

    return c;
  }, V.extend({
    Deferred: function Deferred(t) {
      var e = [["resolve", "done", V.Callbacks("once memory"), "resolved"], ["reject", "fail", V.Callbacks("once memory"), "rejected"], ["notify", "progress", V.Callbacks("memory")]],
          i = "pending",
          s = {
        state: function state() {
          return i;
        },
        always: function always() {
          return n.done(arguments).fail(arguments), this;
        },
        then: function then() {
          var t = arguments;
          return V.Deferred(function (i) {
            V.each(e, function (e, o) {
              var r = V.isFunction(t[e]) && t[e];
              n[o[1]](function () {
                var t = r && r.apply(this, arguments);
                t && V.isFunction(t.promise) ? t.promise().done(i.resolve).fail(i.reject).progress(i.notify) : i[o[0] + "With"](this === s ? i.promise() : this, r ? [t] : arguments);
              });
            }), t = null;
          }).promise();
        },
        promise: function promise(t) {
          return null != t ? V.extend(t, s) : s;
        }
      },
          n = {};
      return s.pipe = s.then, V.each(e, function (t, o) {
        var r = o[2],
            a = o[3];
        s[o[1]] = r.add, a && r.add(function () {
          i = a;
        }, e[1 ^ t][2].disable, e[2][2].lock), n[o[0]] = function () {
          return n[o[0] + "With"](this === n ? s : this, arguments), this;
        }, n[o[0] + "With"] = r.fireWith;
      }), s.promise(n), t && t.call(n, n), n;
    },
    when: function when(t) {
      var e,
          i,
          s,
          n = 0,
          o = z.call(arguments),
          r = o.length,
          a = 1 !== r || t && V.isFunction(t.promise) ? r : 0,
          l = 1 === a ? t : V.Deferred(),
          h = function h(t, i, s) {
        return function (n) {
          i[t] = this, s[t] = arguments.length > 1 ? z.call(arguments) : n, s === e ? l.notifyWith(i, s) : --a || l.resolveWith(i, s);
        };
      };

      if (r > 1) for (e = new Array(r), i = new Array(r), s = new Array(r); r > n; n++) {
        o[n] && V.isFunction(o[n].promise) ? o[n].promise().done(h(n, s, o)).fail(l.reject).progress(h(n, i, e)) : --a;
      }
      return a || l.resolveWith(s, o), l.promise();
    }
  });
  var lt;
  V.fn.ready = function (t) {
    return V.ready.promise().done(t), this;
  }, V.extend({
    isReady: !1,
    readyWait: 1,
    holdReady: function holdReady(t) {
      t ? V.readyWait++ : V.ready(!0);
    },
    ready: function ready(t) {
      (!0 === t ? --V.readyWait : V.isReady) || (V.isReady = !0, !0 !== t && --V.readyWait > 0 || (lt.resolveWith(q, [V]), V.fn.triggerHandler && (V(q).triggerHandler("ready"), V(q).off("ready"))));
    }
  }), V.ready.promise = function (e) {
    return lt || (lt = V.Deferred(), "complete" === q.readyState ? setTimeout(V.ready) : (q.addEventListener("DOMContentLoaded", o, !1), t.addEventListener("load", o, !1))), lt.promise(e);
  }, V.ready.promise();

  var ht = V.access = function (t, e, i, s, n, o, r) {
    var a = 0,
        l = t.length,
        h = null == i;

    if ("object" === V.type(i)) {
      n = !0;

      for (a in i) {
        V.access(t, e, a, i[a], !0, o, r);
      }
    } else if (void 0 !== s && (n = !0, V.isFunction(s) || (r = !0), h && (r ? (e.call(t, s), e = null) : (h = e, e = function e(t, _e2, i) {
      return h.call(V(t), i);
    })), e)) for (; l > a; a++) {
      e(t[a], i, r ? s : s.call(t[a], a, e(t[a], i)));
    }

    return n ? t : h ? e.call(t) : l ? e(t[0], i) : o;
  };

  V.acceptData = function (t) {
    return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType;
  }, r.uid = 1, r.accepts = V.acceptData, r.prototype = {
    key: function key(t) {
      if (!r.accepts(t)) return 0;
      var e = {},
          i = t[this.expando];

      if (!i) {
        i = r.uid++;

        try {
          e[this.expando] = {
            value: i
          }, Object.defineProperties(t, e);
        } catch (s) {
          e[this.expando] = i, V.extend(t, e);
        }
      }

      return this.cache[i] || (this.cache[i] = {}), i;
    },
    set: function set(t, e, i) {
      var s,
          n = this.key(t),
          o = this.cache[n];
      if ("string" == typeof e) o[e] = i;else if (V.isEmptyObject(o)) V.extend(this.cache[n], e);else for (s in e) {
        o[s] = e[s];
      }
      return o;
    },
    get: function get(t, e) {
      var i = this.cache[this.key(t)];
      return void 0 === e ? i : i[e];
    },
    access: function access(t, e, i) {
      var s;
      return void 0 === e || e && "string" == typeof e && void 0 === i ? void 0 !== (s = this.get(t, e)) ? s : this.get(t, V.camelCase(e)) : (this.set(t, e, i), void 0 !== i ? i : e);
    },
    remove: function remove(t, e) {
      var i,
          s,
          n,
          o = this.key(t),
          r = this.cache[o];
      if (void 0 === e) this.cache[o] = {};else {
        V.isArray(e) ? s = e.concat(e.map(V.camelCase)) : (n = V.camelCase(e), e in r ? s = [e, n] : (s = n, s = s in r ? [s] : s.match(rt) || [])), i = s.length;

        for (; i--;) {
          delete r[s[i]];
        }
      }
    },
    hasData: function hasData(t) {
      return !V.isEmptyObject(this.cache[t[this.expando]] || {});
    },
    discard: function discard(t) {
      t[this.expando] && delete this.cache[t[this.expando]];
    }
  };
  var ct = new r(),
      ut = new r(),
      pt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      dt = /([A-Z])/g;
  V.extend({
    hasData: function hasData(t) {
      return ut.hasData(t) || ct.hasData(t);
    },
    data: function data(t, e, i) {
      return ut.access(t, e, i);
    },
    removeData: function removeData(t, e) {
      ut.remove(t, e);
    },
    _data: function _data(t, e, i) {
      return ct.access(t, e, i);
    },
    _removeData: function _removeData(t, e) {
      ct.remove(t, e);
    }
  }), V.fn.extend({
    data: function data(t, e) {
      var i,
          s,
          n,
          o = this[0],
          r = o && o.attributes;

      if (void 0 === t) {
        if (this.length && (n = ut.get(o), 1 === o.nodeType && !ct.get(o, "hasDataAttrs"))) {
          for (i = r.length; i--;) {
            r[i] && 0 === (s = r[i].name).indexOf("data-") && (s = V.camelCase(s.slice(5)), a(o, s, n[s]));
          }

          ct.set(o, "hasDataAttrs", !0);
        }

        return n;
      }

      return "object" == _typeof(t) ? this.each(function () {
        ut.set(this, t);
      }) : ht(this, function (e) {
        var i,
            s = V.camelCase(t);

        if (o && void 0 === e) {
          if (void 0 !== (i = ut.get(o, t))) return i;
          if (void 0 !== (i = ut.get(o, s))) return i;
          if (void 0 !== (i = a(o, s, void 0))) return i;
        } else this.each(function () {
          var i = ut.get(this, s);
          ut.set(this, s, e), -1 !== t.indexOf("-") && void 0 !== i && ut.set(this, t, e);
        });
      }, null, e, arguments.length > 1, null, !0);
    },
    removeData: function removeData(t) {
      return this.each(function () {
        ut.remove(this, t);
      });
    }
  }), V.extend({
    queue: function queue(t, e, i) {
      var s;
      return t ? (e = (e || "fx") + "queue", s = ct.get(t, e), i && (!s || V.isArray(i) ? s = ct.access(t, e, V.makeArray(i)) : s.push(i)), s || []) : void 0;
    },
    dequeue: function dequeue(t, e) {
      e = e || "fx";

      var i = V.queue(t, e),
          s = i.length,
          n = i.shift(),
          o = V._queueHooks(t, e);

      "inprogress" === n && (n = i.shift(), s--), n && ("fx" === e && i.unshift("inprogress"), delete o.stop, n.call(t, function () {
        V.dequeue(t, e);
      }, o)), !s && o && o.empty.fire();
    },
    _queueHooks: function _queueHooks(t, e) {
      var i = e + "queueHooks";
      return ct.get(t, i) || ct.access(t, i, {
        empty: V.Callbacks("once memory").add(function () {
          ct.remove(t, [e + "queue", i]);
        })
      });
    }
  }), V.fn.extend({
    queue: function queue(t, e) {
      var i = 2;
      return "string" != typeof t && (e = t, t = "fx", i--), arguments.length < i ? V.queue(this[0], t) : void 0 === e ? this : this.each(function () {
        var i = V.queue(this, t, e);
        V._queueHooks(this, t), "fx" === t && "inprogress" !== i[0] && V.dequeue(this, t);
      });
    },
    dequeue: function dequeue(t) {
      return this.each(function () {
        V.dequeue(this, t);
      });
    },
    clearQueue: function clearQueue(t) {
      return this.queue(t || "fx", []);
    },
    promise: function promise(t, e) {
      var i,
          s = 1,
          n = V.Deferred(),
          o = this,
          r = this.length,
          a = function a() {
        --s || n.resolveWith(o, [o]);
      };

      for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; r--;) {
        (i = ct.get(o[r], t + "queueHooks")) && i.empty && (s++, i.empty.add(a));
      }

      return a(), n.promise(e);
    }
  });

  var ft = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      mt = ["Top", "Right", "Bottom", "Left"],
      gt = function gt(t, e) {
    return t = e || t, "none" === V.css(t, "display") || !V.contains(t.ownerDocument, t);
  },
      _t = /^(?:checkbox|radio)$/i;

  !function () {
    var t = q.createDocumentFragment().appendChild(q.createElement("div")),
        e = q.createElement("input");
    e.setAttribute("type", "radio"), e.setAttribute("checked", "checked"), e.setAttribute("name", "t"), t.appendChild(e), B.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", B.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue;
  }();
  var vt = "undefined";
  B.focusinBubbles = "onfocusin" in t;
  var bt = /^key/,
      yt = /^(?:mouse|pointer|contextmenu)|click/,
      wt = /^(?:focusinfocus|focusoutblur)$/,
      xt = /^([^.]*)(?:\.(.+)|)$/;
  V.event = {
    global: {},
    add: function add(t, e, i, s, n) {
      var o,
          r,
          a,
          l,
          h,
          c,
          u,
          p,
          d,
          f,
          m,
          g = ct.get(t);
      if (g) for (i.handler && (o = i, i = o.handler, n = o.selector), i.guid || (i.guid = V.guid++), (l = g.events) || (l = g.events = {}), (r = g.handle) || (r = g.handle = function (e) {
        return _typeof(V) !== vt && V.event.triggered !== e.type ? V.event.dispatch.apply(t, arguments) : void 0;
      }), h = (e = (e || "").match(rt) || [""]).length; h--;) {
        a = xt.exec(e[h]) || [], d = m = a[1], f = (a[2] || "").split(".").sort(), d && (u = V.event.special[d] || {}, d = (n ? u.delegateType : u.bindType) || d, u = V.event.special[d] || {}, c = V.extend({
          type: d,
          origType: m,
          data: s,
          handler: i,
          guid: i.guid,
          selector: n,
          needsContext: n && V.expr.match.needsContext.test(n),
          namespace: f.join(".")
        }, o), (p = l[d]) || (p = l[d] = [], p.delegateCount = 0, u.setup && !1 !== u.setup.call(t, s, f, r) || t.addEventListener && t.addEventListener(d, r, !1)), u.add && (u.add.call(t, c), c.handler.guid || (c.handler.guid = i.guid)), n ? p.splice(p.delegateCount++, 0, c) : p.push(c), V.event.global[d] = !0);
      }
    },
    remove: function remove(t, e, i, s, n) {
      var o,
          r,
          a,
          l,
          h,
          c,
          u,
          p,
          d,
          f,
          m,
          g = ct.hasData(t) && ct.get(t);

      if (g && (l = g.events)) {
        for (h = (e = (e || "").match(rt) || [""]).length; h--;) {
          if (a = xt.exec(e[h]) || [], d = m = a[1], f = (a[2] || "").split(".").sort(), d) {
            for (u = V.event.special[d] || {}, p = l[d = (s ? u.delegateType : u.bindType) || d] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), r = o = p.length; o--;) {
              c = p[o], !n && m !== c.origType || i && i.guid !== c.guid || a && !a.test(c.namespace) || s && s !== c.selector && ("**" !== s || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, u.remove && u.remove.call(t, c));
            }

            r && !p.length && (u.teardown && !1 !== u.teardown.call(t, f, g.handle) || V.removeEvent(t, d, g.handle), delete l[d]);
          } else for (d in l) {
            V.event.remove(t, d + e[h], i, s, !0);
          }
        }

        V.isEmptyObject(l) && (delete g.handle, ct.remove(t, "events"));
      }
    },
    trigger: function trigger(e, i, s, n) {
      var o,
          r,
          a,
          l,
          h,
          c,
          u,
          p = [s || q],
          d = Y.call(e, "type") ? e.type : e,
          f = Y.call(e, "namespace") ? e.namespace.split(".") : [];

      if (r = a = s = s || q, 3 !== s.nodeType && 8 !== s.nodeType && !wt.test(d + V.event.triggered) && (d.indexOf(".") >= 0 && (f = d.split("."), d = f.shift(), f.sort()), h = d.indexOf(":") < 0 && "on" + d, e = e[V.expando] ? e : new V.Event(d, "object" == _typeof(e) && e), e.isTrigger = n ? 2 : 3, e.namespace = f.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = s), i = null == i ? [e] : V.makeArray(i, [e]), u = V.event.special[d] || {}, n || !u.trigger || !1 !== u.trigger.apply(s, i))) {
        if (!n && !u.noBubble && !V.isWindow(s)) {
          for (l = u.delegateType || d, wt.test(l + d) || (r = r.parentNode); r; r = r.parentNode) {
            p.push(r), a = r;
          }

          a === (s.ownerDocument || q) && p.push(a.defaultView || a.parentWindow || t);
        }

        for (o = 0; (r = p[o++]) && !e.isPropagationStopped();) {
          e.type = o > 1 ? l : u.bindType || d, (c = (ct.get(r, "events") || {})[e.type] && ct.get(r, "handle")) && c.apply(r, i), (c = h && r[h]) && c.apply && V.acceptData(r) && (e.result = c.apply(r, i), !1 === e.result && e.preventDefault());
        }

        return e.type = d, n || e.isDefaultPrevented() || u._default && !1 !== u._default.apply(p.pop(), i) || !V.acceptData(s) || h && V.isFunction(s[d]) && !V.isWindow(s) && ((a = s[h]) && (s[h] = null), V.event.triggered = d, s[d](), V.event.triggered = void 0, a && (s[h] = a)), e.result;
      }
    },
    dispatch: function dispatch(t) {
      t = V.event.fix(t);
      var e,
          i,
          s,
          n,
          o,
          r = [],
          a = z.call(arguments),
          l = (ct.get(this, "events") || {})[t.type] || [],
          h = V.event.special[t.type] || {};

      if (a[0] = t, t.delegateTarget = this, !h.preDispatch || !1 !== h.preDispatch.call(this, t)) {
        for (r = V.event.handlers.call(this, t, l), e = 0; (n = r[e++]) && !t.isPropagationStopped();) {
          for (t.currentTarget = n.elem, i = 0; (o = n.handlers[i++]) && !t.isImmediatePropagationStopped();) {
            (!t.namespace_re || t.namespace_re.test(o.namespace)) && (t.handleObj = o, t.data = o.data, void 0 !== (s = ((V.event.special[o.origType] || {}).handle || o.handler).apply(n.elem, a)) && !1 === (t.result = s) && (t.preventDefault(), t.stopPropagation()));
          }
        }

        return h.postDispatch && h.postDispatch.call(this, t), t.result;
      }
    },
    handlers: function handlers(t, e) {
      var i,
          s,
          n,
          o,
          r = [],
          a = e.delegateCount,
          l = t.target;
      if (a && l.nodeType && (!t.button || "click" !== t.type)) for (; l !== this; l = l.parentNode || this) {
        if (!0 !== l.disabled || "click" !== t.type) {
          for (s = [], i = 0; a > i; i++) {
            o = e[i], n = o.selector + " ", void 0 === s[n] && (s[n] = o.needsContext ? V(n, this).index(l) >= 0 : V.find(n, this, null, [l]).length), s[n] && s.push(o);
          }

          s.length && r.push({
            elem: l,
            handlers: s
          });
        }
      }
      return a < e.length && r.push({
        elem: this,
        handlers: e.slice(a)
      }), r;
    },
    props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
    fixHooks: {},
    keyHooks: {
      props: "char charCode key keyCode".split(" "),
      filter: function filter(t, e) {
        return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t;
      }
    },
    mouseHooks: {
      props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
      filter: function filter(t, e) {
        var i,
            s,
            n,
            o = e.button;
        return null == t.pageX && null != e.clientX && (i = t.target.ownerDocument || q, s = i.documentElement, n = i.body, t.pageX = e.clientX + (s && s.scrollLeft || n && n.scrollLeft || 0) - (s && s.clientLeft || n && n.clientLeft || 0), t.pageY = e.clientY + (s && s.scrollTop || n && n.scrollTop || 0) - (s && s.clientTop || n && n.clientTop || 0)), t.which || void 0 === o || (t.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), t;
      }
    },
    fix: function fix(t) {
      if (t[V.expando]) return t;
      var e,
          i,
          s,
          n = t.type,
          o = t,
          r = this.fixHooks[n];

      for (r || (this.fixHooks[n] = r = yt.test(n) ? this.mouseHooks : bt.test(n) ? this.keyHooks : {}), s = r.props ? this.props.concat(r.props) : this.props, t = new V.Event(o), e = s.length; e--;) {
        i = s[e], t[i] = o[i];
      }

      return t.target || (t.target = q), 3 === t.target.nodeType && (t.target = t.target.parentNode), r.filter ? r.filter(t, o) : t;
    },
    special: {
      load: {
        noBubble: !0
      },
      focus: {
        trigger: function trigger() {
          return this !== c() && this.focus ? (this.focus(), !1) : void 0;
        },
        delegateType: "focusin"
      },
      blur: {
        trigger: function trigger() {
          return this === c() && this.blur ? (this.blur(), !1) : void 0;
        },
        delegateType: "focusout"
      },
      click: {
        trigger: function trigger() {
          return "checkbox" === this.type && this.click && V.nodeName(this, "input") ? (this.click(), !1) : void 0;
        },
        _default: function _default(t) {
          return V.nodeName(t.target, "a");
        }
      },
      beforeunload: {
        postDispatch: function postDispatch(t) {
          void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result);
        }
      }
    },
    simulate: function simulate(t, e, i, s) {
      var n = V.extend(new V.Event(), i, {
        type: t,
        isSimulated: !0,
        originalEvent: {}
      });
      s ? V.event.trigger(n, null, e) : V.event.dispatch.call(e, n), n.isDefaultPrevented() && i.preventDefault();
    }
  }, V.removeEvent = function (t, e, i) {
    t.removeEventListener && t.removeEventListener(e, i, !1);
  }, V.Event = function (t, e) {
    return this instanceof V.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? l : h) : this.type = t, e && V.extend(this, e), this.timeStamp = t && t.timeStamp || V.now(), void (this[V.expando] = !0)) : new V.Event(t, e);
  }, V.Event.prototype = {
    isDefaultPrevented: h,
    isPropagationStopped: h,
    isImmediatePropagationStopped: h,
    preventDefault: function preventDefault() {
      var t = this.originalEvent;
      this.isDefaultPrevented = l, t && t.preventDefault && t.preventDefault();
    },
    stopPropagation: function stopPropagation() {
      var t = this.originalEvent;
      this.isPropagationStopped = l, t && t.stopPropagation && t.stopPropagation();
    },
    stopImmediatePropagation: function stopImmediatePropagation() {
      var t = this.originalEvent;
      this.isImmediatePropagationStopped = l, t && t.stopImmediatePropagation && t.stopImmediatePropagation(), this.stopPropagation();
    }
  }, V.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function (t, e) {
    V.event.special[t] = {
      delegateType: e,
      bindType: e,
      handle: function handle(t) {
        var i,
            s = t.relatedTarget,
            n = t.handleObj;
        return (!s || s !== this && !V.contains(this, s)) && (t.type = n.origType, i = n.handler.apply(this, arguments), t.type = e), i;
      }
    };
  }), B.focusinBubbles || V.each({
    focus: "focusin",
    blur: "focusout"
  }, function (t, e) {
    var i = function i(t) {
      V.event.simulate(e, t.target, V.event.fix(t), !0);
    };

    V.event.special[e] = {
      setup: function setup() {
        var s = this.ownerDocument || this,
            n = ct.access(s, e);
        n || s.addEventListener(t, i, !0), ct.access(s, e, (n || 0) + 1);
      },
      teardown: function teardown() {
        var s = this.ownerDocument || this,
            n = ct.access(s, e) - 1;
        n ? ct.access(s, e, n) : (s.removeEventListener(t, i, !0), ct.remove(s, e));
      }
    };
  }), V.fn.extend({
    on: function on(t, e, i, s, n) {
      var o, r;

      if ("object" == _typeof(t)) {
        "string" != typeof e && (i = i || e, e = void 0);

        for (r in t) {
          this.on(r, e, i, t[r], n);
        }

        return this;
      }

      if (null == i && null == s ? (s = e, i = e = void 0) : null == s && ("string" == typeof e ? (s = i, i = void 0) : (s = i, i = e, e = void 0)), !1 === s) s = h;else if (!s) return this;
      return 1 === n && (o = s, s = function s(t) {
        return V().off(t), o.apply(this, arguments);
      }, s.guid = o.guid || (o.guid = V.guid++)), this.each(function () {
        V.event.add(this, t, s, i, e);
      });
    },
    one: function one(t, e, i, s) {
      return this.on(t, e, i, s, 1);
    },
    off: function off(t, e, i) {
      var s, n;
      if (t && t.preventDefault && t.handleObj) return s = t.handleObj, V(t.delegateTarget).off(s.namespace ? s.origType + "." + s.namespace : s.origType, s.selector, s.handler), this;

      if ("object" == _typeof(t)) {
        for (n in t) {
          this.off(n, e, t[n]);
        }

        return this;
      }

      return (!1 === e || "function" == typeof e) && (i = e, e = void 0), !1 === i && (i = h), this.each(function () {
        V.event.remove(this, t, i, e);
      });
    },
    trigger: function trigger(t, e) {
      return this.each(function () {
        V.event.trigger(t, e, this);
      });
    },
    triggerHandler: function triggerHandler(t, e) {
      var i = this[0];
      return i ? V.event.trigger(t, e, i, !0) : void 0;
    }
  });
  var Tt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
      kt = /<([\w:]+)/,
      Ct = /<|&#?\w+;/,
      St = /<(?:script|style|link)/i,
      Pt = /checked\s*(?:[^=]|=\s*.checked.)/i,
      Et = /^$|\/(?:java|ecma)script/i,
      At = /^true\/(.*)/,
      Dt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
      Ot = {
    option: [1, "<select multiple='multiple'>", "</select>"],
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""]
  };
  Ot.optgroup = Ot.option, Ot.tbody = Ot.tfoot = Ot.colgroup = Ot.caption = Ot.thead, Ot.th = Ot.td, V.extend({
    clone: function clone(t, e, i) {
      var s,
          n,
          o,
          r,
          a = t.cloneNode(!0),
          l = V.contains(t.ownerDocument, t);
      if (!(B.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || V.isXMLDoc(t))) for (r = g(a), o = g(t), s = 0, n = o.length; n > s; s++) {
        _(o[s], r[s]);
      }
      if (e) if (i) for (o = o || g(t), r = r || g(a), s = 0, n = o.length; n > s; s++) {
        m(o[s], r[s]);
      } else m(t, a);
      return (r = g(a, "script")).length > 0 && f(r, !l && g(t, "script")), a;
    },
    buildFragment: function buildFragment(t, e, i, s) {
      for (var n, o, r, a, l, h, c = e.createDocumentFragment(), u = [], p = 0, d = t.length; d > p; p++) {
        if ((n = t[p]) || 0 === n) if ("object" === V.type(n)) V.merge(u, n.nodeType ? [n] : n);else if (Ct.test(n)) {
          for (o = o || c.appendChild(e.createElement("div")), r = (kt.exec(n) || ["", ""])[1].toLowerCase(), a = Ot[r] || Ot._default, o.innerHTML = a[1] + n.replace(Tt, "<$1></$2>") + a[2], h = a[0]; h--;) {
            o = o.lastChild;
          }

          V.merge(u, o.childNodes), (o = c.firstChild).textContent = "";
        } else u.push(e.createTextNode(n));
      }

      for (c.textContent = "", p = 0; n = u[p++];) {
        if ((!s || -1 === V.inArray(n, s)) && (l = V.contains(n.ownerDocument, n), o = g(c.appendChild(n), "script"), l && f(o), i)) for (h = 0; n = o[h++];) {
          Et.test(n.type || "") && i.push(n);
        }
      }

      return c;
    },
    cleanData: function cleanData(t) {
      for (var e, i, s, n, o = V.event.special, r = 0; void 0 !== (i = t[r]); r++) {
        if (V.acceptData(i) && (n = i[ct.expando]) && (e = ct.cache[n])) {
          if (e.events) for (s in e.events) {
            o[s] ? V.event.remove(i, s) : V.removeEvent(i, s, e.handle);
          }
          ct.cache[n] && delete ct.cache[n];
        }

        delete ut.cache[i[ut.expando]];
      }
    }
  }), V.fn.extend({
    text: function text(t) {
      return ht(this, function (t) {
        return void 0 === t ? V.text(this) : this.empty().each(function () {
          (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = t);
        });
      }, null, t, arguments.length);
    },
    append: function append() {
      return this.domManip(arguments, function (t) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          u(this, t).appendChild(t);
        }
      });
    },
    prepend: function prepend() {
      return this.domManip(arguments, function (t) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var e = u(this, t);
          e.insertBefore(t, e.firstChild);
        }
      });
    },
    before: function before() {
      return this.domManip(arguments, function (t) {
        this.parentNode && this.parentNode.insertBefore(t, this);
      });
    },
    after: function after() {
      return this.domManip(arguments, function (t) {
        this.parentNode && this.parentNode.insertBefore(t, this.nextSibling);
      });
    },
    remove: function remove(t, e) {
      for (var i, s = t ? V.filter(t, this) : this, n = 0; null != (i = s[n]); n++) {
        e || 1 !== i.nodeType || V.cleanData(g(i)), i.parentNode && (e && V.contains(i.ownerDocument, i) && f(g(i, "script")), i.parentNode.removeChild(i));
      }

      return this;
    },
    empty: function empty() {
      for (var t, e = 0; null != (t = this[e]); e++) {
        1 === t.nodeType && (V.cleanData(g(t, !1)), t.textContent = "");
      }

      return this;
    },
    clone: function clone(t, e) {
      return t = null != t && t, e = null == e ? t : e, this.map(function () {
        return V.clone(this, t, e);
      });
    },
    html: function html(t) {
      return ht(this, function (t) {
        var e = this[0] || {},
            i = 0,
            s = this.length;
        if (void 0 === t && 1 === e.nodeType) return e.innerHTML;

        if ("string" == typeof t && !St.test(t) && !Ot[(kt.exec(t) || ["", ""])[1].toLowerCase()]) {
          t = t.replace(Tt, "<$1></$2>");

          try {
            for (; s > i; i++) {
              1 === (e = this[i] || {}).nodeType && (V.cleanData(g(e, !1)), e.innerHTML = t);
            }

            e = 0;
          } catch (t) {}
        }

        e && this.empty().append(t);
      }, null, t, arguments.length);
    },
    replaceWith: function replaceWith() {
      var t = arguments[0];
      return this.domManip(arguments, function (e) {
        t = this.parentNode, V.cleanData(g(this)), t && t.replaceChild(e, this);
      }), t && (t.length || t.nodeType) ? this : this.remove();
    },
    detach: function detach(t) {
      return this.remove(t, !0);
    },
    domManip: function domManip(t, e) {
      t = j.apply([], t);
      var i,
          s,
          n,
          o,
          r,
          a,
          l = 0,
          h = this.length,
          c = this,
          u = h - 1,
          f = t[0],
          m = V.isFunction(f);
      if (m || h > 1 && "string" == typeof f && !B.checkClone && Pt.test(f)) return this.each(function (i) {
        var s = c.eq(i);
        m && (t[0] = f.call(this, i, s.html())), s.domManip(t, e);
      });

      if (h && (i = V.buildFragment(t, this[0].ownerDocument, !1, this), s = i.firstChild, 1 === i.childNodes.length && (i = s), s)) {
        for (o = (n = V.map(g(i, "script"), p)).length; h > l; l++) {
          r = i, l !== u && (r = V.clone(r, !0, !0), o && V.merge(n, g(r, "script"))), e.call(this[l], r, l);
        }

        if (o) for (a = n[n.length - 1].ownerDocument, V.map(n, d), l = 0; o > l; l++) {
          r = n[l], Et.test(r.type || "") && !ct.access(r, "globalEval") && V.contains(a, r) && (r.src ? V._evalUrl && V._evalUrl(r.src) : V.globalEval(r.textContent.replace(Dt, "")));
        }
      }

      return this;
    }
  }), V.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function (t, e) {
    V.fn[t] = function (t) {
      for (var i, s = [], n = V(t), o = n.length - 1, r = 0; o >= r; r++) {
        i = r === o ? this : this.clone(!0), V(n[r])[e](i), F.apply(s, i.get());
      }

      return this.pushStack(s);
    };
  });

  var Rt,
      $t = {},
      Mt = /^margin/,
      It = new RegExp("^(" + ft + ")(?!px)[a-z%]+$", "i"),
      Lt = function Lt(e) {
    return e.ownerDocument.defaultView.opener ? e.ownerDocument.defaultView.getComputedStyle(e, null) : t.getComputedStyle(e, null);
  };

  !function () {
    function e() {
      r.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", r.innerHTML = "", n.appendChild(o);
      var e = t.getComputedStyle(r, null);
      i = "1%" !== e.top, s = "4px" === e.width, n.removeChild(o);
    }

    var i,
        s,
        n = q.documentElement,
        o = q.createElement("div"),
        r = q.createElement("div");
    r.style && (r.style.backgroundClip = "content-box", r.cloneNode(!0).style.backgroundClip = "", B.clearCloneStyle = "content-box" === r.style.backgroundClip, o.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", o.appendChild(r), t.getComputedStyle && V.extend(B, {
      pixelPosition: function pixelPosition() {
        return e(), i;
      },
      boxSizingReliable: function boxSizingReliable() {
        return null == s && e(), s;
      },
      reliableMarginRight: function reliableMarginRight() {
        var e,
            i = r.appendChild(q.createElement("div"));
        return i.style.cssText = r.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", i.style.marginRight = i.style.width = "0", r.style.width = "1px", n.appendChild(o), e = !parseFloat(t.getComputedStyle(i, null).marginRight), n.removeChild(o), r.removeChild(i), e;
      }
    }));
  }(), V.swap = function (t, e, i, s) {
    var n,
        o,
        r = {};

    for (o in e) {
      r[o] = t.style[o], t.style[o] = e[o];
    }

    n = i.apply(t, s || []);

    for (o in e) {
      t.style[o] = r[o];
    }

    return n;
  };
  var Nt = /^(none|table(?!-c[ea]).+)/,
      zt = new RegExp("^(" + ft + ")(.*)$", "i"),
      jt = new RegExp("^([+-])=(" + ft + ")", "i"),
      Ft = {
    position: "absolute",
    visibility: "hidden",
    display: "block"
  },
      Ht = {
    letterSpacing: "0",
    fontWeight: "400"
  },
      Xt = ["Webkit", "O", "Moz", "ms"];
  V.extend({
    cssHooks: {
      opacity: {
        get: function get(t, e) {
          if (e) {
            var i = y(t, "opacity");
            return "" === i ? "1" : i;
          }
        }
      }
    },
    cssNumber: {
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: {
      "float": "cssFloat"
    },
    style: function style(t, e, i, s) {
      if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
        var n,
            o,
            r,
            a = V.camelCase(e),
            l = t.style;
        return e = V.cssProps[a] || (V.cssProps[a] = x(l, a)), r = V.cssHooks[e] || V.cssHooks[a], void 0 === i ? r && "get" in r && void 0 !== (n = r.get(t, !1, s)) ? n : l[e] : ("string" === (o = _typeof(i)) && (n = jt.exec(i)) && (i = (n[1] + 1) * n[2] + parseFloat(V.css(t, e)), o = "number"), void (null != i && i == i && ("number" !== o || V.cssNumber[a] || (i += "px"), B.clearCloneStyle || "" !== i || 0 !== e.indexOf("background") || (l[e] = "inherit"), r && "set" in r && void 0 === (i = r.set(t, i, s)) || (l[e] = i))));
      }
    },
    css: function css(t, e, i, s) {
      var n,
          o,
          r,
          a = V.camelCase(e);
      return e = V.cssProps[a] || (V.cssProps[a] = x(t.style, a)), (r = V.cssHooks[e] || V.cssHooks[a]) && "get" in r && (n = r.get(t, !0, i)), void 0 === n && (n = y(t, e, s)), "normal" === n && e in Ht && (n = Ht[e]), "" === i || i ? (o = parseFloat(n), !0 === i || V.isNumeric(o) ? o || 0 : n) : n;
    }
  }), V.each(["height", "width"], function (t, e) {
    V.cssHooks[e] = {
      get: function get(t, i, s) {
        return i ? Nt.test(V.css(t, "display")) && 0 === t.offsetWidth ? V.swap(t, Ft, function () {
          return C(t, e, s);
        }) : C(t, e, s) : void 0;
      },
      set: function set(t, i, s) {
        var n = s && Lt(t);
        return T(0, i, s ? k(t, e, s, "border-box" === V.css(t, "boxSizing", !1, n), n) : 0);
      }
    };
  }), V.cssHooks.marginRight = w(B.reliableMarginRight, function (t, e) {
    return e ? V.swap(t, {
      display: "inline-block"
    }, y, [t, "marginRight"]) : void 0;
  }), V.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function (t, e) {
    V.cssHooks[t + e] = {
      expand: function expand(i) {
        for (var s = 0, n = {}, o = "string" == typeof i ? i.split(" ") : [i]; 4 > s; s++) {
          n[t + mt[s] + e] = o[s] || o[s - 2] || o[0];
        }

        return n;
      }
    }, Mt.test(t) || (V.cssHooks[t + e].set = T);
  }), V.fn.extend({
    css: function css(t, e) {
      return ht(this, function (t, e, i) {
        var s,
            n,
            o = {},
            r = 0;

        if (V.isArray(e)) {
          for (s = Lt(t), n = e.length; n > r; r++) {
            o[e[r]] = V.css(t, e[r], !1, s);
          }

          return o;
        }

        return void 0 !== i ? V.style(t, e, i) : V.css(t, e);
      }, t, e, arguments.length > 1);
    },
    show: function show() {
      return S(this, !0);
    },
    hide: function hide() {
      return S(this);
    },
    toggle: function toggle(t) {
      return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function () {
        gt(this) ? V(this).show() : V(this).hide();
      });
    }
  }), V.Tween = P, (P.prototype = {
    constructor: P,
    init: function init(t, e, i, s, n, o) {
      this.elem = t, this.prop = i, this.easing = n || "swing", this.options = e, this.start = this.now = this.cur(), this.end = s, this.unit = o || (V.cssNumber[i] ? "" : "px");
    },
    cur: function cur() {
      var t = P.propHooks[this.prop];
      return t && t.get ? t.get(this) : P.propHooks._default.get(this);
    },
    run: function run(t) {
      var e,
          i = P.propHooks[this.prop];
      return this.options.duration ? this.pos = e = V.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : P.propHooks._default.set(this), this;
    }
  }).init.prototype = P.prototype, (P.propHooks = {
    _default: {
      get: function get(t) {
        var e;
        return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = V.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0 : t.elem[t.prop];
      },
      set: function set(t) {
        V.fx.step[t.prop] ? V.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[V.cssProps[t.prop]] || V.cssHooks[t.prop]) ? V.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now;
      }
    }
  }).scrollTop = P.propHooks.scrollLeft = {
    set: function set(t) {
      t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now);
    }
  }, V.easing = {
    linear: function linear(t) {
      return t;
    },
    swing: function swing(t) {
      return .5 - Math.cos(t * Math.PI) / 2;
    }
  }, V.fx = P.prototype.init, V.fx.step = {};
  var Wt,
      Yt,
      Bt = /^(?:toggle|show|hide)$/,
      qt = new RegExp("^(?:([+-])=|)(" + ft + ")([a-z%]*)$", "i"),
      Vt = /queueHooks$/,
      Ut = [function (t, e, i) {
    var s,
        n,
        o,
        r,
        a,
        l,
        h,
        c = this,
        u = {},
        p = t.style,
        d = t.nodeType && gt(t),
        f = ct.get(t, "fxshow");
    i.queue || (null == (a = V._queueHooks(t, "fx")).unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function () {
      a.unqueued || l();
    }), a.unqueued++, c.always(function () {
      c.always(function () {
        a.unqueued--, V.queue(t, "fx").length || a.empty.fire();
      });
    })), 1 === t.nodeType && ("height" in e || "width" in e) && (i.overflow = [p.overflow, p.overflowX, p.overflowY], "inline" === ("none" === (h = V.css(t, "display")) ? ct.get(t, "olddisplay") || b(t.nodeName) : h) && "none" === V.css(t, "float") && (p.display = "inline-block")), i.overflow && (p.overflow = "hidden", c.always(function () {
      p.overflow = i.overflow[0], p.overflowX = i.overflow[1], p.overflowY = i.overflow[2];
    }));

    for (s in e) {
      if (n = e[s], Bt.exec(n)) {
        if (delete e[s], o = o || "toggle" === n, n === (d ? "hide" : "show")) {
          if ("show" !== n || !f || void 0 === f[s]) continue;
          d = !0;
        }

        u[s] = f && f[s] || V.style(t, s);
      } else h = void 0;
    }

    if (V.isEmptyObject(u)) "inline" === ("none" === h ? b(t.nodeName) : h) && (p.display = h);else {
      f ? "hidden" in f && (d = f.hidden) : f = ct.access(t, "fxshow", {}), o && (f.hidden = !d), d ? V(t).show() : c.done(function () {
        V(t).hide();
      }), c.done(function () {
        var e;
        ct.remove(t, "fxshow");

        for (e in u) {
          V.style(t, e, u[e]);
        }
      });

      for (s in u) {
        r = D(d ? f[s] : 0, s, c), s in f || (f[s] = r.start, d && (r.end = r.start, r.start = "width" === s || "height" === s ? 1 : 0));
      }
    }
  }],
      Qt = {
    "*": [function (t, e) {
      var i = this.createTween(t, e),
          s = i.cur(),
          n = qt.exec(e),
          o = n && n[3] || (V.cssNumber[t] ? "" : "px"),
          r = (V.cssNumber[t] || "px" !== o && +s) && qt.exec(V.css(i.elem, t)),
          a = 1,
          l = 20;

      if (r && r[3] !== o) {
        o = o || r[3], n = n || [], r = +s || 1;

        do {
          a = a || ".5", r /= a, V.style(i.elem, t, r + o);
        } while (a !== (a = i.cur() / s) && 1 !== a && --l);
      }

      return n && (r = i.start = +r || +s || 0, i.unit = o, i.end = n[1] ? r + (n[1] + 1) * n[2] : +n[2]), i;
    }]
  };
  V.Animation = V.extend(O, {
    tweener: function tweener(t, e) {
      V.isFunction(t) ? (e = t, t = ["*"]) : t = t.split(" ");

      for (var i, s = 0, n = t.length; n > s; s++) {
        i = t[s], Qt[i] = Qt[i] || [], Qt[i].unshift(e);
      }
    },
    prefilter: function prefilter(t, e) {
      e ? Ut.unshift(t) : Ut.push(t);
    }
  }), V.speed = function (t, e, i) {
    var s = t && "object" == _typeof(t) ? V.extend({}, t) : {
      complete: i || !i && e || V.isFunction(t) && t,
      duration: t,
      easing: i && e || e && !V.isFunction(e) && e
    };
    return s.duration = V.fx.off ? 0 : "number" == typeof s.duration ? s.duration : s.duration in V.fx.speeds ? V.fx.speeds[s.duration] : V.fx.speeds._default, (null == s.queue || !0 === s.queue) && (s.queue = "fx"), s.old = s.complete, s.complete = function () {
      V.isFunction(s.old) && s.old.call(this), s.queue && V.dequeue(this, s.queue);
    }, s;
  }, V.fn.extend({
    fadeTo: function fadeTo(t, e, i, s) {
      return this.filter(gt).css("opacity", 0).show().end().animate({
        opacity: e
      }, t, i, s);
    },
    animate: function animate(t, e, i, s) {
      var n = V.isEmptyObject(t),
          o = V.speed(e, i, s),
          r = function r() {
        var e = O(this, V.extend({}, t), o);
        (n || ct.get(this, "finish")) && e.stop(!0);
      };

      return r.finish = r, n || !1 === o.queue ? this.each(r) : this.queue(o.queue, r);
    },
    stop: function stop(t, e, i) {
      var s = function s(t) {
        var e = t.stop;
        delete t.stop, e(i);
      };

      return "string" != typeof t && (i = e, e = t, t = void 0), e && !1 !== t && this.queue(t || "fx", []), this.each(function () {
        var e = !0,
            n = null != t && t + "queueHooks",
            o = V.timers,
            r = ct.get(this);
        if (n) r[n] && r[n].stop && s(r[n]);else for (n in r) {
          r[n] && r[n].stop && Vt.test(n) && s(r[n]);
        }

        for (n = o.length; n--;) {
          o[n].elem !== this || null != t && o[n].queue !== t || (o[n].anim.stop(i), e = !1, o.splice(n, 1));
        }

        (e || !i) && V.dequeue(this, t);
      });
    },
    finish: function finish(t) {
      return !1 !== t && (t = t || "fx"), this.each(function () {
        var e,
            i = ct.get(this),
            s = i[t + "queue"],
            n = i[t + "queueHooks"],
            o = V.timers,
            r = s ? s.length : 0;

        for (i.finish = !0, V.queue(this, t, []), n && n.stop && n.stop.call(this, !0), e = o.length; e--;) {
          o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), o.splice(e, 1));
        }

        for (e = 0; r > e; e++) {
          s[e] && s[e].finish && s[e].finish.call(this);
        }

        delete i.finish;
      });
    }
  }), V.each(["toggle", "show", "hide"], function (t, e) {
    var i = V.fn[e];

    V.fn[e] = function (t, s, n) {
      return null == t || "boolean" == typeof t ? i.apply(this, arguments) : this.animate(A(e, !0), t, s, n);
    };
  }), V.each({
    slideDown: A("show"),
    slideUp: A("hide"),
    slideToggle: A("toggle"),
    fadeIn: {
      opacity: "show"
    },
    fadeOut: {
      opacity: "hide"
    },
    fadeToggle: {
      opacity: "toggle"
    }
  }, function (t, e) {
    V.fn[t] = function (t, i, s) {
      return this.animate(e, t, i, s);
    };
  }), V.timers = [], V.fx.tick = function () {
    var t,
        e = 0,
        i = V.timers;

    for (Wt = V.now(); e < i.length; e++) {
      (t = i[e])() || i[e] !== t || i.splice(e--, 1);
    }

    i.length || V.fx.stop(), Wt = void 0;
  }, V.fx.timer = function (t) {
    V.timers.push(t), t() ? V.fx.start() : V.timers.pop();
  }, V.fx.interval = 13, V.fx.start = function () {
    Yt || (Yt = setInterval(V.fx.tick, V.fx.interval));
  }, V.fx.stop = function () {
    clearInterval(Yt), Yt = null;
  }, V.fx.speeds = {
    slow: 600,
    fast: 200,
    _default: 400
  }, V.fn.delay = function (t, e) {
    return t = V.fx ? V.fx.speeds[t] || t : t, e = e || "fx", this.queue(e, function (e, i) {
      var s = setTimeout(e, t);

      i.stop = function () {
        clearTimeout(s);
      };
    });
  }, function () {
    var t = q.createElement("input"),
        e = q.createElement("select"),
        i = e.appendChild(q.createElement("option"));
    t.type = "checkbox", B.checkOn = "" !== t.value, B.optSelected = i.selected, e.disabled = !0, B.optDisabled = !i.disabled, (t = q.createElement("input")).value = "t", t.type = "radio", B.radioValue = "t" === t.value;
  }();
  var Gt,
      Zt = V.expr.attrHandle;
  V.fn.extend({
    attr: function attr(t, e) {
      return ht(this, V.attr, t, e, arguments.length > 1);
    },
    removeAttr: function removeAttr(t) {
      return this.each(function () {
        V.removeAttr(this, t);
      });
    }
  }), V.extend({
    attr: function attr(t, e, i) {
      var s,
          n,
          o = t.nodeType;
      if (t && 3 !== o && 8 !== o && 2 !== o) return _typeof(t.getAttribute) === vt ? V.prop(t, e, i) : (1 === o && V.isXMLDoc(t) || (e = e.toLowerCase(), s = V.attrHooks[e] || (V.expr.match.bool.test(e) ? Gt : void 0)), void 0 === i ? s && "get" in s && null !== (n = s.get(t, e)) ? n : null == (n = V.find.attr(t, e)) ? void 0 : n : null !== i ? s && "set" in s && void 0 !== (n = s.set(t, i, e)) ? n : (t.setAttribute(e, i + ""), i) : void V.removeAttr(t, e));
    },
    removeAttr: function removeAttr(t, e) {
      var i,
          s,
          n = 0,
          o = e && e.match(rt);
      if (o && 1 === t.nodeType) for (; i = o[n++];) {
        s = V.propFix[i] || i, V.expr.match.bool.test(i) && (t[s] = !1), t.removeAttribute(i);
      }
    },
    attrHooks: {
      type: {
        set: function set(t, e) {
          if (!B.radioValue && "radio" === e && V.nodeName(t, "input")) {
            var i = t.value;
            return t.setAttribute("type", e), i && (t.value = i), e;
          }
        }
      }
    }
  }), Gt = {
    set: function set(t, e, i) {
      return !1 === e ? V.removeAttr(t, i) : t.setAttribute(i, i), i;
    }
  }, V.each(V.expr.match.bool.source.match(/\w+/g), function (t, e) {
    var i = Zt[e] || V.find.attr;

    Zt[e] = function (t, e, s) {
      var n, o;
      return s || (o = Zt[e], Zt[e] = n, n = null != i(t, e, s) ? e.toLowerCase() : null, Zt[e] = o), n;
    };
  });
  var Kt = /^(?:input|select|textarea|button)$/i;
  V.fn.extend({
    prop: function prop(t, e) {
      return ht(this, V.prop, t, e, arguments.length > 1);
    },
    removeProp: function removeProp(t) {
      return this.each(function () {
        delete this[V.propFix[t] || t];
      });
    }
  }), V.extend({
    propFix: {
      "for": "htmlFor",
      "class": "className"
    },
    prop: function prop(t, e, i) {
      var s,
          n,
          o = t.nodeType;
      if (t && 3 !== o && 8 !== o && 2 !== o) return (1 !== o || !V.isXMLDoc(t)) && (e = V.propFix[e] || e, n = V.propHooks[e]), void 0 !== i ? n && "set" in n && void 0 !== (s = n.set(t, i, e)) ? s : t[e] = i : n && "get" in n && null !== (s = n.get(t, e)) ? s : t[e];
    },
    propHooks: {
      tabIndex: {
        get: function get(t) {
          return t.hasAttribute("tabindex") || Kt.test(t.nodeName) || t.href ? t.tabIndex : -1;
        }
      }
    }
  }), B.optSelected || (V.propHooks.selected = {
    get: function get(t) {
      var e = t.parentNode;
      return e && e.parentNode && e.parentNode.selectedIndex, null;
    }
  }), V.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    V.propFix[this.toLowerCase()] = this;
  });
  var Jt = /[\t\r\n\f]/g;
  V.fn.extend({
    addClass: function addClass(t) {
      var e,
          i,
          s,
          n,
          o,
          r,
          a = "string" == typeof t && t,
          l = 0,
          h = this.length;
      if (V.isFunction(t)) return this.each(function (e) {
        V(this).addClass(t.call(this, e, this.className));
      });
      if (a) for (e = (t || "").match(rt) || []; h > l; l++) {
        if (i = this[l], s = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(Jt, " ") : " ")) {
          for (o = 0; n = e[o++];) {
            s.indexOf(" " + n + " ") < 0 && (s += n + " ");
          }

          r = V.trim(s), i.className !== r && (i.className = r);
        }
      }
      return this;
    },
    removeClass: function removeClass(t) {
      var e,
          i,
          s,
          n,
          o,
          r,
          a = 0 === arguments.length || "string" == typeof t && t,
          l = 0,
          h = this.length;
      if (V.isFunction(t)) return this.each(function (e) {
        V(this).removeClass(t.call(this, e, this.className));
      });
      if (a) for (e = (t || "").match(rt) || []; h > l; l++) {
        if (i = this[l], s = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(Jt, " ") : "")) {
          for (o = 0; n = e[o++];) {
            for (; s.indexOf(" " + n + " ") >= 0;) {
              s = s.replace(" " + n + " ", " ");
            }
          }

          r = t ? V.trim(s) : "", i.className !== r && (i.className = r);
        }
      }
      return this;
    },
    toggleClass: function toggleClass(t, e) {
      var i = _typeof(t);

      return "boolean" == typeof e && "string" === i ? e ? this.addClass(t) : this.removeClass(t) : this.each(V.isFunction(t) ? function (i) {
        V(this).toggleClass(t.call(this, i, this.className, e), e);
      } : function () {
        if ("string" === i) for (var e, s = 0, n = V(this), o = t.match(rt) || []; e = o[s++];) {
          n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
        } else (i === vt || "boolean" === i) && (this.className && ct.set(this, "__className__", this.className), this.className = this.className || !1 === t ? "" : ct.get(this, "__className__") || "");
      });
    },
    hasClass: function hasClass(t) {
      for (var e = " " + t + " ", i = 0, s = this.length; s > i; i++) {
        if (1 === this[i].nodeType && (" " + this[i].className + " ").replace(Jt, " ").indexOf(e) >= 0) return !0;
      }

      return !1;
    }
  });
  var te = /\r/g;
  V.fn.extend({
    val: function val(t) {
      var e,
          i,
          s,
          n = this[0];
      return arguments.length ? (s = V.isFunction(t), this.each(function (i) {
        var n;
        1 === this.nodeType && (null == (n = s ? t.call(this, i, V(this).val()) : t) ? n = "" : "number" == typeof n ? n += "" : V.isArray(n) && (n = V.map(n, function (t) {
          return null == t ? "" : t + "";
        })), (e = V.valHooks[this.type] || V.valHooks[this.nodeName.toLowerCase()]) && "set" in e && void 0 !== e.set(this, n, "value") || (this.value = n));
      })) : n ? (e = V.valHooks[n.type] || V.valHooks[n.nodeName.toLowerCase()]) && "get" in e && void 0 !== (i = e.get(n, "value")) ? i : "string" == typeof (i = n.value) ? i.replace(te, "") : null == i ? "" : i : void 0;
    }
  }), V.extend({
    valHooks: {
      option: {
        get: function get(t) {
          var e = V.find.attr(t, "value");
          return null != e ? e : V.trim(V.text(t));
        }
      },
      select: {
        get: function get(t) {
          for (var e, i, s = t.options, n = t.selectedIndex, o = "select-one" === t.type || 0 > n, r = o ? null : [], a = o ? n + 1 : s.length, l = 0 > n ? a : o ? n : 0; a > l; l++) {
            if (!(!(i = s[l]).selected && l !== n || (B.optDisabled ? i.disabled : null !== i.getAttribute("disabled")) || i.parentNode.disabled && V.nodeName(i.parentNode, "optgroup"))) {
              if (e = V(i).val(), o) return e;
              r.push(e);
            }
          }

          return r;
        },
        set: function set(t, e) {
          for (var i, s, n = t.options, o = V.makeArray(e), r = n.length; r--;) {
            s = n[r], (s.selected = V.inArray(s.value, o) >= 0) && (i = !0);
          }

          return i || (t.selectedIndex = -1), o;
        }
      }
    }
  }), V.each(["radio", "checkbox"], function () {
    V.valHooks[this] = {
      set: function set(t, e) {
        return V.isArray(e) ? t.checked = V.inArray(V(t).val(), e) >= 0 : void 0;
      }
    }, B.checkOn || (V.valHooks[this].get = function (t) {
      return null === t.getAttribute("value") ? "on" : t.value;
    });
  }), V.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (t, e) {
    V.fn[e] = function (t, i) {
      return arguments.length > 0 ? this.on(e, null, t, i) : this.trigger(e);
    };
  }), V.fn.extend({
    hover: function hover(t, e) {
      return this.mouseenter(t).mouseleave(e || t);
    },
    bind: function bind(t, e, i) {
      return this.on(t, null, e, i);
    },
    unbind: function unbind(t, e) {
      return this.off(t, null, e);
    },
    delegate: function delegate(t, e, i, s) {
      return this.on(e, t, i, s);
    },
    undelegate: function undelegate(t, e, i) {
      return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i);
    }
  });
  var ee = V.now(),
      ie = /\?/;
  V.parseJSON = function (t) {
    return JSON.parse(t + "");
  }, V.parseXML = function (t) {
    var e, i;
    if (!t || "string" != typeof t) return null;

    try {
      i = new DOMParser(), e = i.parseFromString(t, "text/xml");
    } catch (t) {
      e = void 0;
    }

    return (!e || e.getElementsByTagName("parsererror").length) && V.error("Invalid XML: " + t), e;
  };
  var se = /#.*$/,
      ne = /([?&])_=[^&]*/,
      oe = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      re = /^(?:GET|HEAD)$/,
      ae = /^\/\//,
      le = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
      he = {},
      ce = {},
      ue = "*/".concat("*"),
      pe = t.location.href,
      de = le.exec(pe.toLowerCase()) || [];
  V.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: pe,
      type: "GET",
      isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(de[1]),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": ue,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {
        xml: /xml/,
        html: /html/,
        json: /json/
      },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON"
      },
      converters: {
        "* text": String,
        "text html": !0,
        "text json": V.parseJSON,
        "text xml": V.parseXML
      },
      flatOptions: {
        url: !0,
        context: !0
      }
    },
    ajaxSetup: function ajaxSetup(t, e) {
      return e ? M(M(t, V.ajaxSettings), e) : M(V.ajaxSettings, t);
    },
    ajaxPrefilter: R(he),
    ajaxTransport: R(ce),
    ajax: function ajax(t, e) {
      function i(t, e, i, r) {
        var l,
            c,
            _,
            v,
            y,
            x = e;

        2 !== b && (b = 2, a && clearTimeout(a), s = void 0, o = r || "", w.readyState = t > 0 ? 4 : 0, l = t >= 200 && 300 > t || 304 === t, i && (v = function (t, e, i) {
          for (var s, n, o, r, a = t.contents, l = t.dataTypes; "*" === l[0];) {
            l.shift(), void 0 === s && (s = t.mimeType || e.getResponseHeader("Content-Type"));
          }

          if (s) for (n in a) {
            if (a[n] && a[n].test(s)) {
              l.unshift(n);
              break;
            }
          }
          if (l[0] in i) o = l[0];else {
            for (n in i) {
              if (!l[0] || t.converters[n + " " + l[0]]) {
                o = n;
                break;
              }

              r || (r = n);
            }

            o = o || r;
          }
          return o ? (o !== l[0] && l.unshift(o), i[o]) : void 0;
        }(u, w, i)), v = function (t, e, i, s) {
          var n,
              o,
              r,
              a,
              l,
              h = {},
              c = t.dataTypes.slice();
          if (c[1]) for (r in t.converters) {
            h[r.toLowerCase()] = t.converters[r];
          }

          for (o = c.shift(); o;) {
            if (t.responseFields[o] && (i[t.responseFields[o]] = e), !l && s && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = o, o = c.shift()) if ("*" === o) o = l;else if ("*" !== l && l !== o) {
              if (!(r = h[l + " " + o] || h["* " + o])) for (n in h) {
                if ((a = n.split(" "))[1] === o && (r = h[l + " " + a[0]] || h["* " + a[0]])) {
                  !0 === r ? r = h[n] : !0 !== h[n] && (o = a[0], c.unshift(a[1]));
                  break;
                }
              }
              if (!0 !== r) if (r && t["throws"]) e = r(e);else try {
                e = r(e);
              } catch (t) {
                return {
                  state: "parsererror",
                  error: r ? t : "No conversion from " + l + " to " + o
                };
              }
            }
          }

          return {
            state: "success",
            data: e
          };
        }(u, v, w, l), l ? (u.ifModified && ((y = w.getResponseHeader("Last-Modified")) && (V.lastModified[n] = y), (y = w.getResponseHeader("etag")) && (V.etag[n] = y)), 204 === t || "HEAD" === u.type ? x = "nocontent" : 304 === t ? x = "notmodified" : (x = v.state, c = v.data, _ = v.error, l = !_)) : (_ = x, (t || !x) && (x = "error", 0 > t && (t = 0))), w.status = t, w.statusText = (e || x) + "", l ? f.resolveWith(p, [c, x, w]) : f.rejectWith(p, [w, x, _]), w.statusCode(g), g = void 0, h && d.trigger(l ? "ajaxSuccess" : "ajaxError", [w, u, l ? c : _]), m.fireWith(p, [w, x]), h && (d.trigger("ajaxComplete", [w, u]), --V.active || V.event.trigger("ajaxStop")));
      }

      "object" == _typeof(t) && (e = t, t = void 0), e = e || {};
      var s,
          n,
          o,
          r,
          a,
          l,
          h,
          c,
          u = V.ajaxSetup({}, e),
          p = u.context || u,
          d = u.context && (p.nodeType || p.jquery) ? V(p) : V.event,
          f = V.Deferred(),
          m = V.Callbacks("once memory"),
          g = u.statusCode || {},
          _ = {},
          v = {},
          b = 0,
          y = "canceled",
          w = {
        readyState: 0,
        getResponseHeader: function getResponseHeader(t) {
          var e;

          if (2 === b) {
            if (!r) for (r = {}; e = oe.exec(o);) {
              r[e[1].toLowerCase()] = e[2];
            }
            e = r[t.toLowerCase()];
          }

          return null == e ? null : e;
        },
        getAllResponseHeaders: function getAllResponseHeaders() {
          return 2 === b ? o : null;
        },
        setRequestHeader: function setRequestHeader(t, e) {
          var i = t.toLowerCase();
          return b || (t = v[i] = v[i] || t, _[t] = e), this;
        },
        overrideMimeType: function overrideMimeType(t) {
          return b || (u.mimeType = t), this;
        },
        statusCode: function statusCode(t) {
          var e;
          if (t) if (2 > b) for (e in t) {
            g[e] = [g[e], t[e]];
          } else w.always(t[w.status]);
          return this;
        },
        abort: function abort(t) {
          var e = t || y;
          return s && s.abort(e), i(0, e), this;
        }
      };
      if (f.promise(w).complete = m.add, w.success = w.done, w.error = w.fail, u.url = ((t || u.url || pe) + "").replace(se, "").replace(ae, de[1] + "//"), u.type = e.method || e.type || u.method || u.type, u.dataTypes = V.trim(u.dataType || "*").toLowerCase().match(rt) || [""], null == u.crossDomain && (l = le.exec(u.url.toLowerCase()), u.crossDomain = !(!l || l[1] === de[1] && l[2] === de[2] && (l[3] || ("http:" === l[1] ? "80" : "443")) === (de[3] || ("http:" === de[1] ? "80" : "443")))), u.data && u.processData && "string" != typeof u.data && (u.data = V.param(u.data, u.traditional)), $(he, u, e, w), 2 === b) return w;
      (h = V.event && u.global) && 0 == V.active++ && V.event.trigger("ajaxStart"), u.type = u.type.toUpperCase(), u.hasContent = !re.test(u.type), n = u.url, u.hasContent || (u.data && (n = u.url += (ie.test(n) ? "&" : "?") + u.data, delete u.data), !1 === u.cache && (u.url = ne.test(n) ? n.replace(ne, "$1_=" + ee++) : n + (ie.test(n) ? "&" : "?") + "_=" + ee++)), u.ifModified && (V.lastModified[n] && w.setRequestHeader("If-Modified-Since", V.lastModified[n]), V.etag[n] && w.setRequestHeader("If-None-Match", V.etag[n])), (u.data && u.hasContent && !1 !== u.contentType || e.contentType) && w.setRequestHeader("Content-Type", u.contentType), w.setRequestHeader("Accept", u.dataTypes[0] && u.accepts[u.dataTypes[0]] ? u.accepts[u.dataTypes[0]] + ("*" !== u.dataTypes[0] ? ", " + ue + "; q=0.01" : "") : u.accepts["*"]);

      for (c in u.headers) {
        w.setRequestHeader(c, u.headers[c]);
      }

      if (u.beforeSend && (!1 === u.beforeSend.call(p, w, u) || 2 === b)) return w.abort();
      y = "abort";

      for (c in {
        success: 1,
        error: 1,
        complete: 1
      }) {
        w[c](u[c]);
      }

      if (s = $(ce, u, e, w)) {
        w.readyState = 1, h && d.trigger("ajaxSend", [w, u]), u.async && u.timeout > 0 && (a = setTimeout(function () {
          w.abort("timeout");
        }, u.timeout));

        try {
          b = 1, s.send(_, i);
        } catch (t) {
          if (!(2 > b)) throw t;
          i(-1, t);
        }
      } else i(-1, "No Transport");

      return w;
    },
    getJSON: function getJSON(t, e, i) {
      return V.get(t, e, i, "json");
    },
    getScript: function getScript(t, e) {
      return V.get(t, void 0, e, "script");
    }
  }), V.each(["get", "post"], function (t, e) {
    V[e] = function (t, i, s, n) {
      return V.isFunction(i) && (n = n || s, s = i, i = void 0), V.ajax({
        url: t,
        type: e,
        dataType: n,
        data: i,
        success: s
      });
    };
  }), V._evalUrl = function (t) {
    return V.ajax({
      url: t,
      type: "GET",
      dataType: "script",
      async: !1,
      global: !1,
      "throws": !0
    });
  }, V.fn.extend({
    wrapAll: function wrapAll(t) {
      var e;
      return V.isFunction(t) ? this.each(function (e) {
        V(this).wrapAll(t.call(this, e));
      }) : (this[0] && (e = V(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function () {
        for (var t = this; t.firstElementChild;) {
          t = t.firstElementChild;
        }

        return t;
      }).append(this)), this);
    },
    wrapInner: function wrapInner(t) {
      return this.each(V.isFunction(t) ? function (e) {
        V(this).wrapInner(t.call(this, e));
      } : function () {
        var e = V(this),
            i = e.contents();
        i.length ? i.wrapAll(t) : e.append(t);
      });
    },
    wrap: function wrap(t) {
      var e = V.isFunction(t);
      return this.each(function (i) {
        V(this).wrapAll(e ? t.call(this, i) : t);
      });
    },
    unwrap: function unwrap() {
      return this.parent().each(function () {
        V.nodeName(this, "body") || V(this).replaceWith(this.childNodes);
      }).end();
    }
  }), V.expr.filters.hidden = function (t) {
    return t.offsetWidth <= 0 && t.offsetHeight <= 0;
  }, V.expr.filters.visible = function (t) {
    return !V.expr.filters.hidden(t);
  };
  var fe = /%20/g,
      me = /\[\]$/,
      ge = /\r?\n/g,
      _e = /^(?:submit|button|image|reset|file)$/i,
      ve = /^(?:input|select|textarea|keygen)/i;
  V.param = function (t, e) {
    var i,
        s = [],
        n = function n(t, e) {
      e = V.isFunction(e) ? e() : null == e ? "" : e, s[s.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e);
    };

    if (void 0 === e && (e = V.ajaxSettings && V.ajaxSettings.traditional), V.isArray(t) || t.jquery && !V.isPlainObject(t)) V.each(t, function () {
      n(this.name, this.value);
    });else for (i in t) {
      I(i, t[i], e, n);
    }
    return s.join("&").replace(fe, "+");
  }, V.fn.extend({
    serialize: function serialize() {
      return V.param(this.serializeArray());
    },
    serializeArray: function serializeArray() {
      return this.map(function () {
        var t = V.prop(this, "elements");
        return t ? V.makeArray(t) : this;
      }).filter(function () {
        var t = this.type;
        return this.name && !V(this).is(":disabled") && ve.test(this.nodeName) && !_e.test(t) && (this.checked || !_t.test(t));
      }).map(function (t, e) {
        var i = V(this).val();
        return null == i ? null : V.isArray(i) ? V.map(i, function (t) {
          return {
            name: e.name,
            value: t.replace(ge, "\r\n")
          };
        }) : {
          name: e.name,
          value: i.replace(ge, "\r\n")
        };
      }).get();
    }
  }), V.ajaxSettings.xhr = function () {
    try {
      return new XMLHttpRequest();
    } catch (t) {}
  };
  var be = 0,
      ye = {},
      we = {
    0: 200,
    1223: 204
  },
      xe = V.ajaxSettings.xhr();
  t.attachEvent && t.attachEvent("onunload", function () {
    for (var t in ye) {
      ye[t]();
    }
  }), B.cors = !!xe && "withCredentials" in xe, B.ajax = xe = !!xe, V.ajaxTransport(function (t) {
    var _e3;

    return B.cors || xe && !t.crossDomain ? {
      send: function send(i, s) {
        var n,
            o = t.xhr(),
            r = ++be;
        if (o.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields) for (n in t.xhrFields) {
          o[n] = t.xhrFields[n];
        }
        t.mimeType && o.overrideMimeType && o.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");

        for (n in i) {
          o.setRequestHeader(n, i[n]);
        }

        _e3 = function e(t) {
          return function () {
            _e3 && (delete ye[r], _e3 = o.onload = o.onerror = null, "abort" === t ? o.abort() : "error" === t ? s(o.status, o.statusText) : s(we[o.status] || o.status, o.statusText, "string" == typeof o.responseText ? {
              text: o.responseText
            } : void 0, o.getAllResponseHeaders()));
          };
        }, o.onload = _e3(), o.onerror = _e3("error"), _e3 = ye[r] = _e3("abort");

        try {
          o.send(t.hasContent && t.data || null);
        } catch (t) {
          if (_e3) throw t;
        }
      },
      abort: function abort() {
        _e3 && _e3();
      }
    } : void 0;
  }), V.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /(?:java|ecma)script/
    },
    converters: {
      "text script": function textScript(t) {
        return V.globalEval(t), t;
      }
    }
  }), V.ajaxPrefilter("script", function (t) {
    void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET");
  }), V.ajaxTransport("script", function (t) {
    if (t.crossDomain) {
      var e, _i;

      return {
        send: function send(s, n) {
          e = V("<script>").prop({
            async: !0,
            charset: t.scriptCharset,
            src: t.url
          }).on("load error", _i = function i(t) {
            e.remove(), _i = null, t && n("error" === t.type ? 404 : 200, t.type);
          }), q.head.appendChild(e[0]);
        },
        abort: function abort() {
          _i && _i();
        }
      };
    }
  });
  var Te = [],
      ke = /(=)\?(?=&|$)|\?\?/;
  V.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function jsonpCallback() {
      var t = Te.pop() || V.expando + "_" + ee++;
      return this[t] = !0, t;
    }
  }), V.ajaxPrefilter("json jsonp", function (e, i, s) {
    var n,
        o,
        r,
        a = !1 !== e.jsonp && (ke.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && ke.test(e.data) && "data");
    return a || "jsonp" === e.dataTypes[0] ? (n = e.jsonpCallback = V.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(ke, "$1" + n) : !1 !== e.jsonp && (e.url += (ie.test(e.url) ? "&" : "?") + e.jsonp + "=" + n), e.converters["script json"] = function () {
      return r || V.error(n + " was not called"), r[0];
    }, e.dataTypes[0] = "json", o = t[n], t[n] = function () {
      r = arguments;
    }, s.always(function () {
      t[n] = o, e[n] && (e.jsonpCallback = i.jsonpCallback, Te.push(n)), r && V.isFunction(o) && o(r[0]), r = o = void 0;
    }), "script") : void 0;
  }), V.parseHTML = function (t, e, i) {
    if (!t || "string" != typeof t) return null;
    "boolean" == typeof e && (i = e, e = !1), e = e || q;
    var s = tt.exec(t),
        n = !i && [];
    return s ? [e.createElement(s[1])] : (s = V.buildFragment([t], e, n), n && n.length && V(n).remove(), V.merge([], s.childNodes));
  };
  var Ce = V.fn.load;
  V.fn.load = function (t, e, i) {
    if ("string" != typeof t && Ce) return Ce.apply(this, arguments);
    var s,
        n,
        o,
        r = this,
        a = t.indexOf(" ");
    return a >= 0 && (s = V.trim(t.slice(a)), t = t.slice(0, a)), V.isFunction(e) ? (i = e, e = void 0) : e && "object" == _typeof(e) && (n = "POST"), r.length > 0 && V.ajax({
      url: t,
      type: n,
      dataType: "html",
      data: e
    }).done(function (t) {
      o = arguments, r.html(s ? V("<div>").append(V.parseHTML(t)).find(s) : t);
    }).complete(i && function (t, e) {
      r.each(i, o || [t.responseText, e, t]);
    }), this;
  }, V.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (t, e) {
    V.fn[e] = function (t) {
      return this.on(e, t);
    };
  }), V.expr.filters.animated = function (t) {
    return V.grep(V.timers, function (e) {
      return t === e.elem;
    }).length;
  };
  var Se = t.document.documentElement;
  V.offset = {
    setOffset: function setOffset(t, e, i) {
      var s,
          n,
          o,
          r,
          a,
          l,
          h = V.css(t, "position"),
          c = V(t),
          u = {};
      "static" === h && (t.style.position = "relative"), a = c.offset(), o = V.css(t, "top"), l = V.css(t, "left"), ("absolute" === h || "fixed" === h) && (o + l).indexOf("auto") > -1 ? (s = c.position(), r = s.top, n = s.left) : (r = parseFloat(o) || 0, n = parseFloat(l) || 0), V.isFunction(e) && (e = e.call(t, i, a)), null != e.top && (u.top = e.top - a.top + r), null != e.left && (u.left = e.left - a.left + n), "using" in e ? e.using.call(t, u) : c.css(u);
    }
  }, V.fn.extend({
    offset: function offset(t) {
      if (arguments.length) return void 0 === t ? this : this.each(function (e) {
        V.offset.setOffset(this, t, e);
      });
      var e,
          i,
          s = this[0],
          n = {
        top: 0,
        left: 0
      },
          o = s && s.ownerDocument;
      return o ? (e = o.documentElement, V.contains(e, s) ? (_typeof(s.getBoundingClientRect) !== vt && (n = s.getBoundingClientRect()), i = L(o), {
        top: n.top + i.pageYOffset - e.clientTop,
        left: n.left + i.pageXOffset - e.clientLeft
      }) : n) : void 0;
    },
    position: function position() {
      if (this[0]) {
        var t,
            e,
            i = this[0],
            s = {
          top: 0,
          left: 0
        };
        return "fixed" === V.css(i, "position") ? e = i.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), V.nodeName(t[0], "html") || (s = t.offset()), s.top += V.css(t[0], "borderTopWidth", !0), s.left += V.css(t[0], "borderLeftWidth", !0)), {
          top: e.top - s.top - V.css(i, "marginTop", !0),
          left: e.left - s.left - V.css(i, "marginLeft", !0)
        };
      }
    },
    offsetParent: function offsetParent() {
      return this.map(function () {
        for (var t = this.offsetParent || Se; t && !V.nodeName(t, "html") && "static" === V.css(t, "position");) {
          t = t.offsetParent;
        }

        return t || Se;
      });
    }
  }), V.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function (e, i) {
    var s = "pageYOffset" === i;

    V.fn[e] = function (n) {
      return ht(this, function (e, n, o) {
        var r = L(e);
        return void 0 === o ? r ? r[i] : e[n] : void (r ? r.scrollTo(s ? t.pageXOffset : o, s ? o : t.pageYOffset) : e[n] = o);
      }, e, n, arguments.length, null);
    };
  }), V.each(["top", "left"], function (t, e) {
    V.cssHooks[e] = w(B.pixelPosition, function (t, i) {
      return i ? (i = y(t, e), It.test(i) ? V(t).position()[e] + "px" : i) : void 0;
    });
  }), V.each({
    Height: "height",
    Width: "width"
  }, function (t, e) {
    V.each({
      padding: "inner" + t,
      content: e,
      "": "outer" + t
    }, function (i, s) {
      V.fn[s] = function (s, n) {
        var o = arguments.length && (i || "boolean" != typeof s),
            r = i || (!0 === s || !0 === n ? "margin" : "border");
        return ht(this, function (e, i, s) {
          var n;
          return V.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (n = e.documentElement, Math.max(e.body["scroll" + t], n["scroll" + t], e.body["offset" + t], n["offset" + t], n["client" + t])) : void 0 === s ? V.css(e, i, r) : V.style(e, i, s, r);
        }, e, o ? s : void 0, o, null);
      };
    });
  }), V.fn.size = function () {
    return this.length;
  }, V.fn.andSelf = V.fn.addBack,  true && !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_LOCAL_MODULE_0__ = (function () {
    return V;
  }).apply(__WEBPACK_LOCAL_MODULE_0__exports = {}, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_LOCAL_MODULE_0__ === undefined && (__WEBPACK_LOCAL_MODULE_0__ = __WEBPACK_LOCAL_MODULE_0__exports));
  var Pe = t.jQuery,
      Ee = t.$;
  return V.noConflict = function (e) {
    return t.$ === V && (t.$ = Ee), e && t.jQuery === V && (t.jQuery = Pe), V;
  }, _typeof(e) === vt && (t.jQuery = t.$ = V), V;
}), function (t) {
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__WEBPACK_LOCAL_MODULE_0__], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;
}(function (t) {
  function e(e) {
    var r = e || window.event,
        a = l.call(arguments, 1),
        h = 0,
        u = 0,
        p = 0,
        d = 0,
        f = 0,
        m = 0;

    if (e = t.event.fix(r), e.type = "mousewheel", "detail" in r && (p = -1 * r.detail), "wheelDelta" in r && (p = r.wheelDelta), "wheelDeltaY" in r && (p = r.wheelDeltaY), "wheelDeltaX" in r && (u = -1 * r.wheelDeltaX), "axis" in r && r.axis === r.HORIZONTAL_AXIS && (u = -1 * p, p = 0), h = 0 === p ? u : p, "deltaY" in r && (p = -1 * r.deltaY, h = p), "deltaX" in r && (u = r.deltaX, 0 === p && (h = -1 * u)), 0 !== p || 0 !== u) {
      if (1 === r.deltaMode) {
        var g = t.data(this, "mousewheel-line-height");
        h *= g, p *= g, u *= g;
      } else if (2 === r.deltaMode) {
        var _ = t.data(this, "mousewheel-page-height");

        h *= _, p *= _, u *= _;
      }

      if (d = Math.max(Math.abs(p), Math.abs(u)), (!o || o > d) && (o = d, s(r, d) && (o /= 40)), s(r, d) && (h /= 40, u /= 40, p /= 40), h = Math[h >= 1 ? "floor" : "ceil"](h / o), u = Math[u >= 1 ? "floor" : "ceil"](u / o), p = Math[p >= 1 ? "floor" : "ceil"](p / o), c.settings.normalizeOffset && this.getBoundingClientRect) {
        var v = this.getBoundingClientRect();
        f = e.clientX - v.left, m = e.clientY - v.top;
      }

      return e.deltaX = u, e.deltaY = p, e.deltaFactor = o, e.offsetX = f, e.offsetY = m, e.deltaMode = 0, a.unshift(e, h, u, p), n && clearTimeout(n), n = setTimeout(i, 200), (t.event.dispatch || t.event.handle).apply(this, a);
    }
  }

  function i() {
    o = null;
  }

  function s(t, e) {
    return c.settings.adjustOldDeltas && "mousewheel" === t.type && e % 120 == 0;
  }

  var n,
      o,
      r = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
      a = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
      l = Array.prototype.slice;
  if (t.event.fixHooks) for (var h = r.length; h;) {
    t.event.fixHooks[r[--h]] = t.event.mouseHooks;
  }
  var c = t.event.special.mousewheel = {
    version: "3.1.12",
    setup: function setup() {
      if (this.addEventListener) for (var i = a.length; i;) {
        this.addEventListener(a[--i], e, !1);
      } else this.onmousewheel = e;
      t.data(this, "mousewheel-line-height", c.getLineHeight(this)), t.data(this, "mousewheel-page-height", c.getPageHeight(this));
    },
    teardown: function teardown() {
      if (this.removeEventListener) for (var i = a.length; i;) {
        this.removeEventListener(a[--i], e, !1);
      } else this.onmousewheel = null;
      t.removeData(this, "mousewheel-line-height"), t.removeData(this, "mousewheel-page-height");
    },
    getLineHeight: function getLineHeight(e) {
      var i = t(e),
          s = i["offsetParent" in t.fn ? "offsetParent" : "parent"]();
      return s.length || (s = t("body")), parseInt(s.css("fontSize"), 10) || parseInt(i.css("fontSize"), 10) || 16;
    },
    getPageHeight: function getPageHeight(e) {
      return t(e).height();
    },
    settings: {
      adjustOldDeltas: !0,
      normalizeOffset: !0
    }
  };
  t.fn.extend({
    mousewheel: function mousewheel(t) {
      return t ? this.bind("mousewheel", t) : this.trigger("mousewheel");
    },
    unmousewheel: function unmousewheel(t) {
      return this.unbind("mousewheel", t);
    }
  });
}), function t(e, i, s) {
  function n(r, a) {
    if (!i[r]) {
      if (!e[r]) {
        var l = undefined;
        if (!a && l) return require(r, !0);
        if (o) return o(r, !0);
        var h = new Error("Cannot find module '" + r + "'");
        throw h.code = "MODULE_NOT_FOUND", h;
      }

      var c = i[r] = {
        exports: {}
      };
      e[r][0].call(c.exports, function (t) {
        var i = e[r][1][t];
        return n(i || t);
      }, c, c.exports, t, e, i, s);
    }

    return i[r].exports;
  }

  for (var o = undefined, r = 0; r < s.length; r++) {
    n(s[r]);
  }

  return n;
}({
  1: [function (t, e, i) {
    "use strict";

    function s(t) {
      t.fn.perfectScrollbar = function (t) {
        return this.each(function () {
          if ("object" == _typeof(t) || void 0 === t) {
            var e = t;
            o.get(this) || n.initialize(this, e);
          } else {
            var i = t;
            "update" === i ? n.update(this) : "destroy" === i && n.destroy(this);
          }
        });
      };
    }

    var n = t("../main"),
        o = t("../plugin/instances");
    if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__WEBPACK_LOCAL_MODULE_0__], __WEBPACK_AMD_DEFINE_FACTORY__ = (s),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else { var r; }
    e.exports = s;
  }, {
    "../main": 7,
    "../plugin/instances": 18
  }],
  2: [function (t, e, i) {
    "use strict";

    i.add = function (t, e) {
      t.classList ? t.classList.add(e) : function (t, e) {
        var i = t.className.split(" ");
        i.indexOf(e) < 0 && i.push(e), t.className = i.join(" ");
      }(t, e);
    }, i.remove = function (t, e) {
      t.classList ? t.classList.remove(e) : function (t, e) {
        var i = t.className.split(" "),
            s = i.indexOf(e);
        s >= 0 && i.splice(s, 1), t.className = i.join(" ");
      }(t, e);
    }, i.list = function (t) {
      return t.classList ? Array.prototype.slice.apply(t.classList) : t.className.split(" ");
    };
  }, {}],
  3: [function (t, e, i) {
    "use strict";

    var s = {};
    s.e = function (t, e) {
      var i = document.createElement(t);
      return i.className = e, i;
    }, s.appendTo = function (t, e) {
      return e.appendChild(t), t;
    }, s.css = function (t, e, i) {
      return "object" == _typeof(e) ? function (t, e) {
        for (var i in e) {
          var s = e[i];
          "number" == typeof s && (s = s.toString() + "px"), t.style[i] = s;
        }

        return t;
      }(t, e) : void 0 === i ? function (t, e) {
        return window.getComputedStyle(t)[e];
      }(t, e) : function (t, e, i) {
        return "number" == typeof i && (i = i.toString() + "px"), t.style[e] = i, t;
      }(t, e, i);
    }, s.matches = function (t, e) {
      return void 0 !== t.matches ? t.matches(e) : void 0 !== t.matchesSelector ? t.matchesSelector(e) : void 0 !== t.webkitMatchesSelector ? t.webkitMatchesSelector(e) : void 0 !== t.mozMatchesSelector ? t.mozMatchesSelector(e) : void 0 !== t.msMatchesSelector ? t.msMatchesSelector(e) : void 0;
    }, s.remove = function (t) {
      void 0 !== t.remove ? t.remove() : t.parentNode && t.parentNode.removeChild(t);
    }, s.queryChildren = function (t, e) {
      return Array.prototype.filter.call(t.childNodes, function (t) {
        return s.matches(t, e);
      });
    }, e.exports = s;
  }, {}],
  4: [function (t, e, i) {
    "use strict";

    var s = function s(t) {
      this.element = t, this.events = {};
    };

    s.prototype.bind = function (t, e) {
      void 0 === this.events[t] && (this.events[t] = []), this.events[t].push(e), this.element.addEventListener(t, e, !1);
    }, s.prototype.unbind = function (t, e) {
      var i = void 0 !== e;
      this.events[t] = this.events[t].filter(function (s) {
        return !(!i || s === e) || (this.element.removeEventListener(t, s, !1), !1);
      }, this);
    }, s.prototype.unbindAll = function () {
      for (var t in this.events) {
        this.unbind(t);
      }
    };

    var n = function n() {
      this.eventElements = [];
    };

    n.prototype.eventElement = function (t) {
      var e = this.eventElements.filter(function (e) {
        return e.element === t;
      })[0];
      return void 0 === e && (e = new s(t), this.eventElements.push(e)), e;
    }, n.prototype.bind = function (t, e, i) {
      this.eventElement(t).bind(e, i);
    }, n.prototype.unbind = function (t, e, i) {
      this.eventElement(t).unbind(e, i);
    }, n.prototype.unbindAll = function () {
      for (var t = 0; t < this.eventElements.length; t++) {
        this.eventElements[t].unbindAll();
      }
    }, n.prototype.once = function (t, e, i) {
      var s = this.eventElement(t),
          n = function n(t) {
        s.unbind(e, n), i(t);
      };

      s.bind(e, n);
    }, e.exports = n;
  }, {}],
  5: [function (t, e, i) {
    "use strict";

    e.exports = function () {
      function t() {
        return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1);
      }

      return function () {
        return t() + t() + "-" + t() + "-" + t() + "-" + t() + "-" + t() + t() + t();
      };
    }();
  }, {}],
  6: [function (t, e, i) {
    "use strict";

    var s = t("./class"),
        n = t("./dom"),
        o = i.toInt = function (t) {
      return parseInt(t, 10) || 0;
    },
        r = i.clone = function (t) {
      if (t) {
        if (t.constructor === Array) return t.map(r);

        if ("object" == _typeof(t)) {
          var e = {};

          for (var i in t) {
            e[i] = r(t[i]);
          }

          return e;
        }

        return t;
      }

      return null;
    };

    i.extend = function (t, e) {
      var i = r(t);

      for (var s in e) {
        i[s] = r(e[s]);
      }

      return i;
    }, i.isEditable = function (t) {
      return n.matches(t, "input,[contenteditable]") || n.matches(t, "select,[contenteditable]") || n.matches(t, "textarea,[contenteditable]") || n.matches(t, "button,[contenteditable]");
    }, i.removePsClasses = function (t) {
      for (var e = s.list(t), i = 0; i < e.length; i++) {
        var n = e[i];
        0 === n.indexOf("ps-") && s.remove(t, n);
      }
    }, i.outerWidth = function (t) {
      return o(n.css(t, "width")) + o(n.css(t, "paddingLeft")) + o(n.css(t, "paddingRight")) + o(n.css(t, "borderLeftWidth")) + o(n.css(t, "borderRightWidth"));
    }, i.startScrolling = function (t, e) {
      s.add(t, "ps-in-scrolling"), void 0 !== e ? s.add(t, "ps-" + e) : (s.add(t, "ps-x"), s.add(t, "ps-y"));
    }, i.stopScrolling = function (t, e) {
      s.remove(t, "ps-in-scrolling"), void 0 !== e ? s.remove(t, "ps-" + e) : (s.remove(t, "ps-x"), s.remove(t, "ps-y"));
    }, i.env = {
      isWebKit: "WebkitAppearance" in document.documentElement.style,
      supportsTouch: "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch,
      supportsIePointer: null !== window.navigator.msMaxTouchPoints
    };
  }, {
    "./class": 2,
    "./dom": 3
  }],
  7: [function (t, e, i) {
    "use strict";

    var s = t("./plugin/destroy"),
        n = t("./plugin/initialize"),
        o = t("./plugin/update");
    e.exports = {
      initialize: n,
      update: o,
      destroy: s
    };
  }, {
    "./plugin/destroy": 9,
    "./plugin/initialize": 17,
    "./plugin/update": 21
  }],
  8: [function (t, e, i) {
    "use strict";

    e.exports = {
      handlers: ["click-rail", "drag-scrollbar", "keyboard", "wheel", "touch"],
      maxScrollbarLength: null,
      minScrollbarLength: null,
      scrollXMarginOffset: 0,
      scrollYMarginOffset: 0,
      suppressScrollX: !1,
      suppressScrollY: !1,
      swipePropagation: !0,
      useBothWheelAxes: !1,
      wheelPropagation: !1,
      wheelSpeed: 1,
      theme: "default"
    };
  }, {}],
  9: [function (t, e, i) {
    "use strict";

    var s = t("../lib/helper"),
        n = t("../lib/dom"),
        o = t("./instances");

    e.exports = function (t) {
      var e = o.get(t);
      e && (e.event.unbindAll(), n.remove(e.scrollbarX), n.remove(e.scrollbarY), n.remove(e.scrollbarXRail), n.remove(e.scrollbarYRail), s.removePsClasses(t), o.remove(t));
    };
  }, {
    "../lib/dom": 3,
    "../lib/helper": 6,
    "./instances": 18
  }],
  10: [function (t, e, i) {
    "use strict";

    var s = t("../instances"),
        n = t("../update-geometry"),
        o = t("../update-scroll");

    e.exports = function (t) {
      !function (t, e) {
        function i(t) {
          return t.getBoundingClientRect();
        }

        var s = function s(t) {
          t.stopPropagation();
        };

        e.event.bind(e.scrollbarY, "click", s), e.event.bind(e.scrollbarYRail, "click", function (s) {
          var r = s.pageY - window.pageYOffset - i(e.scrollbarYRail).top > e.scrollbarYTop ? 1 : -1;
          o(t, "top", t.scrollTop + r * e.containerHeight), n(t), s.stopPropagation();
        }), e.event.bind(e.scrollbarX, "click", s), e.event.bind(e.scrollbarXRail, "click", function (s) {
          var r = s.pageX - window.pageXOffset - i(e.scrollbarXRail).left > e.scrollbarXLeft ? 1 : -1;
          o(t, "left", t.scrollLeft + r * e.containerWidth), n(t), s.stopPropagation();
        });
      }(t, s.get(t));
    };
  }, {
    "../instances": 18,
    "../update-geometry": 19,
    "../update-scroll": 20
  }],
  11: [function (t, e, i) {
    "use strict";

    function s(t, e) {
      var i = null,
          s = null,
          n = function n(_n) {
        (function (s) {
          var n = i + s * e.railXRatio,
              r = Math.max(0, e.scrollbarXRail.getBoundingClientRect().left) + e.railXRatio * (e.railXWidth - e.scrollbarXWidth);
          e.scrollbarXLeft = n < 0 ? 0 : n > r ? r : n;
          var a = o.toInt(e.scrollbarXLeft * (e.contentWidth - e.containerWidth) / (e.containerWidth - e.railXRatio * e.scrollbarXWidth)) - e.negativeScrollAdjustment;
          h(t, "left", a);
        })(_n.pageX - s), l(t), _n.stopPropagation(), _n.preventDefault();
      },
          a = function a() {
        o.stopScrolling(t, "x"), e.event.unbind(e.ownerDocument, "mousemove", n);
      };

      e.event.bind(e.scrollbarX, "mousedown", function (l) {
        s = l.pageX, i = o.toInt(r.css(e.scrollbarX, "left")) * e.railXRatio, o.startScrolling(t, "x"), e.event.bind(e.ownerDocument, "mousemove", n), e.event.once(e.ownerDocument, "mouseup", a), l.stopPropagation(), l.preventDefault();
      });
    }

    function n(t, e) {
      var i = null,
          s = null,
          n = function n(_n2) {
        (function (s) {
          var n = i + s * e.railYRatio,
              r = Math.max(0, e.scrollbarYRail.getBoundingClientRect().top) + e.railYRatio * (e.railYHeight - e.scrollbarYHeight);
          e.scrollbarYTop = n < 0 ? 0 : n > r ? r : n;
          var a = o.toInt(e.scrollbarYTop * (e.contentHeight - e.containerHeight) / (e.containerHeight - e.railYRatio * e.scrollbarYHeight));
          h(t, "top", a);
        })(_n2.pageY - s), l(t), _n2.stopPropagation(), _n2.preventDefault();
      },
          a = function a() {
        o.stopScrolling(t, "y"), e.event.unbind(e.ownerDocument, "mousemove", n);
      };

      e.event.bind(e.scrollbarY, "mousedown", function (l) {
        s = l.pageY, i = o.toInt(r.css(e.scrollbarY, "top")) * e.railYRatio, o.startScrolling(t, "y"), e.event.bind(e.ownerDocument, "mousemove", n), e.event.once(e.ownerDocument, "mouseup", a), l.stopPropagation(), l.preventDefault();
      });
    }

    var o = t("../../lib/helper"),
        r = t("../../lib/dom"),
        a = t("../instances"),
        l = t("../update-geometry"),
        h = t("../update-scroll");

    e.exports = function (t) {
      var e = a.get(t);
      s(t, e), n(t, e);
    };
  }, {
    "../../lib/dom": 3,
    "../../lib/helper": 6,
    "../instances": 18,
    "../update-geometry": 19,
    "../update-scroll": 20
  }],
  12: [function (t, e, i) {
    "use strict";

    function s(t, e) {
      var i = !1;
      e.event.bind(t, "mouseenter", function () {
        i = !0;
      }), e.event.bind(t, "mouseleave", function () {
        i = !1;
      });
      var s = !1;
      e.event.bind(e.ownerDocument, "keydown", function (r) {
        if (!(r.isDefaultPrevented && r.isDefaultPrevented() || r.defaultPrevented)) {
          var h = o.matches(e.scrollbarX, ":focus") || o.matches(e.scrollbarY, ":focus");

          if (i || h) {
            var c = document.activeElement ? document.activeElement : e.ownerDocument.activeElement;

            if (c) {
              if ("IFRAME" === c.tagName) c = c.contentDocument.activeElement;else for (; c.shadowRoot;) {
                c = c.shadowRoot.activeElement;
              }
              if (n.isEditable(c)) return;
            }

            var u = 0,
                p = 0;

            switch (r.which) {
              case 37:
                u = r.metaKey ? -e.contentWidth : r.altKey ? -e.containerWidth : -30;
                break;

              case 38:
                p = r.metaKey ? e.contentHeight : r.altKey ? e.containerHeight : 30;
                break;

              case 39:
                u = r.metaKey ? e.contentWidth : r.altKey ? e.containerWidth : 30;
                break;

              case 40:
                p = r.metaKey ? -e.contentHeight : r.altKey ? -e.containerHeight : -30;
                break;

              case 33:
                p = 90;
                break;

              case 32:
                p = r.shiftKey ? 90 : -90;
                break;

              case 34:
                p = -90;
                break;

              case 35:
                p = r.ctrlKey ? -e.contentHeight : -e.containerHeight;
                break;

              case 36:
                p = r.ctrlKey ? t.scrollTop : e.containerHeight;
                break;

              default:
                return;
            }

            l(t, "top", t.scrollTop - p), l(t, "left", t.scrollLeft + u), a(t), (s = function (i, s) {
              var n = t.scrollTop;

              if (0 === i) {
                if (!e.scrollbarYActive) return !1;
                if (0 === n && s > 0 || n >= e.contentHeight - e.containerHeight && s < 0) return !e.settings.wheelPropagation;
              }

              var o = t.scrollLeft;

              if (0 === s) {
                if (!e.scrollbarXActive) return !1;
                if (0 === o && i < 0 || o >= e.contentWidth - e.containerWidth && i > 0) return !e.settings.wheelPropagation;
              }

              return !0;
            }(u, p)) && r.preventDefault();
          }
        }
      });
    }

    var n = t("../../lib/helper"),
        o = t("../../lib/dom"),
        r = t("../instances"),
        a = t("../update-geometry"),
        l = t("../update-scroll");

    e.exports = function (t) {
      s(t, r.get(t));
    };
  }, {
    "../../lib/dom": 3,
    "../../lib/helper": 6,
    "../instances": 18,
    "../update-geometry": 19,
    "../update-scroll": 20
  }],
  13: [function (t, e, i) {
    "use strict";

    function s(t, e) {
      function i(i) {
        var n = function (t) {
          var e = t.deltaX,
              i = -1 * t.deltaY;
          return void 0 !== e && void 0 !== i || (e = -1 * t.wheelDeltaX / 6, i = t.wheelDeltaY / 6), t.deltaMode && 1 === t.deltaMode && (e *= 10, i *= 10), e != e && i != i && (e = 0, i = t.wheelDelta), t.shiftKey ? [-i, -e] : [e, i];
        }(i),
            a = n[0],
            l = n[1];

        (function (e, i) {
          var s = t.querySelector("textarea:hover, select[multiple]:hover, .ps-child:hover");

          if (s) {
            if (!window.getComputedStyle(s).overflow.match(/(scroll|auto)/)) return !1;
            var n = s.scrollHeight - s.clientHeight;
            if (n > 0 && !(0 === s.scrollTop && i > 0 || s.scrollTop === n && i < 0)) return !0;
            var o = s.scrollLeft - s.clientWidth;
            if (o > 0 && !(0 === s.scrollLeft && e < 0 || s.scrollLeft === o && e > 0)) return !0;
          }

          return !1;
        })(a, l) || (s = !1, e.settings.useBothWheelAxes ? e.scrollbarYActive && !e.scrollbarXActive ? (l ? r(t, "top", t.scrollTop - l * e.settings.wheelSpeed) : r(t, "top", t.scrollTop + a * e.settings.wheelSpeed), s = !0) : e.scrollbarXActive && !e.scrollbarYActive && (a ? r(t, "left", t.scrollLeft + a * e.settings.wheelSpeed) : r(t, "left", t.scrollLeft - l * e.settings.wheelSpeed), s = !0) : (r(t, "top", t.scrollTop - l * e.settings.wheelSpeed), r(t, "left", t.scrollLeft + a * e.settings.wheelSpeed)), o(t), (s = s || function (i, s) {
          var n = t.scrollTop;

          if (0 === i) {
            if (!e.scrollbarYActive) return !1;
            if (0 === n && s > 0 || n >= e.contentHeight - e.containerHeight && s < 0) return !e.settings.wheelPropagation;
          }

          var o = t.scrollLeft;

          if (0 === s) {
            if (!e.scrollbarXActive) return !1;
            if (0 === o && i < 0 || o >= e.contentWidth - e.containerWidth && i > 0) return !e.settings.wheelPropagation;
          }

          return !0;
        }(a, l)) && (i.stopPropagation(), i.preventDefault()));
      }

      var s = !1;
      void 0 !== window.onwheel ? e.event.bind(t, "wheel", i) : void 0 !== window.onmousewheel && e.event.bind(t, "mousewheel", i);
    }

    var n = t("../instances"),
        o = t("../update-geometry"),
        r = t("../update-scroll");

    e.exports = function (t) {
      s(t, n.get(t));
    };
  }, {
    "../instances": 18,
    "../update-geometry": 19,
    "../update-scroll": 20
  }],
  14: [function (t, e, i) {
    "use strict";

    var s = t("../instances"),
        n = t("../update-geometry");

    e.exports = function (t) {
      !function (t, e) {
        e.event.bind(t, "scroll", function () {
          n(t);
        });
      }(t, s.get(t));
    };
  }, {
    "../instances": 18,
    "../update-geometry": 19
  }],
  15: [function (t, e, i) {
    "use strict";

    function s(t, e) {
      function i() {
        s && (clearInterval(s), s = null), n.stopScrolling(t);
      }

      var s = null,
          l = {
        top: 0,
        left: 0
      },
          h = !1;
      e.event.bind(e.ownerDocument, "selectionchange", function () {
        t.contains(function () {
          var t = window.getSelection ? window.getSelection() : document.getSelection ? document.getSelection() : "";
          return 0 === t.toString().length ? null : t.getRangeAt(0).commonAncestorContainer;
        }()) ? h = !0 : (h = !1, i());
      }), e.event.bind(window, "mouseup", function () {
        h && (h = !1, i());
      }), e.event.bind(window, "keyup", function () {
        h && (h = !1, i());
      }), e.event.bind(window, "mousemove", function (e) {
        if (h) {
          var c = e.pageX,
              u = e.pageY,
              p = t.offsetLeft,
              d = t.offsetLeft + t.offsetWidth,
              f = t.offsetTop,
              m = t.offsetTop + t.offsetHeight;
          c < p + 3 ? (l.left = -5, n.startScrolling(t, "x")) : c > d - 3 ? (l.left = 5, n.startScrolling(t, "x")) : l.left = 0, u < f + 3 ? (l.top = f + 3 - u < 5 ? -5 : -20, n.startScrolling(t, "y")) : u > m - 3 ? (l.top = u - m + 3 < 5 ? 5 : 20, n.startScrolling(t, "y")) : l.top = 0, 0 === l.top && 0 === l.left ? i() : s || (s = setInterval(function () {
            return o.get(t) ? (a(t, "top", t.scrollTop + l.top), a(t, "left", t.scrollLeft + l.left), void r(t)) : void clearInterval(s);
          }, 50));
        }
      });
    }

    var n = t("../../lib/helper"),
        o = t("../instances"),
        r = t("../update-geometry"),
        a = t("../update-scroll");

    e.exports = function (t) {
      s(t, o.get(t));
    };
  }, {
    "../../lib/helper": 6,
    "../instances": 18,
    "../update-geometry": 19,
    "../update-scroll": 20
  }],
  16: [function (t, e, i) {
    "use strict";

    function s(t, e, i, s) {
      function n(e, i) {
        a(t, "top", t.scrollTop - i), a(t, "left", t.scrollLeft - e), r(t);
      }

      function l() {
        b = !0;
      }

      function h() {
        b = !1;
      }

      function c(t) {
        return t.targetTouches ? t.targetTouches[0] : t;
      }

      function u(t) {
        return !(!t.targetTouches || 1 !== t.targetTouches.length) || !(!t.pointerType || "mouse" === t.pointerType || t.pointerType === t.MSPOINTER_TYPE_MOUSE);
      }

      function p(t) {
        if (u(t)) {
          y = !0;
          var e = c(t);
          m.pageX = e.pageX, m.pageY = e.pageY, g = new Date().getTime(), null !== v && clearInterval(v), t.stopPropagation();
        }
      }

      function d(i) {
        if (!y && e.settings.swipePropagation && p(i), !b && y && u(i)) {
          var s = c(i),
              o = {
            pageX: s.pageX,
            pageY: s.pageY
          },
              r = o.pageX - m.pageX,
              a = o.pageY - m.pageY;
          n(r, a), m = o;
          var l = new Date().getTime(),
              h = l - g;
          h > 0 && (_.x = r / h, _.y = a / h, g = l), function (i, s) {
            var n = t.scrollTop,
                o = t.scrollLeft,
                r = Math.abs(i),
                a = Math.abs(s);

            if (a > r) {
              if (s < 0 && n === e.contentHeight - e.containerHeight || s > 0 && 0 === n) return !e.settings.swipePropagation;
            } else if (r > a && (i < 0 && o === e.contentWidth - e.containerWidth || i > 0 && 0 === o)) return !e.settings.swipePropagation;

            return !0;
          }(r, a) && (i.stopPropagation(), i.preventDefault());
        }
      }

      function f() {
        !b && y && (y = !1, clearInterval(v), v = setInterval(function () {
          return o.get(t) && (_.x || _.y) ? Math.abs(_.x) < .01 && Math.abs(_.y) < .01 ? void clearInterval(v) : (n(30 * _.x, 30 * _.y), _.x *= .8, void (_.y *= .8)) : void clearInterval(v);
        }, 10));
      }

      var m = {},
          g = 0,
          _ = {},
          v = null,
          b = !1,
          y = !1;
      i && (e.event.bind(window, "touchstart", l), e.event.bind(window, "touchend", h), e.event.bind(t, "touchstart", p), e.event.bind(t, "touchmove", d), e.event.bind(t, "touchend", f)), s && (window.PointerEvent ? (e.event.bind(window, "pointerdown", l), e.event.bind(window, "pointerup", h), e.event.bind(t, "pointerdown", p), e.event.bind(t, "pointermove", d), e.event.bind(t, "pointerup", f)) : window.MSPointerEvent && (e.event.bind(window, "MSPointerDown", l), e.event.bind(window, "MSPointerUp", h), e.event.bind(t, "MSPointerDown", p), e.event.bind(t, "MSPointerMove", d), e.event.bind(t, "MSPointerUp", f)));
    }

    var n = t("../../lib/helper"),
        o = t("../instances"),
        r = t("../update-geometry"),
        a = t("../update-scroll");

    e.exports = function (t) {
      if (n.env.supportsTouch || n.env.supportsIePointer) {
        s(t, o.get(t), n.env.supportsTouch, n.env.supportsIePointer);
      }
    };
  }, {
    "../../lib/helper": 6,
    "../instances": 18,
    "../update-geometry": 19,
    "../update-scroll": 20
  }],
  17: [function (t, e, i) {
    "use strict";

    var s = t("../lib/helper"),
        n = t("../lib/class"),
        o = t("./instances"),
        r = t("./update-geometry"),
        a = {
      "click-rail": t("./handler/click-rail"),
      "drag-scrollbar": t("./handler/drag-scrollbar"),
      keyboard: t("./handler/keyboard"),
      wheel: t("./handler/mouse-wheel"),
      touch: t("./handler/touch"),
      selection: t("./handler/selection")
    },
        l = t("./handler/native-scroll");

    e.exports = function (t, e) {
      e = "object" == _typeof(e) ? e : {}, n.add(t, "ps-container");
      var i = o.add(t);
      i.settings = s.extend(i.settings, e), n.add(t, "ps-theme-" + i.settings.theme), i.settings.handlers.forEach(function (e) {
        a[e](t);
      }), l(t), r(t);
    };
  }, {
    "../lib/class": 2,
    "../lib/helper": 6,
    "./handler/click-rail": 10,
    "./handler/drag-scrollbar": 11,
    "./handler/keyboard": 12,
    "./handler/mouse-wheel": 13,
    "./handler/native-scroll": 14,
    "./handler/selection": 15,
    "./handler/touch": 16,
    "./instances": 18,
    "./update-geometry": 19
  }],
  18: [function (t, e, i) {
    "use strict";

    function s(t) {
      return t.getAttribute("data-ps-id");
    }

    var n = t("../lib/helper"),
        o = t("../lib/class"),
        r = t("./default-setting"),
        a = t("../lib/dom"),
        l = t("../lib/event-manager"),
        h = t("../lib/guid"),
        c = {};
    i.add = function (t) {
      var e = h();
      return function (t, e) {
        t.setAttribute("data-ps-id", e);
      }(t, e), c[e] = new function (t) {
        function e() {
          o.add(t, "ps-focus");
        }

        function i() {
          o.remove(t, "ps-focus");
        }

        this.settings = n.clone(r), this.containerWidth = null, this.containerHeight = null, this.contentWidth = null, this.contentHeight = null, this.isRtl = "rtl" === a.css(t, "direction"), this.isNegativeScroll = function () {
          var e = t.scrollLeft,
              i = null;
          return t.scrollLeft = -1, i = t.scrollLeft < 0, t.scrollLeft = e, i;
        }(), this.negativeScrollAdjustment = this.isNegativeScroll ? t.scrollWidth - t.clientWidth : 0, this.event = new l(), this.ownerDocument = t.ownerDocument || document, this.scrollbarXRail = a.appendTo(a.e("div", "ps-scrollbar-x-rail"), t), this.scrollbarX = a.appendTo(a.e("div", "ps-scrollbar-x"), this.scrollbarXRail), this.scrollbarX.setAttribute("tabindex", 0), this.event.bind(this.scrollbarX, "focus", e), this.event.bind(this.scrollbarX, "blur", i), this.scrollbarXActive = null, this.scrollbarXWidth = null, this.scrollbarXLeft = null, this.scrollbarXBottom = n.toInt(a.css(this.scrollbarXRail, "bottom")), this.isScrollbarXUsingBottom = this.scrollbarXBottom == this.scrollbarXBottom, this.scrollbarXTop = this.isScrollbarXUsingBottom ? null : n.toInt(a.css(this.scrollbarXRail, "top")), this.railBorderXWidth = n.toInt(a.css(this.scrollbarXRail, "borderLeftWidth")) + n.toInt(a.css(this.scrollbarXRail, "borderRightWidth")), a.css(this.scrollbarXRail, "display", "block"), this.railXMarginWidth = n.toInt(a.css(this.scrollbarXRail, "marginLeft")) + n.toInt(a.css(this.scrollbarXRail, "marginRight")), a.css(this.scrollbarXRail, "display", ""), this.railXWidth = null, this.railXRatio = null, this.scrollbarYRail = a.appendTo(a.e("div", "ps-scrollbar-y-rail"), t), this.scrollbarY = a.appendTo(a.e("div", "ps-scrollbar-y"), this.scrollbarYRail), this.scrollbarY.setAttribute("tabindex", 0), this.event.bind(this.scrollbarY, "focus", e), this.event.bind(this.scrollbarY, "blur", i), this.scrollbarYActive = null, this.scrollbarYHeight = null, this.scrollbarYTop = null, this.scrollbarYRight = n.toInt(a.css(this.scrollbarYRail, "right")), this.isScrollbarYUsingRight = this.scrollbarYRight == this.scrollbarYRight, this.scrollbarYLeft = this.isScrollbarYUsingRight ? null : n.toInt(a.css(this.scrollbarYRail, "left")), this.scrollbarYOuterWidth = this.isRtl ? n.outerWidth(this.scrollbarY) : null, this.railBorderYWidth = n.toInt(a.css(this.scrollbarYRail, "borderTopWidth")) + n.toInt(a.css(this.scrollbarYRail, "borderBottomWidth")), a.css(this.scrollbarYRail, "display", "block"), this.railYMarginHeight = n.toInt(a.css(this.scrollbarYRail, "marginTop")) + n.toInt(a.css(this.scrollbarYRail, "marginBottom")), a.css(this.scrollbarYRail, "display", ""), this.railYHeight = null, this.railYRatio = null;
      }(t), c[e];
    }, i.remove = function (t) {
      delete c[s(t)], function (t) {
        t.removeAttribute("data-ps-id");
      }(t);
    }, i.get = function (t) {
      return c[s(t)];
    };
  }, {
    "../lib/class": 2,
    "../lib/dom": 3,
    "../lib/event-manager": 4,
    "../lib/guid": 5,
    "../lib/helper": 6,
    "./default-setting": 8
  }],
  19: [function (t, e, i) {
    "use strict";

    function s(t, e) {
      return t.settings.minScrollbarLength && (e = Math.max(e, t.settings.minScrollbarLength)), t.settings.maxScrollbarLength && (e = Math.min(e, t.settings.maxScrollbarLength)), e;
    }

    var n = t("../lib/helper"),
        o = t("../lib/class"),
        r = t("../lib/dom"),
        a = t("./instances"),
        l = t("./update-scroll");

    e.exports = function (t) {
      var e = a.get(t);
      e.containerWidth = t.clientWidth, e.containerHeight = t.clientHeight, e.contentWidth = t.scrollWidth, e.contentHeight = t.scrollHeight;
      var i;
      t.contains(e.scrollbarXRail) || ((i = r.queryChildren(t, ".ps-scrollbar-x-rail")).length > 0 && i.forEach(function (t) {
        r.remove(t);
      }), r.appendTo(e.scrollbarXRail, t)), t.contains(e.scrollbarYRail) || ((i = r.queryChildren(t, ".ps-scrollbar-y-rail")).length > 0 && i.forEach(function (t) {
        r.remove(t);
      }), r.appendTo(e.scrollbarYRail, t)), !e.settings.suppressScrollX && e.containerWidth + e.settings.scrollXMarginOffset < e.contentWidth ? (e.scrollbarXActive = !0, e.railXWidth = e.containerWidth - e.railXMarginWidth, e.railXRatio = e.containerWidth / e.railXWidth, e.scrollbarXWidth = s(e, n.toInt(e.railXWidth * e.containerWidth / e.contentWidth)), e.scrollbarXLeft = n.toInt((e.negativeScrollAdjustment + t.scrollLeft) * (e.railXWidth - e.scrollbarXWidth) / (e.contentWidth - e.containerWidth))) : e.scrollbarXActive = !1, !e.settings.suppressScrollY && e.containerHeight + e.settings.scrollYMarginOffset < e.contentHeight ? (e.scrollbarYActive = !0, e.railYHeight = e.containerHeight - e.railYMarginHeight, e.railYRatio = e.containerHeight / e.railYHeight, e.scrollbarYHeight = s(e, n.toInt(e.railYHeight * e.containerHeight / e.contentHeight)), e.scrollbarYTop = n.toInt(t.scrollTop * (e.railYHeight - e.scrollbarYHeight) / (e.contentHeight - e.containerHeight))) : e.scrollbarYActive = !1, e.scrollbarXLeft >= e.railXWidth - e.scrollbarXWidth && (e.scrollbarXLeft = e.railXWidth - e.scrollbarXWidth), e.scrollbarYTop >= e.railYHeight - e.scrollbarYHeight && (e.scrollbarYTop = e.railYHeight - e.scrollbarYHeight), function (t, e) {
        var i = {
          width: e.railXWidth
        };
        e.isRtl ? i.left = e.negativeScrollAdjustment + t.scrollLeft + e.containerWidth - e.contentWidth : i.left = t.scrollLeft, e.isScrollbarXUsingBottom ? i.bottom = e.scrollbarXBottom - t.scrollTop : i.top = e.scrollbarXTop + t.scrollTop, r.css(e.scrollbarXRail, i);
        var s = {
          top: t.scrollTop,
          height: e.railYHeight
        };
        e.isScrollbarYUsingRight ? e.isRtl ? s.right = e.contentWidth - (e.negativeScrollAdjustment + t.scrollLeft) - e.scrollbarYRight - e.scrollbarYOuterWidth : s.right = e.scrollbarYRight - t.scrollLeft : e.isRtl ? s.left = e.negativeScrollAdjustment + t.scrollLeft + 2 * e.containerWidth - e.contentWidth - e.scrollbarYLeft - e.scrollbarYOuterWidth : s.left = e.scrollbarYLeft + t.scrollLeft, r.css(e.scrollbarYRail, s), r.css(e.scrollbarX, {
          left: e.scrollbarXLeft,
          width: e.scrollbarXWidth - e.railBorderXWidth
        }), r.css(e.scrollbarY, {
          top: e.scrollbarYTop,
          height: e.scrollbarYHeight - e.railBorderYWidth
        });
      }(t, e), e.scrollbarXActive ? o.add(t, "ps-active-x") : (o.remove(t, "ps-active-x"), e.scrollbarXWidth = 0, e.scrollbarXLeft = 0, l(t, "left", 0)), e.scrollbarYActive ? o.add(t, "ps-active-y") : (o.remove(t, "ps-active-y"), e.scrollbarYHeight = 0, e.scrollbarYTop = 0, l(t, "top", 0));
    };
  }, {
    "../lib/class": 2,
    "../lib/dom": 3,
    "../lib/helper": 6,
    "./instances": 18,
    "./update-scroll": 20
  }],
  20: [function (t, e, i) {
    "use strict";

    var s,
        n,
        o = t("./instances"),
        r = function r(t) {
      var e = document.createEvent("Event");
      return e.initEvent(t, !0, !0), e;
    };

    e.exports = function (t, e, i) {
      if (void 0 === t) throw "You must provide an element to the update-scroll function";
      if (void 0 === e) throw "You must provide an axis to the update-scroll function";
      if (void 0 === i) throw "You must provide a value to the update-scroll function";
      "top" === e && i <= 0 && (t.scrollTop = i = 0, t.dispatchEvent(r("ps-y-reach-start"))), "left" === e && i <= 0 && (t.scrollLeft = i = 0, t.dispatchEvent(r("ps-x-reach-start")));
      var a = o.get(t);
      "top" === e && i >= a.contentHeight - a.containerHeight && ((i = a.contentHeight - a.containerHeight) - t.scrollTop <= 1 ? i = t.scrollTop : t.scrollTop = i, t.dispatchEvent(r("ps-y-reach-end"))), "left" === e && i >= a.contentWidth - a.containerWidth && ((i = a.contentWidth - a.containerWidth) - t.scrollLeft <= 1 ? i = t.scrollLeft : t.scrollLeft = i, t.dispatchEvent(r("ps-x-reach-end"))), s || (s = t.scrollTop), n || (n = t.scrollLeft), "top" === e && i < s && t.dispatchEvent(r("ps-scroll-up")), "top" === e && i > s && t.dispatchEvent(r("ps-scroll-down")), "left" === e && i < n && t.dispatchEvent(r("ps-scroll-left")), "left" === e && i > n && t.dispatchEvent(r("ps-scroll-right")), "top" === e && (t.scrollTop = s = i, t.dispatchEvent(r("ps-scroll-y"))), "left" === e && (t.scrollLeft = n = i, t.dispatchEvent(r("ps-scroll-x")));
    };
  }, {
    "./instances": 18
  }],
  21: [function (t, e, i) {
    "use strict";

    var s = t("../lib/helper"),
        n = t("../lib/dom"),
        o = t("./instances"),
        r = t("./update-geometry"),
        a = t("./update-scroll");

    e.exports = function (t) {
      var e = o.get(t);
      e && (e.negativeScrollAdjustment = e.isNegativeScroll ? t.scrollWidth - t.clientWidth : 0, n.css(e.scrollbarXRail, "display", "block"), n.css(e.scrollbarYRail, "display", "block"), e.railXMarginWidth = s.toInt(n.css(e.scrollbarXRail, "marginLeft")) + s.toInt(n.css(e.scrollbarXRail, "marginRight")), e.railYMarginHeight = s.toInt(n.css(e.scrollbarYRail, "marginTop")) + s.toInt(n.css(e.scrollbarYRail, "marginBottom")), n.css(e.scrollbarXRail, "display", "none"), n.css(e.scrollbarYRail, "display", "none"), r(t), a(t, "top", t.scrollTop), a(t, "left", t.scrollLeft), n.css(e.scrollbarXRail, "display", ""), n.css(e.scrollbarYRail, "display", ""));
    };
  }, {
    "../lib/dom": 3,
    "../lib/helper": 6,
    "./instances": 18,
    "./update-geometry": 19,
    "./update-scroll": 20
  }]
}, {}, [1]), function () {
  for (var t = document.getElementsByTagName("script"), e = "", i = 0; i < t.length; i++) {
    t[i].src && t[i].src.match(/html5lightbox\.js/i) && (e = t[i].src.substr(0, t[i].src.lastIndexOf("/") + 1));
  }

  var s = !1;
  if ("undefined" == typeof jQuery) s = !0;else {
    var n = jQuery.fn.jquery.split(".");
    (n[0] < 1 || 1 == n[0] && n[1] < 6) && (s = !0);
  }

  if (s) {
    var o = document.getElementsByTagName("head")[0],
        r = document.createElement("script");
    r.setAttribute("type", "text/javascript"), r.readyState ? r.onreadystatechange = function () {
      "loaded" != r.readyState && "complete" != r.readyState || (r.onreadystatechange = null, loadHtml5LightBox(e));
    } : r.onload = function () {
      loadHtml5LightBox(e);
    }, r.setAttribute("src", e + "jquery.js"), o.appendChild(r);
  } else loadHtml5LightBox(e);
}(), function (t, e, i, s) {
  function n(e, i) {
    this.settings = null, this.options = t.extend({}, n.Defaults, i), this.$element = t(e), this.drag = t.extend({}, a), this.state = t.extend({}, l), this.e = t.extend({}, h), this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._invalidated = {}, this._pipe = [], t.each(n.Plugins, t.proxy(function (t, e) {
      this._plugins[t[0].toLowerCase() + t.slice(1)] = new e(this);
    }, this)), t.each(n.Pipe, t.proxy(function (e, i) {
      this._pipe.push({
        filter: i.filter,
        run: t.proxy(i.run, this)
      });
    }, this)), this.setup(), this.initialize();
  }

  function o(t) {
    if (t.touches !== s) return {
      x: t.touches[0].pageX,
      y: t.touches[0].pageY
    };

    if (t.touches === s) {
      if (t.pageX !== s) return {
        x: t.pageX,
        y: t.pageY
      };
      if (t.pageX === s) return {
        x: t.clientX,
        y: t.clientY
      };
    }
  }

  function r(t) {
    var e,
        s,
        n = i.createElement("div"),
        o = t;

    for (e in o) {
      if (s = o[e], void 0 !== n.style[s]) return n = null, [s, e];
    }

    return [!1];
  }

  var a, l, h;
  a = {
    start: 0,
    startX: 0,
    startY: 0,
    current: 0,
    currentX: 0,
    currentY: 0,
    offsetX: 0,
    offsetY: 0,
    distance: null,
    startTime: 0,
    endTime: 0,
    updatedX: 0,
    targetEl: null
  }, l = {
    isTouch: !1,
    isScrolling: !1,
    isSwiping: !1,
    direction: !1,
    inMotion: !1
  }, h = {
    _onDragStart: null,
    _onDragMove: null,
    _onDragEnd: null,
    _transitionEnd: null,
    _resizer: null,
    _responsiveCall: null,
    _goToLoop: null,
    _checkVisibile: null
  }, n.Defaults = {
    items: 3,
    loop: !1,
    center: !1,
    mouseDrag: !0,
    touchDrag: !0,
    pullDrag: !0,
    freeDrag: !1,
    margin: 0,
    stagePadding: 0,
    merge: !1,
    mergeFit: !0,
    autoWidth: !1,
    startPosition: 0,
    rtl: !1,
    smartSpeed: 250,
    fluidSpeed: !1,
    dragEndSpeed: !1,
    responsive: {},
    responsiveRefreshRate: 200,
    responsiveBaseElement: e,
    responsiveClass: !1,
    fallbackEasing: "swing",
    info: !1,
    nestedItemSelector: !1,
    itemElement: "div",
    stageElement: "div",
    themeClass: "owl-theme",
    baseClass: "owl-carousel",
    itemClass: "owl-item",
    centerClass: "center",
    activeClass: "active"
  }, n.Width = {
    Default: "default",
    Inner: "inner",
    Outer: "outer"
  }, n.Plugins = {}, n.Pipe = [{
    filter: ["width", "items", "settings"],
    run: function run(t) {
      t.current = this._items && this._items[this.relative(this._current)];
    }
  }, {
    filter: ["items", "settings"],
    run: function run() {
      var t = this._clones;
      (this.$stage.children(".cloned").length !== t.length || !this.settings.loop && t.length > 0) && (this.$stage.children(".cloned").remove(), this._clones = []);
    }
  }, {
    filter: ["items", "settings"],
    run: function run() {
      var t,
          e,
          i = this._clones,
          s = this._items,
          n = this.settings.loop ? i.length - Math.max(2 * this.settings.items, 4) : 0;

      for (t = 0, e = Math.abs(n / 2); e > t; t++) {
        n > 0 ? (this.$stage.children().eq(s.length + i.length - 1).remove(), i.pop(), this.$stage.children().eq(0).remove(), i.pop()) : (i.push(i.length / 2), this.$stage.append(s[i[i.length - 1]].clone().addClass("cloned")), i.push(s.length - 1 - (i.length - 1) / 2), this.$stage.prepend(s[i[i.length - 1]].clone().addClass("cloned")));
      }
    }
  }, {
    filter: ["width", "items", "settings"],
    run: function run() {
      var t,
          e,
          i,
          s = this.settings.rtl ? 1 : -1,
          n = (this.width() / this.settings.items).toFixed(3),
          o = 0;

      for (this._coordinates = [], e = 0, i = this._clones.length + this._items.length; i > e; e++) {
        t = this._mergers[this.relative(e)], t = this.settings.mergeFit && Math.min(t, this.settings.items) || t, o += (this.settings.autoWidth ? this._items[this.relative(e)].width() + this.settings.margin : n * t) * s, this._coordinates.push(o);
      }
    }
  }, {
    filter: ["width", "items", "settings"],
    run: function run() {
      var e,
          i,
          s = (this.width() / this.settings.items).toFixed(3),
          n = {
        width: Math.abs(this._coordinates[this._coordinates.length - 1]) + 2 * this.settings.stagePadding,
        "padding-left": this.settings.stagePadding || "",
        "padding-right": this.settings.stagePadding || ""
      };
      if (this.$stage.css(n), n = {
        width: this.settings.autoWidth ? "auto" : s - this.settings.margin
      }, n[this.settings.rtl ? "margin-left" : "margin-right"] = this.settings.margin, !this.settings.autoWidth && t.grep(this._mergers, function (t) {
        return t > 1;
      }).length > 0) for (e = 0, i = this._coordinates.length; i > e; e++) {
        n.width = Math.abs(this._coordinates[e]) - Math.abs(this._coordinates[e - 1] || 0) - this.settings.margin, this.$stage.children().eq(e).css(n);
      } else this.$stage.children().css(n);
    }
  }, {
    filter: ["width", "items", "settings"],
    run: function run(t) {
      t.current && this.reset(this.$stage.children().index(t.current));
    }
  }, {
    filter: ["position"],
    run: function run() {
      this.animate(this.coordinates(this._current));
    }
  }, {
    filter: ["width", "position", "items", "settings"],
    run: function run() {
      var t,
          e,
          i,
          s,
          n = this.settings.rtl ? 1 : -1,
          o = 2 * this.settings.stagePadding,
          r = this.coordinates(this.current()) + o,
          a = r + this.width() * n,
          l = [];

      for (i = 0, s = this._coordinates.length; s > i; i++) {
        t = this._coordinates[i - 1] || 0, e = Math.abs(this._coordinates[i]) + o * n, (this.op(t, "<=", r) && this.op(t, ">", a) || this.op(e, "<", r) && this.op(e, ">", a)) && l.push(i);
      }

      this.$stage.children("." + this.settings.activeClass).removeClass(this.settings.activeClass), this.$stage.children(":eq(" + l.join("), :eq(") + ")").addClass(this.settings.activeClass), this.settings.center && (this.$stage.children("." + this.settings.centerClass).removeClass(this.settings.centerClass), this.$stage.children().eq(this.current()).addClass(this.settings.centerClass));
    }
  }], n.prototype.initialize = function () {
    if (this.trigger("initialize"), this.$element.addClass(this.settings.baseClass).addClass(this.settings.themeClass).toggleClass("owl-rtl", this.settings.rtl), this.browserSupport(), this.settings.autoWidth && !0 !== this.state.imagesLoaded) {
      var e, i, n;
      if (e = this.$element.find("img"), i = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : s, n = this.$element.children(i).width(), e.length && 0 >= n) return this.preloadAutoWidthImages(e), !1;
    }

    this.$element.addClass("owl-loading"), this.$stage = t("<" + this.settings.stageElement + ' class="owl-stage"/>').wrap('<div class="owl-stage-outer">'), this.$element.append(this.$stage.parent()), this.replace(this.$element.children().not(this.$stage.parent())), this._width = this.$element.width(), this.refresh(), this.$element.removeClass("owl-loading").addClass("owl-loaded"), this.eventsCall(), this.internalEvents(), this.addTriggerableEvents(), this.trigger("initialized");
  }, n.prototype.setup = function () {
    var e = this.viewport(),
        i = this.options.responsive,
        s = -1,
        n = null;
    i ? (t.each(i, function (t) {
      e >= t && t > s && (s = Number(t));
    }), n = t.extend({}, this.options, i[s]), delete n.responsive, n.responsiveClass && this.$element.attr("class", function (t, e) {
      return e.replace(/\b owl-responsive-\S+/g, "");
    }).addClass("owl-responsive-" + s)) : n = t.extend({}, this.options), (null === this.settings || this._breakpoint !== s) && (this.trigger("change", {
      property: {
        name: "settings",
        value: n
      }
    }), this._breakpoint = s, this.settings = n, this.invalidate("settings"), this.trigger("changed", {
      property: {
        name: "settings",
        value: this.settings
      }
    }));
  }, n.prototype.optionsLogic = function () {
    this.$element.toggleClass("owl-center", this.settings.center), this.settings.loop && this._items.length < this.settings.items && (this.settings.loop = !1), this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1);
  }, n.prototype.prepare = function (e) {
    var i = this.trigger("prepare", {
      content: e
    });
    return i.data || (i.data = t("<" + this.settings.itemElement + "/>").addClass(this.settings.itemClass).append(e)), this.trigger("prepared", {
      content: i.data
    }), i.data;
  }, n.prototype.update = function () {
    for (var e = 0, i = this._pipe.length, s = t.proxy(function (t) {
      return this[t];
    }, this._invalidated), n = {}; i > e;) {
      (this._invalidated.all || t.grep(this._pipe[e].filter, s).length > 0) && this._pipe[e].run(n), e++;
    }

    this._invalidated = {};
  }, n.prototype.width = function (t) {
    switch (t = t || n.Width.Default) {
      case n.Width.Inner:
      case n.Width.Outer:
        return this._width;

      default:
        return this._width - 2 * this.settings.stagePadding + this.settings.margin;
    }
  }, n.prototype.refresh = function () {
    if (0 === this._items.length) return !1;
    new Date().getTime(), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$stage.addClass("owl-refresh"), this.update(), this.$stage.removeClass("owl-refresh"), this.state.orientation = e.orientation, this.watchVisibility(), this.trigger("refreshed");
  }, n.prototype.eventsCall = function () {
    this.e._onDragStart = t.proxy(function (t) {
      this.onDragStart(t);
    }, this), this.e._onDragMove = t.proxy(function (t) {
      this.onDragMove(t);
    }, this), this.e._onDragEnd = t.proxy(function (t) {
      this.onDragEnd(t);
    }, this), this.e._onResize = t.proxy(function (t) {
      this.onResize(t);
    }, this), this.e._transitionEnd = t.proxy(function (t) {
      this.transitionEnd(t);
    }, this), this.e._preventClick = t.proxy(function (t) {
      this.preventClick(t);
    }, this);
  }, n.prototype.onThrottledResize = function () {
    e.clearTimeout(this.resizeTimer), this.resizeTimer = e.setTimeout(this.e._onResize, this.settings.responsiveRefreshRate);
  }, n.prototype.onResize = function () {
    return !!this._items.length && this._width !== this.$element.width() && !this.trigger("resize").isDefaultPrevented() && (this._width = this.$element.width(), this.invalidate("width"), this.refresh(), void this.trigger("resized"));
  }, n.prototype.eventsRouter = function (t) {
    var e = t.type;
    "mousedown" === e || "touchstart" === e ? this.onDragStart(t) : "mousemove" === e || "touchmove" === e ? this.onDragMove(t) : "mouseup" === e || "touchend" === e ? this.onDragEnd(t) : "touchcancel" === e && this.onDragEnd(t);
  }, n.prototype.internalEvents = function () {
    var i = ("ontouchstart" in e || navigator.msMaxTouchPoints, e.navigator.msPointerEnabled);
    this.settings.mouseDrag ? (this.$stage.on("mousedown", t.proxy(function (t) {
      this.eventsRouter(t);
    }, this)), this.$stage.on("dragstart", function () {
      return !1;
    }), this.$stage.get(0).onselectstart = function () {
      return !1;
    }) : this.$element.addClass("owl-text-select-on"), this.settings.touchDrag && !i && this.$stage.on("touchstart touchcancel", t.proxy(function (t) {
      this.eventsRouter(t);
    }, this)), this.transitionEndVendor && this.on(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd, !1), !1 !== this.settings.responsive && this.on(e, "resize", t.proxy(this.onThrottledResize, this));
  }, n.prototype.onDragStart = function (s) {
    var n, r, a, l;
    if (3 === (n = s.originalEvent || s || e.event).which || this.state.isTouch) return !1;
    if ("mousedown" === n.type && this.$stage.addClass("owl-grab"), this.trigger("drag"), this.drag.startTime = new Date().getTime(), this.speed(0), this.state.isTouch = !0, this.state.isScrolling = !1, this.state.isSwiping = !1, this.drag.distance = 0, r = o(n).x, a = o(n).y, this.drag.offsetX = this.$stage.position().left, this.drag.offsetY = this.$stage.position().top, this.settings.rtl && (this.drag.offsetX = this.$stage.position().left + this.$stage.width() - this.width() + this.settings.margin), this.state.inMotion && this.support3d) l = this.getTransformProperty(), this.drag.offsetX = l, this.animate(l), this.state.inMotion = !0;else if (this.state.inMotion && !this.support3d) return this.state.inMotion = !1, !1;
    this.drag.startX = r - this.drag.offsetX, this.drag.startY = a - this.drag.offsetY, this.drag.start = r - this.drag.startX, this.drag.targetEl = n.target || n.srcElement, this.drag.updatedX = this.drag.start, ("IMG" === this.drag.targetEl.tagName || "A" === this.drag.targetEl.tagName) && (this.drag.targetEl.draggable = !1), t(i).on("mousemove.owl.dragEvents mouseup.owl.dragEvents touchmove.owl.dragEvents touchend.owl.dragEvents", t.proxy(function (t) {
      this.eventsRouter(t);
    }, this));
  }, n.prototype.onDragMove = function (t) {
    var i, n, r, a, l, h;
    this.state.isTouch && (this.state.isScrolling || (i = t.originalEvent || t || e.event, n = o(i).x, r = o(i).y, this.drag.currentX = n - this.drag.startX, this.drag.currentY = r - this.drag.startY, this.drag.distance = this.drag.currentX - this.drag.offsetX, this.drag.distance < 0 ? this.state.direction = this.settings.rtl ? "right" : "left" : this.drag.distance > 0 && (this.state.direction = this.settings.rtl ? "left" : "right"), this.settings.loop ? this.op(this.drag.currentX, ">", this.coordinates(this.minimum())) && "right" === this.state.direction ? this.drag.currentX -= (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length) : this.op(this.drag.currentX, "<", this.coordinates(this.maximum())) && "left" === this.state.direction && (this.drag.currentX += (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length)) : (a = this.coordinates(this.settings.rtl ? this.maximum() : this.minimum()), l = this.coordinates(this.settings.rtl ? this.minimum() : this.maximum()), h = this.settings.pullDrag ? this.drag.distance / 5 : 0, this.drag.currentX = Math.max(Math.min(this.drag.currentX, a + h), l + h)), (this.drag.distance > 8 || this.drag.distance < -8) && (i.preventDefault !== s ? i.preventDefault() : i.returnValue = !1, this.state.isSwiping = !0), this.drag.updatedX = this.drag.currentX, (this.drag.currentY > 16 || this.drag.currentY < -16) && !1 === this.state.isSwiping && (this.state.isScrolling = !0, this.drag.updatedX = this.drag.start), this.animate(this.drag.updatedX)));
  }, n.prototype.onDragEnd = function (e) {
    var s, n;

    if (this.state.isTouch) {
      if ("mouseup" === e.type && this.$stage.removeClass("owl-grab"), this.trigger("dragged"), this.drag.targetEl.removeAttribute("draggable"), this.state.isTouch = !1, this.state.isScrolling = !1, this.state.isSwiping = !1, 0 === this.drag.distance && !0 !== this.state.inMotion) return this.state.inMotion = !1, !1;
      this.drag.endTime = new Date().getTime(), s = this.drag.endTime - this.drag.startTime, (Math.abs(this.drag.distance) > 3 || s > 300) && this.removeClick(this.drag.targetEl), n = this.closest(this.drag.updatedX), this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(n), this.invalidate("position"), this.update(), this.settings.pullDrag || this.drag.updatedX !== this.coordinates(n) || this.transitionEnd(), this.drag.distance = 0, t(i).off(".owl.dragEvents");
    }
  }, n.prototype.removeClick = function (i) {
    this.drag.targetEl = i, t(i).on("click.preventClick", this.e._preventClick), e.setTimeout(function () {
      t(i).off("click.preventClick");
    }, 300);
  }, n.prototype.preventClick = function (e) {
    e.preventDefault ? e.preventDefault() : e.returnValue = !1, e.stopPropagation && e.stopPropagation(), t(e.target).off("click.preventClick");
  }, n.prototype.getTransformProperty = function () {
    var t;
    return t = e.getComputedStyle(this.$stage.get(0), null).getPropertyValue(this.vendorName + "transform"), t = t.replace(/matrix(3d)?\(|\)/g, "").split(","), !0 !== (16 === t.length) ? t[4] : t[12];
  }, n.prototype.closest = function (e) {
    var i = -1,
        s = this.width(),
        n = this.coordinates();
    return this.settings.freeDrag || t.each(n, t.proxy(function (t, o) {
      return e > o - 30 && o + 30 > e ? i = t : this.op(e, "<", o) && this.op(e, ">", n[t + 1] || o - s) && (i = "left" === this.state.direction ? t + 1 : t), -1 === i;
    }, this)), this.settings.loop || (this.op(e, ">", n[this.minimum()]) ? i = e = this.minimum() : this.op(e, "<", n[this.maximum()]) && (i = e = this.maximum())), i;
  }, n.prototype.animate = function (e) {
    this.trigger("translate"), this.state.inMotion = this.speed() > 0, this.support3d ? this.$stage.css({
      transform: "translate3d(" + e + "px,0px, 0px)",
      transition: this.speed() / 1e3 + "s"
    }) : this.state.isTouch ? this.$stage.css({
      left: e + "px"
    }) : this.$stage.animate({
      left: e
    }, this.speed() / 1e3, this.settings.fallbackEasing, t.proxy(function () {
      this.state.inMotion && this.transitionEnd();
    }, this));
  }, n.prototype.current = function (t) {
    if (t === s) return this._current;
    if (0 === this._items.length) return s;

    if (t = this.normalize(t), this._current !== t) {
      var e = this.trigger("change", {
        property: {
          name: "position",
          value: t
        }
      });
      e.data !== s && (t = this.normalize(e.data)), this._current = t, this.invalidate("position"), this.trigger("changed", {
        property: {
          name: "position",
          value: this._current
        }
      });
    }

    return this._current;
  }, n.prototype.invalidate = function (t) {
    this._invalidated[t] = !0;
  }, n.prototype.reset = function (t) {
    (t = this.normalize(t)) !== s && (this._speed = 0, this._current = t, this.suppress(["translate", "translated"]), this.animate(this.coordinates(t)), this.release(["translate", "translated"]));
  }, n.prototype.normalize = function (e, i) {
    var n = i ? this._items.length : this._items.length + this._clones.length;
    return !t.isNumeric(e) || 1 > n ? s : e = this._clones.length ? (e % n + n) % n : Math.max(this.minimum(i), Math.min(this.maximum(i), e));
  }, n.prototype.relative = function (t) {
    return t = this.normalize(t), t -= this._clones.length / 2, this.normalize(t, !0);
  }, n.prototype.maximum = function (t) {
    var e,
        i,
        s,
        n = 0,
        o = this.settings;
    if (t) return this._items.length - 1;
    if (!o.loop && o.center) e = this._items.length - 1;else if (o.loop || o.center) {
      if (o.loop || o.center) e = this._items.length + o.items;else {
        if (!o.autoWidth && !o.merge) throw "Can not detect maximum absolute position.";

        for (revert = o.rtl ? 1 : -1, i = this.$stage.width() - this.$element.width(); (s = this.coordinates(n)) && !(s * revert >= i);) {
          e = ++n;
        }
      }
    } else e = this._items.length - o.items;
    return e;
  }, n.prototype.minimum = function (t) {
    return t ? 0 : this._clones.length / 2;
  }, n.prototype.items = function (t) {
    return t === s ? this._items.slice() : (t = this.normalize(t, !0), this._items[t]);
  }, n.prototype.mergers = function (t) {
    return t === s ? this._mergers.slice() : (t = this.normalize(t, !0), this._mergers[t]);
  }, n.prototype.clones = function (e) {
    var i = this._clones.length / 2,
        n = i + this._items.length,
        o = function o(t) {
      return t % 2 == 0 ? n + t / 2 : i - (t + 1) / 2;
    };

    return e === s ? t.map(this._clones, function (t, e) {
      return o(e);
    }) : t.map(this._clones, function (t, i) {
      return t === e ? o(i) : null;
    });
  }, n.prototype.speed = function (t) {
    return t !== s && (this._speed = t), this._speed;
  }, n.prototype.coordinates = function (e) {
    var i = null;
    return e === s ? t.map(this._coordinates, t.proxy(function (t, e) {
      return this.coordinates(e);
    }, this)) : (this.settings.center ? (i = this._coordinates[e], i += (this.width() - i + (this._coordinates[e - 1] || 0)) / 2 * (this.settings.rtl ? -1 : 1)) : i = this._coordinates[e - 1] || 0, i);
  }, n.prototype.duration = function (t, e, i) {
    return Math.min(Math.max(Math.abs(e - t), 1), 6) * Math.abs(i || this.settings.smartSpeed);
  }, n.prototype.to = function (i, s) {
    if (this.settings.loop) {
      var n = i - this.relative(this.current()),
          o = this.current(),
          r = this.current(),
          a = this.current() + n,
          l = 0 > r - a,
          h = this._clones.length + this._items.length;
      a < this.settings.items && !1 === l ? (o = r + this._items.length, this.reset(o)) : a >= h - this.settings.items && !0 === l && (o = r - this._items.length, this.reset(o)), e.clearTimeout(this.e._goToLoop), this.e._goToLoop = e.setTimeout(t.proxy(function () {
        this.speed(this.duration(this.current(), o + n, s)), this.current(o + n), this.update();
      }, this), 30);
    } else this.speed(this.duration(this.current(), i, s)), this.current(i), this.update();
  }, n.prototype.next = function (t) {
    t = t || !1, this.to(this.relative(this.current()) + 1, t);
  }, n.prototype.prev = function (t) {
    t = t || !1, this.to(this.relative(this.current()) - 1, t);
  }, n.prototype.transitionEnd = function (t) {
    return (t === s || (t.stopPropagation(), (t.target || t.srcElement || t.originalTarget) === this.$stage.get(0))) && (this.state.inMotion = !1, void this.trigger("translated"));
  }, n.prototype.viewport = function () {
    var s;
    if (this.options.responsiveBaseElement !== e) s = t(this.options.responsiveBaseElement).width();else if (e.innerWidth) s = e.innerWidth;else {
      if (!i.documentElement || !i.documentElement.clientWidth) throw "Can not detect viewport width.";
      s = i.documentElement.clientWidth;
    }
    return s;
  }, n.prototype.replace = function (e) {
    this.$stage.empty(), this._items = [], e && (e = e instanceof jQuery ? e : t(e)), this.settings.nestedItemSelector && (e = e.find("." + this.settings.nestedItemSelector)), e.filter(function () {
      return 1 === this.nodeType;
    }).each(t.proxy(function (t, e) {
      e = this.prepare(e), this.$stage.append(e), this._items.push(e), this._mergers.push(1 * e.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1);
    }, this)), this.reset(t.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items");
  }, n.prototype.add = function (t, e) {
    e = e === s ? this._items.length : this.normalize(e, !0), this.trigger("add", {
      content: t,
      position: e
    }), 0 === this._items.length || e === this._items.length ? (this.$stage.append(t), this._items.push(t), this._mergers.push(1 * t.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)) : (this._items[e].before(t), this._items.splice(e, 0, t), this._mergers.splice(e, 0, 1 * t.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)), this.invalidate("items"), this.trigger("added", {
      content: t,
      position: e
    });
  }, n.prototype.remove = function (t) {
    (t = this.normalize(t, !0)) !== s && (this.trigger("remove", {
      content: this._items[t],
      position: t
    }), this._items[t].remove(), this._items.splice(t, 1), this._mergers.splice(t, 1), this.invalidate("items"), this.trigger("removed", {
      content: null,
      position: t
    }));
  }, n.prototype.addTriggerableEvents = function () {
    var e = t.proxy(function (e, i) {
      return t.proxy(function (t) {
        t.relatedTarget !== this && (this.suppress([i]), e.apply(this, [].slice.call(arguments, 1)), this.release([i]));
      }, this);
    }, this);
    t.each({
      next: this.next,
      prev: this.prev,
      to: this.to,
      destroy: this.destroy,
      refresh: this.refresh,
      replace: this.replace,
      add: this.add,
      remove: this.remove
    }, t.proxy(function (t, i) {
      this.$element.on(t + ".owl.carousel", e(i, t + ".owl.carousel"));
    }, this));
  }, n.prototype.watchVisibility = function () {
    function i(t) {
      return t.offsetWidth > 0 && t.offsetHeight > 0;
    }

    i(this.$element.get(0)) || (this.$element.addClass("owl-hidden"), e.clearInterval(this.e._checkVisibile), this.e._checkVisibile = e.setInterval(t.proxy(function () {
      i(this.$element.get(0)) && (this.$element.removeClass("owl-hidden"), this.refresh(), e.clearInterval(this.e._checkVisibile));
    }, this), 500));
  }, n.prototype.preloadAutoWidthImages = function (e) {
    var i, s, n, o;
    i = 0, s = this, e.each(function (r, a) {
      n = t(a), (o = new Image()).onload = function () {
        i++, n.attr("src", o.src), n.css("opacity", 1), i >= e.length && (s.state.imagesLoaded = !0, s.initialize());
      }, o.src = n.attr("src") || n.attr("data-src") || n.attr("data-src-retina");
    });
  }, n.prototype.destroy = function () {
    this.$element.hasClass(this.settings.themeClass) && this.$element.removeClass(this.settings.themeClass), !1 !== this.settings.responsive && t(e).off("resize.owl.carousel"), this.transitionEndVendor && this.off(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd);

    for (var s in this._plugins) {
      this._plugins[s].destroy();
    }

    (this.settings.mouseDrag || this.settings.touchDrag) && (this.$stage.off("mousedown touchstart touchcancel"), t(i).off(".owl.dragEvents"), this.$stage.get(0).onselectstart = function () {}, this.$stage.off("dragstart", function () {
      return !1;
    })), this.$element.off(".owl"), this.$stage.children(".cloned").remove(), this.e = null, this.$element.removeData("owlCarousel"), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$stage.unwrap();
  }, n.prototype.op = function (t, e, i) {
    var s = this.settings.rtl;

    switch (e) {
      case "<":
        return s ? t > i : i > t;

      case ">":
        return s ? i > t : t > i;

      case ">=":
        return s ? i >= t : t >= i;

      case "<=":
        return s ? t >= i : i >= t;
    }
  }, n.prototype.on = function (t, e, i, s) {
    t.addEventListener ? t.addEventListener(e, i, s) : t.attachEvent && t.attachEvent("on" + e, i);
  }, n.prototype.off = function (t, e, i, s) {
    t.removeEventListener ? t.removeEventListener(e, i, s) : t.detachEvent && t.detachEvent("on" + e, i);
  }, n.prototype.trigger = function (e, i, s) {
    var n = {
      item: {
        count: this._items.length,
        index: this.current()
      }
    },
        o = t.camelCase(t.grep(["on", e, s], function (t) {
      return t;
    }).join("-").toLowerCase()),
        r = t.Event([e, "owl", s || "carousel"].join(".").toLowerCase(), t.extend({
      relatedTarget: this
    }, n, i));
    return this._supress[e] || (t.each(this._plugins, function (t, e) {
      e.onTrigger && e.onTrigger(r);
    }), this.$element.trigger(r), this.settings && "function" == typeof this.settings[o] && this.settings[o].apply(this, r)), r;
  }, n.prototype.suppress = function (e) {
    t.each(e, t.proxy(function (t, e) {
      this._supress[e] = !0;
    }, this));
  }, n.prototype.release = function (e) {
    t.each(e, t.proxy(function (t, e) {
      delete this._supress[e];
    }, this));
  }, n.prototype.browserSupport = function () {
    if (this.support3d = r(["perspective", "webkitPerspective", "MozPerspective", "OPerspective", "MsPerspective"])[0], this.support3d) {
      this.transformVendor = r(["transform", "WebkitTransform", "MozTransform", "OTransform", "msTransform"])[0];
      this.transitionEndVendor = ["transitionend", "webkitTransitionEnd", "transitionend", "oTransitionEnd"][r(["transition", "WebkitTransition", "MozTransition", "OTransition"])[1]], this.vendorName = this.transformVendor.replace(/Transform/i, ""), this.vendorName = "" !== this.vendorName ? "-" + this.vendorName.toLowerCase() + "-" : "";
    }

    this.state.orientation = e.orientation;
  }, t.fn.owlCarousel = function (e) {
    return this.each(function () {
      t(this).data("owlCarousel") || t(this).data("owlCarousel", new n(this, e));
    });
  }, t.fn.owlCarousel.Constructor = n;
}(window.Zepto || window.jQuery, window, document), function (t, e) {
  var i = function i(e) {
    this._core = e, this._loaded = [], this._handlers = {
      "initialized.owl.carousel change.owl.carousel": t.proxy(function (e) {
        if (e.namespace && this._core.settings && this._core.settings.lazyLoad && (e.property && "position" == e.property.name || "initialized" == e.type)) for (var i = this._core.settings, s = i.center && Math.ceil(i.items / 2) || i.items, n = i.center && -1 * s || 0, o = (e.property && e.property.value || this._core.current()) + n, r = this._core.clones().length, a = t.proxy(function (t, e) {
          this.load(e);
        }, this); n++ < s;) {
          this.load(r / 2 + this._core.relative(o)), r && t.each(this._core.clones(this._core.relative(o++)), a);
        }
      }, this)
    }, this._core.options = t.extend({}, i.Defaults, this._core.options), this._core.$element.on(this._handlers);
  };

  i.Defaults = {
    lazyLoad: !1
  }, i.prototype.load = function (i) {
    var s = this._core.$stage.children().eq(i),
        n = s && s.find(".owl-lazy");

    !n || t.inArray(s.get(0), this._loaded) > -1 || (n.each(t.proxy(function (i, s) {
      var n,
          o = t(s),
          r = e.devicePixelRatio > 1 && o.attr("data-src-retina") || o.attr("data-src");
      this._core.trigger("load", {
        element: o,
        url: r
      }, "lazy"), o.is("img") ? o.one("load.owl.lazy", t.proxy(function () {
        o.css("opacity", 1), this._core.trigger("loaded", {
          element: o,
          url: r
        }, "lazy");
      }, this)).attr("src", r) : (n = new Image(), n.onload = t.proxy(function () {
        o.css({
          "background-image": "url(" + r + ")",
          opacity: "1"
        }), this._core.trigger("loaded", {
          element: o,
          url: r
        }, "lazy");
      }, this), n.src = r);
    }, this)), this._loaded.push(s.get(0)));
  }, i.prototype.destroy = function () {
    var t, e;

    for (t in this.handlers) {
      this._core.$element.off(t, this.handlers[t]);
    }

    for (e in Object.getOwnPropertyNames(this)) {
      "function" != typeof this[e] && (this[e] = null);
    }
  }, t.fn.owlCarousel.Constructor.Plugins.Lazy = i;
}(window.Zepto || window.jQuery, window, document), function (t) {
  var e = function e(i) {
    this._core = i, this._handlers = {
      "initialized.owl.carousel": t.proxy(function () {
        this._core.settings.autoHeight && this.update();
      }, this),
      "changed.owl.carousel": t.proxy(function (t) {
        this._core.settings.autoHeight && "position" == t.property.name && this.update();
      }, this),
      "loaded.owl.lazy": t.proxy(function (t) {
        this._core.settings.autoHeight && t.element.closest("." + this._core.settings.itemClass) === this._core.$stage.children().eq(this._core.current()) && this.update();
      }, this)
    }, this._core.options = t.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers);
  };

  e.Defaults = {
    autoHeight: !1,
    autoHeightClass: "owl-height"
  }, e.prototype.update = function () {
    this._core.$stage.parent().height(this._core.$stage.children().eq(this._core.current()).height()).addClass(this._core.settings.autoHeightClass);
  }, e.prototype.destroy = function () {
    var t, e;

    for (t in this._handlers) {
      this._core.$element.off(t, this._handlers[t]);
    }

    for (e in Object.getOwnPropertyNames(this)) {
      "function" != typeof this[e] && (this[e] = null);
    }
  }, t.fn.owlCarousel.Constructor.Plugins.AutoHeight = e;
}(window.Zepto || window.jQuery, window, document), function (t, e, i) {
  var s = function s(e) {
    this._core = e, this._videos = {}, this._playing = null, this._fullscreen = !1, this._handlers = {
      "resize.owl.carousel": t.proxy(function (t) {
        this._core.settings.video && !this.isInFullScreen() && t.preventDefault();
      }, this),
      "refresh.owl.carousel changed.owl.carousel": t.proxy(function () {
        this._playing && this.stop();
      }, this),
      "prepared.owl.carousel": t.proxy(function (e) {
        var i = t(e.content).find(".owl-video");
        i.length && (i.css("display", "none"), this.fetch(i, t(e.content)));
      }, this)
    }, this._core.options = t.extend({}, s.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", t.proxy(function (t) {
      this.play(t);
    }, this));
  };

  s.Defaults = {
    video: !1,
    videoHeight: !1,
    videoWidth: !1
  }, s.prototype.fetch = function (t, e) {
    var i = t.attr("data-vimeo-id") ? "vimeo" : "youtube",
        s = t.attr("data-vimeo-id") || t.attr("data-youtube-id"),
        n = t.attr("data-width") || this._core.settings.videoWidth,
        o = t.attr("data-height") || this._core.settings.videoHeight,
        r = t.attr("href");

    if (!r) throw new Error("Missing video URL.");
    if ((s = r.match(/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/))[3].indexOf("youtu") > -1) i = "youtube";else {
      if (!(s[3].indexOf("vimeo") > -1)) throw new Error("Video URL not supported.");
      i = "vimeo";
    }
    s = s[6], this._videos[r] = {
      type: i,
      id: s,
      width: n,
      height: o
    }, e.attr("data-video", r), this.thumbnail(t, this._videos[r]);
  }, s.prototype.thumbnail = function (e, i) {
    var s,
        n,
        o,
        r = i.width && i.height ? 'style="width:' + i.width + "px;height:" + i.height + 'px;"' : "",
        a = e.find("img"),
        l = "src",
        h = "",
        c = this._core.settings,
        u = function u(t) {
      n = '<div class="owl-video-play-icon"></div>', s = c.lazyLoad ? '<div class="owl-video-tn ' + h + '" ' + l + '="' + t + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + t + ')"></div>', e.after(s), e.after(n);
    };

    return e.wrap('<div class="owl-video-wrapper"' + r + "></div>"), this._core.settings.lazyLoad && (l = "data-src", h = "owl-lazy"), a.length ? (u(a.attr(l)), a.remove(), !1) : void ("youtube" === i.type ? (o = "http://img.youtube.com/vi/" + i.id + "/hqdefault.jpg", u(o)) : "vimeo" === i.type && t.ajax({
      type: "GET",
      url: "http://vimeo.com/api/v2/video/" + i.id + ".json",
      jsonp: "callback",
      dataType: "jsonp",
      success: function success(t) {
        o = t[0].thumbnail_large, u(o);
      }
    }));
  }, s.prototype.stop = function () {
    this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null;
  }, s.prototype.play = function (e) {
    this._core.trigger("play", null, "video"), this._playing && this.stop();

    var i,
        s,
        n = t(e.target || e.srcElement),
        o = n.closest("." + this._core.settings.itemClass),
        r = this._videos[o.attr("data-video")],
        a = r.width || "100%",
        l = r.height || this._core.$stage.height();

    "youtube" === r.type ? i = '<iframe width="' + a + '" height="' + l + '" src="http://www.youtube.com/embed/' + r.id + "?autoplay=1&v=" + r.id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === r.type && (i = '<iframe src="http://player.vimeo.com/video/' + r.id + '?autoplay=1" width="' + a + '" height="' + l + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'), o.addClass("owl-video-playing"), this._playing = o, s = t('<div style="height:' + l + "px; width:" + a + 'px" class="owl-video-frame">' + i + "</div>"), n.after(s);
  }, s.prototype.isInFullScreen = function () {
    var s = i.fullscreenElement || i.mozFullScreenElement || i.webkitFullscreenElement;
    return s && t(s).parent().hasClass("owl-video-frame") && (this._core.speed(0), this._fullscreen = !0), !(s && this._fullscreen && this._playing) && (this._fullscreen ? (this._fullscreen = !1, !1) : !this._playing || this._core.state.orientation === e.orientation || (this._core.state.orientation = e.orientation, !1));
  }, s.prototype.destroy = function () {
    var t, e;

    this._core.$element.off("click.owl.video");

    for (t in this._handlers) {
      this._core.$element.off(t, this._handlers[t]);
    }

    for (e in Object.getOwnPropertyNames(this)) {
      "function" != typeof this[e] && (this[e] = null);
    }
  }, t.fn.owlCarousel.Constructor.Plugins.Video = s;
}(window.Zepto || window.jQuery, window, document), function (t, e, i, s) {
  var n = function n(e) {
    this.core = e, this.core.options = t.extend({}, n.Defaults, this.core.options), this.swapping = !0, this.previous = void 0, this.next = void 0, this.handlers = {
      "change.owl.carousel": t.proxy(function (t) {
        "position" == t.property.name && (this.previous = this.core.current(), this.next = t.property.value);
      }, this),
      "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": t.proxy(function (t) {
        this.swapping = "translated" == t.type;
      }, this),
      "translate.owl.carousel": t.proxy(function () {
        this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap();
      }, this)
    }, this.core.$element.on(this.handlers);
  };

  n.Defaults = {
    animateOut: !1,
    animateIn: !1
  }, n.prototype.swap = function () {
    if (1 === this.core.settings.items && this.core.support3d) {
      this.core.speed(0);
      var e,
          i = t.proxy(this.clear, this),
          s = this.core.$stage.children().eq(this.previous),
          n = this.core.$stage.children().eq(this.next),
          o = this.core.settings.animateIn,
          r = this.core.settings.animateOut;
      this.core.current() !== this.previous && (r && (e = this.core.coordinates(this.previous) - this.core.coordinates(this.next), s.css({
        left: e + "px"
      }).addClass("animated owl-animated-out").addClass(r).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", i)), o && n.addClass("animated owl-animated-in").addClass(o).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", i));
    }
  }, n.prototype.clear = function (e) {
    t(e.target).css({
      left: ""
    }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.transitionEnd();
  }, n.prototype.destroy = function () {
    var t, e;

    for (t in this.handlers) {
      this.core.$element.off(t, this.handlers[t]);
    }

    for (e in Object.getOwnPropertyNames(this)) {
      "function" != typeof this[e] && (this[e] = null);
    }
  }, t.fn.owlCarousel.Constructor.Plugins.Animate = n;
}(window.Zepto || window.jQuery, window, document), function (t, e, i) {
  var s = function s(e) {
    this.core = e, this.core.options = t.extend({}, s.Defaults, this.core.options), this.handlers = {
      "translated.owl.carousel refreshed.owl.carousel": t.proxy(function () {
        this.autoplay();
      }, this),
      "play.owl.autoplay": t.proxy(function (t, e, i) {
        this.play(e, i);
      }, this),
      "stop.owl.autoplay": t.proxy(function () {
        this.stop();
      }, this),
      "mouseover.owl.autoplay": t.proxy(function () {
        this.core.settings.autoplayHoverPause && this.pause();
      }, this),
      "mouseleave.owl.autoplay": t.proxy(function () {
        this.core.settings.autoplayHoverPause && this.autoplay();
      }, this)
    }, this.core.$element.on(this.handlers);
  };

  s.Defaults = {
    autoplay: !1,
    autoplayTimeout: 5e3,
    autoplayHoverPause: !1,
    autoplaySpeed: !1
  }, s.prototype.autoplay = function () {
    this.core.settings.autoplay && !this.core.state.videoPlay ? (e.clearInterval(this.interval), this.interval = e.setInterval(t.proxy(function () {
      this.play();
    }, this), this.core.settings.autoplayTimeout)) : e.clearInterval(this.interval);
  }, s.prototype.play = function () {
    return !0 === i.hidden || this.core.state.isTouch || this.core.state.isScrolling || this.core.state.isSwiping || this.core.state.inMotion ? void 0 : !1 === this.core.settings.autoplay ? void e.clearInterval(this.interval) : void this.core.next(this.core.settings.autoplaySpeed);
  }, s.prototype.stop = function () {
    e.clearInterval(this.interval);
  }, s.prototype.pause = function () {
    e.clearInterval(this.interval);
  }, s.prototype.destroy = function () {
    var t, i;
    e.clearInterval(this.interval);

    for (t in this.handlers) {
      this.core.$element.off(t, this.handlers[t]);
    }

    for (i in Object.getOwnPropertyNames(this)) {
      "function" != typeof this[i] && (this[i] = null);
    }
  }, t.fn.owlCarousel.Constructor.Plugins.autoplay = s;
}(window.Zepto || window.jQuery, window, document), function (t) {
  "use strict";

  var e = function e(i) {
    this._core = i, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
      next: this._core.next,
      prev: this._core.prev,
      to: this._core.to
    }, this._handlers = {
      "prepared.owl.carousel": t.proxy(function (e) {
        this._core.settings.dotsData && this._templates.push(t(e.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot"));
      }, this),
      "add.owl.carousel": t.proxy(function (e) {
        this._core.settings.dotsData && this._templates.splice(e.position, 0, t(e.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot"));
      }, this),
      "remove.owl.carousel prepared.owl.carousel": t.proxy(function (t) {
        this._core.settings.dotsData && this._templates.splice(t.position, 1);
      }, this),
      "change.owl.carousel": t.proxy(function (t) {
        if ("position" == t.property.name && !this._core.state.revert && !this._core.settings.loop && this._core.settings.navRewind) {
          var e = this._core.current(),
              i = this._core.maximum(),
              s = this._core.minimum();

          t.data = t.property.value > i ? e >= i ? s : i : t.property.value < s ? i : t.property.value;
        }
      }, this),
      "changed.owl.carousel": t.proxy(function (t) {
        "position" == t.property.name && this.draw();
      }, this),
      "refreshed.owl.carousel": t.proxy(function () {
        this._initialized || (this.initialize(), this._initialized = !0), this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation");
      }, this)
    }, this._core.options = t.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers);
  };

  e.Defaults = {
    nav: !1,
    navRewind: !0,
    navText: ["prev", "next"],
    navSpeed: !1,
    navElement: "div",
    navContainer: !1,
    navContainerClass: "owl-nav",
    navClass: ["owl-prev", "owl-next"],
    slideBy: 1,
    dotClass: "owl-dot",
    dotsClass: "owl-dots",
    dots: !0,
    dotsEach: !1,
    dotData: !1,
    dotsSpeed: !1,
    dotsContainer: !1,
    controlsClass: "owl-controls"
  }, e.prototype.initialize = function () {
    var e,
        i,
        s = this._core.settings;
    s.dotsData || (this._templates = [t("<div>").addClass(s.dotClass).append(t("<span>")).prop("outerHTML")]), s.navContainer && s.dotsContainer || (this._controls.$container = t("<div>").addClass(s.controlsClass).appendTo(this.$element)), this._controls.$indicators = s.dotsContainer ? t(s.dotsContainer) : t("<div>").hide().addClass(s.dotsClass).appendTo(this._controls.$container), this._controls.$indicators.on("click", "div", t.proxy(function (e) {
      var i = t(e.target).parent().is(this._controls.$indicators) ? t(e.target).index() : t(e.target).parent().index();
      e.preventDefault(), this.to(i, s.dotsSpeed);
    }, this)), e = s.navContainer ? t(s.navContainer) : t("<div>").addClass(s.navContainerClass).prependTo(this._controls.$container), this._controls.$next = t("<" + s.navElement + ">"), this._controls.$previous = this._controls.$next.clone(), this._controls.$previous.addClass(s.navClass[0]).html(s.navText[0]).hide().prependTo(e).on("click", t.proxy(function () {
      this.prev(s.navSpeed);
    }, this)), this._controls.$next.addClass(s.navClass[1]).html(s.navText[1]).hide().appendTo(e).on("click", t.proxy(function () {
      this.next(s.navSpeed);
    }, this));

    for (i in this._overrides) {
      this._core[i] = t.proxy(this[i], this);
    }
  }, e.prototype.destroy = function () {
    var t, e, i, s;

    for (t in this._handlers) {
      this.$element.off(t, this._handlers[t]);
    }

    for (e in this._controls) {
      this._controls[e].remove();
    }

    for (s in this.overides) {
      this._core[s] = this._overrides[s];
    }

    for (i in Object.getOwnPropertyNames(this)) {
      "function" != typeof this[i] && (this[i] = null);
    }
  }, e.prototype.update = function () {
    var t,
        e,
        i = this._core.settings,
        s = this._core.clones().length / 2,
        n = s + this._core.items().length,
        o = i.center || i.autoWidth || i.dotData ? 1 : i.dotsEach || i.items;

    if ("page" !== i.slideBy && (i.slideBy = Math.min(i.slideBy, i.items)), i.dots || "page" == i.slideBy) for (this._pages = [], t = s, e = 0, 0; n > t; t++) {
      (e >= o || 0 === e) && (this._pages.push({
        start: t - s,
        end: t - s + o - 1
      }), e = 0, 0), e += this._core.mergers(this._core.relative(t));
    }
  }, e.prototype.draw = function () {
    var e,
        i,
        s = "",
        n = this._core.settings,
        o = (this._core.$stage.children(), this._core.relative(this._core.current()));

    if (!n.nav || n.loop || n.navRewind || (this._controls.$previous.toggleClass("disabled", 0 >= o), this._controls.$next.toggleClass("disabled", o >= this._core.maximum())), this._controls.$previous.toggle(n.nav), this._controls.$next.toggle(n.nav), n.dots) {
      if (e = this._pages.length - this._controls.$indicators.children().length, n.dotData && 0 !== e) {
        for (i = 0; i < this._controls.$indicators.children().length; i++) {
          s += this._templates[this._core.relative(i)];
        }

        this._controls.$indicators.html(s);
      } else e > 0 ? (s = new Array(e + 1).join(this._templates[0]), this._controls.$indicators.append(s)) : 0 > e && this._controls.$indicators.children().slice(e).remove();

      this._controls.$indicators.find(".active").removeClass("active"), this._controls.$indicators.children().eq(t.inArray(this.current(), this._pages)).addClass("active");
    }

    this._controls.$indicators.toggle(n.dots);
  }, e.prototype.onTrigger = function (e) {
    var i = this._core.settings;
    e.page = {
      index: t.inArray(this.current(), this._pages),
      count: this._pages.length,
      size: i && (i.center || i.autoWidth || i.dotData ? 1 : i.dotsEach || i.items)
    };
  }, e.prototype.current = function () {
    var e = this._core.relative(this._core.current());

    return t.grep(this._pages, function (t) {
      return t.start <= e && t.end >= e;
    }).pop();
  }, e.prototype.getPosition = function (e) {
    var i,
        s,
        n = this._core.settings;
    return "page" == n.slideBy ? (i = t.inArray(this.current(), this._pages), s = this._pages.length, e ? ++i : --i, i = this._pages[(i % s + s) % s].start) : (i = this._core.relative(this._core.current()), s = this._core.items().length, e ? i += n.slideBy : i -= n.slideBy), i;
  }, e.prototype.next = function (e) {
    t.proxy(this._overrides.to, this._core)(this.getPosition(!0), e);
  }, e.prototype.prev = function (e) {
    t.proxy(this._overrides.to, this._core)(this.getPosition(!1), e);
  }, e.prototype.to = function (e, i, s) {
    var n;
    s ? t.proxy(this._overrides.to, this._core)(e, i) : (n = this._pages.length, t.proxy(this._overrides.to, this._core)(this._pages[(e % n + n) % n].start, i));
  }, t.fn.owlCarousel.Constructor.Plugins.Navigation = e;
}(window.Zepto || window.jQuery, window, document), function (t, e) {
  "use strict";

  var i = function i(s) {
    this._core = s, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
      "initialized.owl.carousel": t.proxy(function () {
        "URLHash" == this._core.settings.startPosition && t(e).trigger("hashchange.owl.navigation");
      }, this),
      "prepared.owl.carousel": t.proxy(function (e) {
        var i = t(e.content).find("[data-hash]").andSelf("[data-hash]").attr("data-hash");
        this._hashes[i] = e.content;
      }, this)
    }, this._core.options = t.extend({}, i.Defaults, this._core.options), this.$element.on(this._handlers), t(e).on("hashchange.owl.navigation", t.proxy(function () {
      var t = e.location.hash.substring(1),
          i = this._core.$stage.children(),
          s = this._hashes[t] && i.index(this._hashes[t]) || 0;

      return !!t && void this._core.to(s, !1, !0);
    }, this));
  };

  i.Defaults = {
    URLhashListener: !1
  }, i.prototype.destroy = function () {
    var i, s;
    t(e).off("hashchange.owl.navigation");

    for (i in this._handlers) {
      this._core.$element.off(i, this._handlers[i]);
    }

    for (s in Object.getOwnPropertyNames(this)) {
      "function" != typeof this[s] && (this[s] = null);
    }
  }, t.fn.owlCarousel.Constructor.Plugins.Hash = i;
}(window.Zepto || window.jQuery, window, document);

var _gsScope =  true && module.exports && "undefined" != typeof __webpack_require__.g ? __webpack_require__.g : this || window;

(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function () {
  "use strict";

  _gsScope._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function (t, e, i) {
    var s = function s(t) {
      var e,
          i = [],
          s = t.length;

      for (e = 0; e !== s; i.push(t[e++])) {
        ;
      }

      return i;
    },
        n = function n(t, e, i) {
      var s,
          n,
          o = t.cycle;

      for (s in o) {
        n = o[s], t[s] = "function" == typeof n ? n.call(e[i], i) : n[i % n.length];
      }

      delete t.cycle;
    },
        o = function o(t, e, s) {
      i.call(this, t, e, s), this._cycle = 0, this._yoyo = !0 === this.vars.yoyo, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._dirty = !0, this.render = o.prototype.render;
    },
        r = i._internals,
        a = r.isSelector,
        l = r.isArray,
        h = o.prototype = i.to({}, .1, {}),
        c = [];

    o.version = "1.18.2", h.constructor = o, h.kill()._gc = !1, o.killTweensOf = o.killDelayedCallsTo = i.killTweensOf, o.getTweensOf = i.getTweensOf, o.lagSmoothing = i.lagSmoothing, o.ticker = i.ticker, o.render = i.render, h.invalidate = function () {
      return this._yoyo = !0 === this.vars.yoyo, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), i.prototype.invalidate.call(this);
    }, h.updateTo = function (t, e) {
      var s,
          n = this.ratio,
          o = this.vars.immediateRender || t.immediateRender;
      e && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay));

      for (s in t) {
        this.vars[s] = t[s];
      }

      if (this._initted || o) if (e) this._initted = !1, o && this.render(0, !0, !0);else if (this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && i._onPluginEvent("_onDisable", this), this._time / this._duration > .998) {
        var r = this._totalTime;
        this.render(0, !0, !1), this._initted = !1, this.render(r, !0, !1);
      } else if (this._initted = !1, this._init(), this._time > 0 || o) for (var a, l = 1 / (1 - n), h = this._firstPT; h;) {
        a = h.s + h.c, h.c *= l, h.s = a - h.c, h = h._next;
      }
      return this;
    }, h.render = function (t, e, i) {
      this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
      var s,
          n,
          o,
          a,
          l,
          h,
          c,
          u,
          p = this._dirty ? this.totalDuration() : this._totalDuration,
          d = this._time,
          f = this._totalTime,
          m = this._cycle,
          g = this._duration,
          _ = this._rawPrevTime;

      if (t >= p - 1e-7 ? (this._totalTime = p, this._cycle = this._repeat, this._yoyo && 0 != (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = g, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (s = !0, n = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === g && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (0 > _ || 0 >= t && t >= -1e-7 || 1e-10 === _ && "isPause" !== this.data) && _ !== t && (i = !0, _ > 1e-10 && (n = "onReverseComplete")), this._rawPrevTime = u = !e || t || _ === t ? t : 1e-10)) : 1e-7 > t ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== f || 0 === g && _ > 0) && (n = "onReverseComplete", s = this._reversed), 0 > t && (this._active = !1, 0 === g && (this._initted || !this.vars.lazy || i) && (_ >= 0 && (i = !0), this._rawPrevTime = u = !e || t || _ === t ? t : 1e-10)), this._initted || (i = !0)) : (this._totalTime = this._time = t, 0 !== this._repeat && (a = g + this._repeatDelay, this._cycle = this._totalTime / a >> 0, 0 !== this._cycle && this._cycle === this._totalTime / a && this._cycle--, this._time = this._totalTime - this._cycle * a, this._yoyo && 0 != (1 & this._cycle) && (this._time = g - this._time), this._time > g ? this._time = g : this._time < 0 && (this._time = 0)), this._easeType ? (l = this._time / g, h = this._easeType, c = this._easePower, (1 === h || 3 === h && l >= .5) && (l = 1 - l), 3 === h && (l *= 2), 1 === c ? l *= l : 2 === c ? l *= l * l : 3 === c ? l *= l * l * l : 4 === c && (l *= l * l * l * l), 1 === h ? this.ratio = 1 - l : 2 === h ? this.ratio = l : this._time / g < .5 ? this.ratio = l / 2 : this.ratio = 1 - l / 2) : this.ratio = this._ease.getRatio(this._time / g)), d !== this._time || i || m !== this._cycle) {
        if (!this._initted) {
          if (this._init(), !this._initted || this._gc) return;
          if (!i && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration)) return this._time = d, this._totalTime = f, this._rawPrevTime = _, this._cycle = m, r.lazyTweens.push(this), void (this._lazy = [t, e]);
          this._time && !s ? this.ratio = this._ease.getRatio(this._time / g) : s && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1));
        }

        for (!1 !== this._lazy && (this._lazy = !1), this._active || !this._paused && this._time !== d && t >= 0 && (this._active = !0), 0 === f && (2 === this._initted && t > 0 && this._init(), this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : n || (n = "_dummyGS")), this.vars.onStart && (0 !== this._totalTime || 0 === g) && (e || this._callback("onStart"))), o = this._firstPT; o;) {
          o.f ? o.t[o.p](o.c * this.ratio + o.s) : o.t[o.p] = o.c * this.ratio + o.s, o = o._next;
        }

        this._onUpdate && (0 > t && this._startAt && this._startTime && this._startAt.render(t, e, i), e || (this._totalTime !== f || s) && this._callback("onUpdate")), this._cycle !== m && (e || this._gc || this.vars.onRepeat && this._callback("onRepeat")), n && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(t, e, i), s && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[n] && this._callback(n), 0 === g && 1e-10 === this._rawPrevTime && 1e-10 !== u && (this._rawPrevTime = 0));
      } else f !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate"));
    }, o.to = function (t, e, i) {
      return new o(t, e, i);
    }, o.from = function (t, e, i) {
      return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new o(t, e, i);
    }, o.fromTo = function (t, e, i, s) {
      return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, new o(t, e, s);
    }, o.staggerTo = o.allTo = function (t, e, r, h, u, p, d) {
      h = h || 0;

      var f,
          m,
          g,
          _,
          v = 0,
          b = [],
          y = function y() {
        r.onComplete && r.onComplete.apply(r.onCompleteScope || this, arguments), u.apply(d || r.callbackScope || this, p || c);
      },
          w = r.cycle,
          x = r.startAt && r.startAt.cycle;

      for (l(t) || ("string" == typeof t && (t = i.selector(t) || t), a(t) && (t = s(t))), t = t || [], 0 > h && ((t = s(t)).reverse(), h *= -1), f = t.length - 1, g = 0; f >= g; g++) {
        m = {};

        for (_ in r) {
          m[_] = r[_];
        }

        if (w && n(m, t, g), x) {
          x = m.startAt = {};

          for (_ in r.startAt) {
            x[_] = r.startAt[_];
          }

          n(m.startAt, t, g);
        }

        m.delay = v + (m.delay || 0), g === f && u && (m.onComplete = y), b[g] = new o(t[g], e, m), v += h;
      }

      return b;
    }, o.staggerFrom = o.allFrom = function (t, e, i, s, n, r, a) {
      return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, o.staggerTo(t, e, i, s, n, r, a);
    }, o.staggerFromTo = o.allFromTo = function (t, e, i, s, n, r, a, l) {
      return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, o.staggerTo(t, e, s, n, r, a, l);
    }, o.delayedCall = function (t, e, i, s, n) {
      return new o(e, 0, {
        delay: t,
        onComplete: e,
        onCompleteParams: i,
        callbackScope: s,
        onReverseComplete: e,
        onReverseCompleteParams: i,
        immediateRender: !1,
        useFrames: n,
        overwrite: 0
      });
    }, o.set = function (t, e) {
      return new o(t, 0, e);
    }, o.isTweening = function (t) {
      return i.getTweensOf(t, !0).length > 0;
    };

    var u = function u(t, e) {
      for (var s = [], n = 0, o = t._first; o;) {
        o instanceof i ? s[n++] = o : (e && (s[n++] = o), s = s.concat(u(o, e)), n = s.length), o = o._next;
      }

      return s;
    },
        p = o.getAllTweens = function (e) {
      return u(t._rootTimeline, e).concat(u(t._rootFramesTimeline, e));
    };

    o.killAll = function (t, i, s, n) {
      null == i && (i = !0), null == s && (s = !0);
      var o,
          r,
          a,
          l = p(0 != n),
          h = l.length,
          c = i && s && n;

      for (a = 0; h > a; a++) {
        r = l[a], (c || r instanceof e || (o = r.target === r.vars.onComplete) && s || i && !o) && (t ? r.totalTime(r._reversed ? 0 : r.totalDuration()) : r._enabled(!1, !1));
      }
    }, o.killChildTweensOf = function (t, e) {
      if (null != t) {
        var n,
            h,
            c,
            u,
            p,
            d = r.tweenLookup;
        if ("string" == typeof t && (t = i.selector(t) || t), a(t) && (t = s(t)), l(t)) for (u = t.length; --u > -1;) {
          o.killChildTweensOf(t[u], e);
        } else {
          n = [];

          for (c in d) {
            for (h = d[c].target.parentNode; h;) {
              h === t && (n = n.concat(d[c].tweens)), h = h.parentNode;
            }
          }

          for (p = n.length, u = 0; p > u; u++) {
            e && n[u].totalTime(n[u].totalDuration()), n[u]._enabled(!1, !1);
          }
        }
      }
    };

    var d = function d(t, i, s, n) {
      i = !1 !== i, s = !1 !== s;

      for (var o, r, a = p(n = !1 !== n), l = i && s && n, h = a.length; --h > -1;) {
        r = a[h], (l || r instanceof e || (o = r.target === r.vars.onComplete) && s || i && !o) && r.paused(t);
      }
    };

    return o.pauseAll = function (t, e, i) {
      d(!0, t, e, i);
    }, o.resumeAll = function (t, e, i) {
      d(!1, t, e, i);
    }, o.globalTimeScale = function (e) {
      var s = t._rootTimeline,
          n = i.ticker.time;
      return arguments.length ? (e = e || 1e-10, s._startTime = n - (n - s._startTime) * s._timeScale / e, s = t._rootFramesTimeline, n = i.ticker.frame, s._startTime = n - (n - s._startTime) * s._timeScale / e, s._timeScale = t._rootTimeline._timeScale = e, e) : s._timeScale;
    }, h.progress = function (t) {
      return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), !1) : this._time / this.duration();
    }, h.totalProgress = function (t) {
      return arguments.length ? this.totalTime(this.totalDuration() * t, !1) : this._totalTime / this.totalDuration();
    }, h.time = function (t, e) {
      return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 != (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time;
    }, h.duration = function (e) {
      return arguments.length ? t.prototype.duration.call(this, e) : this._duration;
    }, h.totalDuration = function (t) {
      return arguments.length ? -1 === this._repeat ? this : this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration);
    }, h.repeat = function (t) {
      return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat;
    }, h.repeatDelay = function (t) {
      return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay;
    }, h.yoyo = function (t) {
      return arguments.length ? (this._yoyo = t, this) : this._yoyo;
    }, o;
  }, !0), _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function (t, e, i) {
    var s = function s(t) {
      e.call(this, t), this._labels = {}, this.autoRemoveChildren = !0 === this.vars.autoRemoveChildren, this.smoothChildTiming = !0 === this.vars.smoothChildTiming, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
      var i,
          s,
          n = this.vars;

      for (s in n) {
        i = n[s], a(i) && -1 !== i.join("").indexOf("{self}") && (n[s] = this._swapSelfInParams(i));
      }

      a(n.tweens) && this.add(n.tweens, 0, n.align, n.stagger);
    },
        n = i._internals,
        o = s._internals = {},
        r = n.isSelector,
        a = n.isArray,
        l = n.lazyTweens,
        h = n.lazyRender,
        c = _gsScope._gsDefine.globals,
        u = function u(t) {
      var e,
          i = {};

      for (e in t) {
        i[e] = t[e];
      }

      return i;
    },
        p = function p(t, e, i) {
      var s,
          n,
          o = t.cycle;

      for (s in o) {
        n = o[s], t[s] = "function" == typeof n ? n.call(e[i], i) : n[i % n.length];
      }

      delete t.cycle;
    },
        d = o.pauseCallback = function () {},
        f = function f(t) {
      var e,
          i = [],
          s = t.length;

      for (e = 0; e !== s; i.push(t[e++])) {
        ;
      }

      return i;
    },
        m = s.prototype = new e();

    return s.version = "1.18.2", m.constructor = s, m.kill()._gc = m._forcingPlayhead = m._hasPause = !1, m.to = function (t, e, s, n) {
      var o = s.repeat && c.TweenMax || i;
      return e ? this.add(new o(t, e, s), n) : this.set(t, s, n);
    }, m.from = function (t, e, s, n) {
      return this.add((s.repeat && c.TweenMax || i).from(t, e, s), n);
    }, m.fromTo = function (t, e, s, n, o) {
      var r = n.repeat && c.TweenMax || i;
      return e ? this.add(r.fromTo(t, e, s, n), o) : this.set(t, n, o);
    }, m.staggerTo = function (t, e, n, o, a, l, h, c) {
      var d,
          m,
          g = new s({
        onComplete: l,
        onCompleteParams: h,
        callbackScope: c,
        smoothChildTiming: this.smoothChildTiming
      }),
          _ = n.cycle;

      for ("string" == typeof t && (t = i.selector(t) || t), r(t = t || []) && (t = f(t)), 0 > (o = o || 0) && ((t = f(t)).reverse(), o *= -1), m = 0; m < t.length; m++) {
        (d = u(n)).startAt && (d.startAt = u(d.startAt), d.startAt.cycle && p(d.startAt, t, m)), _ && p(d, t, m), g.to(t[m], e, d, m * o);
      }

      return this.add(g, a);
    }, m.staggerFrom = function (t, e, i, s, n, o, r, a) {
      return i.immediateRender = 0 != i.immediateRender, i.runBackwards = !0, this.staggerTo(t, e, i, s, n, o, r, a);
    }, m.staggerFromTo = function (t, e, i, s, n, o, r, a, l) {
      return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, this.staggerTo(t, e, s, n, o, r, a, l);
    }, m.call = function (t, e, s, n) {
      return this.add(i.delayedCall(0, t, e, s), n);
    }, m.set = function (t, e, s) {
      return s = this._parseTimeOrLabel(s, 0, !0), null == e.immediateRender && (e.immediateRender = s === this._time && !this._paused), this.add(new i(t, 0, e), s);
    }, s.exportRoot = function (t, e) {
      null == (t = t || {}).smoothChildTiming && (t.smoothChildTiming = !0);
      var n,
          o,
          r = new s(t),
          a = r._timeline;

      for (null == e && (e = !0), a._remove(r, !0), r._startTime = 0, r._rawPrevTime = r._time = r._totalTime = a._time, n = a._first; n;) {
        o = n._next, e && n instanceof i && n.target === n.vars.onComplete || r.add(n, n._startTime - n._delay), n = o;
      }

      return a.add(r, 0), r;
    }, m.add = function (n, o, r, l) {
      var h, c, u, p, d, f;

      if ("number" != typeof o && (o = this._parseTimeOrLabel(o, 0, !0, n)), !(n instanceof t)) {
        if (n instanceof Array || n && n.push && a(n)) {
          for (r = r || "normal", l = l || 0, h = o, c = n.length, u = 0; c > u; u++) {
            a(p = n[u]) && (p = new s({
              tweens: p
            })), this.add(p, h), "string" != typeof p && "function" != typeof p && ("sequence" === r ? h = p._startTime + p.totalDuration() / p._timeScale : "start" === r && (p._startTime -= p.delay())), h += l;
          }

          return this._uncache(!0);
        }

        if ("string" == typeof n) return this.addLabel(n, o);
        if ("function" != typeof n) throw "Cannot add " + n + " into the timeline; it is not a tween, timeline, function, or string.";
        n = i.delayedCall(0, n);
      }

      if (e.prototype.add.call(this, n, o), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration()) for (d = this, f = d.rawTime() > n._startTime; d._timeline;) {
        f && d._timeline.smoothChildTiming ? d.totalTime(d._totalTime, !0) : d._gc && d._enabled(!0, !1), d = d._timeline;
      }
      return this;
    }, m.remove = function (e) {
      if (e instanceof t) {
        this._remove(e, !1);

        var i = e._timeline = e.vars.useFrames ? t._rootFramesTimeline : t._rootTimeline;
        return e._startTime = (e._paused ? e._pauseTime : i._time) - (e._reversed ? e.totalDuration() - e._totalTime : e._totalTime) / e._timeScale, this;
      }

      if (e instanceof Array || e && e.push && a(e)) {
        for (var s = e.length; --s > -1;) {
          this.remove(e[s]);
        }

        return this;
      }

      return "string" == typeof e ? this.removeLabel(e) : this.kill(null, e);
    }, m._remove = function (t, i) {
      e.prototype._remove.call(this, t, i);

      var s = this._last;
      return s ? this._time > s._startTime + s._totalDuration / s._timeScale && (this._time = this.duration(), this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this;
    }, m.append = function (t, e) {
      return this.add(t, this._parseTimeOrLabel(null, e, !0, t));
    }, m.insert = m.insertMultiple = function (t, e, i, s) {
      return this.add(t, e || 0, i, s);
    }, m.appendMultiple = function (t, e, i, s) {
      return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, s);
    }, m.addLabel = function (t, e) {
      return this._labels[t] = this._parseTimeOrLabel(e), this;
    }, m.addPause = function (t, e, s, n) {
      var o = i.delayedCall(0, d, s, n || this);
      return o.vars.onComplete = o.vars.onReverseComplete = e, o.data = "isPause", this._hasPause = !0, this.add(o, t);
    }, m.removeLabel = function (t) {
      return delete this._labels[t], this;
    }, m.getLabelTime = function (t) {
      return null != this._labels[t] ? this._labels[t] : -1;
    }, m._parseTimeOrLabel = function (e, i, s, n) {
      var o;
      if (n instanceof t && n.timeline === this) this.remove(n);else if (n && (n instanceof Array || n.push && a(n))) for (o = n.length; --o > -1;) {
        n[o] instanceof t && n[o].timeline === this && this.remove(n[o]);
      }
      if ("string" == typeof i) return this._parseTimeOrLabel(i, s && "number" == typeof e && null == this._labels[i] ? e - this.duration() : 0, s);
      if (i = i || 0, "string" != typeof e || !isNaN(e) && null == this._labels[e]) null == e && (e = this.duration());else {
        if (-1 === (o = e.indexOf("="))) return null == this._labels[e] ? s ? this._labels[e] = this.duration() + i : i : this._labels[e] + i;
        i = parseInt(e.charAt(o - 1) + "1", 10) * Number(e.substr(o + 1)), e = o > 1 ? this._parseTimeOrLabel(e.substr(0, o - 1), 0, s) : this.duration();
      }
      return Number(e) + i;
    }, m.seek = function (t, e) {
      return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), !1 !== e);
    }, m.stop = function () {
      return this.paused(!0);
    }, m.gotoAndPlay = function (t, e) {
      return this.play(t, e);
    }, m.gotoAndStop = function (t, e) {
      return this.pause(t, e);
    }, m.render = function (t, e, i) {
      this._gc && this._enabled(!0, !1);
      var s,
          n,
          o,
          r,
          a,
          c,
          u,
          p = this._dirty ? this.totalDuration() : this._totalDuration,
          d = this._time,
          f = this._startTime,
          m = this._timeScale,
          g = this._paused;
      if (t >= p - 1e-7) this._totalTime = this._time = p, this._reversed || this._hasPausedChild() || (n = !0, r = "onComplete", a = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 >= t && t >= -1e-7 || this._rawPrevTime < 0 || 1e-10 === this._rawPrevTime) && this._rawPrevTime !== t && this._first && (a = !0, this._rawPrevTime > 1e-10 && (r = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : 1e-10, t = p + 1e-4;else if (1e-7 > t) {
        if (this._totalTime = this._time = 0, (0 !== d || 0 === this._duration && 1e-10 !== this._rawPrevTime && (this._rawPrevTime > 0 || 0 > t && this._rawPrevTime >= 0)) && (r = "onReverseComplete", n = this._reversed), 0 > t) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (a = n = !0, r = "onReverseComplete") : this._rawPrevTime >= 0 && this._first && (a = !0), this._rawPrevTime = t;else {
          if (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : 1e-10, 0 === t && n) for (s = this._first; s && 0 === s._startTime;) {
            s._duration || (n = !1), s = s._next;
          }
          t = 0, this._initted || (a = !0);
        }
      } else {
        if (this._hasPause && !this._forcingPlayhead && !e) {
          if (t >= d) for (s = this._first; s && s._startTime <= t && !c;) {
            s._duration || "isPause" !== s.data || s.ratio || 0 === s._startTime && 0 === this._rawPrevTime || (c = s), s = s._next;
          } else for (s = this._last; s && s._startTime >= t && !c;) {
            s._duration || "isPause" === s.data && s._rawPrevTime > 0 && (c = s), s = s._prev;
          }
          c && (this._time = t = c._startTime, this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay));
        }

        this._totalTime = this._time = this._rawPrevTime = t;
      }

      if (this._time !== d && this._first || i || a || c) {
        if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== d && t > 0 && (this._active = !0), 0 === d && this.vars.onStart && 0 !== this._time && (e || this._callback("onStart")), (u = this._time) >= d) for (s = this._first; s && (o = s._next, u === this._time && (!this._paused || g));) {
          (s._active || s._startTime <= u && !s._paused && !s._gc) && (c === s && this.pause(), s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)), s = o;
        } else for (s = this._last; s && (o = s._prev, u === this._time && (!this._paused || g));) {
          if (s._active || s._startTime <= d && !s._paused && !s._gc) {
            if (c === s) {
              for (c = s._prev; c && c.endTime() > this._time;) {
                c.render(c._reversed ? c.totalDuration() - (t - c._startTime) * c._timeScale : (t - c._startTime) * c._timeScale, e, i), c = c._prev;
              }

              c = null, this.pause();
            }

            s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i);
          }

          s = o;
        }
        this._onUpdate && (e || (l.length && h(), this._callback("onUpdate"))), r && (this._gc || (f === this._startTime || m !== this._timeScale) && (0 === this._time || p >= this.totalDuration()) && (n && (l.length && h(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this._callback(r)));
      }
    }, m._hasPausedChild = function () {
      for (var t = this._first; t;) {
        if (t._paused || t instanceof s && t._hasPausedChild()) return !0;
        t = t._next;
      }

      return !1;
    }, m.getChildren = function (t, e, s, n) {
      n = n || -9999999999;

      for (var o = [], r = this._first, a = 0; r;) {
        r._startTime < n || (r instanceof i ? !1 !== e && (o[a++] = r) : (!1 !== s && (o[a++] = r), !1 !== t && (o = o.concat(r.getChildren(!0, e, s)), a = o.length))), r = r._next;
      }

      return o;
    }, m.getTweensOf = function (t, e) {
      var s,
          n,
          o = this._gc,
          r = [],
          a = 0;

      for (o && this._enabled(!0, !0), n = (s = i.getTweensOf(t)).length; --n > -1;) {
        (s[n].timeline === this || e && this._contains(s[n])) && (r[a++] = s[n]);
      }

      return o && this._enabled(!1, !0), r;
    }, m.recent = function () {
      return this._recent;
    }, m._contains = function (t) {
      for (var e = t.timeline; e;) {
        if (e === this) return !0;
        e = e.timeline;
      }

      return !1;
    }, m.shiftChildren = function (t, e, i) {
      i = i || 0;

      for (var s, n = this._first, o = this._labels; n;) {
        n._startTime >= i && (n._startTime += t), n = n._next;
      }

      if (e) for (s in o) {
        o[s] >= i && (o[s] += t);
      }
      return this._uncache(!0);
    }, m._kill = function (t, e) {
      if (!t && !e) return this._enabled(!1, !1);

      for (var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), s = i.length, n = !1; --s > -1;) {
        i[s]._kill(t, e) && (n = !0);
      }

      return n;
    }, m.clear = function (t) {
      var e = this.getChildren(!1, !0, !0),
          i = e.length;

      for (this._time = this._totalTime = 0; --i > -1;) {
        e[i]._enabled(!1, !1);
      }

      return !1 !== t && (this._labels = {}), this._uncache(!0);
    }, m.invalidate = function () {
      for (var e = this._first; e;) {
        e.invalidate(), e = e._next;
      }

      return t.prototype.invalidate.call(this);
    }, m._enabled = function (t, i) {
      if (t === this._gc) for (var s = this._first; s;) {
        s._enabled(t, !0), s = s._next;
      }
      return e.prototype._enabled.call(this, t, i);
    }, m.totalTime = function (e, i, s) {
      this._forcingPlayhead = !0;
      var n = t.prototype.totalTime.apply(this, arguments);
      return this._forcingPlayhead = !1, n;
    }, m.duration = function (t) {
      return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t), this) : (this._dirty && this.totalDuration(), this._duration);
    }, m.totalDuration = function (t) {
      if (!arguments.length) {
        if (this._dirty) {
          for (var e, i, s = 0, n = this._last, o = 999999999999; n;) {
            e = n._prev, n._dirty && n.totalDuration(), n._startTime > o && this._sortChildren && !n._paused ? this.add(n, n._startTime - n._delay) : o = n._startTime, n._startTime < 0 && !n._paused && (s -= n._startTime, this._timeline.smoothChildTiming && (this._startTime += n._startTime / this._timeScale), this.shiftChildren(-n._startTime, !1, -9999999999), o = 0), (i = n._startTime + n._totalDuration / n._timeScale) > s && (s = i), n = e;
          }

          this._duration = this._totalDuration = s, this._dirty = !1;
        }

        return this._totalDuration;
      }

      return t && this.totalDuration() ? this.timeScale(this._totalDuration / t) : this;
    }, m.paused = function (e) {
      if (!e) for (var i = this._first, s = this._time; i;) {
        i._startTime === s && "isPause" === i.data && (i._rawPrevTime = 0), i = i._next;
      }
      return t.prototype.paused.apply(this, arguments);
    }, m.usesFrames = function () {
      for (var e = this._timeline; e._timeline;) {
        e = e._timeline;
      }

      return e === t._rootFramesTimeline;
    }, m.rawTime = function () {
      return this._paused ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale;
    }, s;
  }, !0), _gsScope._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function (t, e, i) {
    var s = function s(e) {
      t.call(this, e), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = !0 === this.vars.yoyo, this._dirty = !0;
    },
        n = e._internals,
        o = n.lazyTweens,
        r = n.lazyRender,
        a = new i(null, null, 1, 0),
        l = s.prototype = new t();

    return l.constructor = s, l.kill()._gc = !1, s.version = "1.18.2", l.invalidate = function () {
      return this._yoyo = !0 === this.vars.yoyo, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), t.prototype.invalidate.call(this);
    }, l.addCallback = function (t, i, s, n) {
      return this.add(e.delayedCall(0, t, s, n), i);
    }, l.removeCallback = function (t, e) {
      if (t) if (null == e) this._kill(null, t);else for (var i = this.getTweensOf(t, !1), s = i.length, n = this._parseTimeOrLabel(e); --s > -1;) {
        i[s]._startTime === n && i[s]._enabled(!1, !1);
      }
      return this;
    }, l.removePause = function (e) {
      return this.removeCallback(t._internals.pauseCallback, e);
    }, l.tweenTo = function (t, i) {
      i = i || {};
      var s,
          n,
          o,
          r = {
        ease: a,
        useFrames: this.usesFrames(),
        immediateRender: !1
      };

      for (n in i) {
        r[n] = i[n];
      }

      return r.time = this._parseTimeOrLabel(t), s = Math.abs(Number(r.time) - this._time) / this._timeScale || .001, o = new e(this, s, r), r.onStart = function () {
        o.target.paused(!0), o.vars.time !== o.target.time() && s === o.duration() && o.duration(Math.abs(o.vars.time - o.target.time()) / o.target._timeScale), i.onStart && o._callback("onStart");
      }, o;
    }, l.tweenFromTo = function (t, e, i) {
      i = i || {}, t = this._parseTimeOrLabel(t), i.startAt = {
        onComplete: this.seek,
        onCompleteParams: [t],
        callbackScope: this
      }, i.immediateRender = !1 !== i.immediateRender;
      var s = this.tweenTo(e, i);
      return s.duration(Math.abs(s.vars.time - t) / this._timeScale || .001);
    }, l.render = function (t, e, i) {
      this._gc && this._enabled(!0, !1);
      var s,
          n,
          a,
          l,
          h,
          c,
          u,
          p,
          d = this._dirty ? this.totalDuration() : this._totalDuration,
          f = this._duration,
          m = this._time,
          g = this._totalTime,
          _ = this._startTime,
          v = this._timeScale,
          b = this._rawPrevTime,
          y = this._paused,
          w = this._cycle;
      if (t >= d - 1e-7) this._locked || (this._totalTime = d, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (n = !0, l = "onComplete", h = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 >= t && t >= -1e-7 || 0 > b || 1e-10 === b) && b !== t && this._first && (h = !0, b > 1e-10 && (l = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : 1e-10, this._yoyo && 0 != (1 & this._cycle) ? this._time = t = 0 : (this._time = f, t = f + 1e-4);else if (1e-7 > t) {
        if (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== m || 0 === f && 1e-10 !== b && (b > 0 || 0 > t && b >= 0) && !this._locked) && (l = "onReverseComplete", n = this._reversed), 0 > t) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (h = n = !0, l = "onReverseComplete") : b >= 0 && this._first && (h = !0), this._rawPrevTime = t;else {
          if (this._rawPrevTime = f || !e || t || this._rawPrevTime === t ? t : 1e-10, 0 === t && n) for (s = this._first; s && 0 === s._startTime;) {
            s._duration || (n = !1), s = s._next;
          }
          t = 0, this._initted || (h = !0);
        }
      } else if (0 === f && 0 > b && (h = !0), this._time = this._rawPrevTime = t, this._locked || (this._totalTime = t, 0 !== this._repeat && (c = f + this._repeatDelay, this._cycle = this._totalTime / c >> 0, 0 !== this._cycle && this._cycle === this._totalTime / c && this._cycle--, this._time = this._totalTime - this._cycle * c, this._yoyo && 0 != (1 & this._cycle) && (this._time = f - this._time), this._time > f ? (this._time = f, t = f + 1e-4) : this._time < 0 ? this._time = t = 0 : t = this._time)), this._hasPause && !this._forcingPlayhead && !e) {
        if ((t = this._time) >= m) for (s = this._first; s && s._startTime <= t && !u;) {
          s._duration || "isPause" !== s.data || s.ratio || 0 === s._startTime && 0 === this._rawPrevTime || (u = s), s = s._next;
        } else for (s = this._last; s && s._startTime >= t && !u;) {
          s._duration || "isPause" === s.data && s._rawPrevTime > 0 && (u = s), s = s._prev;
        }
        u && (this._time = t = u._startTime, this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay));
      }

      if (this._cycle !== w && !this._locked) {
        var x = this._yoyo && 0 != (1 & w),
            T = x === (this._yoyo && 0 != (1 & this._cycle)),
            k = this._totalTime,
            C = this._cycle,
            S = this._rawPrevTime,
            P = this._time;
        if (this._totalTime = w * f, this._cycle < w ? x = !x : this._totalTime += f, this._time = m, this._rawPrevTime = 0 === f ? b - 1e-4 : b, this._cycle = w, this._locked = !0, m = x ? 0 : f, this.render(m, e, 0 === f), e || this._gc || this.vars.onRepeat && this._callback("onRepeat"), m !== this._time) return;
        if (T && (m = x ? f + 1e-4 : -1e-4, this.render(m, !0, !1)), this._locked = !1, this._paused && !y) return;
        this._time = P, this._totalTime = k, this._cycle = C, this._rawPrevTime = S;
      }

      if (this._time !== m && this._first || i || h || u) {
        if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== g && t > 0 && (this._active = !0), 0 === g && this.vars.onStart && 0 !== this._totalTime && (e || this._callback("onStart")), (p = this._time) >= m) for (s = this._first; s && (a = s._next, p === this._time && (!this._paused || y));) {
          (s._active || s._startTime <= this._time && !s._paused && !s._gc) && (u === s && this.pause(), s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)), s = a;
        } else for (s = this._last; s && (a = s._prev, p === this._time && (!this._paused || y));) {
          if (s._active || s._startTime <= m && !s._paused && !s._gc) {
            if (u === s) {
              for (u = s._prev; u && u.endTime() > this._time;) {
                u.render(u._reversed ? u.totalDuration() - (t - u._startTime) * u._timeScale : (t - u._startTime) * u._timeScale, e, i), u = u._prev;
              }

              u = null, this.pause();
            }

            s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i);
          }

          s = a;
        }
        this._onUpdate && (e || (o.length && r(), this._callback("onUpdate"))), l && (this._locked || this._gc || (_ === this._startTime || v !== this._timeScale) && (0 === this._time || d >= this.totalDuration()) && (n && (o.length && r(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[l] && this._callback(l)));
      } else g !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate"));
    }, l.getActive = function (t, e, i) {
      null == t && (t = !0), null == e && (e = !0), null == i && (i = !1);
      var s,
          n,
          o = [],
          r = this.getChildren(t, e, i),
          a = 0,
          l = r.length;

      for (s = 0; l > s; s++) {
        (n = r[s]).isActive() && (o[a++] = n);
      }

      return o;
    }, l.getLabelAfter = function (t) {
      t || 0 !== t && (t = this._time);
      var e,
          i = this.getLabelsArray(),
          s = i.length;

      for (e = 0; s > e; e++) {
        if (i[e].time > t) return i[e].name;
      }

      return null;
    }, l.getLabelBefore = function (t) {
      null == t && (t = this._time);

      for (var e = this.getLabelsArray(), i = e.length; --i > -1;) {
        if (e[i].time < t) return e[i].name;
      }

      return null;
    }, l.getLabelsArray = function () {
      var t,
          e = [],
          i = 0;

      for (t in this._labels) {
        e[i++] = {
          time: this._labels[t],
          name: t
        };
      }

      return e.sort(function (t, e) {
        return t.time - e.time;
      }), e;
    }, l.progress = function (t, e) {
      return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration();
    }, l.totalProgress = function (t, e) {
      return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration();
    }, l.totalDuration = function (e) {
      return arguments.length ? -1 !== this._repeat && e ? this.timeScale(this.totalDuration() / e) : this : (this._dirty && (t.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration);
    }, l.time = function (t, e) {
      return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 != (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time;
    }, l.repeat = function (t) {
      return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat;
    }, l.repeatDelay = function (t) {
      return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay;
    }, l.yoyo = function (t) {
      return arguments.length ? (this._yoyo = t, this) : this._yoyo;
    }, l.currentLabel = function (t) {
      return arguments.length ? this.seek(t, !0) : this.getLabelBefore(this._time + 1e-8);
    }, s;
  }, !0), function () {
    var t = 180 / Math.PI,
        e = [],
        i = [],
        s = [],
        n = {},
        o = _gsScope._gsDefine.globals,
        r = function r(t, e, i, s) {
      this.a = t, this.b = e, this.c = i, this.d = s, this.da = s - t, this.ca = i - t, this.ba = e - t;
    },
        a = function a(t, e, i, s) {
      var n = {
        a: t
      },
          o = {},
          r = {},
          a = {
        c: s
      },
          l = (t + e) / 2,
          h = (e + i) / 2,
          c = (i + s) / 2,
          u = (l + h) / 2,
          p = (h + c) / 2,
          d = (p - u) / 8;
      return n.b = l + (t - l) / 4, o.b = u + d, n.c = o.a = (n.b + o.b) / 2, o.c = r.a = (u + p) / 2, r.b = p - d, a.b = c + (s - c) / 4, r.c = a.a = (r.b + a.b) / 2, [n, o, r, a];
    },
        l = function l(t, n, o, r, _l) {
      var h,
          c,
          u,
          p,
          d,
          f,
          m,
          g,
          _,
          v,
          b,
          y,
          w,
          x = t.length - 1,
          T = 0,
          k = t[0].a;

      for (h = 0; x > h; h++) {
        d = t[T], c = d.a, u = d.d, p = t[T + 1].d, _l ? (b = e[h], y = i[h], w = (y + b) * n * .25 / (r ? .5 : s[h] || .5), f = u - (u - c) * (r ? .5 * n : 0 !== b ? w / b : 0), m = u + (p - u) * (r ? .5 * n : 0 !== y ? w / y : 0), g = u - (f + ((m - f) * (3 * b / (b + y) + .5) / 4 || 0))) : (f = u - (u - c) * n * .5, m = u + (p - u) * n * .5, g = u - (f + m) / 2), f += g, m += g, d.c = _ = f, d.b = 0 !== h ? k : k = d.a + .6 * (d.c - d.a), d.da = u - c, d.ca = _ - c, d.ba = k - c, o ? (v = a(c, k, _, u), t.splice(T, 1, v[0], v[1], v[2], v[3]), T += 4) : T++, k = m;
      }

      (d = t[T]).b = k, d.c = k + .4 * (d.d - k), d.da = d.d - d.a, d.ca = d.c - d.a, d.ba = k - d.a, o && (v = a(d.a, k, d.c, d.d), t.splice(T, 1, v[0], v[1], v[2], v[3]));
    },
        h = function h(t, s, n, o) {
      var a,
          l,
          h,
          c,
          u,
          p,
          d = [];
      if (o) for (t = [o].concat(t), l = t.length; --l > -1;) {
        "string" == typeof (p = t[l][s]) && "=" === p.charAt(1) && (t[l][s] = o[s] + Number(p.charAt(0) + p.substr(2)));
      }
      if (0 > (a = t.length - 2)) return d[0] = new r(t[0][s], 0, 0, t[-1 > a ? 0 : 1][s]), d;

      for (l = 0; a > l; l++) {
        h = t[l][s], c = t[l + 1][s], d[l] = new r(h, 0, 0, c), n && (u = t[l + 2][s], e[l] = (e[l] || 0) + (c - h) * (c - h), i[l] = (i[l] || 0) + (u - c) * (u - c));
      }

      return d[l] = new r(t[l][s], 0, 0, t[l + 1][s]), d;
    },
        c = function c(t, o, r, a, _c, u) {
      var p,
          d,
          f,
          m,
          g,
          _,
          v,
          b,
          y = {},
          w = [],
          x = u || t[0];

      _c = "string" == typeof _c ? "," + _c + "," : ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,", null == o && (o = 1);

      for (d in t[0]) {
        w.push(d);
      }

      if (t.length > 1) {
        for (b = t[t.length - 1], v = !0, p = w.length; --p > -1;) {
          if (d = w[p], Math.abs(x[d] - b[d]) > .05) {
            v = !1;
            break;
          }
        }

        v && (t = t.concat(), u && t.unshift(u), t.push(t[1]), u = t[t.length - 3]);
      }

      for (e.length = i.length = s.length = 0, p = w.length; --p > -1;) {
        d = w[p], n[d] = -1 !== _c.indexOf("," + d + ","), y[d] = h(t, d, n[d], u);
      }

      for (p = e.length; --p > -1;) {
        e[p] = Math.sqrt(e[p]), i[p] = Math.sqrt(i[p]);
      }

      if (!a) {
        for (p = w.length; --p > -1;) {
          if (n[d]) for (f = y[w[p]], _ = f.length - 1, m = 0; _ > m; m++) {
            g = f[m + 1].da / i[m] + f[m].da / e[m], s[m] = (s[m] || 0) + g * g;
          }
        }

        for (p = s.length; --p > -1;) {
          s[p] = Math.sqrt(s[p]);
        }
      }

      for (p = w.length, m = r ? 4 : 1; --p > -1;) {
        d = w[p], f = y[d], l(f, o, r, a, n[d]), v && (f.splice(0, m), f.splice(f.length - m, m));
      }

      return y;
    },
        u = function u(t, e, i) {
      for (var s, n, o, r, a, l, h, c, u, p, d, f = 1 / i, m = t.length; --m > -1;) {
        for (p = t[m], o = p.a, r = p.d - o, a = p.c - o, l = p.b - o, s = n = 0, c = 1; i >= c; c++) {
          h = f * c, u = 1 - h, s = n - (n = (h * h * r + 3 * u * (h * a + u * l)) * h), d = m * i + c - 1, e[d] = (e[d] || 0) + s * s;
        }
      }
    },
        p = _gsScope._gsDefine.plugin({
      propName: "bezier",
      priority: -1,
      version: "1.3.4",
      API: 2,
      global: !0,
      init: function init(t, e, i) {
        this._target = t, e instanceof Array && (e = {
          values: e
        }), this._func = {}, this._round = {}, this._props = [], this._timeRes = null == e.timeResolution ? 6 : parseInt(e.timeResolution, 10);
        var s,
            n,
            o,
            a,
            l,
            h = e.values || [],
            p = {},
            d = h[0],
            f = e.autoRotate || i.vars.orientToBezier;
        this._autoRotate = f ? f instanceof Array ? f : [["x", "y", "rotation", !0 === f ? 0 : Number(f) || 0]] : null;

        for (s in d) {
          this._props.push(s);
        }

        for (o = this._props.length; --o > -1;) {
          s = this._props[o], this._overwriteProps.push(s), n = this._func[s] = "function" == typeof t[s], p[s] = n ? t[s.indexOf("set") || "function" != typeof t["get" + s.substr(3)] ? s : "get" + s.substr(3)]() : parseFloat(t[s]), l || p[s] !== h[0][s] && (l = p);
        }

        if (this._beziers = "cubic" !== e.type && "quadratic" !== e.type && "soft" !== e.type ? c(h, isNaN(e.curviness) ? 1 : e.curviness, !1, "thruBasic" === e.type, e.correlate, l) : function (t, e, i) {
          var s,
              n,
              o,
              a,
              l,
              h,
              c,
              u,
              p,
              d,
              f,
              m = {},
              g = "cubic" === (e = e || "soft") ? 3 : 2,
              _ = "soft" === e,
              v = [];

          if (_ && i && (t = [i].concat(t)), null == t || t.length < g + 1) throw "invalid Bezier data";

          for (p in t[0]) {
            v.push(p);
          }

          for (h = v.length; --h > -1;) {
            for (m[p = v[h]] = l = [], d = 0, u = t.length, c = 0; u > c; c++) {
              s = null == i ? t[c][p] : "string" == typeof (f = t[c][p]) && "=" === f.charAt(1) ? i[p] + Number(f.charAt(0) + f.substr(2)) : Number(f), _ && c > 1 && u - 1 > c && (l[d++] = (s + l[d - 2]) / 2), l[d++] = s;
            }

            for (u = d - g + 1, d = 0, c = 0; u > c; c += g) {
              s = l[c], n = l[c + 1], o = l[c + 2], a = 2 === g ? 0 : l[c + 3], l[d++] = f = 3 === g ? new r(s, n, o, a) : new r(s, (2 * n + s) / 3, (2 * n + o) / 3, o);
            }

            l.length = d;
          }

          return m;
        }(h, e.type, p), this._segCount = this._beziers[s].length, this._timeRes) {
          var m = function (t, e) {
            var i,
                s,
                n,
                o,
                r = [],
                a = [],
                l = 0,
                h = 0,
                c = (e = e >> 0 || 6) - 1,
                p = [],
                d = [];

            for (i in t) {
              u(t[i], r, e);
            }

            for (n = r.length, s = 0; n > s; s++) {
              l += Math.sqrt(r[s]), o = s % e, d[o] = l, o === c && (h += l, o = s / e >> 0, p[o] = d, a[o] = h, l = 0, d = []);
            }

            return {
              length: h,
              lengths: a,
              segments: p
            };
          }(this._beziers, this._timeRes);

          this._length = m.length, this._lengths = m.lengths, this._segments = m.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length;
        }

        if (f = this._autoRotate) for (this._initialRotations = [], f[0] instanceof Array || (this._autoRotate = f = [f]), o = f.length; --o > -1;) {
          for (a = 0; 3 > a; a++) {
            s = f[o][a], this._func[s] = "function" == typeof t[s] && t[s.indexOf("set") || "function" != typeof t["get" + s.substr(3)] ? s : "get" + s.substr(3)];
          }

          s = f[o][2], this._initialRotations[o] = this._func[s] ? this._func[s].call(this._target) : this._target[s];
        }
        return this._startRatio = i.vars.runBackwards ? 1 : 0, !0;
      },
      set: function set(e) {
        var i,
            s,
            n,
            o,
            r,
            a,
            l,
            h,
            c,
            u,
            p = this._segCount,
            d = this._func,
            f = this._target,
            m = e !== this._startRatio;

        if (this._timeRes) {
          if (c = this._lengths, u = this._curSeg, e *= this._length, n = this._li, e > this._l2 && p - 1 > n) {
            for (h = p - 1; h > n && (this._l2 = c[++n]) <= e;) {
              ;
            }

            this._l1 = c[n - 1], this._li = n, this._curSeg = u = this._segments[n], this._s2 = u[this._s1 = this._si = 0];
          } else if (e < this._l1 && n > 0) {
            for (; n > 0 && (this._l1 = c[--n]) >= e;) {
              ;
            }

            0 === n && e < this._l1 ? this._l1 = 0 : n++, this._l2 = c[n], this._li = n, this._curSeg = u = this._segments[n], this._s1 = u[(this._si = u.length - 1) - 1] || 0, this._s2 = u[this._si];
          }

          if (i = n, e -= this._l1, n = this._si, e > this._s2 && n < u.length - 1) {
            for (h = u.length - 1; h > n && (this._s2 = u[++n]) <= e;) {
              ;
            }

            this._s1 = u[n - 1], this._si = n;
          } else if (e < this._s1 && n > 0) {
            for (; n > 0 && (this._s1 = u[--n]) >= e;) {
              ;
            }

            0 === n && e < this._s1 ? this._s1 = 0 : n++, this._s2 = u[n], this._si = n;
          }

          a = (n + (e - this._s1) / (this._s2 - this._s1)) * this._prec;
        } else i = 0 > e ? 0 : e >= 1 ? p - 1 : p * e >> 0, a = (e - i * (1 / p)) * p;

        for (s = 1 - a, n = this._props.length; --n > -1;) {
          o = this._props[n], r = this._beziers[o][i], l = (a * a * r.da + 3 * s * (a * r.ca + s * r.ba)) * a + r.a, this._round[o] && (l = Math.round(l)), d[o] ? f[o](l) : f[o] = l;
        }

        if (this._autoRotate) {
          var g,
              _,
              v,
              b,
              y,
              w,
              x,
              T = this._autoRotate;

          for (n = T.length; --n > -1;) {
            o = T[n][2], w = T[n][3] || 0, x = !0 === T[n][4] ? 1 : t, r = this._beziers[T[n][0]], g = this._beziers[T[n][1]], r && g && (r = r[i], g = g[i], _ = r.a + (r.b - r.a) * a, b = r.b + (r.c - r.b) * a, _ += (b - _) * a, b += (r.c + (r.d - r.c) * a - b) * a, v = g.a + (g.b - g.a) * a, y = g.b + (g.c - g.b) * a, v += (y - v) * a, y += (g.c + (g.d - g.c) * a - y) * a, l = m ? Math.atan2(y - v, b - _) * x + w : this._initialRotations[n], d[o] ? f[o](l) : f[o] = l);
          }
        }
      }
    }),
        d = p.prototype;

    p.bezierThrough = c, p.cubicToQuadratic = a, p._autoCSS = !0, p.quadraticToCubic = function (t, e, i) {
      return new r(t, (2 * e + t) / 3, (2 * e + i) / 3, i);
    }, p._cssRegister = function () {
      var t = o.CSSPlugin;

      if (t) {
        var e = t._internals,
            i = e._parseToProxy,
            s = e._setPluginRatio,
            n = e.CSSPropTween;

        e._registerComplexSpecialProp("bezier", {
          parser: function parser(t, e, o, r, a, l) {
            e instanceof Array && (e = {
              values: e
            }), l = new p();
            var h,
                c,
                u,
                d = e.values,
                f = d.length - 1,
                m = [],
                g = {};
            if (0 > f) return a;

            for (h = 0; f >= h; h++) {
              u = i(t, d[h], r, a, l, f !== h), m[h] = u.end;
            }

            for (c in e) {
              g[c] = e[c];
            }

            return g.values = m, a = new n(t, "bezier", 0, 0, u.pt, 2), a.data = u, a.plugin = l, a.setRatio = s, 0 === g.autoRotate && (g.autoRotate = !0), !g.autoRotate || g.autoRotate instanceof Array || (h = !0 === g.autoRotate ? 0 : Number(g.autoRotate), g.autoRotate = null != u.end.left ? [["left", "top", "rotation", h, !1]] : null != u.end.x && [["x", "y", "rotation", h, !1]]), g.autoRotate && (r._transform || r._enableTransforms(!1), u.autoRotate = r._target._gsTransform), l._onInitTween(u.proxy, g, r._tween), a;
          }
        });
      }
    }, d._roundProps = function (t, e) {
      for (var i = this._overwriteProps, s = i.length; --s > -1;) {
        (t[i[s]] || t.bezier || t.bezierThrough) && (this._round[i[s]] = e);
      }
    }, d._kill = function (t) {
      var e,
          i,
          s = this._props;

      for (e in this._beziers) {
        if (e in t) for (delete this._beziers[e], delete this._func[e], i = s.length; --i > -1;) {
          s[i] === e && s.splice(i, 1);
        }
      }

      return this._super._kill.call(this, t);
    };
  }(), _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function (t, e) {
    var i,
        s,
        n,
        o,
        r = function r() {
      t.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = r.prototype.setRatio;
    },
        a = _gsScope._gsDefine.globals,
        l = {},
        h = r.prototype = new t("css");

    h.constructor = r, r.version = "1.18.2", r.API = 2, r.defaultTransformPerspective = 0, r.defaultSkewType = "compensated", r.defaultSmoothOrigin = !0, h = "px", r.suffixMap = {
      top: h,
      right: h,
      bottom: h,
      left: h,
      width: h,
      height: h,
      fontSize: h,
      padding: h,
      margin: h,
      perspective: h,
      lineHeight: ""
    };

    var c,
        u,
        p,
        d,
        f,
        m,
        g = /(?:\d|\-\d|\.\d|\-\.\d)+/g,
        _ = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
        v = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
        b = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
        y = /(?:\d|\-|\+|=|#|\.)*/g,
        w = /opacity *= *([^)]*)/i,
        x = /opacity:([^;]*)/i,
        T = /alpha\(opacity *=.+?\)/i,
        k = /^(rgb|hsl)/,
        C = /([A-Z])/g,
        S = /-([a-z])/gi,
        P = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
        E = function E(t, e) {
      return e.toUpperCase();
    },
        A = /(?:Left|Right|Width)/i,
        D = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
        O = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
        R = /,(?=[^\)]*(?:\(|$))/gi,
        $ = Math.PI / 180,
        M = 180 / Math.PI,
        I = {},
        L = document,
        N = function N(t) {
      return L.createElementNS ? L.createElementNS("http://www.w3.org/1999/xhtml", t) : L.createElement(t);
    },
        z = N("div"),
        j = N("img"),
        F = r._internals = {
      _specialProps: l
    },
        H = navigator.userAgent,
        X = function () {
      var t = H.indexOf("Android"),
          e = N("a");
      return p = -1 !== H.indexOf("Safari") && -1 === H.indexOf("Chrome") && (-1 === t || Number(H.substr(t + 8, 1)) > 3), f = p && Number(H.substr(H.indexOf("Version/") + 8, 1)) < 6, d = -1 !== H.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(H) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(H)) && (m = parseFloat(RegExp.$1)), !!e && (e.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(e.style.opacity));
    }(),
        W = function W(t) {
      return w.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1;
    },
        Y = function Y(t) {
      window.console && console.log(t);
    },
        B = "",
        q = "",
        V = function V(t, e) {
      var i,
          s,
          n = (e = e || z).style;
      if (void 0 !== n[t]) return t;

      for (t = t.charAt(0).toUpperCase() + t.substr(1), i = ["O", "Moz", "ms", "Ms", "Webkit"], s = 5; --s > -1 && void 0 === n[i[s] + t];) {
        ;
      }

      return s >= 0 ? (q = 3 === s ? "ms" : i[s], B = "-" + q.toLowerCase() + "-", q + t) : null;
    },
        U = L.defaultView ? L.defaultView.getComputedStyle : function () {},
        Q = r.getStyle = function (t, e, i, s, n) {
      var o;
      return X || "opacity" !== e ? (!s && t.style[e] ? o = t.style[e] : (i = i || U(t)) ? o = i[e] || i.getPropertyValue(e) || i.getPropertyValue(e.replace(C, "-$1").toLowerCase()) : t.currentStyle && (o = t.currentStyle[e]), null == n || o && "none" !== o && "auto" !== o && "auto auto" !== o ? o : n) : W(t);
    },
        G = F.convertToPixels = function (t, i, s, n, o) {
      if ("px" === n || !n) return s;
      if ("auto" === n || !s) return 0;
      var a,
          l,
          h,
          c = A.test(i),
          u = t,
          p = z.style,
          d = 0 > s;
      if (d && (s = -s), "%" === n && -1 !== i.indexOf("border")) a = s / 100 * (c ? t.clientWidth : t.clientHeight);else {
        if (p.cssText = "border:0 solid red;position:" + Q(t, "position") + ";line-height:0;", "%" !== n && u.appendChild && "v" !== n.charAt(0) && "rem" !== n) p[c ? "borderLeftWidth" : "borderTopWidth"] = s + n;else {
          if (u = t.parentNode || L.body, l = u._gsCache, h = e.ticker.frame, l && c && l.time === h) return l.width * s / 100;
          p[c ? "width" : "height"] = s + n;
        }
        u.appendChild(z), a = parseFloat(z[c ? "offsetWidth" : "offsetHeight"]), u.removeChild(z), c && "%" === n && !1 !== r.cacheWidths && (l = u._gsCache = u._gsCache || {}, l.time = h, l.width = a / s * 100), 0 !== a || o || (a = G(t, i, s, n, !0));
      }
      return d ? -a : a;
    },
        Z = F.calculateOffset = function (t, e, i) {
      if ("absolute" !== Q(t, "position", i)) return 0;
      var s = "left" === e ? "Left" : "Top",
          n = Q(t, "margin" + s, i);
      return t["offset" + s] - (G(t, e, parseFloat(n), n.replace(y, "")) || 0);
    },
        K = function K(t, e) {
      var i,
          s,
          n,
          o = {};
      if (e = e || U(t, null)) {
        if (i = e.length) for (; --i > -1;) {
          (-1 === (n = e[i]).indexOf("-transform") || Ct === n) && (o[n.replace(S, E)] = e.getPropertyValue(n));
        } else for (i in e) {
          (-1 === i.indexOf("Transform") || kt === i) && (o[i] = e[i]);
        }
      } else if (e = t.currentStyle || t.style) for (i in e) {
        "string" == typeof i && void 0 === o[i] && (o[i.replace(S, E)] = e[i]);
      }
      return X || (o.opacity = W(t)), s = Nt(t, e, !1), o.rotation = s.rotation, o.skewX = s.skewX, o.scaleX = s.scaleX, o.scaleY = s.scaleY, o.x = s.x, o.y = s.y, Pt && (o.z = s.z, o.rotationX = s.rotationX, o.rotationY = s.rotationY, o.scaleZ = s.scaleZ), o.filters && delete o.filters, o;
    },
        J = function J(t, e, i, s, n) {
      var o,
          r,
          a,
          l = {},
          h = t.style;

      for (r in i) {
        "cssText" !== r && "length" !== r && isNaN(r) && (e[r] !== (o = i[r]) || n && n[r]) && -1 === r.indexOf("Origin") && ("number" == typeof o || "string" == typeof o) && (l[r] = "auto" !== o || "left" !== r && "top" !== r ? "" !== o && "auto" !== o && "none" !== o || "string" != typeof e[r] || "" === e[r].replace(b, "") ? o : 0 : Z(t, r), void 0 !== h[r] && (a = new ft(h, r, h[r], a)));
      }

      if (s) for (r in s) {
        "className" !== r && (l[r] = s[r]);
      }
      return {
        difs: l,
        firstMPT: a
      };
    },
        tt = {
      width: ["Left", "Right"],
      height: ["Top", "Bottom"]
    },
        et = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
        it = function it(t, e, i) {
      var s = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight),
          n = tt[e],
          o = n.length;

      for (i = i || U(t, null); --o > -1;) {
        s -= parseFloat(Q(t, "padding" + n[o], i, !0)) || 0, s -= parseFloat(Q(t, "border" + n[o] + "Width", i, !0)) || 0;
      }

      return s;
    },
        st = function st(t, e) {
      if ("contain" === t || "auto" === t || "auto auto" === t) return t + " ";
      (null == t || "" === t) && (t = "0 0");
      var i = t.split(" "),
          s = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : i[0],
          n = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : i[1];
      return null == n ? n = "center" === s ? "50%" : "0" : "center" === n && (n = "50%"), ("center" === s || isNaN(parseFloat(s)) && -1 === (s + "").indexOf("=")) && (s = "50%"), t = s + " " + n + (i.length > 2 ? " " + i[2] : ""), e && (e.oxp = -1 !== s.indexOf("%"), e.oyp = -1 !== n.indexOf("%"), e.oxr = "=" === s.charAt(1), e.oyr = "=" === n.charAt(1), e.ox = parseFloat(s.replace(b, "")), e.oy = parseFloat(n.replace(b, "")), e.v = t), e || t;
    },
        nt = function nt(t, e) {
      return "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e);
    },
        ot = function ot(t, e) {
      return null == t ? e : "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e : parseFloat(t);
    },
        rt = function rt(t, e, i, s) {
      var n, o, r, a, l;
      return null == t ? a = e : "number" == typeof t ? a = t : (n = 360, o = t.split("_"), l = "=" === t.charAt(1), r = (l ? parseInt(t.charAt(0) + "1", 10) * parseFloat(o[0].substr(2)) : parseFloat(o[0])) * (-1 === t.indexOf("rad") ? 1 : M) - (l ? 0 : e), o.length && (s && (s[i] = e + r), -1 !== t.indexOf("short") && (r %= n) != r % (n / 2) && (r = 0 > r ? r + n : r - n), -1 !== t.indexOf("_cw") && 0 > r ? r = (r + 9999999999 * n) % n - (r / n | 0) * n : -1 !== t.indexOf("ccw") && r > 0 && (r = (r - 9999999999 * n) % n - (r / n | 0) * n)), a = e + r), 1e-6 > a && a > -1e-6 && (a = 0), a;
    },
        at = {
      aqua: [0, 255, 255],
      lime: [0, 255, 0],
      silver: [192, 192, 192],
      black: [0, 0, 0],
      maroon: [128, 0, 0],
      teal: [0, 128, 128],
      blue: [0, 0, 255],
      navy: [0, 0, 128],
      white: [255, 255, 255],
      fuchsia: [255, 0, 255],
      olive: [128, 128, 0],
      yellow: [255, 255, 0],
      orange: [255, 165, 0],
      gray: [128, 128, 128],
      purple: [128, 0, 128],
      green: [0, 128, 0],
      red: [255, 0, 0],
      pink: [255, 192, 203],
      cyan: [0, 255, 255],
      transparent: [255, 255, 255, 0]
    },
        lt = function lt(t, e, i) {
      return 255 * (1 > 6 * (t = 0 > t ? t + 1 : t > 1 ? t - 1 : t) ? e + (i - e) * t * 6 : .5 > t ? i : 2 > 3 * t ? e + (i - e) * (2 / 3 - t) * 6 : e) + .5 | 0;
    },
        ht = r.parseColor = function (t, e) {
      var i, s, n, o, r, a, l, h, c, u, p;
      if (t) {
        if ("number" == typeof t) i = [t >> 16, t >> 8 & 255, 255 & t];else {
          if ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), at[t]) i = at[t];else if ("#" === t.charAt(0)) 4 === t.length && (s = t.charAt(1), n = t.charAt(2), o = t.charAt(3), t = "#" + s + s + n + n + o + o), t = parseInt(t.substr(1), 16), i = [t >> 16, t >> 8 & 255, 255 & t];else if ("hsl" === t.substr(0, 3)) {
            if (i = p = t.match(g), e) {
              if (-1 !== t.indexOf("=")) return t.match(_);
            } else r = Number(i[0]) % 360 / 360, a = Number(i[1]) / 100, l = Number(i[2]) / 100, n = .5 >= l ? l * (a + 1) : l + a - l * a, s = 2 * l - n, i.length > 3 && (i[3] = Number(t[3])), i[0] = lt(r + 1 / 3, s, n), i[1] = lt(r, s, n), i[2] = lt(r - 1 / 3, s, n);
          } else i = t.match(g) || at.transparent;
          i[0] = Number(i[0]), i[1] = Number(i[1]), i[2] = Number(i[2]), i.length > 3 && (i[3] = Number(i[3]));
        }
      } else i = at.black;
      return e && !p && (s = i[0] / 255, n = i[1] / 255, o = i[2] / 255, h = Math.max(s, n, o), c = Math.min(s, n, o), l = (h + c) / 2, h === c ? r = a = 0 : (u = h - c, a = l > .5 ? u / (2 - h - c) : u / (h + c), r = h === s ? (n - o) / u + (o > n ? 6 : 0) : h === n ? (o - s) / u + 2 : (s - n) / u + 4, r *= 60), i[0] = r + .5 | 0, i[1] = 100 * a + .5 | 0, i[2] = 100 * l + .5 | 0), i;
    },
        ct = function ct(t, e) {
      var i,
          s,
          n,
          o = t.match(ut) || [],
          r = 0,
          a = o.length ? "" : t;

      for (i = 0; i < o.length; i++) {
        s = o[i], n = t.substr(r, t.indexOf(s, r) - r), r += n.length + s.length, 3 === (s = ht(s, e)).length && s.push(1), a += n + (e ? "hsla(" + s[0] + "," + s[1] + "%," + s[2] + "%," + s[3] : "rgba(" + s.join(",")) + ")";
      }

      return a;
    },
        ut = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";

    for (h in at) {
      ut += "|" + h + "\\b";
    }

    ut = new RegExp(ut + ")", "gi"), r.colorStringFilter = function (t) {
      var e,
          i = t[0] + t[1];
      ut.lastIndex = 0, ut.test(i) && (e = -1 !== i.indexOf("hsl(") || -1 !== i.indexOf("hsla("), t[0] = ct(t[0], e), t[1] = ct(t[1], e));
    }, e.defaultStringFilter || (e.defaultStringFilter = r.colorStringFilter);

    var pt = function pt(t, e, i, s) {
      if (null == t) return function (t) {
        return t;
      };
      var n,
          o = e ? (t.match(ut) || [""])[0] : "",
          r = t.split(o).join("").match(v) || [],
          a = t.substr(0, t.indexOf(r[0])),
          l = ")" === t.charAt(t.length - 1) ? ")" : "",
          h = -1 !== t.indexOf(" ") ? " " : ",",
          c = r.length,
          u = c > 0 ? r[0].replace(g, "") : "";
      return c ? n = e ? function (t) {
        var e, p, d, f;
        if ("number" == typeof t) t += u;else if (s && R.test(t)) {
          for (f = t.replace(R, "|").split("|"), d = 0; d < f.length; d++) {
            f[d] = n(f[d]);
          }

          return f.join(",");
        }
        if (e = (t.match(ut) || [o])[0], p = t.split(e).join("").match(v) || [], d = p.length, c > d--) for (; ++d < c;) {
          p[d] = i ? p[(d - 1) / 2 | 0] : r[d];
        }
        return a + p.join(h) + h + e + l + (-1 !== t.indexOf("inset") ? " inset" : "");
      } : function (t) {
        var e, o, p;
        if ("number" == typeof t) t += u;else if (s && R.test(t)) {
          for (o = t.replace(R, "|").split("|"), p = 0; p < o.length; p++) {
            o[p] = n(o[p]);
          }

          return o.join(",");
        }
        if (e = t.match(v) || [], p = e.length, c > p--) for (; ++p < c;) {
          e[p] = i ? e[(p - 1) / 2 | 0] : r[p];
        }
        return a + e.join(h) + l;
      } : function (t) {
        return t;
      };
    },
        dt = function dt(t) {
      return t = t.split(","), function (e, i, s, n, o, r, a) {
        var l,
            h = (i + "").split(" ");

        for (a = {}, l = 0; 4 > l; l++) {
          a[t[l]] = h[l] = h[l] || h[(l - 1) / 2 >> 0];
        }

        return n.parse(e, a, o, r);
      };
    },
        ft = (F._setPluginRatio = function (t) {
      this.plugin.setRatio(t);

      for (var e, i, s, n, o, r = this.data, a = r.proxy, l = r.firstMPT; l;) {
        e = a[l.v], l.r ? e = Math.round(e) : 1e-6 > e && e > -1e-6 && (e = 0), l.t[l.p] = e, l = l._next;
      }

      if (r.autoRotate && (r.autoRotate.rotation = a.rotation), 1 === t || 0 === t) for (l = r.firstMPT, o = 1 === t ? "e" : "b"; l;) {
        if ((i = l.t).type) {
          if (1 === i.type) {
            for (n = i.xs0 + i.s + i.xs1, s = 1; s < i.l; s++) {
              n += i["xn" + s] + i["xs" + (s + 1)];
            }

            i[o] = n;
          }
        } else i[o] = i.s + i.xs0;

        l = l._next;
      }
    }, function (t, e, i, s, n) {
      this.t = t, this.p = e, this.v = i, this.r = n, s && (s._prev = this, this._next = s);
    }),
        mt = (F._parseToProxy = function (t, e, i, s, n, o) {
      var r,
          a,
          l,
          h,
          c,
          u = s,
          p = {},
          d = {},
          f = i._transform,
          m = I;

      for (i._transform = null, I = e, s = c = i.parse(t, e, s, n), I = m, o && (i._transform = f, u && (u._prev = null, u._prev && (u._prev._next = null))); s && s !== u;) {
        if (s.type <= 1 && (a = s.p, d[a] = s.s + s.c, p[a] = s.s, o || (h = new ft(s, "s", a, h, s.r), s.c = 0), 1 === s.type)) for (r = s.l; --r > 0;) {
          l = "xn" + r, a = s.p + "_" + l, d[a] = s.data[l], p[a] = s[l], o || (h = new ft(s, l, a, h, s.rxp[l]));
        }
        s = s._next;
      }

      return {
        proxy: p,
        end: d,
        firstMPT: h,
        pt: c
      };
    }, F.CSSPropTween = function (t, e, s, n, r, a, l, h, c, u, p) {
      this.t = t, this.p = e, this.s = s, this.c = n, this.n = l || e, t instanceof mt || o.push(this.n), this.r = h, this.type = a || 0, c && (this.pr = c, i = !0), this.b = void 0 === u ? s : u, this.e = void 0 === p ? s + n : p, r && (this._next = r, r._prev = this);
    }),
        gt = function gt(t, e, i, s, n, o) {
      var r = new mt(t, e, i, s - i, n, -1, o);
      return r.b = i, r.e = r.xs0 = s, r;
    },
        _t = r.parseComplex = function (t, e, i, s, n, o, r, a, l, h) {
      i = i || o || "", r = new mt(t, e, 0, 0, r, h ? 2 : 1, null, !1, a, i, s), s += "";
      var u,
          p,
          d,
          f,
          m,
          v,
          b,
          y,
          w,
          x,
          T,
          k,
          C,
          S = i.split(", ").join(",").split(" "),
          P = s.split(", ").join(",").split(" "),
          E = S.length,
          A = !1 !== c;

      for ((-1 !== s.indexOf(",") || -1 !== i.indexOf(",")) && (S = S.join(" ").replace(R, ", ").split(" "), P = P.join(" ").replace(R, ", ").split(" "), E = S.length), E !== P.length && (S = (o || "").split(" "), E = S.length), r.plugin = l, r.setRatio = h, ut.lastIndex = 0, u = 0; E > u; u++) {
        if (f = S[u], m = P[u], (y = parseFloat(f)) || 0 === y) r.appendXtra("", y, nt(m, y), m.replace(_, ""), A && -1 !== m.indexOf("px"), !0);else if (n && ut.test(f)) k = "," === m.charAt(m.length - 1) ? ")," : ")", C = -1 !== m.indexOf("hsl") && X, f = ht(f, C), m = ht(m, C), (w = f.length + m.length > 6) && !X && 0 === m[3] ? (r["xs" + r.l] += r.l ? " transparent" : "transparent", r.e = r.e.split(P[u]).join("transparent")) : (X || (w = !1), C ? r.appendXtra(w ? "hsla(" : "hsl(", f[0], nt(m[0], f[0]), ",", !1, !0).appendXtra("", f[1], nt(m[1], f[1]), "%,", !1).appendXtra("", f[2], nt(m[2], f[2]), w ? "%," : "%" + k, !1) : r.appendXtra(w ? "rgba(" : "rgb(", f[0], m[0] - f[0], ",", !0, !0).appendXtra("", f[1], m[1] - f[1], ",", !0).appendXtra("", f[2], m[2] - f[2], w ? "," : k, !0), w && (f = f.length < 4 ? 1 : f[3], r.appendXtra("", f, (m.length < 4 ? 1 : m[3]) - f, k, !1))), ut.lastIndex = 0;else if (v = f.match(g)) {
          if (!(b = m.match(_)) || b.length !== v.length) return r;

          for (d = 0, p = 0; p < v.length; p++) {
            T = v[p], x = f.indexOf(T, d), r.appendXtra(f.substr(d, x - d), Number(T), nt(b[p], T), "", A && "px" === f.substr(x + T.length, 2), 0 === p), d = x + T.length;
          }

          r["xs" + r.l] += f.substr(d);
        } else r["xs" + r.l] += r.l ? " " + m : m;
      }

      if (-1 !== s.indexOf("=") && r.data) {
        for (k = r.xs0 + r.data.s, u = 1; u < r.l; u++) {
          k += r["xs" + u] + r.data["xn" + u];
        }

        r.e = k + r["xs" + u];
      }

      return r.l || (r.type = -1, r.xs0 = r.e), r.xfirst || r;
    },
        vt = 9;

    for ((h = mt.prototype).l = h.pr = 0; --vt > 0;) {
      h["xn" + vt] = 0, h["xs" + vt] = "";
    }

    h.xs0 = "", h._next = h._prev = h.xfirst = h.data = h.plugin = h.setRatio = h.rxp = null, h.appendXtra = function (t, e, i, s, n, o) {
      var r = this.l;
      return this["xs" + r] += o && r ? " " + t : t || "", i || 0 === r || this.plugin ? (this.l++, this.type = this.setRatio ? 2 : 1, this["xs" + this.l] = s || "", r > 0 ? (this.data["xn" + r] = e + i, this.rxp["xn" + r] = n, this["xn" + r] = e, this.plugin || (this.xfirst = new mt(this, "xn" + r, e, i, this.xfirst || this, 0, this.n, n, this.pr), this.xfirst.xs0 = 0), this) : (this.data = {
        s: e + i
      }, this.rxp = {}, this.s = e, this.c = i, this.r = n, this)) : (this["xs" + r] += e + (s || ""), this);
    };

    var bt = function bt(t, e) {
      e = e || {}, this.p = e.prefix ? V(t) || t : t, l[t] = l[this.p] = this, this.format = e.formatter || pt(e.defaultValue, e.color, e.collapsible, e.multi), e.parser && (this.parse = e.parser), this.clrs = e.color, this.multi = e.multi, this.keyword = e.keyword, this.dflt = e.defaultValue, this.pr = e.priority || 0;
    },
        yt = F._registerComplexSpecialProp = function (t, e, i) {
      "object" != _typeof(e) && (e = {
        parser: i
      });
      var s,
          n = t.split(","),
          o = e.defaultValue;

      for (i = i || [o], s = 0; s < n.length; s++) {
        e.prefix = 0 === s && e.prefix, e.defaultValue = i[s] || o, new bt(n[s], e);
      }
    },
        wt = function wt(t) {
      if (!l[t]) {
        var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
        yt(t, {
          parser: function parser(t, i, s, n, o, r, h) {
            var c = a.com.greensock.plugins[e];
            return c ? (c._cssRegister(), l[s].parse(t, i, s, n, o, r, h)) : (Y("Error: " + e + " js file not loaded."), o);
          }
        });
      }
    };

    (h = bt.prototype).parseComplex = function (t, e, i, s, n, o) {
      var r,
          a,
          l,
          h,
          c,
          u,
          p = this.keyword;

      if (this.multi && (R.test(i) || R.test(e) ? (a = e.replace(R, "|").split("|"), l = i.replace(R, "|").split("|")) : p && (a = [e], l = [i])), l) {
        for (h = l.length > a.length ? l.length : a.length, r = 0; h > r; r++) {
          e = a[r] = a[r] || this.dflt, i = l[r] = l[r] || this.dflt, p && (c = e.indexOf(p), u = i.indexOf(p), c !== u && (-1 === u ? a[r] = a[r].split(p).join("") : -1 === c && (a[r] += " " + p)));
        }

        e = a.join(", "), i = l.join(", ");
      }

      return _t(t, this.p, e, i, this.clrs, this.dflt, s, this.pr, n, o);
    }, h.parse = function (t, e, i, s, o, r, a) {
      return this.parseComplex(t.style, this.format(Q(t, this.p, n, !1, this.dflt)), this.format(e), o, r);
    }, r.registerSpecialProp = function (t, e, i) {
      yt(t, {
        parser: function parser(t, s, n, o, r, a, l) {
          var h = new mt(t, n, 0, 0, r, 2, n, !1, i);
          return h.plugin = a, h.setRatio = e(t, s, o._tween, n), h;
        },
        priority: i
      });
    }, r.useSVGTransformAttr = p || d;

    var xt,
        Tt = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
        kt = V("transform"),
        Ct = B + "transform",
        St = V("transformOrigin"),
        Pt = null !== V("perspective"),
        Et = F.Transform = function () {
      this.perspective = parseFloat(r.defaultTransformPerspective) || 0, this.force3D = !(!1 === r.defaultForce3D || !Pt) && (r.defaultForce3D || "auto");
    },
        At = window.SVGElement,
        Dt = function Dt(t, e, i) {
      var s,
          n = L.createElementNS("http://www.w3.org/2000/svg", t),
          o = /([a-z])([A-Z])/g;

      for (s in i) {
        n.setAttributeNS(null, s.replace(o, "$1-$2").toLowerCase(), i[s]);
      }

      return e.appendChild(n), n;
    },
        Ot = L.documentElement,
        Rt = function () {
      var t,
          e,
          i,
          s = m || /Android/i.test(H) && !window.chrome;
      return L.createElementNS && !s && (t = Dt("svg", Ot), e = Dt("rect", t, {
        width: 100,
        height: 50,
        x: 100
      }), i = e.getBoundingClientRect().width, e.style[St] = "50% 50%", e.style[kt] = "scaleX(0.5)", s = i === e.getBoundingClientRect().width && !(d && Pt), Ot.removeChild(t)), s;
    }(),
        $t = function $t(t, e, i, s, n) {
      var o,
          a,
          l,
          h,
          c,
          u,
          p,
          d,
          f,
          m,
          g,
          _,
          v,
          b,
          y = t._gsTransform,
          w = Lt(t, !0);

      y && (v = y.xOrigin, b = y.yOrigin), (!s || (o = s.split(" ")).length < 2) && (p = t.getBBox(), e = st(e).split(" "), o = [(-1 !== e[0].indexOf("%") ? parseFloat(e[0]) / 100 * p.width : parseFloat(e[0])) + p.x, (-1 !== e[1].indexOf("%") ? parseFloat(e[1]) / 100 * p.height : parseFloat(e[1])) + p.y]), i.xOrigin = h = parseFloat(o[0]), i.yOrigin = c = parseFloat(o[1]), s && w !== It && (u = w[0], p = w[1], d = w[2], f = w[3], m = w[4], g = w[5], _ = u * f - p * d, a = h * (f / _) + c * (-d / _) + (d * g - f * m) / _, l = h * (-p / _) + c * (u / _) - (u * g - p * m) / _, h = i.xOrigin = o[0] = a, c = i.yOrigin = o[1] = l), y && (n || !1 !== n && !1 !== r.defaultSmoothOrigin ? (a = h - v, l = c - b, y.xOffset += a * w[0] + l * w[2] - a, y.yOffset += a * w[1] + l * w[3] - l) : y.xOffset = y.yOffset = 0), t.setAttribute("data-svg-origin", o.join(" "));
    },
        Mt = function Mt(t) {
      return !!(At && "function" == typeof t.getBBox && t.getCTM && (!t.parentNode || t.parentNode.getBBox && t.parentNode.getCTM));
    },
        It = [1, 0, 0, 1, 0, 0],
        Lt = function Lt(t, e) {
      var i,
          s,
          n,
          o,
          r,
          a = t._gsTransform || new Et();
      if (kt ? s = Q(t, Ct, null, !0) : t.currentStyle && (s = t.currentStyle.filter.match(D), s = s && 4 === s.length ? [s[0].substr(4), Number(s[2].substr(4)), Number(s[1].substr(4)), s[3].substr(4), a.x || 0, a.y || 0].join(",") : ""), i = !s || "none" === s || "matrix(1, 0, 0, 1, 0, 0)" === s, (a.svg || t.getBBox && Mt(t)) && (i && -1 !== (t.style[kt] + "").indexOf("matrix") && (s = t.style[kt], i = 0), n = t.getAttribute("transform"), i && n && (-1 !== n.indexOf("matrix") ? (s = n, i = 0) : -1 !== n.indexOf("translate") && (s = "matrix(1,0,0,1," + n.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",") + ")", i = 0))), i) return It;

      for (n = (s || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || [], vt = n.length; --vt > -1;) {
        o = Number(n[vt]), n[vt] = (r = o - (o |= 0)) ? (1e5 * r + (0 > r ? -.5 : .5) | 0) / 1e5 + o : o;
      }

      return e && n.length > 6 ? [n[0], n[1], n[4], n[5], n[12], n[13]] : n;
    },
        Nt = F.getTransform = function (t, i, s, o) {
      if (t._gsTransform && s && !o) return t._gsTransform;
      var a,
          l,
          h,
          c,
          u,
          p,
          d = s ? t._gsTransform || new Et() : new Et(),
          f = d.scaleX < 0,
          m = Pt ? parseFloat(Q(t, St, i, !1, "0 0 0").split(" ")[2]) || d.zOrigin || 0 : 0,
          g = parseFloat(r.defaultTransformPerspective) || 0;

      if (d.svg = !(!t.getBBox || !Mt(t)), d.svg && ($t(t, Q(t, St, n, !1, "50% 50%") + "", d, t.getAttribute("data-svg-origin")), xt = r.useSVGTransformAttr || Rt), (a = Lt(t)) !== It) {
        if (16 === a.length) {
          var _,
              v,
              b,
              y,
              w,
              x = a[0],
              T = a[1],
              k = a[2],
              C = a[3],
              S = a[4],
              P = a[5],
              E = a[6],
              A = a[7],
              D = a[8],
              O = a[9],
              R = a[10],
              $ = a[12],
              I = a[13],
              L = a[14],
              N = a[11],
              z = Math.atan2(E, R);

          d.zOrigin && (L = -d.zOrigin, $ = D * L - a[12], I = O * L - a[13], L = R * L + d.zOrigin - a[14]), d.rotationX = z * M, z && (y = Math.cos(-z), w = Math.sin(-z), _ = S * y + D * w, v = P * y + O * w, b = E * y + R * w, D = S * -w + D * y, O = P * -w + O * y, R = E * -w + R * y, N = A * -w + N * y, S = _, P = v, E = b), z = Math.atan2(-k, R), d.rotationY = z * M, z && (y = Math.cos(-z), w = Math.sin(-z), _ = x * y - D * w, v = T * y - O * w, b = k * y - R * w, O = T * w + O * y, R = k * w + R * y, N = C * w + N * y, x = _, T = v, k = b), z = Math.atan2(T, x), d.rotation = z * M, z && (y = Math.cos(-z), w = Math.sin(-z), x = x * y + S * w, v = T * y + P * w, P = T * -w + P * y, E = k * -w + E * y, T = v), d.rotationX && Math.abs(d.rotationX) + Math.abs(d.rotation) > 359.9 && (d.rotationX = d.rotation = 0, d.rotationY = 180 - d.rotationY), d.scaleX = (1e5 * Math.sqrt(x * x + T * T) + .5 | 0) / 1e5, d.scaleY = (1e5 * Math.sqrt(P * P + O * O) + .5 | 0) / 1e5, d.scaleZ = (1e5 * Math.sqrt(E * E + R * R) + .5 | 0) / 1e5, d.skewX = 0, d.perspective = N ? 1 / (0 > N ? -N : N) : 0, d.x = $, d.y = I, d.z = L, d.svg && (d.x -= d.xOrigin - (d.xOrigin * x - d.yOrigin * S), d.y -= d.yOrigin - (d.yOrigin * T - d.xOrigin * P));
        } else if ((!Pt || o || !a.length || d.x !== a[4] || d.y !== a[5] || !d.rotationX && !d.rotationY) && (void 0 === d.x || "none" !== Q(t, "display", i))) {
          var j = a.length >= 6,
              F = j ? a[0] : 1,
              H = a[1] || 0,
              X = a[2] || 0,
              W = j ? a[3] : 1;
          d.x = a[4] || 0, d.y = a[5] || 0, h = Math.sqrt(F * F + H * H), c = Math.sqrt(W * W + X * X), u = F || H ? Math.atan2(H, F) * M : d.rotation || 0, p = X || W ? Math.atan2(X, W) * M + u : d.skewX || 0, Math.abs(p) > 90 && Math.abs(p) < 270 && (f ? (h *= -1, p += 0 >= u ? 180 : -180, u += 0 >= u ? 180 : -180) : (c *= -1, p += 0 >= p ? 180 : -180)), d.scaleX = h, d.scaleY = c, d.rotation = u, d.skewX = p, Pt && (d.rotationX = d.rotationY = d.z = 0, d.perspective = g, d.scaleZ = 1), d.svg && (d.x -= d.xOrigin - (d.xOrigin * F + d.yOrigin * X), d.y -= d.yOrigin - (d.xOrigin * H + d.yOrigin * W));
        }

        d.zOrigin = m;

        for (l in d) {
          d[l] < 2e-5 && d[l] > -2e-5 && (d[l] = 0);
        }
      }

      return s && (t._gsTransform = d, d.svg && (xt && t.style[kt] ? e.delayedCall(.001, function () {
        Ft(t.style, kt);
      }) : !xt && t.getAttribute("transform") && e.delayedCall(.001, function () {
        t.removeAttribute("transform");
      }))), d;
    },
        zt = F.set3DTransformRatio = F.setTransformRatio = function (t) {
      var e,
          i,
          s,
          n,
          o,
          r,
          a,
          l,
          h,
          c,
          u,
          p,
          f,
          m,
          g,
          _,
          v,
          b,
          y,
          w,
          x,
          T = this.data,
          k = this.t.style,
          C = T.rotation,
          S = T.rotationX,
          P = T.rotationY,
          E = T.scaleX,
          A = T.scaleY,
          D = T.scaleZ,
          O = T.x,
          R = T.y,
          M = T.z,
          I = T.svg,
          L = T.perspective,
          N = T.force3D;

      if (!((1 !== t && 0 !== t || "auto" !== N || this.tween._totalTime !== this.tween._totalDuration && this.tween._totalTime) && N || M || L || P || S || 1 !== D) || xt && I || !Pt) C || T.skewX || I ? (C *= $, w = T.skewX * $, x = 1e5, e = Math.cos(C) * E, n = Math.sin(C) * E, i = Math.sin(C - w) * -A, o = Math.cos(C - w) * A, w && "simple" === T.skewType && (v = Math.tan(w), v = Math.sqrt(1 + v * v), i *= v, o *= v, T.skewY && (e *= v, n *= v)), I && (O += T.xOrigin - (T.xOrigin * e + T.yOrigin * i) + T.xOffset, R += T.yOrigin - (T.xOrigin * n + T.yOrigin * o) + T.yOffset, xt && (T.xPercent || T.yPercent) && (m = this.t.getBBox(), O += .01 * T.xPercent * m.width, R += .01 * T.yPercent * m.height), (m = 1e-6) > O && O > -m && (O = 0), m > R && R > -m && (R = 0)), y = (e * x | 0) / x + "," + (n * x | 0) / x + "," + (i * x | 0) / x + "," + (o * x | 0) / x + "," + O + "," + R + ")", I && xt ? this.t.setAttribute("transform", "matrix(" + y) : k[kt] = (T.xPercent || T.yPercent ? "translate(" + T.xPercent + "%," + T.yPercent + "%) matrix(" : "matrix(") + y) : k[kt] = (T.xPercent || T.yPercent ? "translate(" + T.xPercent + "%," + T.yPercent + "%) matrix(" : "matrix(") + E + ",0,0," + A + "," + O + "," + R + ")";else {
        if (d && ((m = 1e-4) > E && E > -m && (E = D = 2e-5), m > A && A > -m && (A = D = 2e-5), !L || T.z || T.rotationX || T.rotationY || (L = 0)), C || T.skewX) C *= $, g = e = Math.cos(C), _ = n = Math.sin(C), T.skewX && (C -= T.skewX * $, g = Math.cos(C), _ = Math.sin(C), "simple" === T.skewType && (v = Math.tan(T.skewX * $), v = Math.sqrt(1 + v * v), g *= v, _ *= v, T.skewY && (e *= v, n *= v))), i = -_, o = g;else {
          if (!(P || S || 1 !== D || L || I)) return void (k[kt] = (T.xPercent || T.yPercent ? "translate(" + T.xPercent + "%," + T.yPercent + "%) translate3d(" : "translate3d(") + O + "px," + R + "px," + M + "px)" + (1 !== E || 1 !== A ? " scale(" + E + "," + A + ")" : ""));
          e = o = 1, i = n = 0;
        }
        h = 1, s = r = a = l = c = u = 0, p = L ? -1 / L : 0, f = T.zOrigin, m = 1e-6, ",", "0", (C = P * $) && (g = Math.cos(C), _ = Math.sin(C), a = -_, c = p * -_, s = e * _, r = n * _, h = g, p *= g, e *= g, n *= g), (C = S * $) && (g = Math.cos(C), _ = Math.sin(C), v = i * g + s * _, b = o * g + r * _, l = h * _, u = p * _, s = i * -_ + s * g, r = o * -_ + r * g, h *= g, p *= g, i = v, o = b), 1 !== D && (s *= D, r *= D, h *= D, p *= D), 1 !== A && (i *= A, o *= A, l *= A, u *= A), 1 !== E && (e *= E, n *= E, a *= E, c *= E), (f || I) && (f && (O += s * -f, R += r * -f, M += h * -f + f), I && (O += T.xOrigin - (T.xOrigin * e + T.yOrigin * i) + T.xOffset, R += T.yOrigin - (T.xOrigin * n + T.yOrigin * o) + T.yOffset), m > O && O > -m && (O = "0"), m > R && R > -m && (R = "0"), m > M && M > -m && (M = 0)), y = T.xPercent || T.yPercent ? "translate(" + T.xPercent + "%," + T.yPercent + "%) matrix3d(" : "matrix3d(", y += (m > e && e > -m ? "0" : e) + "," + (m > n && n > -m ? "0" : n) + "," + (m > a && a > -m ? "0" : a), y += "," + (m > c && c > -m ? "0" : c) + "," + (m > i && i > -m ? "0" : i) + "," + (m > o && o > -m ? "0" : o), S || P || 1 !== D ? (y += "," + (m > l && l > -m ? "0" : l) + "," + (m > u && u > -m ? "0" : u) + "," + (m > s && s > -m ? "0" : s), y += "," + (m > r && r > -m ? "0" : r) + "," + (m > h && h > -m ? "0" : h) + "," + (m > p && p > -m ? "0" : p) + ",") : y += ",0,0,0,0,1,0,", y += O + "," + R + "," + M + "," + (L ? 1 + -M / L : 1) + ")", k[kt] = y;
      }
    };

    (h = Et.prototype).x = h.y = h.z = h.skewX = h.skewY = h.rotation = h.rotationX = h.rotationY = h.zOrigin = h.xPercent = h.yPercent = h.xOffset = h.yOffset = 0, h.scaleX = h.scaleY = h.scaleZ = 1, yt("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
      parser: function parser(t, e, i, s, o, a, l) {
        if (s._lastParsedTransform === l) return o;
        s._lastParsedTransform = l;

        var h,
            c,
            u,
            p,
            d,
            f,
            m,
            g,
            _,
            v,
            b = t._gsTransform,
            y = t.style,
            w = Tt.length,
            x = l,
            T = {},
            k = "transformOrigin";

        if (l.display ? (p = Q(t, "display"), y.display = "block", h = Nt(t, n, !0, l.parseTransform), y.display = p) : h = Nt(t, n, !0, l.parseTransform), s._transform = h, "string" == typeof x.transform && kt) p = z.style, p[kt] = x.transform, p.display = "block", p.position = "absolute", L.body.appendChild(z), c = Nt(z, null, !1), L.body.removeChild(z), c.perspective || (c.perspective = h.perspective), null != x.xPercent && (c.xPercent = ot(x.xPercent, h.xPercent)), null != x.yPercent && (c.yPercent = ot(x.yPercent, h.yPercent));else if ("object" == _typeof(x)) {
          if (c = {
            scaleX: ot(null != x.scaleX ? x.scaleX : x.scale, h.scaleX),
            scaleY: ot(null != x.scaleY ? x.scaleY : x.scale, h.scaleY),
            scaleZ: ot(x.scaleZ, h.scaleZ),
            x: ot(x.x, h.x),
            y: ot(x.y, h.y),
            z: ot(x.z, h.z),
            xPercent: ot(x.xPercent, h.xPercent),
            yPercent: ot(x.yPercent, h.yPercent),
            perspective: ot(x.transformPerspective, h.perspective)
          }, null != (g = x.directionalRotation)) if ("object" == _typeof(g)) for (p in g) {
            x[p] = g[p];
          } else x.rotation = g;
          "string" == typeof x.x && -1 !== x.x.indexOf("%") && (c.x = 0, c.xPercent = ot(x.x, h.xPercent)), "string" == typeof x.y && -1 !== x.y.indexOf("%") && (c.y = 0, c.yPercent = ot(x.y, h.yPercent)), c.rotation = rt("rotation" in x ? x.rotation : "shortRotation" in x ? x.shortRotation + "_short" : "rotationZ" in x ? x.rotationZ : h.rotation, h.rotation, "rotation", T), Pt && (c.rotationX = rt("rotationX" in x ? x.rotationX : "shortRotationX" in x ? x.shortRotationX + "_short" : h.rotationX || 0, h.rotationX, "rotationX", T), c.rotationY = rt("rotationY" in x ? x.rotationY : "shortRotationY" in x ? x.shortRotationY + "_short" : h.rotationY || 0, h.rotationY, "rotationY", T)), c.skewX = null == x.skewX ? h.skewX : rt(x.skewX, h.skewX), c.skewY = null == x.skewY ? h.skewY : rt(x.skewY, h.skewY), (u = c.skewY - h.skewY) && (c.skewX += u, c.rotation += u);
        }

        for (Pt && null != x.force3D && (h.force3D = x.force3D, m = !0), h.skewType = x.skewType || h.skewType || r.defaultSkewType, (f = h.force3D || h.z || h.rotationX || h.rotationY || c.z || c.rotationX || c.rotationY || c.perspective) || null == x.scale || (c.scaleZ = 1); --w > -1;) {
          i = Tt[w], ((d = c[i] - h[i]) > 1e-6 || -1e-6 > d || null != x[i] || null != I[i]) && (m = !0, o = new mt(h, i, h[i], d, o), i in T && (o.e = T[i]), o.xs0 = 0, o.plugin = a, s._overwriteProps.push(o.n));
        }

        return d = x.transformOrigin, h.svg && (d || x.svgOrigin) && (_ = h.xOffset, v = h.yOffset, $t(t, st(d), c, x.svgOrigin, x.smoothOrigin), o = gt(h, "xOrigin", (b ? h : c).xOrigin, c.xOrigin, o, k), o = gt(h, "yOrigin", (b ? h : c).yOrigin, c.yOrigin, o, k), (_ !== h.xOffset || v !== h.yOffset) && (o = gt(h, "xOffset", b ? _ : h.xOffset, h.xOffset, o, k), o = gt(h, "yOffset", b ? v : h.yOffset, h.yOffset, o, k)), d = xt ? null : "0px 0px"), (d || Pt && f && h.zOrigin) && (kt ? (m = !0, i = St, d = (d || Q(t, i, n, !1, "50% 50%")) + "", o = new mt(y, i, 0, 0, o, -1, k), o.b = y[i], o.plugin = a, Pt ? (p = h.zOrigin, d = d.split(" "), h.zOrigin = (d.length > 2 && (0 === p || "0px" !== d[2]) ? parseFloat(d[2]) : p) || 0, o.xs0 = o.e = d[0] + " " + (d[1] || "50%") + " 0px", o = new mt(h, "zOrigin", 0, 0, o, -1, o.n), o.b = p, o.xs0 = o.e = h.zOrigin) : o.xs0 = o.e = d) : st(d + "", h)), m && (s._transformType = h.svg && xt || !f && 3 !== this._transformType ? 2 : 3), o;
      },
      prefix: !0
    }), yt("boxShadow", {
      defaultValue: "0px 0px 0px 0px #999",
      prefix: !0,
      color: !0,
      multi: !0,
      keyword: "inset"
    }), yt("borderRadius", {
      defaultValue: "0px",
      parser: function parser(t, e, i, o, r, a) {
        e = this.format(e);

        var l,
            h,
            c,
            u,
            p,
            d,
            f,
            m,
            g,
            _,
            v,
            b,
            y,
            w,
            x,
            T,
            k = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
            C = t.style;

        for (g = parseFloat(t.offsetWidth), _ = parseFloat(t.offsetHeight), l = e.split(" "), h = 0; h < k.length; h++) {
          this.p.indexOf("border") && (k[h] = V(k[h])), -1 !== (p = u = Q(t, k[h], n, !1, "0px")).indexOf(" ") && (u = p.split(" "), p = u[0], u = u[1]), d = c = l[h], f = parseFloat(p), b = p.substr((f + "").length), (y = "=" === d.charAt(1)) ? (m = parseInt(d.charAt(0) + "1", 10), d = d.substr(2), m *= parseFloat(d), v = d.substr((m + "").length - (0 > m ? 1 : 0)) || "") : (m = parseFloat(d), v = d.substr((m + "").length)), "" === v && (v = s[i] || b), v !== b && (w = G(t, "borderLeft", f, b), x = G(t, "borderTop", f, b), "%" === v ? (p = w / g * 100 + "%", u = x / _ * 100 + "%") : "em" === v ? (T = G(t, "borderLeft", 1, "em"), p = w / T + "em", u = x / T + "em") : (p = w + "px", u = x + "px"), y && (d = parseFloat(p) + m + v, c = parseFloat(u) + m + v)), r = _t(C, k[h], p + " " + u, d + " " + c, !1, "0px", r);
        }

        return r;
      },
      prefix: !0,
      formatter: pt("0px 0px 0px 0px", !1, !0)
    }), yt("backgroundPosition", {
      defaultValue: "0 0",
      parser: function parser(t, e, i, s, o, r) {
        var a,
            l,
            h,
            c,
            u,
            p,
            d = "background-position",
            f = n || U(t, null),
            g = this.format((f ? m ? f.getPropertyValue(d + "-x") + " " + f.getPropertyValue(d + "-y") : f.getPropertyValue(d) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"),
            _ = this.format(e);

        if (-1 !== g.indexOf("%") != (-1 !== _.indexOf("%")) && (p = Q(t, "backgroundImage").replace(P, "")) && "none" !== p) {
          for (a = g.split(" "), l = _.split(" "), j.setAttribute("src", p), h = 2; --h > -1;) {
            g = a[h], (c = -1 !== g.indexOf("%")) !== (-1 !== l[h].indexOf("%")) && (u = 0 === h ? t.offsetWidth - j.width : t.offsetHeight - j.height, a[h] = c ? parseFloat(g) / 100 * u + "px" : parseFloat(g) / u * 100 + "%");
          }

          g = a.join(" ");
        }

        return this.parseComplex(t.style, g, _, o, r);
      },
      formatter: st
    }), yt("backgroundSize", {
      defaultValue: "0 0",
      formatter: st
    }), yt("perspective", {
      defaultValue: "0px",
      prefix: !0
    }), yt("perspectiveOrigin", {
      defaultValue: "50% 50%",
      prefix: !0
    }), yt("transformStyle", {
      prefix: !0
    }), yt("backfaceVisibility", {
      prefix: !0
    }), yt("userSelect", {
      prefix: !0
    }), yt("margin", {
      parser: dt("marginTop,marginRight,marginBottom,marginLeft")
    }), yt("padding", {
      parser: dt("paddingTop,paddingRight,paddingBottom,paddingLeft")
    }), yt("clip", {
      defaultValue: "rect(0px,0px,0px,0px)",
      parser: function parser(t, e, i, s, o, r) {
        var a, l, h;
        return 9 > m ? (l = t.currentStyle, h = 8 > m ? " " : ",", a = "rect(" + l.clipTop + h + l.clipRight + h + l.clipBottom + h + l.clipLeft + ")", e = this.format(e).split(",").join(h)) : (a = this.format(Q(t, this.p, n, !1, this.dflt)), e = this.format(e)), this.parseComplex(t.style, a, e, o, r);
      }
    }), yt("textShadow", {
      defaultValue: "0px 0px 0px #999",
      color: !0,
      multi: !0
    }), yt("autoRound,strictUnits", {
      parser: function parser(t, e, i, s, n) {
        return n;
      }
    }), yt("border", {
      defaultValue: "0px solid #000",
      parser: function parser(t, e, i, s, o, r) {
        return this.parseComplex(t.style, this.format(Q(t, "borderTopWidth", n, !1, "0px") + " " + Q(t, "borderTopStyle", n, !1, "solid") + " " + Q(t, "borderTopColor", n, !1, "#000")), this.format(e), o, r);
      },
      color: !0,
      formatter: function formatter(t) {
        var e = t.split(" ");
        return e[0] + " " + (e[1] || "solid") + " " + (t.match(ut) || ["#000"])[0];
      }
    }), yt("borderWidth", {
      parser: dt("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
    }), yt("float,cssFloat,styleFloat", {
      parser: function parser(t, e, i, s, n, o) {
        var r = t.style,
            a = "cssFloat" in r ? "cssFloat" : "styleFloat";
        return new mt(r, a, 0, 0, n, -1, i, !1, 0, r[a], e);
      }
    });

    var jt = function jt(t) {
      var e,
          i = this.t,
          s = i.filter || Q(this.data, "filter") || "",
          n = this.s + this.c * t | 0;
      100 === n && (-1 === s.indexOf("atrix(") && -1 === s.indexOf("radient(") && -1 === s.indexOf("oader(") ? (i.removeAttribute("filter"), e = !Q(this.data, "filter")) : (i.filter = s.replace(T, ""), e = !0)), e || (this.xn1 && (i.filter = s = s || "alpha(opacity=" + n + ")"), -1 === s.indexOf("pacity") ? 0 === n && this.xn1 || (i.filter = s + " alpha(opacity=" + n + ")") : i.filter = s.replace(w, "opacity=" + n));
    };

    yt("opacity,alpha,autoAlpha", {
      defaultValue: "1",
      parser: function parser(t, e, i, s, o, r) {
        var a = parseFloat(Q(t, "opacity", n, !1, "1")),
            l = t.style,
            h = "autoAlpha" === i;
        return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + a), h && 1 === a && "hidden" === Q(t, "visibility", n) && 0 !== e && (a = 0), X ? o = new mt(l, "opacity", a, e - a, o) : (o = new mt(l, "opacity", 100 * a, 100 * (e - a), o), o.xn1 = h ? 1 : 0, l.zoom = 1, o.type = 2, o.b = "alpha(opacity=" + o.s + ")", o.e = "alpha(opacity=" + (o.s + o.c) + ")", o.data = t, o.plugin = r, o.setRatio = jt), h && (o = new mt(l, "visibility", 0, 0, o, -1, null, !1, 0, 0 !== a ? "inherit" : "hidden", 0 === e ? "hidden" : "inherit"), o.xs0 = "inherit", s._overwriteProps.push(o.n), s._overwriteProps.push(i)), o;
      }
    });

    var Ft = function Ft(t, e) {
      e && (t.removeProperty ? (("ms" === e.substr(0, 2) || "webkit" === e.substr(0, 6)) && (e = "-" + e), t.removeProperty(e.replace(C, "-$1").toLowerCase())) : t.removeAttribute(e));
    },
        Ht = function Ht(t) {
      if (this.t._gsClassPT = this, 1 === t || 0 === t) {
        this.t.setAttribute("class", 0 === t ? this.b : this.e);

        for (var e = this.data, i = this.t.style; e;) {
          e.v ? i[e.p] = e.v : Ft(i, e.p), e = e._next;
        }

        1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null);
      } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e);
    };

    yt("className", {
      parser: function parser(t, e, s, o, r, a, l) {
        var h,
            c,
            u,
            p,
            d,
            f = t.getAttribute("class") || "",
            m = t.style.cssText;

        if (r = o._classNamePT = new mt(t, s, 0, 0, r, 2), r.setRatio = Ht, r.pr = -11, i = !0, r.b = f, c = K(t, n), u = t._gsClassPT) {
          for (p = {}, d = u.data; d;) {
            p[d.p] = 1, d = d._next;
          }

          u.setRatio(1);
        }

        return t._gsClassPT = r, r.e = "=" !== e.charAt(1) ? e : f.replace(new RegExp("\\s*\\b" + e.substr(2) + "\\b"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""), t.setAttribute("class", r.e), h = J(t, c, K(t), l, p), t.setAttribute("class", f), r.data = h.firstMPT, t.style.cssText = m, r = r.xfirst = o.parse(t, h.difs, r, a);
      }
    });

    var Xt = function Xt(t) {
      if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
        var e,
            i,
            s,
            n,
            o,
            r = this.t.style,
            a = l.transform.parse;
        if ("all" === this.e) r.cssText = "", n = !0;else for (e = this.e.split(" ").join("").split(","), s = e.length; --s > -1;) {
          i = e[s], l[i] && (l[i].parse === a ? n = !0 : i = "transformOrigin" === i ? St : l[i].p), Ft(r, i);
        }
        n && (Ft(r, kt), (o = this.t._gsTransform) && (o.svg && (this.t.removeAttribute("data-svg-origin"), this.t.removeAttribute("transform")), delete this.t._gsTransform));
      }
    };

    for (yt("clearProps", {
      parser: function parser(t, e, s, n, o) {
        return o = new mt(t, s, 0, 0, o, 2), o.setRatio = Xt, o.e = e, o.pr = -10, o.data = n._tween, i = !0, o;
      }
    }), h = "bezier,throwProps,physicsProps,physics2D".split(","), vt = h.length; vt--;) {
      wt(h[vt]);
    }

    (h = r.prototype)._firstPT = h._lastParsedTransform = h._transform = null, h._onInitTween = function (t, e, a) {
      if (!t.nodeType) return !1;
      this._target = t, this._tween = a, this._vars = e, c = e.autoRound, i = !1, s = e.suffixMap || r.suffixMap, n = U(t, ""), o = this._overwriteProps;

      var h,
          d,
          g,
          _,
          v,
          b,
          T,
          k,
          C,
          S = t.style;

      if (u && "" === S.zIndex && ("auto" === (h = Q(t, "zIndex", n)) || "" === h) && this._addLazySet(S, "zIndex", 0), "string" == typeof e && (_ = S.cssText, h = K(t, n), S.cssText = _ + ";" + e, h = J(t, h, K(t)).difs, !X && x.test(e) && (h.opacity = parseFloat(RegExp.$1)), e = h, S.cssText = _), e.className ? this._firstPT = d = l.className.parse(t, e.className, "className", this, null, null, e) : this._firstPT = d = this.parse(t, e, null), this._transformType) {
        for (C = 3 === this._transformType, kt ? p && (u = !0, "" === S.zIndex && ("auto" === (T = Q(t, "zIndex", n)) || "" === T) && this._addLazySet(S, "zIndex", 0), f && this._addLazySet(S, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (C ? "visible" : "hidden"))) : S.zoom = 1, g = d; g && g._next;) {
          g = g._next;
        }

        k = new mt(t, "transform", 0, 0, null, 2), this._linkCSSP(k, null, g), k.setRatio = kt ? zt : function (t) {
          var e,
              i,
              s = this.data,
              n = -s.rotation * $,
              o = n + s.skewX * $,
              r = (Math.cos(n) * s.scaleX * 1e5 | 0) / 1e5,
              a = (Math.sin(n) * s.scaleX * 1e5 | 0) / 1e5,
              l = (Math.sin(o) * -s.scaleY * 1e5 | 0) / 1e5,
              h = (Math.cos(o) * s.scaleY * 1e5 | 0) / 1e5,
              c = this.t.style,
              u = this.t.currentStyle;

          if (u) {
            i = a, a = -l, l = -i, e = u.filter, c.filter = "";

            var p,
                d,
                f = this.t.offsetWidth,
                g = this.t.offsetHeight,
                _ = "absolute" !== u.position,
                v = "progid:DXImageTransform.Microsoft.Matrix(M11=" + r + ", M12=" + a + ", M21=" + l + ", M22=" + h,
                b = s.x + f * s.xPercent / 100,
                x = s.y + g * s.yPercent / 100;

            if (null != s.ox && (p = (s.oxp ? f * s.ox * .01 : s.ox) - f / 2, d = (s.oyp ? g * s.oy * .01 : s.oy) - g / 2, b += p - (p * r + d * a), x += d - (p * l + d * h)), _ ? (p = f / 2, d = g / 2, v += ", Dx=" + (p - (p * r + d * a) + b) + ", Dy=" + (d - (p * l + d * h) + x) + ")") : v += ", sizingMethod='auto expand')", -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? c.filter = e.replace(O, v) : c.filter = v + " " + e, (0 === t || 1 === t) && 1 === r && 0 === a && 0 === l && 1 === h && (_ && -1 === v.indexOf("Dx=0, Dy=0") || w.test(e) && 100 !== parseFloat(RegExp.$1) || -1 === e.indexOf(e.indexOf("Alpha")) && c.removeAttribute("filter")), !_) {
              var T,
                  k,
                  C,
                  S = 8 > m ? 1 : -1;

              for (p = s.ieOffsetX || 0, d = s.ieOffsetY || 0, s.ieOffsetX = Math.round((f - ((0 > r ? -r : r) * f + (0 > a ? -a : a) * g)) / 2 + b), s.ieOffsetY = Math.round((g - ((0 > h ? -h : h) * g + (0 > l ? -l : l) * f)) / 2 + x), vt = 0; 4 > vt; vt++) {
                k = et[vt], T = u[k], i = -1 !== T.indexOf("px") ? parseFloat(T) : G(this.t, k, parseFloat(T), T.replace(y, "")) || 0, C = i !== s[k] ? 2 > vt ? -s.ieOffsetX : -s.ieOffsetY : 2 > vt ? p - s.ieOffsetX : d - s.ieOffsetY, c[k] = (s[k] = Math.round(i - C * (0 === vt || 2 === vt ? 1 : S))) + "px";
              }
            }
          }
        }, k.data = this._transform || Nt(t, n, !0), k.tween = a, k.pr = -1, o.pop();
      }

      if (i) {
        for (; d;) {
          for (b = d._next, g = _; g && g.pr > d.pr;) {
            g = g._next;
          }

          (d._prev = g ? g._prev : v) ? d._prev._next = d : _ = d, (d._next = g) ? g._prev = d : v = d, d = b;
        }

        this._firstPT = _;
      }

      return !0;
    }, h.parse = function (t, e, i, o) {
      var r,
          a,
          h,
          u,
          p,
          d,
          f,
          m,
          g,
          _,
          v = t.style;

      for (r in e) {
        d = e[r], (a = l[r]) ? i = a.parse(t, d, r, this, i, o, e) : (p = Q(t, r, n) + "", g = "string" == typeof d, "color" === r || "fill" === r || "stroke" === r || -1 !== r.indexOf("Color") || g && k.test(d) ? (g || (d = ht(d), d = (d.length > 3 ? "rgba(" : "rgb(") + d.join(",") + ")"), i = _t(v, r, p, d, !0, "transparent", i, 0, o)) : !g || -1 === d.indexOf(" ") && -1 === d.indexOf(",") ? (h = parseFloat(p), f = h || 0 === h ? p.substr((h + "").length) : "", ("" === p || "auto" === p) && ("width" === r || "height" === r ? (h = it(t, r, n), f = "px") : "left" === r || "top" === r ? (h = Z(t, r, n), f = "px") : (h = "opacity" !== r ? 0 : 1, f = "")), (_ = g && "=" === d.charAt(1)) ? (u = parseInt(d.charAt(0) + "1", 10), d = d.substr(2), u *= parseFloat(d), m = d.replace(y, "")) : (u = parseFloat(d), m = g ? d.replace(y, "") : ""), "" === m && (m = r in s ? s[r] : f), d = u || 0 === u ? (_ ? u + h : u) + m : e[r], f !== m && "" !== m && (u || 0 === u) && h && (h = G(t, r, h, f), "%" === m ? (h /= G(t, r, 100, "%") / 100, !0 !== e.strictUnits && (p = h + "%")) : "em" === m || "rem" === m || "vw" === m || "vh" === m ? h /= G(t, r, 1, m) : "px" !== m && (u = G(t, r, u, m), m = "px"), _ && (u || 0 === u) && (d = u + h + m)), _ && (u += h), !h && 0 !== h || !u && 0 !== u ? void 0 !== v[r] && (d || d + "" != "NaN" && null != d) ? (i = new mt(v, r, u || h || 0, 0, i, -1, r, !1, 0, p, d), i.xs0 = "none" !== d || "display" !== r && -1 === r.indexOf("Style") ? d : p) : Y("invalid " + r + " tween value: " + e[r]) : (i = new mt(v, r, h, u - h, i, 0, r, !1 !== c && ("px" === m || "zIndex" === r), 0, p, d), i.xs0 = m)) : i = _t(v, r, p, d, !0, null, i, 0, o)), o && i && !i.plugin && (i.plugin = o);
      }

      return i;
    }, h.setRatio = function (t) {
      var e,
          i,
          s,
          n = this._firstPT;
      if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time) {
        if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || -1e-6 === this._tween._rawPrevTime) for (; n;) {
          if (e = n.c * t + n.s, n.r ? e = Math.round(e) : 1e-6 > e && e > -1e-6 && (e = 0), n.type) {
            if (1 === n.type) {
              if (2 === (s = n.l)) n.t[n.p] = n.xs0 + e + n.xs1 + n.xn1 + n.xs2;else if (3 === s) n.t[n.p] = n.xs0 + e + n.xs1 + n.xn1 + n.xs2 + n.xn2 + n.xs3;else if (4 === s) n.t[n.p] = n.xs0 + e + n.xs1 + n.xn1 + n.xs2 + n.xn2 + n.xs3 + n.xn3 + n.xs4;else if (5 === s) n.t[n.p] = n.xs0 + e + n.xs1 + n.xn1 + n.xs2 + n.xn2 + n.xs3 + n.xn3 + n.xs4 + n.xn4 + n.xs5;else {
                for (i = n.xs0 + e + n.xs1, s = 1; s < n.l; s++) {
                  i += n["xn" + s] + n["xs" + (s + 1)];
                }

                n.t[n.p] = i;
              }
            } else -1 === n.type ? n.t[n.p] = n.xs0 : n.setRatio && n.setRatio(t);
          } else n.t[n.p] = e + n.xs0;
          n = n._next;
        } else for (; n;) {
          2 !== n.type ? n.t[n.p] = n.b : n.setRatio(t), n = n._next;
        }
      } else for (; n;) {
        if (2 !== n.type) {
          if (n.r && -1 !== n.type) {
            if (e = Math.round(n.s + n.c), n.type) {
              if (1 === n.type) {
                for (s = n.l, i = n.xs0 + e + n.xs1, s = 1; s < n.l; s++) {
                  i += n["xn" + s] + n["xs" + (s + 1)];
                }

                n.t[n.p] = i;
              }
            } else n.t[n.p] = e + n.xs0;
          } else n.t[n.p] = n.e;
        } else n.setRatio(t);
        n = n._next;
      }
    }, h._enableTransforms = function (t) {
      this._transform = this._transform || Nt(this._target, n, !0), this._transformType = this._transform.svg && xt || !t && 3 !== this._transformType ? 2 : 3;
    };

    var Wt = function Wt(t) {
      this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0);
    };

    h._addLazySet = function (t, e, i) {
      var s = this._firstPT = new mt(t, e, 0, 0, this._firstPT, 2);
      s.e = i, s.setRatio = Wt, s.data = this;
    }, h._linkCSSP = function (t, e, i, s) {
      return t && (e && (e._prev = t), t._next && (t._next._prev = t._prev), t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next, s = !0), i ? i._next = t : s || null !== this._firstPT || (this._firstPT = t), t._next = e, t._prev = i), t;
    }, h._kill = function (e) {
      var i,
          s,
          n,
          o = e;

      if (e.autoAlpha || e.alpha) {
        o = {};

        for (s in e) {
          o[s] = e[s];
        }

        o.opacity = 1, o.autoAlpha && (o.visibility = 1);
      }

      return e.className && (i = this._classNamePT) && ((n = i.xfirst) && n._prev ? this._linkCSSP(n._prev, i._next, n._prev._prev) : n === this._firstPT && (this._firstPT = i._next), i._next && this._linkCSSP(i._next, i._next._next, n._prev), this._classNamePT = null), t.prototype._kill.call(this, o);
    };

    var Yt = function Yt(t, e, i) {
      var s, n, o, r;
      if (t.slice) for (n = t.length; --n > -1;) {
        Yt(t[n], e, i);
      } else for (s = t.childNodes, n = s.length; --n > -1;) {
        o = s[n], r = o.type, o.style && (e.push(K(o)), i && i.push(o)), 1 !== r && 9 !== r && 11 !== r || !o.childNodes.length || Yt(o, e, i);
      }
    };

    return r.cascadeTo = function (t, i, s) {
      var n,
          o,
          r,
          a,
          l = e.to(t, i, s),
          h = [l],
          c = [],
          u = [],
          p = [],
          d = e._internals.reservedProps;

      for (t = l._targets || l.target, Yt(t, c, p), l.render(i, !0, !0), Yt(t, u), l.render(0, !0, !0), l._enabled(!0), n = p.length; --n > -1;) {
        if ((o = J(p[n], c[n], u[n])).firstMPT) {
          o = o.difs;

          for (r in s) {
            d[r] && (o[r] = s[r]);
          }

          a = {};

          for (r in o) {
            a[r] = c[n][r];
          }

          h.push(e.fromTo(p[n], i, a, o));
        }
      }

      return h;
    }, t.activate([r]), r;
  }, !0), function () {
    var t = function t(_t2) {
      for (; _t2;) {
        _t2.f || _t2.blob || (_t2.r = 1), _t2 = _t2._next;
      }
    },
        e = _gsScope._gsDefine.plugin({
      propName: "roundProps",
      version: "1.5",
      priority: -1,
      API: 2,
      init: function init(t, e, i) {
        return this._tween = i, !0;
      }
    }).prototype;

    e._onInitAllProps = function () {
      for (var e, i, s, n = this._tween, o = n.vars.roundProps.join ? n.vars.roundProps : n.vars.roundProps.split(","), r = o.length, a = {}, l = n._propLookup.roundProps; --r > -1;) {
        a[o[r]] = 1;
      }

      for (r = o.length; --r > -1;) {
        for (e = o[r], i = n._firstPT; i;) {
          s = i._next, i.pg ? i.t._roundProps(a, !0) : i.n === e && (2 === i.f && i.t ? t(i.t._firstPT) : (this._add(i.t, e, i.s, i.c), s && (s._prev = i._prev), i._prev ? i._prev._next = s : n._firstPT === i && (n._firstPT = s), i._next = i._prev = null, n._propLookup[e] = l)), i = s;
        }
      }

      return !1;
    }, e._add = function (t, e, i, s) {
      this._addTween(t, e, i, i + s, e, !0), this._overwriteProps.push(e);
    };
  }(), _gsScope._gsDefine.plugin({
    propName: "attr",
    API: 2,
    version: "0.5.0",
    init: function init(t, e, i) {
      var s;
      if ("function" != typeof t.setAttribute) return !1;

      for (s in e) {
        this._addTween(t, "setAttribute", t.getAttribute(s) + "", e[s] + "", s, !1, s), this._overwriteProps.push(s);
      }

      return !0;
    }
  }), _gsScope._gsDefine.plugin({
    propName: "directionalRotation",
    version: "0.2.1",
    API: 2,
    init: function init(t, e, i) {
      "object" != _typeof(e) && (e = {
        rotation: e
      }), this.finals = {};
      var s,
          n,
          o,
          r,
          a,
          l,
          h = !0 === e.useRadians ? 2 * Math.PI : 360;

      for (s in e) {
        "useRadians" !== s && (l = (e[s] + "").split("_"), n = l[0], o = parseFloat("function" != typeof t[s] ? t[s] : t[s.indexOf("set") || "function" != typeof t["get" + s.substr(3)] ? s : "get" + s.substr(3)]()), r = this.finals[s] = "string" == typeof n && "=" === n.charAt(1) ? o + parseInt(n.charAt(0) + "1", 10) * Number(n.substr(2)) : Number(n) || 0, a = r - o, l.length && (-1 !== (n = l.join("_")).indexOf("short") && (a %= h) != a % (h / 2) && (a = 0 > a ? a + h : a - h), -1 !== n.indexOf("_cw") && 0 > a ? a = (a + 9999999999 * h) % h - (a / h | 0) * h : -1 !== n.indexOf("ccw") && a > 0 && (a = (a - 9999999999 * h) % h - (a / h | 0) * h)), (a > 1e-6 || -1e-6 > a) && (this._addTween(t, s, o, o + a, s), this._overwriteProps.push(s)));
      }

      return !0;
    },
    set: function set(t) {
      var e;
      if (1 !== t) this._super.setRatio.call(this, t);else for (e = this._firstPT; e;) {
        e.f ? e.t[e.p](this.finals[e.p]) : e.t[e.p] = this.finals[e.p], e = e._next;
      }
    }
  })._autoCSS = !0, _gsScope._gsDefine("easing.Back", ["easing.Ease"], function (t) {
    var e,
        i,
        s,
        n = _gsScope.GreenSockGlobals || _gsScope,
        o = n.com.greensock,
        r = 2 * Math.PI,
        a = Math.PI / 2,
        l = o._class,
        h = function h(e, i) {
      var s = l("easing." + e, function () {}, !0),
          n = s.prototype = new t();
      return n.constructor = s, n.getRatio = i, s;
    },
        c = t.register || function () {},
        u = function u(t, e, i, s, n) {
      var o = l("easing." + t, {
        easeOut: new e(),
        easeIn: new i(),
        easeInOut: new s()
      }, !0);
      return c(o, t), o;
    },
        p = function p(t, e, i) {
      this.t = t, this.v = e, i && (this.next = i, i.prev = this, this.c = i.v - e, this.gap = i.t - t);
    },
        d = function d(e, i) {
      var s = l("easing." + e, function (t) {
        this._p1 = t || 0 === t ? t : 1.70158, this._p2 = 1.525 * this._p1;
      }, !0),
          n = s.prototype = new t();
      return n.constructor = s, n.getRatio = i, n.config = function (t) {
        return new s(t);
      }, s;
    },
        f = u("Back", d("BackOut", function (t) {
      return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1;
    }), d("BackIn", function (t) {
      return t * t * ((this._p1 + 1) * t - this._p1);
    }), d("BackInOut", function (t) {
      return (t *= 2) < 1 ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2);
    })),
        m = l("easing.SlowMo", function (t, e, i) {
      e = e || 0 === e ? e : .7, null == t ? t = .7 : t > 1 && (t = 1), this._p = 1 !== t ? e : 0, this._p1 = (1 - t) / 2, this._p2 = t, this._p3 = this._p1 + this._p2, this._calcEnd = !0 === i;
    }, !0),
        g = m.prototype = new t();

    return g.constructor = m, g.getRatio = function (t) {
      var e = t + (.5 - t) * this._p;
      return t < this._p1 ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e;
    }, m.ease = new m(.7, .7), g.config = m.config = function (t, e, i) {
      return new m(t, e, i);
    }, e = l("easing.SteppedEase", function (t) {
      t = t || 1, this._p1 = 1 / t, this._p2 = t + 1;
    }, !0), g = e.prototype = new t(), g.constructor = e, g.getRatio = function (t) {
      return 0 > t ? t = 0 : t >= 1 && (t = .999999999), (this._p2 * t >> 0) * this._p1;
    }, g.config = e.config = function (t) {
      return new e(t);
    }, i = l("easing.RoughEase", function (e) {
      for (var i, s, n, o, r, a, l = (e = e || {}).taper || "none", h = [], c = 0, u = 0 | (e.points || 20), d = u, f = !1 !== e.randomize, m = !0 === e.clamp, g = e.template instanceof t ? e.template : null, _ = "number" == typeof e.strength ? .4 * e.strength : .4; --d > -1;) {
        i = f ? Math.random() : 1 / u * d, s = g ? g.getRatio(i) : i, "none" === l ? n = _ : "out" === l ? (o = 1 - i, n = o * o * _) : "in" === l ? n = i * i * _ : .5 > i ? (o = 2 * i, n = o * o * .5 * _) : (o = 2 * (1 - i), n = o * o * .5 * _), f ? s += Math.random() * n - .5 * n : d % 2 ? s += .5 * n : s -= .5 * n, m && (s > 1 ? s = 1 : 0 > s && (s = 0)), h[c++] = {
          x: i,
          y: s
        };
      }

      for (h.sort(function (t, e) {
        return t.x - e.x;
      }), a = new p(1, 1, null), d = u; --d > -1;) {
        r = h[d], a = new p(r.x, r.y, a);
      }

      this._prev = new p(0, 0, 0 !== a.t ? a : a.next);
    }, !0), g = i.prototype = new t(), g.constructor = i, g.getRatio = function (t) {
      var e = this._prev;

      if (t > e.t) {
        for (; e.next && t >= e.t;) {
          e = e.next;
        }

        e = e.prev;
      } else for (; e.prev && t <= e.t;) {
        e = e.prev;
      }

      return this._prev = e, e.v + (t - e.t) / e.gap * e.c;
    }, g.config = function (t) {
      return new i(t);
    }, i.ease = new i(), u("Bounce", h("BounceOut", function (t) {
      return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375;
    }), h("BounceIn", function (t) {
      return (t = 1 - t) < 1 / 2.75 ? 1 - 7.5625 * t * t : 2 / 2.75 > t ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375);
    }), h("BounceInOut", function (t) {
      var e = .5 > t;
      return t = e ? 1 - 2 * t : 2 * t - 1, t = 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375, e ? .5 * (1 - t) : .5 * t + .5;
    })), u("Circ", h("CircOut", function (t) {
      return Math.sqrt(1 - (t -= 1) * t);
    }), h("CircIn", function (t) {
      return -(Math.sqrt(1 - t * t) - 1);
    }), h("CircInOut", function (t) {
      return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
    })), s = function s(e, i, _s) {
      var n = l("easing." + e, function (t, e) {
        this._p1 = t >= 1 ? t : 1, this._p2 = (e || _s) / (1 > t ? t : 1), this._p3 = this._p2 / r * (Math.asin(1 / this._p1) || 0), this._p2 = r / this._p2;
      }, !0),
          o = n.prototype = new t();
      return o.constructor = n, o.getRatio = i, o.config = function (t, e) {
        return new n(t, e);
      }, n;
    }, u("Elastic", s("ElasticOut", function (t) {
      return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * this._p2) + 1;
    }, .3), s("ElasticIn", function (t) {
      return -this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2);
    }, .3), s("ElasticInOut", function (t) {
      return (t *= 2) < 1 ? this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) * -.5 : this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) * .5 + 1;
    }, .45)), u("Expo", h("ExpoOut", function (t) {
      return 1 - Math.pow(2, -10 * t);
    }), h("ExpoIn", function (t) {
      return Math.pow(2, 10 * (t - 1)) - .001;
    }), h("ExpoInOut", function (t) {
      return (t *= 2) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)));
    })), u("Sine", h("SineOut", function (t) {
      return Math.sin(t * a);
    }), h("SineIn", function (t) {
      return 1 - Math.cos(t * a);
    }), h("SineInOut", function (t) {
      return -.5 * (Math.cos(Math.PI * t) - 1);
    })), l("easing.EaseLookup", {
      find: function find(e) {
        return t.map[e];
      }
    }, !0), c(n.SlowMo, "SlowMo", "ease,"), c(i, "RoughEase", "ease,"), c(e, "SteppedEase", "ease,"), f;
  }, !0);
}), _gsScope._gsDefine && _gsScope._gsQueue.pop()(), function (t, e) {
  "use strict";

  var i = t.GreenSockGlobals = t.GreenSockGlobals || t;

  if (!i.TweenLite) {
    var s,
        n,
        o,
        r,
        a,
        l = function l(t) {
      var e,
          s = t.split("."),
          n = i;

      for (e = 0; e < s.length; e++) {
        n[s[e]] = n = n[s[e]] || {};
      }

      return n;
    },
        h = l("com.greensock"),
        c = function c(t) {
      var e,
          i = [],
          s = t.length;

      for (e = 0; e !== s; i.push(t[e++])) {
        ;
      }

      return i;
    },
        u = function u() {},
        p = function () {
      var t = Object.prototype.toString,
          e = t.call([]);
      return function (i) {
        return null != i && (i instanceof Array || "object" == _typeof(i) && !!i.push && t.call(i) === e);
      };
    }(),
        d = {},
        f = function f(e, s, n, o) {
      this.sc = d[e] ? d[e].sc : [], d[e] = this, this.gsClass = null, this.func = n;
      var r = [];
      this.check = function (a) {
        for (var h, c, u, p, m, g = s.length, _ = g; --g > -1;) {
          (h = d[s[g]] || new f(s[g], [])).gsClass ? (r[g] = h.gsClass, _--) : a && h.sc.push(this);
        }

        if (0 === _ && n) for (c = ("com.greensock." + e).split("."), u = c.pop(), p = l(c.join("."))[u] = this.gsClass = n.apply(n, r), o && (i[u] = p, !(m =  true && module.exports) && "function" == "function" && __webpack_require__.amdO ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
          return p;
        }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : "TweenMax" === e && m && (module.exports = p)), g = 0; g < this.sc.length; g++) {
          this.sc[g].check();
        }
      }, this.check(!0);
    },
        m = t._gsDefine = function (t, e, i, s) {
      return new f(t, e, i, s);
    },
        g = h._class = function (t, e, i) {
      return e = e || function () {}, m(t, [], function () {
        return e;
      }, i), e;
    };

    m.globals = i;

    var _ = [0, 0, 1, 1],
        v = [],
        b = g("easing.Ease", function (t, e, i, s) {
      this._func = t, this._type = i || 0, this._power = s || 0, this._params = e ? _.concat(e) : _;
    }, !0),
        y = b.map = {},
        w = b.register = function (t, e, i, s) {
      for (var n, o, r, a, l = e.split(","), c = l.length, u = (i || "easeIn,easeOut,easeInOut").split(","); --c > -1;) {
        for (o = l[c], n = s ? g("easing." + o, null, !0) : h.easing[o] || {}, r = u.length; --r > -1;) {
          a = u[r], y[o + "." + a] = y[a + o] = n[a] = t.getRatio ? t : t[a] || new t();
        }
      }
    };

    for ((o = b.prototype)._calcEnd = !1, o.getRatio = function (t) {
      if (this._func) return this._params[0] = t, this._func.apply(null, this._params);
      var e = this._type,
          i = this._power,
          s = 1 === e ? 1 - t : 2 === e ? t : .5 > t ? 2 * t : 2 * (1 - t);
      return 1 === i ? s *= s : 2 === i ? s *= s * s : 3 === i ? s *= s * s * s : 4 === i && (s *= s * s * s * s), 1 === e ? 1 - s : 2 === e ? s : .5 > t ? s / 2 : 1 - s / 2;
    }, n = (s = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"]).length; --n > -1;) {
      o = s[n] + ",Power" + n, w(new b(null, null, 1, n), o, "easeOut", !0), w(new b(null, null, 2, n), o, "easeIn" + (0 === n ? ",easeNone" : "")), w(new b(null, null, 3, n), o, "easeInOut");
    }

    y.linear = h.easing.Linear.easeIn, y.swing = h.easing.Quad.easeInOut;
    var x = g("events.EventDispatcher", function (t) {
      this._listeners = {}, this._eventTarget = t || this;
    });
    (o = x.prototype).addEventListener = function (t, e, i, s, n) {
      n = n || 0;
      var o,
          l,
          h = this._listeners[t],
          c = 0;

      for (null == h && (this._listeners[t] = h = []), l = h.length; --l > -1;) {
        (o = h[l]).c === e && o.s === i ? h.splice(l, 1) : 0 === c && o.pr < n && (c = l + 1);
      }

      h.splice(c, 0, {
        c: e,
        s: i,
        up: s,
        pr: n
      }), this !== r || a || r.wake();
    }, o.removeEventListener = function (t, e) {
      var i,
          s = this._listeners[t];
      if (s) for (i = s.length; --i > -1;) {
        if (s[i].c === e) return void s.splice(i, 1);
      }
    }, o.dispatchEvent = function (t) {
      var e,
          i,
          s,
          n = this._listeners[t];
      if (n) for (e = n.length, i = this._eventTarget; --e > -1;) {
        (s = n[e]) && (s.up ? s.c.call(s.s || i, {
          type: t,
          target: i
        }) : s.c.call(s.s || i));
      }
    };

    var T = t.requestAnimationFrame,
        k = t.cancelAnimationFrame,
        C = Date.now || function () {
      return new Date().getTime();
    },
        S = C();

    for (n = (s = ["ms", "moz", "webkit", "o"]).length; --n > -1 && !T;) {
      T = t[s[n] + "RequestAnimationFrame"], k = t[s[n] + "CancelAnimationFrame"] || t[s[n] + "CancelRequestAnimationFrame"];
    }

    g("Ticker", function (t, e) {
      var i,
          s,
          n,
          o,
          l,
          h = this,
          c = C(),
          p = !(!1 === e || !T) && "auto",
          d = 500,
          f = 33,
          m = function m(t) {
        var e,
            r,
            a = C() - S;
        a > d && (c += a - f), S += a, h.time = (S - c) / 1e3, e = h.time - l, (!i || e > 0 || !0 === t) && (h.frame++, l += e + (e >= o ? .004 : o - e), r = !0), !0 !== t && (n = s(m)), r && h.dispatchEvent("tick");
      };

      x.call(h), h.time = h.frame = 0, h.tick = function () {
        m(!0);
      }, h.lagSmoothing = function (t, e) {
        d = t || 1e10, f = Math.min(e, d, 0);
      }, h.sleep = function () {
        null != n && (p && k ? k(n) : clearTimeout(n), s = u, n = null, h === r && (a = !1));
      }, h.wake = function (t) {
        null !== n ? h.sleep() : t ? c += -S + (S = C()) : h.frame > 10 && (S = C() - d + 5), s = 0 === i ? u : p && T ? T : function (t) {
          return setTimeout(t, 1e3 * (l - h.time) + 1 | 0);
        }, h === r && (a = !0), m(2);
      }, h.fps = function (t) {
        return arguments.length ? (i = t, o = 1 / (i || 60), l = this.time + o, void h.wake()) : i;
      }, h.useRAF = function (t) {
        return arguments.length ? (h.sleep(), p = t, void h.fps(i)) : p;
      }, h.fps(t), setTimeout(function () {
        "auto" === p && h.frame < 5 && "hidden" !== document.visibilityState && h.useRAF(!1);
      }, 1500);
    }), (o = h.Ticker.prototype = new h.events.EventDispatcher()).constructor = h.Ticker;
    var P = g("core.Animation", function (t, e) {
      if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = !0 === e.immediateRender, this.data = e.data, this._reversed = !0 === e.reversed, B) {
        a || r.wake();
        var i = this.vars.useFrames ? Y : B;
        i.add(this, i._time), this.vars.paused && this.paused(!0);
      }
    });
    r = P.ticker = new h.Ticker(), (o = P.prototype)._dirty = o._gc = o._initted = o._paused = !1, o._totalTime = o._time = 0, o._rawPrevTime = -1, o._next = o._last = o._onUpdate = o._timeline = o.timeline = null, o._paused = !1;

    var E = function E() {
      a && C() - S > 2e3 && r.wake(), setTimeout(E, 2e3);
    };

    E(), o.play = function (t, e) {
      return null != t && this.seek(t, e), this.reversed(!1).paused(!1);
    }, o.pause = function (t, e) {
      return null != t && this.seek(t, e), this.paused(!0);
    }, o.resume = function (t, e) {
      return null != t && this.seek(t, e), this.paused(!1);
    }, o.seek = function (t, e) {
      return this.totalTime(Number(t), !1 !== e);
    }, o.restart = function (t, e) {
      return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, !1 !== e, !0);
    }, o.reverse = function (t, e) {
      return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1);
    }, o.render = function (t, e, i) {}, o.invalidate = function () {
      return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, (this._gc || !this.timeline) && this._enabled(!0), this;
    }, o.isActive = function () {
      var t,
          e = this._timeline,
          i = this._startTime;
      return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime()) >= i && t < i + this.totalDuration() / this._timeScale;
    }, o._enabled = function (t, e) {
      return a || r.wake(), this._gc = !t, this._active = this.isActive(), !0 !== e && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1;
    }, o._kill = function (t, e) {
      return this._enabled(!1, !1);
    }, o.kill = function (t, e) {
      return this._kill(t, e), this;
    }, o._uncache = function (t) {
      for (var e = t ? this : this.timeline; e;) {
        e._dirty = !0, e = e.timeline;
      }

      return this;
    }, o._swapSelfInParams = function (t) {
      for (var e = t.length, i = t.concat(); --e > -1;) {
        "{self}" === t[e] && (i[e] = this);
      }

      return i;
    }, o._callback = function (t) {
      var e = this.vars;
      e[t].apply(e[t + "Scope"] || e.callbackScope || this, e[t + "Params"] || v);
    }, o.eventCallback = function (t, e, i, s) {
      if ("on" === (t || "").substr(0, 2)) {
        var n = this.vars;
        if (1 === arguments.length) return n[t];
        null == e ? delete n[t] : (n[t] = e, n[t + "Params"] = p(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, n[t + "Scope"] = s), "onUpdate" === t && (this._onUpdate = e);
      }

      return this;
    }, o.delay = function (t) {
      return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay;
    }, o.duration = function (t) {
      return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration);
    }, o.totalDuration = function (t) {
      return this._dirty = !1, arguments.length ? this.duration(t) : this._totalDuration;
    }, o.time = function (t, e) {
      return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time;
    }, o.totalTime = function (t, e, i) {
      if (a || r.wake(), !arguments.length) return this._totalTime;

      if (this._timeline) {
        if (0 > t && !i && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
          this._dirty && this.totalDuration();
          var s = this._totalDuration,
              n = this._timeline;
          if (t > s && !i && (t = s), this._startTime = (this._paused ? this._pauseTime : n._time) - (this._reversed ? s - t : t) / this._timeScale, n._dirty || this._uncache(!1), n._timeline) for (; n._timeline;) {
            n._timeline._time !== (n._startTime + n._totalTime) / n._timeScale && n.totalTime(n._totalTime, !0), n = n._timeline;
          }
        }

        this._gc && this._enabled(!0, !1), (this._totalTime !== t || 0 === this._duration) && (R.length && V(), this.render(t, e, !1), R.length && V());
      }

      return this;
    }, o.progress = o.totalProgress = function (t, e) {
      var i = this.duration();
      return arguments.length ? this.totalTime(i * t, e) : i ? this._time / i : this.ratio;
    }, o.startTime = function (t) {
      return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime;
    }, o.endTime = function (t) {
      return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale;
    }, o.timeScale = function (t) {
      if (!arguments.length) return this._timeScale;

      if (t = t || 1e-10, this._timeline && this._timeline.smoothChildTiming) {
        var e = this._pauseTime,
            i = e || 0 === e ? e : this._timeline.totalTime();
        this._startTime = i - (i - this._startTime) * this._timeScale / t;
      }

      return this._timeScale = t, this._uncache(!1);
    }, o.reversed = function (t) {
      return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed;
    }, o.paused = function (t) {
      if (!arguments.length) return this._paused;
      var e,
          i,
          s = this._timeline;
      return t != this._paused && s && (a || t || r.wake(), e = s.rawTime(), i = e - this._pauseTime, !t && s.smoothChildTiming && (this._startTime += i, this._uncache(!1)), this._pauseTime = t ? e : null, this._paused = t, this._active = this.isActive(), !t && 0 !== i && this._initted && this.duration() && (e = s.smoothChildTiming ? this._totalTime : (e - this._startTime) / this._timeScale, this.render(e, e === this._totalTime, !0))), this._gc && !t && this._enabled(!0, !1), this;
    };
    var A = g("core.SimpleTimeline", function (t) {
      P.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0;
    });
    (o = A.prototype = new P()).constructor = A, o.kill()._gc = !1, o._first = o._last = o._recent = null, o._sortChildren = !1, o.add = o.insert = function (t, e, i, s) {
      var n, o;
      if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), n = this._last, this._sortChildren) for (o = t._startTime; n && n._startTime > o;) {
        n = n._prev;
      }
      return n ? (t._next = n._next, n._next = t) : (t._next = this._first, this._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = n, this._recent = t, this._timeline && this._uncache(!0), this;
    }, o._remove = function (t, e) {
      return t.timeline === this && (e || t._enabled(!1, !0), t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), t._next = t._prev = t.timeline = null, t === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this;
    }, o.render = function (t, e, i) {
      var s,
          n = this._first;

      for (this._totalTime = this._time = this._rawPrevTime = t; n;) {
        s = n._next, (n._active || t >= n._startTime && !n._paused) && (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = s;
      }
    }, o.rawTime = function () {
      return a || r.wake(), this._totalTime;
    };

    var D = g("TweenLite", function (e, i, s) {
      if (P.call(this, i, s), this.render = D.prototype.render, null == e) throw "Cannot tween a null target.";
      this.target = e = "string" != typeof e ? e : D.selector(e) || e;
      var n,
          o,
          r,
          a = e.jquery || e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType),
          l = this.vars.overwrite;
      if (this._overwrite = l = null == l ? W[D.defaultOverwrite] : "number" == typeof l ? l >> 0 : W[l], (a || e instanceof Array || e.push && p(e)) && "number" != typeof e[0]) for (this._targets = r = c(e), this._propLookup = [], this._siblings = [], n = 0; n < r.length; n++) {
        (o = r[n]) ? "string" != typeof o ? o.length && o !== t && o[0] && (o[0] === t || o[0].nodeType && o[0].style && !o.nodeType) ? (r.splice(n--, 1), this._targets = r = r.concat(c(o))) : (this._siblings[n] = U(o, this, !1), 1 === l && this._siblings[n].length > 1 && G(o, this, null, 1, this._siblings[n])) : "string" == typeof (o = r[n--] = D.selector(o)) && r.splice(n + 1, 1) : r.splice(n--, 1);
      } else this._propLookup = {}, this._siblings = U(e, this, !1), 1 === l && this._siblings.length > 1 && G(e, this, null, 1, this._siblings);
      (this.vars.immediateRender || 0 === i && 0 === this._delay && !1 !== this.vars.immediateRender) && (this._time = -1e-10, this.render(-this._delay));
    }, !0),
        O = function O(e) {
      return e && e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType);
    };

    (o = D.prototype = new P()).constructor = D, o.kill()._gc = !1, o.ratio = 0, o._firstPT = o._targets = o._overwrittenProps = o._startAt = null, o._notifyPluginsOfEnabled = o._lazy = !1, D.version = "1.18.2", D.defaultEase = o._ease = new b(null, null, 1, 1), D.defaultOverwrite = "auto", D.ticker = r, D.autoSleep = 120, D.lagSmoothing = function (t, e) {
      r.lagSmoothing(t, e);
    }, D.selector = t.$ || t.jQuery || function (e) {
      var i = t.$ || t.jQuery;
      return i ? (D.selector = i, i(e)) : "undefined" == typeof document ? e : document.querySelectorAll ? document.querySelectorAll(e) : document.getElementById("#" === e.charAt(0) ? e.substr(1) : e);
    };

    var R = [],
        $ = {},
        M = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
        I = function I(t) {
      for (var e, i = this._firstPT; i;) {
        e = i.blob ? t ? this.join("") : this.start : i.c * t + i.s, i.r ? e = Math.round(e) : 1e-6 > e && e > -1e-6 && (e = 0), i.f ? i.fp ? i.t[i.p](i.fp, e) : i.t[i.p](e) : i.t[i.p] = e, i = i._next;
      }
    },
        L = function L(t, e, i, s) {
      var n,
          o,
          r,
          a,
          l,
          h,
          c,
          u = [t, e],
          p = 0,
          d = "",
          f = 0;

      for (u.start = t, i && (i(u), t = u[0], e = u[1]), u.length = 0, n = t.match(M) || [], o = e.match(M) || [], s && (s._next = null, s.blob = 1, u._firstPT = s), l = o.length, a = 0; l > a; a++) {
        c = o[a], h = e.substr(p, e.indexOf(c, p) - p), d += h || !a ? h : ",", p += h.length, f ? f = (f + 1) % 5 : "rgba(" === h.substr(-5) && (f = 1), c === n[a] || n.length <= a ? d += c : (d && (u.push(d), d = ""), r = parseFloat(n[a]), u.push(r), u._firstPT = {
          _next: u._firstPT,
          t: u,
          p: u.length - 1,
          s: r,
          c: ("=" === c.charAt(1) ? parseInt(c.charAt(0) + "1", 10) * parseFloat(c.substr(2)) : parseFloat(c) - r) || 0,
          f: 0,
          r: f && 4 > f
        }), p += c.length;
      }

      return (d += e.substr(p)) && u.push(d), u.setRatio = I, u;
    },
        N = function N(t, e, i, s, n, o, r, a) {
      var l,
          h,
          c = "get" === i ? t[e] : i,
          u = _typeof(t[e]),
          p = "string" == typeof s && "=" === s.charAt(1),
          d = {
        t: t,
        p: e,
        s: c,
        f: "function" === u,
        pg: 0,
        n: n || e,
        r: o,
        pr: 0,
        c: p ? parseInt(s.charAt(0) + "1", 10) * parseFloat(s.substr(2)) : parseFloat(s) - c || 0
      };

      return "number" !== u && ("function" === u && "get" === i && (h = e.indexOf("set") || "function" != typeof t["get" + e.substr(3)] ? e : "get" + e.substr(3), d.s = c = r ? t[h](r) : t[h]()), "string" == typeof c && (r || isNaN(c)) ? (d.fp = r, l = L(c, s, a || D.defaultStringFilter, d), d = {
        t: l,
        p: "setRatio",
        s: 0,
        c: 1,
        f: 2,
        pg: 0,
        n: n || e,
        pr: 0
      }) : p || (d.s = parseFloat(c), d.c = parseFloat(s) - d.s || 0)), d.c ? ((d._next = this._firstPT) && (d._next._prev = d), this._firstPT = d, d) : void 0;
    },
        z = D._internals = {
      isArray: p,
      isSelector: O,
      lazyTweens: R,
      blobDif: L
    },
        j = D._plugins = {},
        F = z.tweenLookup = {},
        H = 0,
        X = z.reservedProps = {
      ease: 1,
      delay: 1,
      overwrite: 1,
      onComplete: 1,
      onCompleteParams: 1,
      onCompleteScope: 1,
      useFrames: 1,
      runBackwards: 1,
      startAt: 1,
      onUpdate: 1,
      onUpdateParams: 1,
      onUpdateScope: 1,
      onStart: 1,
      onStartParams: 1,
      onStartScope: 1,
      onReverseComplete: 1,
      onReverseCompleteParams: 1,
      onReverseCompleteScope: 1,
      onRepeat: 1,
      onRepeatParams: 1,
      onRepeatScope: 1,
      easeParams: 1,
      yoyo: 1,
      immediateRender: 1,
      repeat: 1,
      repeatDelay: 1,
      data: 1,
      paused: 1,
      reversed: 1,
      autoCSS: 1,
      lazy: 1,
      onOverwrite: 1,
      callbackScope: 1,
      stringFilter: 1
    },
        W = {
      none: 0,
      all: 1,
      auto: 2,
      concurrent: 3,
      allOnStart: 4,
      preexisting: 5,
      "true": 1,
      "false": 0
    },
        Y = P._rootFramesTimeline = new A(),
        B = P._rootTimeline = new A(),
        q = 30,
        V = z.lazyRender = function () {
      var t,
          e = R.length;

      for ($ = {}; --e > -1;) {
        (t = R[e]) && !1 !== t._lazy && (t.render(t._lazy[0], t._lazy[1], !0), t._lazy = !1);
      }

      R.length = 0;
    };

    B._startTime = r.time, Y._startTime = r.frame, B._active = Y._active = !0, setTimeout(V, 1), P._updateRoot = D.render = function () {
      var t, e, i;

      if (R.length && V(), B.render((r.time - B._startTime) * B._timeScale, !1, !1), Y.render((r.frame - Y._startTime) * Y._timeScale, !1, !1), R.length && V(), r.frame >= q) {
        q = r.frame + (parseInt(D.autoSleep, 10) || 120);

        for (i in F) {
          for (t = (e = F[i].tweens).length; --t > -1;) {
            e[t]._gc && e.splice(t, 1);
          }

          0 === e.length && delete F[i];
        }

        if ((!(i = B._first) || i._paused) && D.autoSleep && !Y._first && 1 === r._listeners.tick.length) {
          for (; i && i._paused;) {
            i = i._next;
          }

          i || r.sleep();
        }
      }
    }, r.addEventListener("tick", P._updateRoot);

    var U = function U(t, e, i) {
      var s,
          n,
          o = t._gsTweenID;
      if (F[o || (t._gsTweenID = o = "t" + H++)] || (F[o] = {
        target: t,
        tweens: []
      }), e && (s = F[o].tweens, s[n = s.length] = e, i)) for (; --n > -1;) {
        s[n] === e && s.splice(n, 1);
      }
      return F[o].tweens;
    },
        Q = function Q(t, e, i, s) {
      var n,
          o,
          r = t.vars.onOverwrite;
      return r && (n = r(t, e, i, s)), (r = D.onOverwrite) && (o = r(t, e, i, s)), !1 !== n && !1 !== o;
    },
        G = function G(t, e, i, s, n) {
      var o, r, a, l;

      if (1 === s || s >= 4) {
        for (l = n.length, o = 0; l > o; o++) {
          if ((a = n[o]) !== e) a._gc || a._kill(null, t, e) && (r = !0);else if (5 === s) break;
        }

        return r;
      }

      var h,
          c = e._startTime + 1e-10,
          u = [],
          p = 0,
          d = 0 === e._duration;

      for (o = n.length; --o > -1;) {
        (a = n[o]) === e || a._gc || a._paused || (a._timeline !== e._timeline ? (h = h || Z(e, 0, d), 0 === Z(a, h, d) && (u[p++] = a)) : a._startTime <= c && a._startTime + a.totalDuration() / a._timeScale > c && ((d || !a._initted) && c - a._startTime <= 2e-10 || (u[p++] = a)));
      }

      for (o = p; --o > -1;) {
        if (a = u[o], 2 === s && a._kill(i, t, e) && (r = !0), 2 !== s || !a._firstPT && a._initted) {
          if (2 !== s && !Q(a, e)) continue;
          a._enabled(!1, !1) && (r = !0);
        }
      }

      return r;
    },
        Z = function Z(t, e, i) {
      for (var s = t._timeline, n = s._timeScale, o = t._startTime; s._timeline;) {
        if (o += s._startTime, n *= s._timeScale, s._paused) return -100;
        s = s._timeline;
      }

      return (o /= n) > e ? o - e : i && o === e || !t._initted && 2e-10 > o - e ? 1e-10 : (o += t.totalDuration() / t._timeScale / n) > e + 1e-10 ? 0 : o - e - 1e-10;
    };

    o._init = function () {
      var t,
          e,
          i,
          s,
          n,
          o = this.vars,
          r = this._overwrittenProps,
          a = this._duration,
          l = !!o.immediateRender,
          h = o.ease;

      if (o.startAt) {
        this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), n = {};

        for (s in o.startAt) {
          n[s] = o.startAt[s];
        }

        if (n.overwrite = !1, n.immediateRender = !0, n.lazy = l && !1 !== o.lazy, n.startAt = n.delay = null, this._startAt = D.to(this.target, 0, n), l) if (this._time > 0) this._startAt = null;else if (0 !== a) return;
      } else if (o.runBackwards && 0 !== a) if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;else {
        0 !== this._time && (l = !1), i = {};

        for (s in o) {
          X[s] && "autoCSS" !== s || (i[s] = o[s]);
        }

        if (i.overwrite = 0, i.data = "isFromStart", i.lazy = l && !1 !== o.lazy, i.immediateRender = l, this._startAt = D.to(this.target, 0, i), l) {
          if (0 === this._time) return;
        } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null);
      }

      if (this._ease = h = h ? h instanceof b ? h : "function" == typeof h ? new b(h, o.easeParams) : y[h] || D.defaultEase : D.defaultEase, o.easeParams instanceof Array && h.config && (this._ease = h.config.apply(h, o.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets) for (t = this._targets.length; --t > -1;) {
        this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], r ? r[t] : null) && (e = !0);
      } else e = this._initProps(this.target, this._propLookup, this._siblings, r);
      if (e && D._onPluginEvent("_onInitAllProps", this), r && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), o.runBackwards) for (i = this._firstPT; i;) {
        i.s += i.c, i.c = -i.c, i = i._next;
      }
      this._onUpdate = o.onUpdate, this._initted = !0;
    }, o._initProps = function (e, i, s, n) {
      var o, r, a, l, h, c;
      if (null == e) return !1;
      $[e._gsTweenID] && V(), this.vars.css || e.style && e !== t && e.nodeType && j.css && !1 !== this.vars.autoCSS && function (t, e) {
        var i,
            s = {};

        for (i in t) {
          X[i] || i in e && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!j[i] || j[i] && j[i]._autoCSS) || (s[i] = t[i], delete t[i]);
        }

        t.css = s;
      }(this.vars, e);

      for (o in this.vars) {
        if (c = this.vars[o], X[o]) c && (c instanceof Array || c.push && p(c)) && -1 !== c.join("").indexOf("{self}") && (this.vars[o] = c = this._swapSelfInParams(c, this));else if (j[o] && (l = new j[o]())._onInitTween(e, this.vars[o], this)) {
          for (this._firstPT = h = {
            _next: this._firstPT,
            t: l,
            p: "setRatio",
            s: 0,
            c: 1,
            f: 1,
            n: o,
            pg: 1,
            pr: l._priority
          }, r = l._overwriteProps.length; --r > -1;) {
            i[l._overwriteProps[r]] = this._firstPT;
          }

          (l._priority || l._onInitAllProps) && (a = !0), (l._onDisable || l._onEnable) && (this._notifyPluginsOfEnabled = !0), h._next && (h._next._prev = h);
        } else i[o] = N.call(this, e, o, "get", c, o, 0, null, this.vars.stringFilter);
      }

      return n && this._kill(n, e) ? this._initProps(e, i, s, n) : this._overwrite > 1 && this._firstPT && s.length > 1 && G(e, this, i, this._overwrite, s) ? (this._kill(i, e), this._initProps(e, i, s, n)) : (this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration) && ($[e._gsTweenID] = !0), a);
    }, o.render = function (t, e, i) {
      var s,
          n,
          o,
          r,
          a = this._time,
          l = this._duration,
          h = this._rawPrevTime;
      if (t >= l - 1e-7) this._totalTime = this._time = l, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (s = !0, n = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === l && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (0 > h || 0 >= t && t >= -1e-7 || 1e-10 === h && "isPause" !== this.data) && h !== t && (i = !0, h > 1e-10 && (n = "onReverseComplete")), this._rawPrevTime = r = !e || t || h === t ? t : 1e-10);else if (1e-7 > t) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== a || 0 === l && h > 0) && (n = "onReverseComplete", s = this._reversed), 0 > t && (this._active = !1, 0 === l && (this._initted || !this.vars.lazy || i) && (h >= 0 && (1e-10 !== h || "isPause" !== this.data) && (i = !0), this._rawPrevTime = r = !e || t || h === t ? t : 1e-10)), this._initted || (i = !0);else if (this._totalTime = this._time = t, this._easeType) {
        var c = t / l,
            u = this._easeType,
            p = this._easePower;
        (1 === u || 3 === u && c >= .5) && (c = 1 - c), 3 === u && (c *= 2), 1 === p ? c *= c : 2 === p ? c *= c * c : 3 === p ? c *= c * c * c : 4 === p && (c *= c * c * c * c), this.ratio = 1 === u ? 1 - c : 2 === u ? c : .5 > t / l ? c / 2 : 1 - c / 2;
      } else this.ratio = this._ease.getRatio(t / l);

      if (this._time !== a || i) {
        if (!this._initted) {
          if (this._init(), !this._initted || this._gc) return;
          if (!i && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = a, this._rawPrevTime = h, R.push(this), void (this._lazy = [t, e]);
          this._time && !s ? this.ratio = this._ease.getRatio(this._time / l) : s && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1));
        }

        for (!1 !== this._lazy && (this._lazy = !1), this._active || !this._paused && this._time !== a && t >= 0 && (this._active = !0), 0 === a && (this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : n || (n = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === l) && (e || this._callback("onStart"))), o = this._firstPT; o;) {
          o.f ? o.t[o.p](o.c * this.ratio + o.s) : o.t[o.p] = o.c * this.ratio + o.s, o = o._next;
        }

        this._onUpdate && (0 > t && this._startAt && -1e-4 !== t && this._startAt.render(t, e, i), e || (this._time !== a || s) && this._callback("onUpdate")), n && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && -1e-4 !== t && this._startAt.render(t, e, i), s && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[n] && this._callback(n), 0 === l && 1e-10 === this._rawPrevTime && 1e-10 !== r && (this._rawPrevTime = 0));
      }
    }, o._kill = function (t, e, i) {
      if ("all" === t && (t = null), null == t && (null == e || e === this.target)) return this._lazy = !1, this._enabled(!1, !1);
      e = "string" != typeof e ? e || this._targets || this.target : D.selector(e) || e;
      var s,
          n,
          o,
          r,
          a,
          l,
          h,
          c,
          u,
          d = i && this._time && i._startTime === this._startTime && this._timeline === i._timeline;
      if ((p(e) || O(e)) && "number" != typeof e[0]) for (s = e.length; --s > -1;) {
        this._kill(t, e[s], i) && (l = !0);
      } else {
        if (this._targets) {
          for (s = this._targets.length; --s > -1;) {
            if (e === this._targets[s]) {
              a = this._propLookup[s] || {}, this._overwrittenProps = this._overwrittenProps || [], n = this._overwrittenProps[s] = t ? this._overwrittenProps[s] || {} : "all";
              break;
            }
          }
        } else {
          if (e !== this.target) return !1;
          a = this._propLookup, n = this._overwrittenProps = t ? this._overwrittenProps || {} : "all";
        }

        if (a) {
          if (h = t || a, c = t !== n && "all" !== n && t !== a && ("object" != _typeof(t) || !t._tempKill), i && (D.onOverwrite || this.vars.onOverwrite)) {
            for (o in h) {
              a[o] && (u || (u = []), u.push(o));
            }

            if ((u || !t) && !Q(this, i, e, u)) return !1;
          }

          for (o in h) {
            (r = a[o]) && (d && (r.f ? r.t[r.p](r.s) : r.t[r.p] = r.s, l = !0), r.pg && r.t._kill(h) && (l = !0), r.pg && 0 !== r.t._overwriteProps.length || (r._prev ? r._prev._next = r._next : r === this._firstPT && (this._firstPT = r._next), r._next && (r._next._prev = r._prev), r._next = r._prev = null), delete a[o]), c && (n[o] = 1);
          }

          !this._firstPT && this._initted && this._enabled(!1, !1);
        }
      }
      return l;
    }, o.invalidate = function () {
      return this._notifyPluginsOfEnabled && D._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], P.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -1e-10, this.render(-this._delay)), this;
    }, o._enabled = function (t, e) {
      if (a || r.wake(), t && this._gc) {
        var i,
            s = this._targets;
        if (s) for (i = s.length; --i > -1;) {
          this._siblings[i] = U(s[i], this, !0);
        } else this._siblings = U(this.target, this, !0);
      }

      return P.prototype._enabled.call(this, t, e), !(!this._notifyPluginsOfEnabled || !this._firstPT) && D._onPluginEvent(t ? "_onEnable" : "_onDisable", this);
    }, D.to = function (t, e, i) {
      return new D(t, e, i);
    }, D.from = function (t, e, i) {
      return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new D(t, e, i);
    }, D.fromTo = function (t, e, i, s) {
      return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, new D(t, e, s);
    }, D.delayedCall = function (t, e, i, s, n) {
      return new D(e, 0, {
        delay: t,
        onComplete: e,
        onCompleteParams: i,
        callbackScope: s,
        onReverseComplete: e,
        onReverseCompleteParams: i,
        immediateRender: !1,
        lazy: !1,
        useFrames: n,
        overwrite: 0
      });
    }, D.set = function (t, e) {
      return new D(t, 0, e);
    }, D.getTweensOf = function (t, e) {
      if (null == t) return [];
      t = "string" != typeof t ? t : D.selector(t) || t;
      var i, s, n, o;

      if ((p(t) || O(t)) && "number" != typeof t[0]) {
        for (i = t.length, s = []; --i > -1;) {
          s = s.concat(D.getTweensOf(t[i], e));
        }

        for (i = s.length; --i > -1;) {
          for (o = s[i], n = i; --n > -1;) {
            o === s[n] && s.splice(i, 1);
          }
        }
      } else for (s = U(t).concat(), i = s.length; --i > -1;) {
        (s[i]._gc || e && !s[i].isActive()) && s.splice(i, 1);
      }

      return s;
    }, D.killTweensOf = D.killDelayedCallsTo = function (t, e, i) {
      "object" == _typeof(e) && (i = e, e = !1);

      for (var s = D.getTweensOf(t, e), n = s.length; --n > -1;) {
        s[n]._kill(i, t);
      }
    };
    var K = g("plugins.TweenPlugin", function (t, e) {
      this._overwriteProps = (t || "").split(","), this._propName = this._overwriteProps[0], this._priority = e || 0, this._super = K.prototype;
    }, !0);

    if (o = K.prototype, K.version = "1.18.0", K.API = 2, o._firstPT = null, o._addTween = N, o.setRatio = I, o._kill = function (t) {
      var e,
          i = this._overwriteProps,
          s = this._firstPT;
      if (null != t[this._propName]) this._overwriteProps = [];else for (e = i.length; --e > -1;) {
        null != t[i[e]] && i.splice(e, 1);
      }

      for (; s;) {
        null != t[s.n] && (s._next && (s._next._prev = s._prev), s._prev ? (s._prev._next = s._next, s._prev = null) : this._firstPT === s && (this._firstPT = s._next)), s = s._next;
      }

      return !1;
    }, o._roundProps = function (t, e) {
      for (var i = this._firstPT; i;) {
        (t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")]) && (i.r = e), i = i._next;
      }
    }, D._onPluginEvent = function (t, e) {
      var i,
          s,
          n,
          o,
          r,
          a = e._firstPT;

      if ("_onInitAllProps" === t) {
        for (; a;) {
          for (r = a._next, s = n; s && s.pr > a.pr;) {
            s = s._next;
          }

          (a._prev = s ? s._prev : o) ? a._prev._next = a : n = a, (a._next = s) ? s._prev = a : o = a, a = r;
        }

        a = e._firstPT = n;
      }

      for (; a;) {
        a.pg && "function" == typeof a.t[t] && a.t[t]() && (i = !0), a = a._next;
      }

      return i;
    }, K.activate = function (t) {
      for (var e = t.length; --e > -1;) {
        t[e].API === K.API && (j[new t[e]()._propName] = t[e]);
      }

      return !0;
    }, m.plugin = function (t) {
      if (!(t && t.propName && t.init && t.API)) throw "illegal plugin definition.";
      var e,
          i = t.propName,
          s = t.priority || 0,
          n = t.overwriteProps,
          o = {
        init: "_onInitTween",
        set: "setRatio",
        kill: "_kill",
        round: "_roundProps",
        initAll: "_onInitAllProps"
      },
          r = g("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function () {
        K.call(this, i, s), this._overwriteProps = n || [];
      }, !0 === t.global),
          a = r.prototype = new K(i);
      a.constructor = r, r.API = t.API;

      for (e in o) {
        "function" == typeof t[e] && (a[o[e]] = t[e]);
      }

      return r.version = t.version, K.activate([r]), r;
    }, s = t._gsQueue) {
      for (n = 0; n < s.length; n++) {
        s[n]();
      }

      for (o in d) {
        d[o].func || t.console.log("GSAP encountered missing dependency: com.greensock." + o);
      }
    }

    a = !1;
  }
}( true && module.exports && "undefined" != typeof __webpack_require__.g ? __webpack_require__.g : this || window), function (t) {
  function e(e, i) {
    this.element = t(e), this.lastValues = {}, t.isArray(i) || (i = [i || {}]), i.length || i.push({}), this.optionList = i;
    var s = this.element.css("transform") || "";
    this.defaultZIndex = this.element.css("z-index") || 100, "auto" == this.defaultZIndex ? this.defaultZIndex = 100 : "0" == this.defaultZIndex && "none" != s && (this.defaultZIndex = 100), this.updateOptions(), this.offsetY = 0, this.lastY = 0, this.stick = f.None, this.spacer = t("<div />"), this.spacer[0].id = e.id, this.spacer[0].className = e.className, this.spacer[0].style.cssText = e.style.cssText, this.spacer.addClass(l), this.spacer[0].style.cssText += ";visibility: hidden !important;display: none !important", this.spacer.insertAfter(this.element), "static" == this.element.parent().css("position") && this.element.parent().css("position", "relative"), this.origWillChange = this.element.css("will-change"), "auto" == this.origWillChange && this.element.css("will-change", "transform"), "none" == s ? this.element.css("transform", "translateZ(0)") : -1 == s.indexOf("matrix3d") && this.element.css("transform", this.element.css("transform") + " translateZ(0)"), this.bound(), this.precalculate(), this.store();
  }

  function i() {
    _ = window.innerHeight || document.documentElement.clientHeight, v = window.innerWidth || document.documentElement.clientWidth, s();
  }

  function s() {
    g = !0, t(h).each(function () {
      t(this).data(a).refresh();
    }), setTimeout(function () {
      g = !1;
    });
  }

  function n() {
    g = !0, t(h).each(function () {
      t(this).data(a).locate();
    }), setTimeout(function () {
      g = !1;
    });
  }

  function o() {
    var e = !!(document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement);
    t(h).each(function () {
      t(this).data(a).enableWillChange(!e);
    });
  }

  function r(t) {
    g || s();
  }

  var a = "jquery-stickit",
      l = a + "-spacer",
      h = ":" + a,
      c = -1 != navigator.userAgent.indexOf("MSIE 7.0"),
      u = c ? -2 : 0,
      p = void 0 !== window.MutationObserver,
      d = window.StickScope = {
    Parent: 0,
    Document: 1
  },
      f = {
    None: 0,
    Fixed: 1,
    Absolute: 2
  },
      m = !1,
      g = !1;
  t.expr[":"][a] = function (e) {
    return !!t(e).data(a);
  }, e.prototype.trigger = function (t) {
    var e = "on" + t.charAt(0).toUpperCase() + t.slice(1);
    this.options[e] && this.options[e].call(this.element), this.element.trigger("stickit:" + t);
  }, e.prototype.isActive = function (t) {
    return (void 0 === t.screenMinWidth || v >= t.screenMinWidth) && (void 0 === t.screenMaxWidth || v <= t.screenMaxWidth);
  }, e.prototype.updateCss = function (t) {
    this.element.hasClass(this.options.className) && t.className != this.options.className && this.element.removeClass(this.options.className).addClass(t.className);
    var e = {};
    this.stick == f.Absolute ? this.options.extraHeight != t.extraHeight && (e.bottom = -this.options.extraHeight + "px") : this.options.top != t.top && (e.top = t.top + this.offsetY + "px"), this.options.zIndex != t.zIndex && (e.zIndex = this.getZIndex(t)), this.element.css(e);
  }, e.prototype.updateOptions = function () {
    var t = this.getActiveOptionsKey();

    if (this.activeKey != t) {
      this.activeKey = t;
      var e = this.getActiveOptions();
      this.options && (t ? this.stick != f.None && (e.scope == this.options.scope ? this.updateCss(e) : (this.reset(), setTimeout(this.locate.bind(this)))) : this.reset()), this.options = e, this.zIndex = this.getZIndex(e);
    }
  }, e.prototype.getZIndex = function (t) {
    return void 0 === t.zIndex ? this.defaultZIndex : t.zIndex;
  }, e.prototype.getActiveOptionsKey = function () {
    for (var t = [], e = 0; e < this.optionList.length; ++e) {
      this.isActive(this.optionList[e]) && t.push(e);
    }

    return t.join("_");
  }, e.prototype.getActiveOptions = function () {
    for (var e = {}, i = 0; i < this.optionList.length; ++i) {
      var s = this.optionList[i];
      this.isActive(s) && t.extend(e, s);
    }

    return e.scope = e.scope || d.Parent, e.className = e.className || "stick", e.top = e.top || 0, e.extraHeight = e.extraHeight || 0, void 0 === e.overflowScrolling && (e.overflowScrolling = !0), e;
  }, e.prototype.store = function () {
    var t = this.element[0];
    this.origStyle = {
      width: t.style.width,
      position: t.style.position,
      left: t.style.left,
      top: t.style.top,
      bottom: t.style.bottom,
      zIndex: t.style.zIndex
    };
  }, e.prototype.restore = function () {
    this.element.css(this.origStyle);
  }, e.prototype.bound = function () {
    var t = this.element;
    if (c || "border-box" != t.css("box-sizing")) this.extraWidth = 0;else {
      var e = parseFloat(t.css("border-left-width")) || 0,
          i = parseFloat(t.css("border-right-width")) || 0,
          s = parseFloat(t.css("padding-left")) || 0,
          n = parseFloat(t.css("padding-right")) || 0;
      this.extraWidth = e + i + s + n;
    }
    this.margin = {
      top: parseFloat(t.css("margin-top")) || 0,
      bottom: parseFloat(t.css("margin-bottom")) || 0,
      left: parseFloat(t.css("margin-left")) || 0,
      right: parseFloat(t.css("margin-right")) || 0
    }, this.parent = {
      border: {
        bottom: parseFloat(t.parent().css("border-bottom-width")) || 0
      }
    };
  }, e.prototype.precalculate = function () {
    this.baseTop = this.margin.top + this.options.top, this.basePadding = this.baseTop + this.margin.bottom, this.baseParentOffset = this.options.extraHeight - this.parent.border.bottom, this.offsetHeight = this.options.overflowScrolling ? Math.max(this.element.outerHeight(!1) + this.basePadding - _, 0) : 0, this.minOffsetHeight = -this.offsetHeight;
  }, e.prototype.reset = function () {
    this.stick == f.Absolute ? (this.trigger("unend"), this.trigger("unstick")) : this.stick == f.Fixed && this.trigger("unstick"), this.stick = f.None, this.spacer.css("width", this.origStyle.width), this.spacer[0].style.cssText += ";display: none !important", this.restore(), this.element.removeClass(this.options.className);
  }, e.prototype.setAbsolute = function (t) {
    this.stick == f.None ? (this.element.addClass(this.options.className), this.trigger("stick"), this.trigger("end")) : this.trigger("end"), this.stick = f.Absolute, this.element.css({
      width: this.element.width() + this.extraWidth + "px",
      position: "absolute",
      top: this.origStyle.top,
      left: t + "px",
      bottom: -this.options.extraHeight + "px",
      "z-index": this.zIndex
    });
  }, e.prototype.setFixed = function (t, e, i) {
    this.stick == f.None ? (this.element.addClass(this.options.className), this.trigger("stick")) : this.trigger("unend"), this.options.overflowScrolling || (i = 0), this.stick = f.Fixed, this.lastY = e, this.offsetY = i, this.element.css({
      width: this.element.width() + this.extraWidth + "px",
      position: "fixed",
      top: this.options.top + i + "px",
      left: t + "px",
      bottom: this.origStyle.bottom,
      "z-index": this.zIndex
    });
  }, e.prototype.updateScroll = function (t) {
    if (0 != this.offsetHeight && this.options.overflowScrolling) {
      var e = Math.max(this.offsetY + t - this.lastY, this.minOffsetHeight);
      e = Math.min(e, 0), this.lastY = t, this.offsetY != e && (this.offsetY = e, this.element.css("top", this.options.top + this.offsetY + "px"));
    }
  }, e.prototype.isHeigher = function () {
    return this.options.scope == d.Parent && this.element.parent().height() <= this.element.outerHeight(!1) + this.margin.bottom;
  }, e.prototype.locate = function () {
    if (this.activeKey) {
      var t,
          e,
          i,
          s = this.element,
          n = this.spacer;

      switch (this.stick) {
        case f.Fixed:
          (e = (t = n[0].getBoundingClientRect()).top - this.baseTop) >= 0 || this.isHeigher() ? this.reset() : this.options.scope == d.Parent && (t = s.parent()[0].getBoundingClientRect()).bottom + this.baseParentOffset + this.offsetHeight <= s.outerHeight(!1) + this.basePadding ? this.setAbsolute(this.spacer.position().left) : this.updateScroll(t.bottom);
          break;

        case f.Absolute:
          e = (t = n[0].getBoundingClientRect()).top - this.baseTop, i = t.left - this.margin.left, e >= 0 || this.isHeigher() ? this.reset() : (t = s.parent()[0].getBoundingClientRect()).bottom + this.baseParentOffset + this.offsetHeight > s.outerHeight(!1) + this.basePadding && this.setFixed(i + u, t.bottom, -this.offsetHeight);
          break;

        case f.None:
        default:
          if (t = s[0].getBoundingClientRect(), (e = t.top - this.baseTop) >= 0 || this.isHeigher()) return;
          var o = s.parent()[0].getBoundingClientRect();
          n.height(s.height()), n.show(), i = t.left - this.margin.left, this.options.scope == d.Document ? this.setFixed(i, t.bottom, 0) : o.bottom + this.baseParentOffset + this.offsetHeight <= s.outerHeight(!1) + this.basePadding ? this.setAbsolute(this.element.position().left) : this.setFixed(i + u, t.bottom, 0), n.width() || n.width(s.width());
      }
    }
  }, e.prototype.refresh = function () {
    if (this.updateOptions(), this.bound(), this.precalculate(), this.stick != f.None) {
      var t = this.element,
          e = this.spacer;

      if (this.lastValues.width != e.width() && t.width(this.lastValues.width = e.width()), this.lastValues.height != t.height() && e.height(this.lastValues.height = t.height()), this.stick == f.Fixed) {
        var i = this.spacer[0].getBoundingClientRect().left - this.margin.left;
        this.lastValues.left != i + "px" && t.css("left", this.lastValues.left = i + "px");
      }

      this.locate();
    } else this.locate();
  }, e.prototype.destroy = function () {
    this.reset(), this.spacer.remove(), this.element.removeData(a);
  }, e.prototype.enableWillChange = function (t) {
    "auto" == this.origWillChange && this.element.css("will-change", t ? "transform" : this.origWillChange);
  };

  var _,
      v,
      b = ["destroy", "refresh"];

  t.fn.stickit = function (s, l) {
    if ("string" == typeof s) {
      if (-1 != t.inArray(s, b)) {
        var h = arguments;
        this.each(function () {
          var e = t(this).data(a);
          e && e[s].apply(e, Array.prototype.slice.call(h, 1));
        });
      }
    } else {
      if (!m && (m = !0, i(), t(document).ready(function () {
        t(window).bind("resize", i).bind("scroll", n), t(document.body).bind("animationend webkitAnimationEnd oAnimationEnd transitionend webkitTransitionEnd oTransitionEnd", n), t(document).bind("webkitfullscreenchange mozfullscreenchange fullscreenchange MSFullscreenChange", o);
      }), p)) {
        new MutationObserver(r).observe(document, {
          attributes: !0,
          childList: !0,
          characterData: !0,
          subtree: !0
        });
      }

      l = t.isArray(s) ? s : Array.prototype.slice.call(arguments, 0), this.each(function () {
        var i = new e(this, l);
        t(this).data(a, i), i.locate();
      });
    }

    return this;
  }, t.stickit = {
    refresh: s
  };
}(jQuery), function () {
  var t,
      e,
      i,
      s,
      n,
      o = {}.hasOwnProperty;
  (s = function () {
    function t() {
      this.options_index = 0, this.parsed = [];
    }

    return t.prototype.add_node = function (t) {
      return "OPTGROUP" === t.nodeName.toUpperCase() ? this.add_group(t) : this.add_option(t);
    }, t.prototype.add_group = function (t) {
      var e, i, s, n, o, r;

      for (e = this.parsed.length, this.parsed.push({
        array_index: e,
        group: !0,
        label: this.escapeExpression(t.label),
        title: t.title ? t.title : void 0,
        children: 0,
        disabled: t.disabled,
        classes: t.className
      }), r = [], s = 0, n = (o = t.childNodes).length; s < n; s++) {
        i = o[s], r.push(this.add_option(i, e, t.disabled));
      }

      return r;
    }, t.prototype.add_option = function (t, e, i) {
      if ("OPTION" === t.nodeName.toUpperCase()) return "" !== t.text ? (null != e && (this.parsed[e].children += 1), this.parsed.push({
        array_index: this.parsed.length,
        options_index: this.options_index,
        value: t.value,
        text: t.text,
        html: t.innerHTML,
        title: t.title ? t.title : void 0,
        selected: t.selected,
        disabled: !0 === i ? i : t.disabled,
        group_array_index: e,
        group_label: null != e ? this.parsed[e].label : null,
        classes: t.className,
        style: t.style.cssText
      })) : this.parsed.push({
        array_index: this.parsed.length,
        options_index: this.options_index,
        empty: !0
      }), this.options_index += 1;
    }, t.prototype.escapeExpression = function (t) {
      var e, i;
      return null == t || !1 === t ? "" : /[\&\<\>\"\'\`]/.test(t) ? (e = {
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#x27;",
        "`": "&#x60;"
      }, i = /&(?!\w+;)|[\<\>\"\'\`]/g, t.replace(i, function (t) {
        return e[t] || "&amp;";
      })) : t;
    }, t;
  }()).select_to_array = function (t) {
    var e, i, n, o, r;

    for (i = new s(), n = 0, o = (r = t.childNodes).length; n < o; n++) {
      e = r[n], i.add_node(e);
    }

    return i.parsed;
  }, e = function () {
    function t(e, i) {
      this.form_field = e, this.options = null != i ? i : {}, t.browser_is_supported() && (this.is_multiple = this.form_field.multiple, this.set_default_text(), this.set_default_values(), this.setup(), this.set_up_html(), this.register_observers(), this.on_ready());
    }

    return t.prototype.set_default_values = function () {
      var t = this;
      return this.click_test_action = function (e) {
        return t.test_active_click(e);
      }, this.activate_action = function (e) {
        return t.activate_field(e);
      }, this.active_field = !1, this.mouse_on_container = !1, this.results_showing = !1, this.result_highlighted = null, this.allow_single_deselect = null != this.options.allow_single_deselect && null != this.form_field.options[0] && "" === this.form_field.options[0].text && this.options.allow_single_deselect, this.disable_search_threshold = this.options.disable_search_threshold || 0, this.disable_search = this.options.disable_search || !1, this.enable_split_word_search = null == this.options.enable_split_word_search || this.options.enable_split_word_search, this.group_search = null == this.options.group_search || this.options.group_search, this.search_contains = this.options.search_contains || !1, this.single_backstroke_delete = null == this.options.single_backstroke_delete || this.options.single_backstroke_delete, this.max_selected_options = this.options.max_selected_options || 1 / 0, this.inherit_select_classes = this.options.inherit_select_classes || !1, this.display_selected_options = null == this.options.display_selected_options || this.options.display_selected_options, this.display_disabled_options = null == this.options.display_disabled_options || this.options.display_disabled_options, this.include_group_label_in_selected = this.options.include_group_label_in_selected || !1, this.max_shown_results = this.options.max_shown_results || Number.POSITIVE_INFINITY, this.case_sensitive_search = this.options.case_sensitive_search || !1;
    }, t.prototype.set_default_text = function () {
      return this.form_field.getAttribute("data-placeholder") ? this.default_text = this.form_field.getAttribute("data-placeholder") : this.is_multiple ? this.default_text = this.options.placeholder_text_multiple || this.options.placeholder_text || t.default_multiple_text : this.default_text = this.options.placeholder_text_single || this.options.placeholder_text || t.default_single_text, this.results_none_found = this.form_field.getAttribute("data-no_results_text") || this.options.no_results_text || t.default_no_result_text;
    }, t.prototype.choice_label = function (t) {
      return this.include_group_label_in_selected && null != t.group_label ? "<b class='group-name'>" + t.group_label + "</b>" + t.html : t.html;
    }, t.prototype.mouse_enter = function () {
      return this.mouse_on_container = !0;
    }, t.prototype.mouse_leave = function () {
      return this.mouse_on_container = !1;
    }, t.prototype.input_focus = function (t) {
      var e = this;

      if (this.is_multiple) {
        if (!this.active_field) return setTimeout(function () {
          return e.container_mousedown();
        }, 50);
      } else if (!this.active_field) return this.activate_field();
    }, t.prototype.input_blur = function (t) {
      var e = this;
      if (!this.mouse_on_container) return this.active_field = !1, setTimeout(function () {
        return e.blur_test();
      }, 100);
    }, t.prototype.results_option_build = function (t) {
      var e, i, s, n, o, r, a;

      for (e = "", n = 0, o = 0, r = (a = this.results_data).length; o < r && (i = a[o], s = "", "" !== (s = i.group ? this.result_add_group(i) : this.result_add_option(i)) && (n++, e += s), (null != t ? t.first : void 0) && (i.selected && this.is_multiple ? this.choice_build(i) : i.selected && !this.is_multiple && this.single_set_selected_text(this.choice_label(i))), !(n >= this.max_shown_results)); o++) {
        ;
      }

      return e;
    }, t.prototype.result_add_option = function (t) {
      var e, i;
      return t.search_match && this.include_option_in_results(t) ? (e = [], t.disabled || t.selected && this.is_multiple || e.push("active-result"), !t.disabled || t.selected && this.is_multiple || e.push("disabled-result"), t.selected && e.push("result-selected"), null != t.group_array_index && e.push("group-option"), "" !== t.classes && e.push(t.classes), i = document.createElement("li"), i.className = e.join(" "), i.style.cssText = t.style, i.setAttribute("data-option-array-index", t.array_index), i.innerHTML = t.search_text, t.title && (i.title = t.title), this.outerHTML(i)) : "";
    }, t.prototype.result_add_group = function (t) {
      var e, i;
      return (t.search_match || t.group_match) && t.active_options > 0 ? ((e = []).push("group-result"), t.classes && e.push(t.classes), i = document.createElement("li"), i.className = e.join(" "), i.innerHTML = t.search_text, t.title && (i.title = t.title), this.outerHTML(i)) : "";
    }, t.prototype.results_update_field = function () {
      if (this.set_default_text(), this.is_multiple || this.results_reset_cleanup(), this.result_clear_highlight(), this.results_build(), this.results_showing) return this.winnow_results();
    }, t.prototype.reset_single_select_options = function () {
      var t, e, i, s, n;

      for (n = [], e = 0, i = (s = this.results_data).length; e < i; e++) {
        (t = s[e]).selected ? n.push(t.selected = !1) : n.push(void 0);
      }

      return n;
    }, t.prototype.results_toggle = function () {
      return this.results_showing ? this.results_hide() : this.results_show();
    }, t.prototype.results_search = function (t) {
      return this.results_showing ? this.winnow_results() : this.results_show();
    }, t.prototype.winnow_results = function () {
      var t, e, i, s, n, o, r, a, l, h, c, u;

      for (this.no_results_clear(), s = 0, t = (o = this.get_search_text()).replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"), l = new RegExp(t, "i"), i = this.get_search_regex(t), h = 0, c = (u = this.results_data).length; h < c; h++) {
        (e = u[h]).search_match = !1, n = null, this.include_option_in_results(e) && (e.group && (e.group_match = !1, e.active_options = 0), null != e.group_array_index && this.results_data[e.group_array_index] && (0 === (n = this.results_data[e.group_array_index]).active_options && n.search_match && (s += 1), n.active_options += 1), e.search_text = e.group ? e.label : e.html, e.group && !this.group_search || (e.search_match = this.search_string_match(e.search_text, i), e.search_match && !e.group && (s += 1), e.search_match ? (o.length && (r = e.search_text.search(l), a = e.search_text.substr(0, r + o.length) + "</em>" + e.search_text.substr(r + o.length), e.search_text = a.substr(0, r) + "<em>" + a.substr(r)), null != n && (n.group_match = !0)) : null != e.group_array_index && this.results_data[e.group_array_index].search_match && (e.search_match = !0)));
      }

      return this.result_clear_highlight(), s < 1 && o.length ? (this.update_results_content(""), this.no_results(o)) : (this.update_results_content(this.results_option_build()), this.winnow_results_set_highlight());
    }, t.prototype.get_search_regex = function (t) {
      var e, i;
      return e = this.search_contains ? "" : "^", i = this.case_sensitive_search ? "" : "i", new RegExp(e + t, i);
    }, t.prototype.search_string_match = function (t, e) {
      var i, s, n, o;
      if (e.test(t)) return !0;
      if (this.enable_split_word_search && (t.indexOf(" ") >= 0 || 0 === t.indexOf("[")) && (s = t.replace(/\[|\]/g, "").split(" ")).length) for (n = 0, o = s.length; n < o; n++) {
        if (i = s[n], e.test(i)) return !0;
      }
    }, t.prototype.choices_count = function () {
      var t, e, i;
      if (null != this.selected_option_count) return this.selected_option_count;

      for (this.selected_option_count = 0, t = 0, e = (i = this.form_field.options).length; t < e; t++) {
        i[t].selected && (this.selected_option_count += 1);
      }

      return this.selected_option_count;
    }, t.prototype.choices_click = function (t) {
      if (t.preventDefault(), !this.results_showing && !this.is_disabled) return this.results_show();
    }, t.prototype.keyup_checker = function (t) {
      var e, i;

      switch (e = null != (i = t.which) ? i : t.keyCode, this.search_field_scale(), e) {
        case 8:
          if (this.is_multiple && this.backstroke_length < 1 && this.choices_count() > 0) return this.keydown_backstroke();
          if (!this.pending_backstroke) return this.result_clear_highlight(), this.results_search();
          break;

        case 13:
          if (t.preventDefault(), this.results_showing) return this.result_select(t);
          break;

        case 27:
          return this.results_showing && this.results_hide(), !0;

        case 9:
        case 38:
        case 40:
        case 16:
        case 91:
        case 17:
        case 18:
          break;

        default:
          return this.results_search();
      }
    }, t.prototype.clipboard_event_checker = function (t) {
      var e = this;
      return setTimeout(function () {
        return e.results_search();
      }, 50);
    }, t.prototype.container_width = function () {
      return null != this.options.width ? this.options.width : this.form_field.offsetWidth + "px";
    }, t.prototype.include_option_in_results = function (t) {
      return !(this.is_multiple && !this.display_selected_options && t.selected) && !(!this.display_disabled_options && t.disabled) && !t.empty;
    }, t.prototype.search_results_touchstart = function (t) {
      return this.touch_started = !0, this.search_results_mouseover(t);
    }, t.prototype.search_results_touchmove = function (t) {
      return this.touch_started = !1, this.search_results_mouseout(t);
    }, t.prototype.search_results_touchend = function (t) {
      if (this.touch_started) return this.search_results_mouseup(t);
    }, t.prototype.outerHTML = function (t) {
      var e;
      return t.outerHTML ? t.outerHTML : ((e = document.createElement("div")).appendChild(t), e.innerHTML);
    }, t.browser_is_supported = function () {
      return "Microsoft Internet Explorer" === window.navigator.appName ? document.documentMode >= 8 : !(/iP(od|hone)/i.test(window.navigator.userAgent) || /IEMobile/i.test(window.navigator.userAgent) || /Windows Phone/i.test(window.navigator.userAgent) || /BlackBerry/i.test(window.navigator.userAgent) || /BB10/i.test(window.navigator.userAgent) || /Android.*Mobile/i.test(window.navigator.userAgent));
    }, t.default_multiple_text = "Select Some Options", t.default_single_text = "Select an Option", t.default_no_result_text = "No results match", t;
  }(), (t = jQuery).fn.extend({
    chosen: function chosen(s) {
      return e.browser_is_supported() ? this.each(function (e) {
        var n, o;
        o = (n = t(this)).data("chosen"), "destroy" !== s ? o instanceof i || n.data("chosen", new i(this, s)) : o instanceof i && o.destroy();
      }) : this;
    }
  }), i = function (i) {
    function r() {
      return n = r.__super__.constructor.apply(this, arguments);
    }

    return function (t, e) {
      function i() {
        this.constructor = t;
      }

      for (var s in e) {
        o.call(e, s) && (t[s] = e[s]);
      }

      i.prototype = e.prototype, t.prototype = new i(), t.__super__ = e.prototype;
    }(r, e), r.prototype.setup = function () {
      return this.form_field_jq = t(this.form_field), this.current_selectedIndex = this.form_field.selectedIndex, this.is_rtl = this.form_field_jq.hasClass("chosen-rtl");
    }, r.prototype.set_up_html = function () {
      var e, i;
      return (e = ["chosen-container"]).push("chosen-container-" + (this.is_multiple ? "multi" : "single")), this.inherit_select_classes && this.form_field.className && e.push(this.form_field.className), this.is_rtl && e.push("chosen-rtl"), i = {
        "class": e.join(" "),
        style: "width: " + this.container_width() + ";",
        title: this.form_field.title
      }, this.form_field.id.length && (i.id = this.form_field.id.replace(/[^\w]/g, "_") + "_chosen"), this.container = t("<div />", i), this.is_multiple ? this.container.html('<ul class="chosen-choices"><li class="search-field"><input type="text" value="' + this.default_text + '" class="default" autocomplete="off" style="width:25px;" /></li></ul><div class="chosen-drop"><ul class="chosen-results"></ul></div>') : this.container.html('<a class="chosen-single chosen-default"><span>' + this.default_text + '</span><div><b></b></div></a><div class="chosen-drop"><div class="chosen-search"><input type="text" autocomplete="off" /></div><ul class="chosen-results"></ul></div>'), this.form_field_jq.hide().after(this.container), this.dropdown = this.container.find("div.chosen-drop").first(), this.search_field = this.container.find("input").first(), this.search_results = this.container.find("ul.chosen-results").first(), this.search_field_scale(), this.search_no_results = this.container.find("li.no-results").first(), this.is_multiple ? (this.search_choices = this.container.find("ul.chosen-choices").first(), this.search_container = this.container.find("li.search-field").first()) : (this.search_container = this.container.find("div.chosen-search").first(), this.selected_item = this.container.find(".chosen-single").first()), this.results_build(), this.set_tab_index(), this.set_label_behavior();
    }, r.prototype.on_ready = function () {
      return this.form_field_jq.trigger("chosen:ready", {
        chosen: this
      });
    }, r.prototype.register_observers = function () {
      var t = this;
      return this.container.bind("touchstart.chosen", function (e) {
        return t.container_mousedown(e), e.preventDefault();
      }), this.container.bind("touchend.chosen", function (e) {
        return t.container_mouseup(e), e.preventDefault();
      }), this.container.bind("mousedown.chosen", function (e) {
        t.container_mousedown(e);
      }), this.container.bind("mouseup.chosen", function (e) {
        t.container_mouseup(e);
      }), this.container.bind("mouseenter.chosen", function (e) {
        t.mouse_enter(e);
      }), this.container.bind("mouseleave.chosen", function (e) {
        t.mouse_leave(e);
      }), this.search_results.bind("mouseup.chosen", function (e) {
        t.search_results_mouseup(e);
      }), this.search_results.bind("mouseover.chosen", function (e) {
        t.search_results_mouseover(e);
      }), this.search_results.bind("mouseout.chosen", function (e) {
        t.search_results_mouseout(e);
      }), this.search_results.bind("mousewheel.chosen DOMMouseScroll.chosen", function (e) {
        t.search_results_mousewheel(e);
      }), this.search_results.bind("touchstart.chosen", function (e) {
        t.search_results_touchstart(e);
      }), this.search_results.bind("touchmove.chosen", function (e) {
        t.search_results_touchmove(e);
      }), this.search_results.bind("touchend.chosen", function (e) {
        t.search_results_touchend(e);
      }), this.form_field_jq.bind("chosen:updated.chosen", function (e) {
        t.results_update_field(e);
      }), this.form_field_jq.bind("chosen:activate.chosen", function (e) {
        t.activate_field(e);
      }), this.form_field_jq.bind("chosen:open.chosen", function (e) {
        t.container_mousedown(e);
      }), this.form_field_jq.bind("chosen:close.chosen", function (e) {
        t.input_blur(e);
      }), this.search_field.bind("blur.chosen", function (e) {
        t.input_blur(e);
      }), this.search_field.bind("keyup.chosen", function (e) {
        t.keyup_checker(e);
      }), this.search_field.bind("keydown.chosen", function (e) {
        t.keydown_checker(e);
      }), this.search_field.bind("focus.chosen", function (e) {
        t.input_focus(e);
      }), this.search_field.bind("cut.chosen", function (e) {
        t.clipboard_event_checker(e);
      }), this.search_field.bind("paste.chosen", function (e) {
        t.clipboard_event_checker(e);
      }), this.is_multiple ? this.search_choices.bind("click.chosen", function (e) {
        t.choices_click(e);
      }) : this.container.bind("click.chosen", function (t) {
        t.preventDefault();
      });
    }, r.prototype.destroy = function () {
      return t(this.container[0].ownerDocument).unbind("click.chosen", this.click_test_action), this.search_field[0].tabIndex && (this.form_field_jq[0].tabIndex = this.search_field[0].tabIndex), this.container.remove(), this.form_field_jq.removeData("chosen"), this.form_field_jq.show();
    }, r.prototype.search_field_disabled = function () {
      return this.is_disabled = this.form_field_jq[0].disabled, this.is_disabled ? (this.container.addClass("chosen-disabled"), this.search_field[0].disabled = !0, this.is_multiple || this.selected_item.unbind("focus.chosen", this.activate_action), this.close_field()) : (this.container.removeClass("chosen-disabled"), this.search_field[0].disabled = !1, this.is_multiple ? void 0 : this.selected_item.bind("focus.chosen", this.activate_action));
    }, r.prototype.container_mousedown = function (e) {
      if (!this.is_disabled && (e && "mousedown" === e.type && !this.results_showing && e.preventDefault(), null == e || !t(e.target).hasClass("search-choice-close"))) return this.active_field ? this.is_multiple || !e || t(e.target)[0] !== this.selected_item[0] && !t(e.target).parents("a.chosen-single").length || (e.preventDefault(), this.results_toggle()) : (this.is_multiple && this.search_field.val(""), t(this.container[0].ownerDocument).bind("click.chosen", this.click_test_action), this.results_show()), this.activate_field();
    }, r.prototype.container_mouseup = function (t) {
      if ("ABBR" === t.target.nodeName && !this.is_disabled) return this.results_reset(t);
    }, r.prototype.search_results_mousewheel = function (t) {
      var e;
      if (t.originalEvent && (e = t.originalEvent.deltaY || -t.originalEvent.wheelDelta || t.originalEvent.detail), null != e) return t.preventDefault(), "DOMMouseScroll" === t.type && (e *= 40), this.search_results.scrollTop(e + this.search_results.scrollTop());
    }, r.prototype.blur_test = function (t) {
      if (!this.active_field && this.container.hasClass("chosen-container-active")) return this.close_field();
    }, r.prototype.close_field = function () {
      return t(this.container[0].ownerDocument).unbind("click.chosen", this.click_test_action), this.active_field = !1, this.results_hide(), this.container.removeClass("chosen-container-active"), this.clear_backstroke(), this.show_search_field_default(), this.search_field_scale();
    }, r.prototype.activate_field = function () {
      return this.container.addClass("chosen-container-active"), this.active_field = !0, this.search_field.val(this.search_field.val()), this.search_field.focus();
    }, r.prototype.test_active_click = function (e) {
      var i;
      return (i = t(e.target).closest(".chosen-container")).length && this.container[0] === i[0] ? this.active_field = !0 : this.close_field();
    }, r.prototype.results_build = function () {
      return this.parsing = !0, this.selected_option_count = null, this.results_data = s.select_to_array(this.form_field), this.is_multiple ? this.search_choices.find("li.search-choice").remove() : this.is_multiple || (this.single_set_selected_text(), this.disable_search || this.form_field.options.length <= this.disable_search_threshold ? (this.search_field[0].readOnly = !0, this.container.addClass("chosen-container-single-nosearch")) : (this.search_field[0].readOnly = !1, this.container.removeClass("chosen-container-single-nosearch"))), this.update_results_content(this.results_option_build({
        first: !0
      })), this.search_field_disabled(), this.show_search_field_default(), this.search_field_scale(), this.parsing = !1;
    }, r.prototype.result_do_highlight = function (t) {
      var e, i, s, n, o;

      if (t.length) {
        if (this.result_clear_highlight(), this.result_highlight = t, this.result_highlight.addClass("highlighted"), s = parseInt(this.search_results.css("maxHeight"), 10), o = this.search_results.scrollTop(), n = s + o, i = this.result_highlight.position().top + this.search_results.scrollTop(), (e = i + this.result_highlight.outerHeight()) >= n) return this.search_results.scrollTop(e - s > 0 ? e - s : 0);
        if (i < o) return this.search_results.scrollTop(i);
      }
    }, r.prototype.result_clear_highlight = function () {
      return this.result_highlight && this.result_highlight.removeClass("highlighted"), this.result_highlight = null;
    }, r.prototype.results_show = function () {
      return this.is_multiple && this.max_selected_options <= this.choices_count() ? (this.form_field_jq.trigger("chosen:maxselected", {
        chosen: this
      }), !1) : (this.container.addClass("chosen-with-drop"), this.results_showing = !0, this.search_field.focus(), this.search_field.val(this.search_field.val()), this.winnow_results(), this.form_field_jq.trigger("chosen:showing_dropdown", {
        chosen: this
      }));
    }, r.prototype.update_results_content = function (t) {
      return this.search_results.html(t);
    }, r.prototype.results_hide = function () {
      return this.results_showing && (this.result_clear_highlight(), this.container.removeClass("chosen-with-drop"), this.form_field_jq.trigger("chosen:hiding_dropdown", {
        chosen: this
      })), this.results_showing = !1;
    }, r.prototype.set_tab_index = function (t) {
      var e;
      if (this.form_field.tabIndex) return e = this.form_field.tabIndex, this.form_field.tabIndex = -1, this.search_field[0].tabIndex = e;
    }, r.prototype.set_label_behavior = function () {
      var e = this;
      if (this.form_field_label = this.form_field_jq.parents("label"), !this.form_field_label.length && this.form_field.id.length && (this.form_field_label = t("label[for='" + this.form_field.id + "']")), this.form_field_label.length > 0) return this.form_field_label.bind("click.chosen", function (t) {
        return e.is_multiple ? e.container_mousedown(t) : e.activate_field();
      });
    }, r.prototype.show_search_field_default = function () {
      return this.is_multiple && this.choices_count() < 1 && !this.active_field ? (this.search_field.val(this.default_text), this.search_field.addClass("default")) : (this.search_field.val(""), this.search_field.removeClass("default"));
    }, r.prototype.search_results_mouseup = function (e) {
      var i;
      if ((i = t(e.target).hasClass("active-result") ? t(e.target) : t(e.target).parents(".active-result").first()).length) return this.result_highlight = i, this.result_select(e), this.search_field.focus();
    }, r.prototype.search_results_mouseover = function (e) {
      var i;
      if (i = t(e.target).hasClass("active-result") ? t(e.target) : t(e.target).parents(".active-result").first()) return this.result_do_highlight(i);
    }, r.prototype.search_results_mouseout = function (e) {
      if (t(e.target).hasClass("active-result")) return this.result_clear_highlight();
    }, r.prototype.choice_build = function (e) {
      var i,
          s,
          n = this;
      return i = t("<li />", {
        "class": "search-choice"
      }).html("<span>" + this.choice_label(e) + "</span>"), e.disabled ? i.addClass("search-choice-disabled") : ((s = t("<a />", {
        "class": "search-choice-close",
        "data-option-array-index": e.array_index
      })).bind("click.chosen", function (t) {
        return n.choice_destroy_link_click(t);
      }), i.append(s)), this.search_container.before(i);
    }, r.prototype.choice_destroy_link_click = function (e) {
      if (e.preventDefault(), e.stopPropagation(), !this.is_disabled) return this.choice_destroy(t(e.target));
    }, r.prototype.choice_destroy = function (t) {
      if (this.result_deselect(t[0].getAttribute("data-option-array-index"))) return this.show_search_field_default(), this.is_multiple && this.choices_count() > 0 && this.search_field.val().length < 1 && this.results_hide(), t.parents("li").first().remove(), this.search_field_scale();
    }, r.prototype.results_reset = function () {
      if (this.reset_single_select_options(), this.form_field.options[0].selected = !0, this.single_set_selected_text(), this.show_search_field_default(), this.results_reset_cleanup(), this.form_field_jq.trigger("change"), this.active_field) return this.results_hide();
    }, r.prototype.results_reset_cleanup = function () {
      return this.current_selectedIndex = this.form_field.selectedIndex, this.selected_item.find("abbr").remove();
    }, r.prototype.result_select = function (t) {
      var e, i;
      if (this.result_highlight) return e = this.result_highlight, this.result_clear_highlight(), this.is_multiple && this.max_selected_options <= this.choices_count() ? (this.form_field_jq.trigger("chosen:maxselected", {
        chosen: this
      }), !1) : (this.is_multiple ? e.removeClass("active-result") : this.reset_single_select_options(), e.addClass("result-selected"), i = this.results_data[e[0].getAttribute("data-option-array-index")], i.selected = !0, this.form_field.options[i.options_index].selected = !0, this.selected_option_count = null, this.is_multiple ? this.choice_build(i) : this.single_set_selected_text(this.choice_label(i)), (t.metaKey || t.ctrlKey) && this.is_multiple || this.results_hide(), this.show_search_field_default(), (this.is_multiple || this.form_field.selectedIndex !== this.current_selectedIndex) && this.form_field_jq.trigger("change", {
        selected: this.form_field.options[i.options_index].value
      }), this.current_selectedIndex = this.form_field.selectedIndex, t.preventDefault(), this.search_field_scale());
    }, r.prototype.single_set_selected_text = function (t) {
      return null == t && (t = this.default_text), t === this.default_text ? this.selected_item.addClass("chosen-default") : (this.single_deselect_control_build(), this.selected_item.removeClass("chosen-default")), this.selected_item.find("span").html(t);
    }, r.prototype.result_deselect = function (t) {
      var e;
      return e = this.results_data[t], !this.form_field.options[e.options_index].disabled && (e.selected = !1, this.form_field.options[e.options_index].selected = !1, this.selected_option_count = null, this.result_clear_highlight(), this.results_showing && this.winnow_results(), this.form_field_jq.trigger("change", {
        deselected: this.form_field.options[e.options_index].value
      }), this.search_field_scale(), !0);
    }, r.prototype.single_deselect_control_build = function () {
      if (this.allow_single_deselect) return this.selected_item.find("abbr").length || this.selected_item.find("span").first().after('<abbr class="search-choice-close"></abbr>'), this.selected_item.addClass("chosen-single-with-deselect");
    }, r.prototype.get_search_text = function () {
      return t("<div/>").text(t.trim(this.search_field.val())).html();
    }, r.prototype.winnow_results_set_highlight = function () {
      var t, e;
      if (e = this.is_multiple ? [] : this.search_results.find(".result-selected.active-result"), null != (t = e.length ? e.first() : this.search_results.find(".active-result").first())) return this.result_do_highlight(t);
    }, r.prototype.no_results = function (e) {
      var i;
      return (i = t('<li class="no-results">' + this.results_none_found + ' "<span></span>"</li>')).find("span").first().html(e), this.search_results.append(i), this.form_field_jq.trigger("chosen:no_results", {
        chosen: this
      });
    }, r.prototype.no_results_clear = function () {
      return this.search_results.find(".no-results").remove();
    }, r.prototype.keydown_arrow = function () {
      var t;
      return this.results_showing && this.result_highlight ? (t = this.result_highlight.nextAll("li.active-result").first()) ? this.result_do_highlight(t) : void 0 : this.results_show();
    }, r.prototype.keyup_arrow = function () {
      var t;
      return this.results_showing || this.is_multiple ? this.result_highlight ? (t = this.result_highlight.prevAll("li.active-result")).length ? this.result_do_highlight(t.first()) : (this.choices_count() > 0 && this.results_hide(), this.result_clear_highlight()) : void 0 : this.results_show();
    }, r.prototype.keydown_backstroke = function () {
      var t;
      return this.pending_backstroke ? (this.choice_destroy(this.pending_backstroke.find("a").first()), this.clear_backstroke()) : (t = this.search_container.siblings("li.search-choice").last()).length && !t.hasClass("search-choice-disabled") ? (this.pending_backstroke = t, this.single_backstroke_delete ? this.keydown_backstroke() : this.pending_backstroke.addClass("search-choice-focus")) : void 0;
    }, r.prototype.clear_backstroke = function () {
      return this.pending_backstroke && this.pending_backstroke.removeClass("search-choice-focus"), this.pending_backstroke = null;
    }, r.prototype.keydown_checker = function (t) {
      var e, i;

      switch (e = null != (i = t.which) ? i : t.keyCode, this.search_field_scale(), 8 !== e && this.pending_backstroke && this.clear_backstroke(), e) {
        case 8:
          this.backstroke_length = this.search_field.val().length;
          break;

        case 9:
          this.results_showing && !this.is_multiple && this.result_select(t), this.mouse_on_container = !1;
          break;

        case 13:
          this.results_showing && t.preventDefault();
          break;

        case 32:
          this.disable_search && t.preventDefault();
          break;

        case 38:
          t.preventDefault(), this.keyup_arrow();
          break;

        case 40:
          t.preventDefault(), this.keydown_arrow();
      }
    }, r.prototype.search_field_scale = function () {
      var e, i, s, n, o, r, a, l;

      if (this.is_multiple) {
        for (0, r = 0, n = "position:absolute; left: -1000px; top: -1000px; display:none;", a = 0, l = (o = ["font-size", "font-style", "font-weight", "font-family", "line-height", "text-transform", "letter-spacing"]).length; a < l; a++) {
          n += (s = o[a]) + ":" + this.search_field.css(s) + ";";
        }

        return (e = t("<div />", {
          style: n
        })).text(this.search_field.val()), t("body").append(e), r = e.width() + 25, e.remove(), i = this.container.outerWidth(), r > i - 10 && (r = i - 10), this.search_field.css({
          width: r + "px"
        });
      }
    }, r;
  }();
}.call(this);

/***/ }),

/***/ "./resources/web/js/script.js":
/*!************************************!*\
  !*** ./resources/web/js/script.js ***!
  \************************************/
/***/ (() => {

$(window).on("load", function () {
  'use strict';

  $('.loader-screen').fadeOut('slow');
  /* header active on scroll more than 50 px*/

  if ($(this).scrollTop() >= 30) {
    $('.header').addClass('active');
  } else {
    $('.header').removeClass('active');
  }

  $(window).on('scroll', function () {
    /* header active on scroll more than 50 px*/
    if ($(this).scrollTop() >= 30) {
      $('.header').addClass('active');
    } else {
      $('.header').removeClass('active');
    }
  });
});
/*--- window.load end here ---*/

$(document).ready(function () {
  'use strict'; // topbar toogle setting dropdown 

  $('#night-mode').on('change', function () {
    if ($(this).is(':checked')) {
      // Show popup window
      $(".app-layout").addClass('theme-black');
    } else {
      $(".app-layout").removeClass("theme-black");
    }
  }); //------ scrollbar plugin

  if ($.isFunction($.fn.perfectScrollbar)) {
    $('.app-layout').perfectScrollbar();
  } //chosen select plugin


  if ($.isFunction($.fn.chosen)) {
    $("select").chosen();
  } //----- popup display on window load	


  function delay() {
    $(".ad-wraper").fadeIn();
  }

  window.setTimeout(delay, 4000);
  $('#timer, .close').on('click', function () {
    $('.ad-wraper').addClass('closed');
    return false;
  }); // calendar date picker	

  if ($.isFunction($.fn.datepicker)) {
    $('#datepicker').datepicker({
      dateFormat: "dd-mm-yy",
      duration: "fast"
    });
  } //----- add item plus minus button


  if ($.isFunction($.fn.userincr)) {
    $(".manual-adjust").userincr({
      buttonlabels: {
        'dec': '-',
        'inc': '+'
      }
    }).data({
      'min': 0,
      'max': 20,
      'step': 1
    });
  } //----- sticky header


  if ($.isFunction($.fn.stickit)) {
    $('.topbar').stickit({
      scope: StickScope.Document
    });
  } // delete cart item


  $('.del-cart-item').on("click", function () {
    $(this).parent().slideUp();
    return false;
  }); // Stories slide show

  $('.story-user').on('click', function () {
    $('.stories-wraper').addClass('active');
  });
  $('.close-story').on('click', function () {
    $('.stories-wraper').removeClass('active');
  }); // chat attachments

  $('.more-attachments').on('click', function () {
    $('.attach-options').addClass('active');
    $(this).addClass('active');
  });
  $('.closed').on('click', function () {
    $('.more-attachments, .attach-options').removeClass('active');
  }); // Slide Panel Toggle ***//

  $(".ac-settings").on("click", function () {
    $(".side-slide").toggleClass('active');
    $(".app-layout").toggleClass('active');
    return false;
  });
  $('.close-btn').on("click", function () {
    $(".app-layout").removeClass('active');
    $(".side-slide").removeClass('active');
  }); // top search ***//

  $(".top-search").on("click", function () {
    $(".search-post").addClass('active');
    return false;
  });
  $('.close-btn').on("click", function () {
    $(".search-post").removeClass('active');
  }); // create new popup ***//

  $(".new-post").on("click", function () {
    $(".create-new").addClass('active');
    return false;
  });
  $('.close-btn').on("click", function () {
    $(".create-new").removeClass('active');
  }); // share post popup //

  $(".share-to").on("click", function () {
    $(".share-wraper").addClass('active');
    return false;
  });
  $('.close-btn').on("click", function () {
    $(".share-wraper").removeClass('active');
  }); // add class on click	

  $('.share-options > ul > li a').on('click', function () {
    $(this).toggleClass('active');
  }); // top menu list	

  $('.comment-to, .reply-coment').on('click', function () {
    $(this).siblings('.new-comment').slideToggle(300);
  }); // new post options	

  $('.more-alt').on('click', function () {
    $('.more-alt-options').slideToggle(300);
  }); // add class on click	

  $('.stat-tools > a').on('click', function () {
    $(this).toggleClass('active');
  }); // share to friends	

  $('li.friends').on('click', function () {
    $('.friends-to').slideToggle(300);
  });
  $('li.socialz').on('click', function () {
    $('.social-media').slideToggle(300);
  }); //---- nav button hamburger style	

  $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function () {
    $(this).toggleClass('open');
  }); //--- menu open on click hamburger button 	

  $('.menu-button').on('click', function () {
    $('body').toggleClass('open');
  }); //--- add class on mouse hover 

  $('.loacation > ul > li').mouseover(function () {
    $('.loacation > ul > li').removeClass("active");
    $(this).addClass("active");
    $('.location-pins > span').addClass("active");
  }); //--- owl carousel 

  if ($.isFunction($.fn.owlCarousel)) {
    $('.page-caro').owlCarousel({
      items: 5,
      loop: true,
      margin: 0,
      autoplay: true,
      autoplayTimeout: 2500,
      smartSpeed: 1000,
      autoplayHoverPause: true,
      nav: true,
      dots: false,
      responsiveClass: true,
      responsive: {
        0: {
          items: 5
        },
        600: {
          items: 5
        },
        1000: {
          items: 5
        }
      }
    });
    $('.story-status').owlCarousel({
      items: 5,
      loop: true,
      margin: 20,
      autoplay: true,
      autoplayTimeout: 2500,
      smartSpeed: 1000,
      autoplayHoverPause: true,
      nav: false,
      dots: false,
      responsiveClass: true,
      responsive: {
        0: {
          items: 5
        },
        600: {
          items: 5
        },
        1000: {
          items: 5
        }
      }
    });
    $('.suggested-groups').owlCarousel({
      items: 3,
      loop: true,
      margin: 10,
      autoplay: true,
      autoplayTimeout: 2500,
      smartSpeed: 1000,
      autoplayHoverPause: true,
      nav: false,
      dots: false,
      responsiveClass: true,
      responsive: {
        0: {
          items: 3
        },
        600: {
          items: 5
        },
        1000: {
          items: 5
        }
      }
    });
    $('.event-caro').owlCarousel({
      items: 1,
      loop: true,
      margin: 20,
      autoplay: true,
      autoplayTimeout: 2500,
      smartSpeed: 1000,
      autoplayHoverPause: true,
      nav: false,
      dots: false,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1
        },
        1000: {
          items: 1
        }
      }
    });
    $('.product-caro').owlCarousel({
      items: 1,
      loop: true,
      margin: 20,
      autoplay: true,
      autoplayTimeout: 2500,
      smartSpeed: 1000,
      autoplayHoverPause: true,
      nav: false,
      dots: true,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1
        },
        1000: {
          items: 1
        }
      }
    });
    $('.prod-categ').owlCarousel({
      items: 5,
      loop: true,
      margin: 30,
      autoplay: true,
      autoplayTimeout: 2500,
      smartSpeed: 1000,
      autoplayHoverPause: true,
      nav: false,
      dots: false,
      responsiveClass: true,
      responsive: {
        0: {
          items: 5
        },
        600: {
          items: 5
        },
        1000: {
          items: 5
        }
      }
    });
    $('.welcome-caro').owlCarousel({
      items: 1,
      loop: false,
      margin: 20,
      autoplay: true,
      autoplayTimeout: 2500,
      smartSpeed: 1000,
      autoplayHoverPause: true,
      nav: false,
      dots: true,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1
        },
        1000: {
          items: 1
        }
      }
    });
    $('.mov-caro').owlCarousel({
      items: 1,
      loop: false,
      margin: 20,
      autoplay: true,
      autoplayTimeout: 2500,
      smartSpeed: 1000,
      autoplayHoverPause: true,
      nav: false,
      dots: true,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1
        },
        1000: {
          items: 1
        }
      }
    });
    $('.movie-cat').owlCarousel({
      items: 5,
      loop: true,
      margin: 20,
      autoplay: true,
      autoplayTimeout: 2500,
      smartSpeed: 1000,
      autoplayHoverPause: true,
      nav: false,
      dots: false,
      responsiveClass: true,
      responsive: {
        0: {
          items: 5
        },
        600: {
          items: 5
        },
        1000: {
          items: 5
        }
      }
    });
  }
  /*--- tabs ---*/


  $(".tabContent").hide();
  $("ul.tabs li:first").addClass("active").show();
  $(".tabContent:first").show();
  $("ul.tabs li").click(function () {
    $("ul.tabs li").removeClass("active");
    $(this).addClass("active");
    $(".tabContent").hide();
    var activeTab = $(this).find("a").attr("href");
    $(activeTab).fadeIn();
    return false;
  });
  /*--- like hover emojies ---*/

  /*(function () {
      var likeLink = document.querySelector('.Like__link');
      likeLink.addEventListener('mouseenter', function () {
          likeLink.classList.remove('js-hover');
      });
      setTimeout(function () {
          likeLink.classList.remove('js-hover');
      }, 5000);
  }());*/

  /*--- ad timer ---*/

  var timeleft = 10;
  var downloadTimer = setInterval(function () {
    if (timeleft <= 0) {
      clearInterval(downloadTimer);
      document.getElementById("timer").innerHTML = "Close";
    } else {
      document.getElementById("timer").innerHTML = timeleft + "";
    }

    timeleft -= 1;
  }, 1000);
  /*--- QA accordion ---*/

  jQuery(".tabs-container .tab-content").hide();
  jQuery(".tabs-container .tab-content.active").show();
  jQuery(".verticle-tab a").on("click", function () {
    var hash = jQuery(this).attr('href');
    jQuery(".tabs-container").find(hash).slideDown('slow');
    jQuery(".tabs-container").find(hash).siblings().slideUp('slow');
    return false;
  });
}); //===== Document Ready Ends =====//

/*--- back button ---*/

$('.back-btn').on('click', function (e) {
  "use strict";

  e.preventDefault();
  window.history.back();
});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/amd options */
/******/ 	(() => {
/******/ 		__webpack_require__.amdO = {};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************************!*\
  !*** ./resources/js/base_web.js ***!
  \**********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _web_js_main_min_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../web/js/main.min.js */ "./resources/web/js/main.min.js");
/* harmony import */ var _web_js_main_min_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_web_js_main_min_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _web_js_script_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../web/js/script.js */ "./resources/web/js/script.js");
/* harmony import */ var _web_js_script_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_web_js_script_js__WEBPACK_IMPORTED_MODULE_1__);


})();

/******/ })()
;