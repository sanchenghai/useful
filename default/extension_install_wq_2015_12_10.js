/**
 * extension_install_wq_2015_12_10.js
 *
 * 新下载页面js逻辑
 * @author : wq
 * @email :  king_wangqin@163.com
 * @since : 2015-12-10
 **/
 (function($){
 	//tab标签页
 	$('a[fx=s5_tabs01]').s5_tabs01();

      //来源显示控制
      viewController();

 	//使用说明切换图片
      if(!timer){
        var timer = setTimeout('$("#sysm_img_loading").hide();$("#shiyongshuoming>.shiyongshuoming_img").show();', 2000);
      }
      $("#shiyongshuoming>.shiyongshuoming_img>ul>li:first>img").load(function(){
        $("#sysm_img_loading").hide();
        $("#shiyongshuoming>.shiyongshuoming_img").show();
        clearTimeout(timer);
      });
      var index = 0;
      var total = $('#shiyongshuoming .shiyongshuoming_img ol li').size();
      $('#shiyongshuoming_leftclick').click(function(){
        index--;
        sysm_change(index, total);
        if(index == -1){
          index = total - 1;
        }
      });
      $('#shiyongshuoming_rightclick').click(function(){
        index++;
        sysm_change(index, total);
        if(index == total){
          index = 0;
        }
      });
      $('#shiyongshuoming .shiyongshuoming_img ol li').mouseenter(function(){
        index = $(this).index();
        sysm_change(index, total);
      });

      //用户评价的翻页
      var pagetotal = 3;
      $("#pageinfo li.last").bind('click', function(){
        var thispage = $(this).siblings().children('.chosed').parent().index();
        if(thispage + 1 < pagetotal){
          $(this).siblings().children('.chosed').parent().next().children().click();
        }
      });
      $("#gogogo").click(function(){
        var page = $(this).siblings('input').val();
        if(page == pagetotal +1){
          return;
        }
        $("#pageinfo li").eq(page-1).children().click();
      });

 	//常见问题的切换
 	$("#changjianwenti .ccca").click(function(){
 		var myclass = $(this).attr("class").split(' ');
 		$('#changjianwenti .ccca').each(function(){
 		    $(this).removeClass("chosed").siblings().slideUp('slow');
 		});
 		if(myclass.length == 1){
 			$(this).dequeue().addClass("chosed").siblings().dequeue().slideDown('slow', function(){
 				$(window).scrollTop(200);
 			});
 		}
 	});

 	//下载链接的赋值
 	var myBrowserType = BrowserType();
     $("#main_content_wq .nav>a").attr("href",myBrowserType.url);
     $("#shiyongshuoming_download").attr("href",myBrowserType.url);
     if(myBrowserType.utype == "yandex"){
      $("#main_content_wq .nav>a div.download_bg_img").css('background',"url(/template/aug/images/new/s_yandex.png) no-repeat 1px 6px");
     }else{
      $("#main_content_wq .nav>a div.download_bg_img").css('backgroundPosition',myBrowserType.background);
     }

     //意见反馈第一个问题解答
     var y_2_c = location.search;
     if(y_2_c){
      if(y_2_c.split("locate=five").length > 1){
        $("#cccfive>a").click();
      }else if(y_2_c.split("locate=eight_xiaomi").length > 1){
        $("#ccceight_xiaomi>a").click();
      }
     }

     //意见反馈的反馈内容的点击
     $("#yjfk2 dd").click(function(e){
      var span = (e.target + "omg").split("Span");
      if(span.length == 2){
        $(e.target).siblings().click();
      }
     });

 	//意见反馈的补充说明字数提示
 	$('#yjfk3 textarea').bind('input',function(){
 	  var len = $(this).val().length;
 	  if(len > 999){
 	    $(this).val($(this).val().substr(0,999));
 	    len = 999;
 	  }
 	  $('#yjfk3 span').text(999-len);
 	});

 	//意见反馈提交
 	$("#yijianfankui button").click(function(){
          $('#mywarning').text("");
          if($(this).text() == '正在提交'){
            return false;
          }
 		var neirong = '';
 		$("#yjfk2 input").each(function(){
 			if($(this).attr("checked")){
                    neirong += $(this).val();
                }
 		});
 		var shuoming = $("#yjfk3 textarea").val();
 		var lianxi = encodeURIComponent($("#yjfk4 input").val());
 		var agent = encodeURIComponent($('#agent').val());
 		var href = encodeURIComponent($('#yjfk5 p').text());
 		if(!shuoming && !neirong){
 			$('#mywarning').text("请在反馈内容或补充说明里提出给我们的建议后再提交！");
 			return;
 		}
 		var content = neirong + shuoming;
          $(this).text('正在提交').css('background','#aaa');
 		$.ajax({
 		  'url':'/brwext/feedback',
 		  'dataType':'json',
 		  'data':'nick='+lianxi+'&content='+content+'&agent='+agent+'&refer='+href+'&format=json',
 		  'success':function(msg){
 		    if(msg.status == 1){
 		      $('#yjfk_success').show().siblings().hide();
                 tyjfks();
 		    }else{
 		      $('#mywarning').text("提交失败，请稍后重试，谢谢 :)");
 		    }
 		  },
 		  'error':function(){
 		    $('#mywarning').text("提交失败，请稍后重试，谢谢 :)");
 		  }
 		});
 	});

 })(jQuery);

 //来源显示控制
 function viewController(){
  var from_device = location.search;
  if(from_device.indexOf("from_device=mi") > -1 || from_device.indexOf("from_device=_155_151_137_156_145_167") > -1){
    renderMi();
  }
 }
 //小米
 function renderMi(){
  var path = document.location.href;
  if(path.indexOf('suggest') > -1){
    $("#yjfk1 dd").hide();
    $("#yjfk1_xiaomi").show();
  }
  if(path.indexOf('page=question') > -1){
    $("#ccceight").hide();
    $("#ccceight_xiaomi").show();
  }
 }

 //使用说明切换图片
 function sysm_change(index, total){
  var olli = $('#shiyongshuoming .shiyongshuoming_img ol li'),
        ul = $('#shiyongshuoming .shiyongshuoming_img ul'),
        ulli = $('#shiyongshuoming .shiyongshuoming_img ul li');
  if(index === total){
    olli.eq(0).addClass('current').siblings().removeClass('current');
  }else if(index === -1){
    olli.eq(total - 1).addClass('current').siblings().removeClass('current');
  }else{
    olli.eq(index).addClass('current').siblings().removeClass('current');
  }
  if(index === total){
    ulli.eq(0).css({'position' : 'relative', 'left' : 1000 * total});
  }else if(index === -1){
    ulli.eq(total - 1).css({'position' : 'relative', 'left' : -1000 * total});
  }
  console.log(index + "-------" + total);
  console.log(-(index*1000));
  ul.stop().animate({'left' : -(index*1000)}, 500, function(){
    if(index === total){
      ulli.eq(0).css({'position' : 'static'});
      ul.css('left', 0);
    }else if(index === -1){
      ulli.eq(total - 1).css({'position' : 'static'});
      ul.css('left', -1000 * (total - 1));
    }
  });
 }

 //继续反馈
 function gobacktoyjfk(){
  $("#yijianfankui button").text('提交').css('background','rgb(233,39,58)');
  $("#yjfk2 input").each(function(){
    $(this).attr("checked",false);
  });
  $('#yjfk3 textarea').val('');
  $('#yjfk3 span').text(999);
  $('#yjfk_success').hide().siblings().show();
 }

 //意见反馈成功后的各种推荐
 function tyjfks(){
  var yhqparentnode = $("#tab_yjfk_success .yhq .wrapper");
  yhqparentnode.empty();
  var yhqmsg = '';
  var url = "http://open.gwdang.com/query?appkey=14ddb9671ec3a384ed28efef3e481a20&ac=quan&order=time&page=2&pagesize=10&callback=?";
  $.getJSON(url,function(data){
    if(data.error){
      yhqmsg = '对不起，出错啦！';
    }
    var thisdata = data.data;
    var thislength = thisdata.length > 9 ? 9 : thisdata.length;
    for(var i = 0; i < thislength; i++){
      yhqmsg += '<div class="s"><div class="pic"><a target="_blank" href="' + thisdata[i].quan_url + '"><img src="' + thisdata[i].img_url + '" class="center_block"></a></div><div class="desc"><p>' + thisdata[i].discount_info + '</p><a target="_blank" href="' + thisdata[i].quan_url + '">立即领取</a></div></div>';
    }
    for(var j = 0; j<(9 - thislength); j++){
      yhqmsg += '<div></div>';
    }
    yhqparentnode.append(yhqmsg);
  });
 }

