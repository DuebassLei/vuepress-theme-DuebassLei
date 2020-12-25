<template>
    <div id="myself">
     <el-card>
       <h3 align="center">😀欢迎来到我的博客</h3>
       <h3><el-tag effect="dark">Github名片</el-tag></h3>
          <el-row>
           <div id="github-usercard" user="selfboot">
             <div class="github-usercard">
               <div class="github-hd">
                 <a class="github-avatar" :href="githubUserData.html_url" target="_top"><img :src="githubAvatar" /></a>
                 <strong><a target="_blank" :href="githubUserData.html_url" :style="{color:'#67C23A'}">DuebassLei</a></strong>
                 <span>@海边的小溪鱼</span>
               </div>
               <div class="github-bd">
                 <div class="github-desc">
                   {{githubUserData.bio}}
                   <ul>
                     <li><a :href="githubUserData.repos_url" target="_top"><strong>{{githubUserData.public_repos}}</strong>Repos</a></li>
                     <li><a :href="githubUserData.gists_url" target="_top"><strong>{{githubUserData.public_gists}}</strong>Gists</a></li>
                     <li><a :href="githubUserData.followers_url" target="_top"><strong>{{githubUserData.followers}}</strong>Followers</a></li>
                   </ul>
                 </div>
               </div>
               <div class="github-ft">
                 <a class="github-via" href="https://www.gaosanshi.top" target="_top">写作，从来不是一件简单的事！</a>
                 <a class="github-btn" :href="githubUserData.html_url">Follow</a>
               </div>
             </div>
           </div>
       </el-row>
       <h3><el-tag effect="dark">博主简介</el-tag></h3>
       <p>编程小白一枚，懂点Java、Vue,学习中✊</p>
       <p>In here,Study Programs And Record Life✍</p>
       <h3><el-tag effect="dark">六诫</el-tag></h3>
       <p>第一个向左:Don't be waver 不要左右摇摆，犹豫不决</p>
       <p>第二个向前:Keeping forward 一直保持向前</p>
       <p>第三个涂黑:Don't be angry 发怒是解决问题最坏的方式</p>
       <p>第四个空心:You are nobody别太看得起自己，你谁都不是</p>
       <p>第五个宝石型:Be strong 坚强起来,经历那么多坎坷没有什么能打倒你</p>
       <p>第六个向右:make something right 尝试去做正确的事</p>
       <h3><el-tag effect="dark">友链交换</el-tag></h3>
       <el-tag>交换友链，请留言邮箱：<i><strong>1130122701@qq.com</strong></i>，示例格式：</el-tag>
       <el-card :style="{marginTop:'5px'}">
         <i :style="{color: 'red'}">title:</i> '创造师导航'<br>
         <i :style="{color: 'red'}">desc:</i> '为创意工作者而设计',<br>
         <i :style="{color: 'red'}">link:</i> 'http://chuangzaoshi.com/',<br>
         <i :style="{color: 'red'}">logo:</i> 'https://bref.life/images/avatar.png?v=1584454065343'<br>
       </el-card>
       <el-row>
       </el-row>
       <h3><el-tag effect="dark">联系博主</el-tag></h3>
       <el-card>
         <h4>QQ: <strong>1130122701</strong></h4>
         <h4>Wechat: <strong>15121769372</strong><i>(请注明来意)</i></h4>
         <h4>Email: <strong>1130122701@qq.com</strong></h4>
       </el-card>
       <h3><el-tag type="danger" effect="dark">赞赏博主</el-tag></h3>
       <el-row>
         <p>如果觉得文章不错，赏我吃个棒棒糖吧！🍭</p>
         <el-col :span="12" v-for="(pay,o) in payImage" :key="o" align="center">
           <el-image :src="pay.imgUrl" :style="{height:'250px'}"></el-image>
           <p >{{pay.name}}</p>
         </el-col>
       </el-row>
       <p>欢迎来访，赏你小鱼干🐬</p>


     </el-card>
    </div>
</template>

