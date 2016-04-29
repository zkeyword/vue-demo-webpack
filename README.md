#### 相关技术栈

- webpack

- less

- gulp

- zepto

- vue

- mockjs

- vue-cli


#### 运行方式

首先，请先安装node环境，然后在安装依赖的工具：

	npm install
 
运行：
	
	npm run dev
	
运行成功之后，直接在浏览器打开 http://127.0.0.1:8080 即可，默认的端口号是4000，如果有端口冲突可以修改根目录下的index.js文件。

发布：

	npm run build

#### 目录结构

	/ 根目录
	|__ dist 压缩合并后目录
	|__ src 开发目录
	|	|__ components vue组件目录
	|	|__ lib 常用函数
	|	|__ img 图片目录
	|	|__ less 样式目录
	|	|	|__ app 业务代码
	|	|	|__ core 通用可移植的代码
	|	|	|__ lib 第三方基本库
	|	|	|__ styles.less 统一入口
	|	|__ app.vue 入口文件
	|	|__ routers.js 路由
	|	|__ main.js 公用依赖和启动文件
	|	|__ filters.js vue过滤文件
	|	|__ views  vue模板文件
	|		|__ core 通用可移植的代码
	|		|__ lib 第三方基本库
	|__ index.html 入口html文件