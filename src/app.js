import './assets/css/app.css'
import { Toast, MessageBox, Swipe, SwipeItem, Lazyload, TabContainer, TabContainerItem} from 'mint-ui'

export default {
  name: 'app',
  data() {
    return {
      message: 'Click me.',
      selected: '1',
    }
  },
  methods: {
    back() {
      MessageBox('返  回', '');
    },
  },
  mounted() {
    this.$store.state.title = "主页"
  },
  render() {
    return (
      <div class="page page_home"> 
        <mt-swipe>
          {
            swiperItem.map( (item,i) => {
              return <mt-swipe-item style={item} key={i+1}></mt-swipe-item>
            })
          }
        </mt-swipe>
        <mt-tab-container value={this.selected}>
            <mt-tab-container-item id="1">
            <ul>
              {
                list.map((item, i) => {
                  return <li><img v-lazy={item} /></li>
                })
              }
            </ul>
            </mt-tab-container-item>
            <mt-tab-container-item id="2">
              <mt-cell title="'测试 ' + n" />
            </mt-tab-container-item>
            <mt-tab-container-item id="3">
            <mt-cell title="'选项 ' + n" />
            </mt-tab-container-item>
        </mt-tab-container>
      </div>
    )
  }
}
const swiperItem = [
        { backgroundColor: '#3fc7d3', hieght: '100px', display: 'block' },
        { backgroundColor: '#29abc5', hieght: '100px', display: 'block' },
        { backgroundColor: '#f88223', hieght: '100px', display: 'block' }
      ],
      list = [
        'http://fuss10.elemecdn.com/b/18/0678e57cb1b226c04888e7f244c20jpeg.jpeg',
        'http://fuss10.elemecdn.com/3/1e/42634e29812e6594c98a89e922c60jpeg.jpeg',
        'http://fuss10.elemecdn.com/1/c5/95c37272d3e554317dcec1e17a9f5jpeg.jpeg',
        'http://fuss10.elemecdn.com/7/85/e478e4b26af74f4539c79f31fde80jpeg.jpeg',
        'http://fuss10.elemecdn.com/b/df/b630636b444346e38cef6c59f6457jpeg.jpeg'
      ]

