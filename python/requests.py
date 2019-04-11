在读取文件时，注意务必使用'rb'即二进制模式读取，这样获取的bytes长度才是文件的长度。

把post()方法替换为put()，delete()等，就可以以PUT或DELETE方式请求资源。

除了能轻松获取响应内容外，requests对获取HTTP响应的其他信息也非常简单。例如，获取响应头：

>>> r.headers
{Content-Type': 'text/html; charset=utf-8', 'Transfer-Encoding': 'chunked', 'Content-Encoding': 'gzip', ...}
>>> r.headers['Content-Type']
'text/html; charset=utf-8'
requests对Cookie做了特殊处理，使得我们不必解析Cookie就可以轻松获取指定的Cookie：

>>> r.cookies['ts']
'example_cookie_12345'
要在请求中传入Cookie，只需准备一个dict传入cookies参数：

>>> cs = {'token': '12345', 'status': 'working'}
>>> r = requests.get(url, cookies=cs)
最后，要指定超时，传入以秒为单位的timeout参数：

>>> r = requests.get(url, timeout=2.5) # 2.5秒后超时