<script>
  export default {
    name: 'myself',
    data(){
      return {
        githubAvatar:require('../public/head.png'), // github头像
        githubUserName: 'DuebassLei',// github username
        githubUserData:{},// github user information
        githubUserInfoApi: 'https://api.github.com/users/' ,//github get user data api
        payImage:[
          {
            name:'支付宝',
            imgUrl:require('../../../../images/alipay.jpg')
          },
          {
            name:'微信支付',
            imgUrl:require('../../../../images/wechatpay.jpg')
          }
        ]
      }
    },
    created () {

    },
    mounted() {
      this.init();
    },
    methods:{
      init(){
        let self = this;
        let apiUrl = 'https://api.github.com/users/' + this.githubUserName;
        // 接收获取到的github个人信息数据
        let request = new XMLHttpRequest();
        request.onreadystatechange = function() {
          if (request.readyState === 4) {
            if (request.status === 200) {
              self.githubUserData = JSON.parse(request.responseText);
                return ;
            } else {
              return false;
            }
          } else {
            // HTTP is continuing....
          }
        }
        // Sent request
        request.open('GET', apiUrl);
        request.send();
      }
    }
  }
</script>

<style scoped>
  #myself{
    font-size: 16px;
    color: rgb(62, 62, 62);
    line-height: 1.6;
    word-spacing: 0px;
    letter-spacing: 0px;
    font-family: 'Helvetica Neue',Helvetica,'Hiragino Sans GB', 'Microsoft YaHei', Arial, sans-serif;
    background-image: linear-gradient(90deg, rgba(50, 0, 0, 0.05) 3%, rgba(0, 0, 0, 0) 3%),
    linear-gradient(360deg, rgba(50, 0, 0, 0.05) 3%, rgba(0, 0, 0, 0) 3%);
    background-size: 20px 20px;
    background-position: center center;
  }
  .github-usercard {
    font: 13px/1.6 "Helvetica Neue", Helvetica, Arial, sans-serif;
    color: #333333;
    border: 1px solid #DDDDDD;
    border-radius: 3px;
    padding: 10px;
    background: transparent;
    display: block;
  }

  .github-usercard a {
    color: #333333;
    text-decoration: none;
    border: none;
  }

  .github-usercard a:hover {
    text-decoration: underline;
  }

  .github-usercard img {
    margin: 0;
    border: none;
  }

  .github-usercard  strong {
    font-size: 16px;
    display: block;
    line-height: 1.2;
    margin-bottom: 5px;
  }

  .github-usercard .github-avatar {
    float: left;
    margin: 0 10px 0 0;
  }

  .github-usercard .github-avatar img {
    width: 40px;
    height: 40px;
    border-radius: 3px;
    padding: 0;
  }

  .github-usercard .github-hd {
    color: #999999;
  }

  .github-usercard .github-bd a {
    margin-right: 4px;
  }

  .github-usercard .github-bd .github-desc {
    border-top: 1px solid #DDDDDD;
    margin: 0;
    padding: 10px 0;
  }

  .github-usercard .github-bd .github-desc a {
    margin: 0;
  }

  .github-usercard .github-ft {
    text-align: right;
  }

  .github-usercard .github-ft:before,
  .github-usercard .github-ft:after {
    content: " ";
    display: table;
  }

  .github-usercard .github-ft:after {
    clear: both;
  }

  .github-usercard .github-via {
    float: left;
    margin-top: 3px;
    color: #999999;
  }

  .github-usercard a.github-btn {
    display: inline-block;
    padding: 2px 8px;
    background-color: #409EFF;
    color: #fff;
    border-radius: 3px;
    text-decoration: none;
  }

  .github-desc ul {
    text-transform: uppercase;
    font-size: 12px;
    color: #707070;
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  .github-desc ul:after {
    display: block;
    content: '';
    clear: both
  }

  .github-desc li {
    float: left;
    padding: 4px 18px;
    border-left: 1px solid #eee
  }

  .github-desc li:first-child {
    border-left: 0;
    padding-left: 0
  }

  .github-usercard .github-bd .github-desc a {
    color: #333333;
  }

  .github-usercard .github-bd .github-desc a:hover {
    color: #4183c4;
    text-decoration: none;
  }
  .p{
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;;
  }
</style>
