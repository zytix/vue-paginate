import { warn } from '../util/debug'

export default {
  name: 'paginate',
  props: {
    name: {
      type: String,
      required: true
    },
    list: {
      type: Array,
      required: true
    },
    per: {
      type: Number,
      default: 3,
      validator (value) {
        return value > 0
      }
    },
    tag: {
      type: String,
      default: 'ul'
    },
    refreshCurrentPage: {
      type: Boolean,
      default: true
    },
    refreshKey: {
      type: String,
      default: null
    }
  },
  data () {
    return {}
  },
  computed: {
    currentPage: {
      get () {
        if (this.$parent.paginate[this.name]) {
          return this.$parent.paginate[this.name].page
        }
      },
      set (page) {
        this.$parent.paginate[this.name].page = page
      }
    },
    pageItemsCount () {
      const numOfItems = this.list.length
      const first = this.currentPage * this.per + 1
      const last = Math.min((this.currentPage * this.per) + this.per, numOfItems)
      return `${first}-${last} of ${numOfItems}`
    }
  },
  mounted () {
    if (this.per <= 0) {
      warn(`<paginate name="${this.name}"> 'per' prop can't be 0 or less.`, this.$parent)
    }
    if (!this.$parent.paginate[this.name]) {
      warn(`'${this.name}' is not registered in 'paginate' array.`, this.$parent)
      return
    }
    this.paginateList()
  },
  watch: {
    currentPage () {
      this.paginateList()
    },
    list (newList, oldList) {
      // On list change, refresh the paginated list
      this.paginateList()
      var vm = this
      if (this.refreshCurrentPage) {
        this.currentPage = 0
      } else {
        var position = -1
        var item = 0
        while (position < 0 && item < this.per && newList.length === oldList.length) {
          if (this.refreshKey) {
            var newListkeys = newList.map(function(o) { return o[vm.refreshKey] })
            var oldListkeys = oldList.map(function(o) { return o[vm.refreshKey] })

            position = newListkeys.indexOf(oldListkeys[this.currentPage * this.per + item++])
          } else {
            position = newList.indexOf(oldList[this.currentPage * this.per + item++])
          }
        }
        if (position === -1) {
          this.currentPage = 0
        } else {
          this.currentPage = parseInt(position / this.per)
        }
      }

      // this.paginateList()
    },
    per () {
      this.currentPage = 0
      this.paginateList()
    }
  },
  methods: {
    paginateList () {
      const index = this.currentPage * this.per
      const paginatedList = this.list.slice(index, index + this.per)
      this.$parent.paginate[this.name].list = paginatedList
    },
    goToPage (page) {
      const maxPage = Math.ceil(this.list.length / this.per)
      if (page > maxPage) {
        warn(`You cannot go to page ${page}. The last page is ${maxPage}.`, this.$parent)
        return
      }
      this.currentPage = page - 1
    }
  },
  render (h) {
    return h(this.tag, {}, this.$slots.default)
  }
}