//判断浏览器类型
function BrowserType(){
     var union = $('#union').attr('union');
	var browser = {'url':'','utype':'','utitle':''};
	var chromeType = navigator.userAgent.toLowerCase();
	if("ActiveXObject" in window){
	    //mozilla/5.0 (compatible; msie 10.0; windows nt 6.1; wow64; trident/6.0; slcc2; .net clr 2.0.50727; .net clr 3.5.30729; .net clr 3.0.30729; .net4.0c; infopath.3; .net4.0e)
	    browser.url = "http://www.gwdang.com/files/ext/gwdang_install_IE.exe";
	    browser.utype = "ie";
	    browser.utitle = "IE";
	    browser.background = "-3px 6px";
	  }else if(chromeType.indexOf('firefox')>-1){
	    //mozilla/5.0 (windows nt 6.1; wow64; rv:42.0) gecko/20100101 firefox/42.0
	    browser.url = "https://addons.mozilla.org/firefox/downloads/latest/405940/addon-405940-latest.xpi?src=dp-btn-primary";
	    browser.utype = "firefox";
	    browser.utitle = "Firefox";
	    browser.background = "-83px 6px";
	  }else if(chromeType.indexOf('opera')>-1 || chromeType.indexOf('opr')>-1){
	    //mozilla/5.0 (windows nt 6.1; wow64) applewebkit/537.36 (khtml, like gecko) chrome/46.0.2490.86 safari/537.36 opr/33.0.1990.115
	    browser.url = "http://www.gwdang.com/files/ext/opera.crx";
	    browser.utype = "opera";
	    browser.utitle = "Opera";
	    browser.background = "-403px 6px";
	  }else if(chromeType.indexOf('safari')>-1 && chromeType.indexOf('chrome')==-1){
	    //mozilla/5.0 (windows nt 6.1; wow64) applewebkit/534.57.2 (khtml, like gecko) version/5.1.7 safari/534.57.2
	    browser.url = "http://www.gwdang.com/files/ext/gwdang.safariextz";
	    browser.utype = "safari";
	    browser.utitle = "Safari";
	    browser.background = "-443px 6px";
	  }else if(chromeType.indexOf('yabrowser')>-1){
          //mozilla/5.0 (windows nt 6.1; wow64) applewebkit/537.36 (khtml, like gecko) chrome/33.0.1750.154 yabrowser/14.4.1750.13664 safari/537.36 
          browser.url = "http://blog.gwdang.com/?p=7385";
          browser.utype = "yandex";
          browser.utitle = "Yandex";
        }else if(chromeType.indexOf('theworld')>-1){
          //mozilla/5.0 (windows nt 6.1; wow64) applewebkit/537.36 (khtml, like gecko) chrome/33.0.1750.154 theworld/14.4.1750.13664 safari/537.36 
          browser.url = "/files/ext/chrome"+union+".crx";
          browser.utype = "theworld";
          browser.utitle = "世界之窗";
          browser.background = "-43px 6px";
        }else if(chromeType.indexOf('chrome')>-1){
	    var check360 = checkChromeWeight();
	    if(chromeType.indexOf('qqbrowser')>-1){
	      //mozilla/5.0 (windows nt 6.1; wow64) applewebkit/537.36 (khtml, like gecko) chrome/45.0.2454.87 safari/537.36 qqbrowser/9.2.5542.400
	      browser.url = "https://pcbrowser.dd.qq.com/pcbrowserbig/qbextension/update/20151209/jgphnjokjhjlcnnajmfjlacjnjkhleah.crx";
	      browser.utype = "qq";
	      browser.utitle = "QQ";
	      browser.background = "-563px 6px";
	    }else if (chromeType.indexOf('maxthon') > -1) {
	      //mozilla/5.0 (windows nt 6.1; wow64) applewebkit/537.36 (khtml, like gecko) maxthon/4.4.8.1000 chrome/30.0.1599.101 safari/537.36
	      if(union == ''){
            browser.url = "http://extension.maxthon.cn/detail/index.php?view_id=358";
           }else{
            browser.url = "/files/ext/maxthon"+union+".mxaddon";
           }
	      browser.utype = "maxthon";
	      browser.utitle = "Maxthon";
	      browser.background = "-363px 6px";
	    }else if(chromeType.indexOf('bidubrowser')>-1){
	      //mozilla/5.0 (compatible; msie 10.0; windows nt 6.1; wow64; trident/6.0; bidubrowser 8.1) 
	      browser.url = "http://chajian.baidu.com/2015/#all/39/mcgoibhhihpolaiioggajoipieefgmoa";
	      browser.utype = 'baidu';
	      browser.utitle = '百度';
	      browser.background = "-603px 6px";
	    }else if(chromeType.indexOf('ubrowser')>-1){
	      //mozilla/5.0 (windows nt 6.1; wow64) applewebkit/537.36 (khtml, like gecko) chrome/44.0.2403.157 ubrowser/5.5.6743.207 safari/537.36
	      browser.url = "http://extensions.uc.cn/newindex.htm#!detail/bpdlhpjkjbdiflnankpohpfepecdjgag";
	      browser.utype = 'uc';
	      browser.utitle = "UC";
	      browser.background = "-640px 6px";
	    }else if(chromeType.indexOf('lbbrowser')>-1){
	      //mozilla/5.0 (windows nt 6.1; wow64) applewebkit/537.36 (khtml, like gecko) chrome/42.0.2311.154 safari/537.36 lbbrowser
	      browser.url = "http://store.liebao.cn/admin/extensions/201511/ea878d5a4d2a008ad78978a94eea62a1.crx";
	      browser.utype = 'liebao';
	      browser.utitle = "猎豹安全";
	      browser.background = "-483px 6px";
	    }else if(chromeType.indexOf('taobrowser')>-1){
	      //Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/536.11 (KHTML, like Gecko) Chrome/20.0.1132.11 TaoBrowser/3.5 Safari/536.11 
	      browser.url = "http://www.gwdang.com/files/ext/chrome.crx";
	      browser.utype = 'taobao';
	      browser.utitle = "淘宝";
	      browser.background = "-523px 6px";
	    }else if(chromeType.indexOf('2345explorer')>-1){
	      //Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.99 Safari/537.36 2345Explorer/6.4.0.10356
	      browser.url = "http://extension.ie.2345.com/#nfbikdkjfjcejddbdcpbafnclkfdhijd";
	      browser.utype = 'wp2345';
	      browser.utitle = "2345王牌";
	      browser.background = "-683px 6px";
	    }else if(chromeType.indexOf('2345chrome')>-1){
           //Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.99 Safari/537.36 2345Chrome/6.4.0.10356
           browser.url = "http://extension.ie.2345.com/#nfbikdkjfjcejddbdcpbafnclkfdhijd";
           browser.utype = 'js2345';
           browser.utitle = "2345加速";
           browser.background = "-723px 6px";
         }else if(chromeType.indexOf('coolnovo')>-1){
	      //Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/27.0.1453.110 Safari/537.36 CoolNovo/2.0.9.20 
	      browser.url = "http://www.gwdang.com/files/ext/chrome.crx";
	      browser.utype = 'fengshu';
	      browser.utitle = "枫树";
	      browser.background = "-243px 6px";
	    }else if(chromeType.indexOf('greenbrowser')>-1){
	      //Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.1; WOW64; Trident/6.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; .NET4.0C; InfoPath.3; .NET4.0E; GreenBrowser)
	      browser.url = "http://www.gwdang.com/files/ext/gwdang_for_greenbrowser" + union + ".zip";
	      browser.utype = 'gb';
	      browser.utitle = "GB";
	      browser.background = "-323px 6px";
	    }else if(check360 === "Chrome"){
	      //mozilla/5.0 (windows nt 6.1; wow64) applewebkit/537.36 (khtml, like gecko) chrome/46.0.2490.80 safari/537.36
	      browser.url = "http://blog.gwdang.com/?p=174";
	      browser.utype = 'chrome';
	      browser.utitle = 'Chrome';
	      browser.background = "-43px 6px";
	    }else if(check360 === "360SE"){
	      //mozilla/5.0 (windows nt 6.1; wow64) applewebkit/537.36 (khtml, like gecko) chrome/31.0.1650.63 safari/537.36 
	      browser.url = "https://ext.se.360.cn/webstore/detail/nfbikdkjfjcejddbdcpbafnclkfdhijd";
	      browser.utype = '360se';
	      browser.utitle = '360安全';
	      browser.background = "-283px 6px";
	    }else if(check360 === "360EE"){
	      //mozilla/5.0 (windows nt 6.1; wow64) applewebkit/537.36 (khtml, like gecko) chrome/45.0.2454.101 safari/537.36
	      browser.url = "https://ext.chrome.360.cn/webstore/detail/nfbikdkjfjcejddbdcpbafnclkfdhijd";
	      browser.utype = '360ee';
	      browser.utitle = '360极速 ';
	      browser.background = "-203px 6px";
	    }else if(chromeType.indexOf('se')>-1){
	      //mozilla/5.0 (windows nt 6.1; wow64) applewebkit/537.36 (khtml, like gecko) chrome/38.0.2125.122 safari/537.36 se 2.x metasr 1.0
	      if(union == ''){
            browser.url = "http://ie.sogou.com/tools/tool_337.html";
           }else{
            browser.url = "/files/ext/sogou"+union+".sext";
           }
	      browser.utype = 'sogou';
	      browser.utitle = "搜狗";
	      browser.background = "-163px 6px";
	    }else{
	      browser.url = "http://blog.gwdang.com/?p=174";
	      browser.utype = 'chrome';
	      browser.utitle = 'Chromium内核';
	    }
	  }else{
	      browser.url = "http://blog.gwdang.com/?p=174";
	      browser.utype = 'chrome';
	      browser.utitle = '未知浏览器';
	  }
	  return browser;
}

