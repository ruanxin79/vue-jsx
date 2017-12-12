import Mock from 'mockjs'
Mock.mock('http://g.cn', {
  'name': '@cname',
  'age|10-80': 100,
  'color': '@color'
});

export default {
  name: 'hello',
  data() {
    return {
      msg: '获取数据',
      list:[
      
      ],
    }
  },
  methods: {
    getMock() {
      this.axios({
        url: 'http://g.cn',//mork 数据
      }).then(d => {
        console.log(d)
        if(d.status===200){//正确返回数据
          this.list.push(d.data);
        }
      })
      // this.axios({
      //   url:`/api/app`//接口片段 api--->
      // }).then( d =>{
      //   console.log(d)
      // })
    }
  },
  render(h) {//正常渲染
    //throw new Error('test')
    return (
      <div class="page page_hello" id="hello_JSX">
        <p style={myClass} onClick={this.getMock}>
        {this.msg}
        </p>
        <ul>
          {
            this.list.map( (item,i)=>{
              return <li style={item.color}>{item.name}年龄:{item.age}</li>
            })
          }
        </ul>
      </div>
    )//jsx
  },
  renderError(h, err) {//渲染出错
    return h('pre', {style: {color: 'red'}}, err.stack)//createElement
  },
  mounted() {
    this.$store.state.title= "hello";
    this.getMock();
  }
}
const myClass = {
  border:'1px solid #ccc',
  padding:'3px 10px',
  marginTop:'10px'

}
