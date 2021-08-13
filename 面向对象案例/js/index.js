var _that;
class Tab {
    constructor(id) {
        _that = this;
        this.main = document.querySelector(id);
        this.lis = this.main.querySelectorAll('li');
        this.sections = this.main.querySelectorAll('section');
        // 获取add按钮
        this.add = this.main.querySelector('.tabadd');
        // 获取ul
        this.ul = this.main.querySelector('.fisrstnav ul');
        this.init();
    }
    init() {
        // 给add绑定添加事件
        this.add.onclick = this.addTab;
        for (var i = 0; i < this.lis.length; i++) {
            this.lis[i].index = i;
            this.lis[i].onclick = this.toggleTab;
        }
    }
    // 循环清除类名
    clearClass() {
        for (var i = 0; i < this.lis.length; i++) {
            this.lis[i].className = '';
            this.sections[i].className = '';
        }
    }
    // 切换功能
    toggleTab() {
        _that.clearClass();
        this.className = 'liactive';
        _that.sections[this.index].className = 'conactive'
    }
    // 添加功能
    addTab() {
        // 创建新的li
        var li = '<li class="liactive"><span>新选项卡</span><span class="iconfont icon-guanbi"></span></li>';
        // 把创建的li插入到ul里面
        _that.ul.insertAdjacentHTML('beforeend', li);
    }
    // 删除功能
    delTab() {

    }
    // 编辑功能
    editTab() {

    }

}
var uu = new Tab('#tab')