let vm = new Vue({
    el: "#app",
    data: {
        productList:[],
        stock: ""
    },
    filters:{},
    mounted: function(){
        this.$nextTick(function () {
            this.cartView();
        })
    },
    methods: {
        cartView: function () {
            let _this = this;
            this.$http.get("data/cartData.json").then(function (res) {
                _this.productList = res.data.result.list;
            })
        },
        isStock: function () {
            
        }
        
    }
});