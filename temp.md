##1.使用webpack打包发布项目
在项目上线之前，我们需要将整个项目打包并发布。
A.配置package.json
    "scripts":{
        "dev":"webpack-dev-server",
        "build":"webpack -p"
    }
B.在项目打包之前，可以将dist目录删除，生成全新的dist目录

##2.Vue脚手架
Vue脚手架可以快速生成Vue项目基础的架构。
A.安装3.x版本的Vue脚手架：
    npm install -g @vue/cli
B.基于3.x版本的脚手架创建Vue项目：
    1).使用命令创建Vue项目
        命令：vue create my-project
        选择Manually select features(选择特性以创建项目)
        勾选特性可以用空格进行勾选。
        是否选用历史模式的路由：n
        ESLint选择：ESLint + Standard config
        何时进行ESLint语法校验：Lint on save
        babel，postcss等配置文件如何放置：In dedicated config files(单独使用文件进行配置)
        是否保存为模板：n
        使用哪个工具安装包：npm
    2).基于ui界面创建Vue项目
        命令：vue ui
        在自动打开的创建项目网页中配置项目信息。
    3).基于2.x的旧模板，创建Vue项目
        npm install -g @vue/cli-init
        vue init webpack my-project

C.分析Vue脚手架生成的项目结构
    node_modules:依赖包目录
    public：静态资源目录
    src：源码目录
    src/assets:资源目录
    src/components：组件目录
    src/views:视图组件目录
    src/App.vue:根组件
    src/main.js:入口js
    src/router.js:路由js
    babel.config.js:babel配置文件
    .eslintrc.js:

##3.Vue脚手架的自定义配置
    A.通过 package.json 进行配置 [不推荐使用]
        "vue":{
            "devServer":{
                "port":"9990",
                "open":true
            }
        }
    B.通过单独的配置文件进行配置，创建vue.config.js
        module.exports = {
            devServer:{
                port:8888,
                open:true
            }
        }


##4.Element-UI的基本使用
[ElementUI参考文档](https://element.eleme.cn/#/zh-CN/component/quickstart)
Element-UI:一套基于2.0的桌面端组件库
A.安装：
    npm install element-ui -S
B.导入使用：
    import ElementUI from "element-ui";
    import "element-ui/lib/theme-chalk/index.css";
    
    Vue.use(ElementUI)
> 这是全部导入，建议部分导入

