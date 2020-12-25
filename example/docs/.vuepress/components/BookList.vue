<template>
  <div id="book-list">
   <el-row :gutter="10">
     <el-card :style="{borderRadius: '10px'}">
     <el-col :span="14">
         <el-collapse v-model="activeCodeName" accordion >
           <el-collapse-item :title="data.bookType" :name="data.name" v-for="(data,index) in codeSource" :key="index" >
             <main class="main" v-for="(book,index) in data.bookInfo" :key="index">
               <span class="key">📚</span>
               <span class="bold">{{book.name}} </span>
               <span class="bold">{{book.score}}⭐ </span>
             </main>
           </el-collapse-item>
         </el-collapse>

     </el-col>
     <el-col :span="10">
         <el-collapse v-model="activeBookName" accordion >
           <el-collapse-item :title="data.bookType" :name="data.name" v-for="(data,index) in bookSource" :key="index" >
             <main class="main" v-for="(book,index) in data.bookInfo" :key="index">
               <span class="key">📚</span>
               <span class="bold">{{book.name}} </span>
               <span class="bold">{{book.score}}⭐ </span>
             </main>
           </el-collapse-item>
         </el-collapse>
     </el-col>
     </el-card>
   </el-row>
  </div>
</template>
<script>
const baseUrl = "https://duebasslei.gitee.io/picgopicturebed";
export default {
  name: "BookList",
  data() {
    return {
      baseUrl,
      activeCodeName: '1',
      activeBookName: '1',
      codeSource:[
        {
          bookType: 'Java书籍',
          name:'1',
          bookInfo:[
            {
              name: 'Effective java 中文版（第2版)',
              score:'9.1',
            },
            {
              name: 'Head First 设计模式（中文版）',
              score:'9.2',
            },
            {
              name: 'Java 8函数式编程',
              score:'7.8',
            },
            {
              name: 'Java 8实战',
              score:'9.2',
            },
            {
              name: 'Java性能权威指南',
              score:'8.1',
            },
            {
              name: 'Java技术手册（第6版）',
              score:'8.1',
            }
          ]
        },
        {
          bookType: '架构设计',
          name:'2',
          bookInfo:[
            {
              name: '分布式服务架构：原理、设计与实战',
              score:'7.3',
            },
            {
              name: 'RabbitMQ实战 高效部署分布式消息队列',
              score:'7.1',
            },
            {
              name: 'Kafka权威指南',
              score:'8.9',
            },
            {
              name: '从Paxos到Zookeeper 分布式一致性原理与实践',
              score:'7.8',
            },
            {
              name: '大型网站技术架构 核心原理与案例分析',
              score:'7.9',
            },
            {
              name: '大规模分布式存储系统 原理解析与架构实战',
              score:'7.9',
            },
            {
              name: '微服务设计',
              score:'8.2',
            },
          ]
        },
        {
          bookType: '运维',
          name:'3',
          bookInfo:[
            {
              name: 'DevOps实践指南',
              score:'8.7',
            },
            {
              name: 'Docker开发指南',
              score:'8.7',
            },
            {
              name: '持续交付 发布可靠软件的系统方法',
              score:'8.6',
            }
          ]
        },
        {
          bookType: '软件工程',
          name:'4',
          bookInfo:[
            {
              name: '人月神话（40周年中文纪念版）',
              score:'8.3',
            },
            {
              name: '重构 改善既有代码的设计',
              score:'9.1',
            },
            {
              name: '领域驱动设计 软件核心复杂性应对之道',
              score:'9.1',
            }
          ]
        },
        {
          bookType: '操作系统',
          name:'5',
          bookInfo:[
            {
              name: '鸟哥的Linux私房菜 —服务器架设篇（第三版)',
              score:'9.1',
            },
            {
              name: '鸟哥的Linux私房菜 基础学习篇',
              score:'8.8',
            },
            {
              name: 'Linux命令行与shell脚本编程大全 第3版',
              score:'9.1',
            }
          ]
        },
        {
          bookType: '数据库',
          name:'6',
          bookInfo:[
            {
              name: 'MongoDB权威指南（第2版）',
              score:'8.1',
            },
            {
              name: 'MySQL必知必会',
              score:'8.4',
            },
            {
              name: 'Redis开发与运维',
              score:'9.0',
            },
            {
              name: 'Redis设计与实现',
              score:'8.5',
            },
            {
              name: 'SQL反模式',
              score:'8.4',
            },
            {
              name: '高性能MySQL 第3版',
              score:'9.4',
            },

          ]
        },
        {
          bookType: '网络',
          name:'7',
          bookInfo:[
            {
              name: '图解TCP&IP : 第5版',
              score:'7.8',
            },
            {
              name: 'HTTP权威指南',
              score:'8.6',
            },
            {
              name: 'TCP&IP网络编程',
              score:'8.4',
            },
            {
              name: '图解HTTP',
              score:'8.5',
            },
          ]
        },


      ],
      bookSource:[
        {
          bookType: '书籍',
          name:'1',
          bookInfo:[
            {
              name: '斗罗大陆 ',
              score:'xx',
            },
            {
              name: '三体',
              score:'xx',
            },
            {
              name: '边城',
              score:'xx',
            },
            {
              name: '三国演义',
              score:'xx',
            },
            {
              name: '断舍离',
              score:'xx',
            },
          ]
        },
        {
          bookType: '漫画',
          name:'2',
          bookInfo:[
            {
              name: '狐妖小红娘',
              score:'7.3',
            },
            {
              name: '偷星九月天',
              score:'7.1',
            },
          ]
        },
      ]
    }
  }
};
</script>
<style lang="stylus">
#book-list{
  .el-collapse-item__header{
    font-size 18  px
  }
}
</style>
<style lang="stylus" scoped>
main{
  width: 100%;
  padding: 10px 20px;
  background: rgba(180,160,120,.1);
  .span{
    font-size 18px
  }
}
span.key {
  padding-right: 6px;
}
span.bold {
  line-height: 2em;
  font-weight: bold;
}
span.br::before {
  content: "\A";
  white-space: pre;
}
span.bold + span.bold::before {
  content: ", ";
  font-weight: 500;
  margin-left: -.25em;
}
</style>
