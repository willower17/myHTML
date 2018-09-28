var app = new Vue({
    el:'#app',
    data:{
        message:"hello Vue!"
    },
    methods:{
        reverseMessage:function(){
            this.message = this.message.split("").reverse().join("")
        }
    }
})
var app2 = new Vue({
    el:'#app-2',
    data:{
        message:'页面加载于'+new Date().toLocaleString()
    }
})
var app3 = new Vue({
    el:'#app-3',
    data:{
        seen:true
    }
})
var app4 = new Vue({
    el:'#app-4',
    data:{
        todos:[
            {text: '学习 JavaScript'},
            {text: '学习 Vue'},
            {text: '整个项目'}
        ]
    }
})
Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
})
var app5 = new Vue({
    el:"#app-5",
    data:{
        groceryList:[
            {id:0, text:'蔬菜'},
            {id:1, text:'奶酪'},
            {id:2, text:'零食'}
        ]
    }
})
var app6 = new Vue({
    el:'#app-6',
    data:{
        classObject:{
            active:true,
            'text-danger':false
        }
    }
})
var app7 = new Vue({
    el:"#app-7",
    data:{
        object:{
            firstName:'willower17',
            lastName:'Alen',
            age:'21'
        }
    }
})