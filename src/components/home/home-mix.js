export default {
  data () {
    return {
      menuList: [],
      iconList: ['icon-users', 'icon-tijikongjian', 'icon-shangpin', 'icon-danju', 'icon-baobiao'],
      // 控制左侧菜单是否折叠,默认不折叠
      collapse: false
    }
  },
  created () {
    this.getMenuList()
  },
  methods: {
    logout () {
      window.sessionStorage.removeItem('token')
      this.$router.push('/login')
    },
    async getMenuList () {
      const {data: res} = await this.$http.get('menus')
      if (res.meta.status !== 200) return this.$message.error('获取列表失败')
      this.menuList = res.data
    }
  }
}
