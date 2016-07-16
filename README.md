# hdu-60-website
杭州电子科技大学60周年校庆网站


### 配置文件说明:


#####由于是一起工作，gulp自动化，webpack配置文件只作为参考文件放在config目录下，而对于不同的开发者可以参考来根据自己的工作目录情况及自己的任务来配置，git已经设置过滤gulpfile.js和webpack.config.js，src工作目录，所以可以直接在仓库下来完成自己的任务，最终结果输出到自己任务页所在目录（也就是dist目录下的首/子页)。
#### 1. package.json
项目依赖包目录，仓库已将ignore node_modules目录

安装依赖包：

$ npm install
#### 2. config/gulpfile.js

gulp自动化配置文件，模块依赖已经写入package.json;

根据自己的生产环境，配置

#### 3. config/webpack.config.js

webpack配置文件，需要的可以使用

#### 4. .babelrc

babel配置项， 可以用webpack loader代替

### 文件目录结构:
	---bower_components //对于不熟悉模块的同学，这里有需要引入的文件，如jquery,bootstrap等包
	---dist //最终上线文件
		---componets //组件文件夹
		---sub //子页目录
			---fengcai //杭电风采
			---guide //校庆指南
			---lueying //校史掠影
			---news //校园动态
			---notice //校庆公告
			---today //今日杭电
			---wish //祝福杭电
		---index.html //首页
	---src //自行建立，作为自己的生成环境
	---config //配置文件，需要用到的可以根据自己的生产环境配置目录
	---
	---
	---
建议每个页面的目录结构:

	---style  //css文件
	---js    //js文件
	---tmpl //模板文件
	---images //图片文件
	---index.html

### 可复用组件说明

#### 1.组件位于dist/components目录，每个组件包括自己的资源文件，会模块化，组件化的同学可以直接复用。
#### 2.每个页面，都有一个相同的顶部导航和底部部分，对于不会用的同学，我会写好组件最终打包bundle文件，需要每个有这两部分的页面再html 的body顶部包含：

	<div id='header'></div>

在底部包含:

	<div id='footer'></div>

然后引入最终的bundle文件：

		dist/components/app.bundle.js