const path = require('path')
const px2rem = require('postcss-px2rem')
module.exports = { //只能写vue封装配置
    //runtimeCompiler:true,
    //initOnSave:false, //关闭EsLint的规则
    css:{   //添加postcss配置
        loaderOptions:{
            postcss:{
                plugins:[
                    px2rem({
                        remUnit:37.5 //设计稿等分后的rem值 375/10
                    })
                ]
            }
        }
    },
    configureWebpack:{ //内部写webpack原生配置
        //引入模块的解析
        resolve:{
            extensions:['.js','.vue','.json'],//可以省略后缀名
            alias:{//路径别名（简写方式）
               //'vue$':'vue/dist/vue.esm.js',//表示精准匹配 带vue编译器
                '@':path.resolve(__dirname,'src'),
                'pages':'src/pages'
            }
        }
    },
    devServer:{
        proxy:{
            '/api':{
                target:'http://localhost:4000',//转发目标地址
                pathRewrite:{
                  '^/api' : '' //转发请求时去除路径前面的/api
                },
                '/gh':{
                  target:'http://api.github.com',//转发目标地址
                  pathRewrite:{
                    '^/gh' : '' //转发请求时去除路径前面的/gh
                  },
                  changeOrigin:true,//支持跨域，如果协议/主机也不相同，必须加上
              }      
        }
    }
}
}