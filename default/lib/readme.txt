可以使用百度CDN公共库，如：
 	angular.js:   <script src="http://apps.bdimg.com/libs/angular.js/1.2.16/angular.min.js"></script>
 	jquery.js:  <script src="http://libs.baidu.com/jquery/2.0.0/jquery.min.js"></script>
 	bootstrap:<script src="http://libs.baidu.com/bootstrap/3.0.3/js/bootstrap.min.js"></script>
		    <link href="http://libs.baidu.com/bootstrap/3.0.3/css/bootstrap.min.css" rel="stylesheet">
 	建议经常访问一下百度的公共服务（云）平台，真心是好东西。http://developer.baidu.com/



在网页标签上添加图片（icon）
 	例子：<link href="photo/favicon.ico" rel="SHORTCUT ICON" />
    	            <link rel="shortcut icon" href="favicon.ico" />



页面编码问题：
	HTML：<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	PHP：header("Content-type: text/html; charset=utf-8"); 



将下面的 <meta> 标签加入到页面中，可以让部分国产浏览器默认采用高速模式渲染页面：
	<meta name="renderer" content="webkit">
	目前只有360浏览器支持此 <meta> 标签。