//Chrome、360判断
function checkChromeWeight(){
  var chrome_weight = {
      "result": "Chrome",
      "details": {
          "Chrome": 5,
          "Chromium": 0,
          "_360SE": 0,
          "_360EE": 0
      },
      "sorted": ["Chrome", "360SE", "360EE", "Chromium"],
      "exec": function (results) {
          var details = {
              "Chrome": 5,
              "Chromium": 0,
              "_360SE": 0,
              "_360EE": 0
          }
          var _ua = window.navigator.userAgent;
          if ((/Chrome\/([\d.])+\sSafari\/([\d.])+$/).test(_ua)) {
              if (window.navigator.platform == "Win32") {
                  if (!window.clientInformation.languages) {
                      details._360SE += 8;
                  }
                  if ((/zh/i).test(navigator.language)) {
                      details._360SE += 3;
                      details._360EE += 3;
                  }
                  if (window.clientInformation.languages) {
                      var lang_len = window.clientInformation.languages.length;
                      if (lang_len >= 3) {
                          details.Chrome += 10;
                          details.Chromium += 6;
                      } else if (lang_len == 2) {
                          details.Chrome += 3;
                          details.Chromium += 6;
                          details._360EE += 6;
                      } else if (lang_len == 1) {
                          details.Chrome += 4;
                          details.Chromium += 4;
                      }
                  }
                  for (var i in window.navigator.plugins) {
                      if (window.navigator.plugins[i].filename == "np-mswmp.dll") {
                          details._360SE += 20;
                          details._360EE += 20;
                      }
                  }
                  if (Object.keys(window.chrome.webstore).length <= 1) {
                      details._360SE += 7;
                  } else if (Object.keys(window.chrome.webstore).length == 2) {
                      details._360SE += 4;
                      details.Chromium += 3;
                  }

                  if (window.navigator.plugins.length >= 30) {
                      details._360EE += 7;
                      details._360SE += 7;
                      details.Chrome += 7;
                  } else if (window.navigator.plugins.length < 30 && window.navigator.plugins.length > 10) {
                      details._360EE += 3;
                      details._360SE += 3;
                      details.Chrome += 3;
                  } else if (window.navigator.plugins.length <= 10) {
                      details.Chromium += 6;
                  }

              } else {
                  details._360SE -= 50;
                  details._360EE -= 50;
                  if ((/Linux/i).test(window.navigator.userAgent)) {
                      details.Chromium += 5;
                  }

              }
              var found = 0;
              var respdf;
              for (var i in window.navigator.plugins) {
                  if (!!(respdf = (/^(.+) PDF Viewer$/).exec(window.navigator.plugins[i].name))) {
                      //console.log(respdf[1]);
                      if (respdf[1] == "Chrome") {
                          details.Chrome += 6;
                          details._360SE += 6;
                          found = 1;
                          break;
                      }
                      if (respdf[1] == "Chromium") {
                          details.Chromium += 10;
                          details._360EE += 6;
                          found = 1;
                          break;
                      }
                  }
              }
              if (!found) {
                  details.Chromium += 9;
              }

          }
          var chrome_result = new Object;
          chrome_result['Chrome'] = details.Chrome;
          chrome_result['Chromium'] = details.Chromium;
          chrome_result['360SE'] = details._360SE;
          chrome_result['360EE'] = details._360EE;
          var sortable = [];
          for (var value in chrome_result)
              sortable.push([value, chrome_result[value]])
          sortable.sort(function (a, b) {
              return b[1] - a[1]
          });
          this.sorted = sortable;
          this.details = details;
          this.result = sortable[0][0];
          if (results == "result") {
              return sortable[0][0];
          } else if (results == "details") {
              return chrome_result;
          } else if (results == "sorted") {
              return sortable;
          }
      }

  };

  var _ua = window.navigator.userAgent;
  try{
    chrome_weight.exec();
    if((/Chrome\/([\d.])+\sSafari\/([\d.])+$/).test(_ua)){
      return chrome_weight.result;
    }
    else{
      
    }
  }catch(e){
    return
  }  
}