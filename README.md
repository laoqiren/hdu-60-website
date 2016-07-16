# hdu-60-website
杭州电子科技大学60周年校庆网站


### 配置文件说明:


#####由于是一起工作，gulp自动化，webpack配置文件只作为参考文件放在config目录下，而对于不同的开发者可以参考来根据自己的工作目录情况及自己的任务来配置，已经过滤gulpfile.js和webpack.config.js，src工作目录，所以可以直接在仓库下来完成自己的任务，最终结果输出到自己任务页所在目录。
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