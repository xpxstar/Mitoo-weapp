Component({properties:{text:{type:String,value:0},warning:{type:Boolean,value:!1},error:{type:Boolean,value:!1},success:{type:Boolean,value:!1},closeable:{type:Boolean,value:!1}},data:{visible:!0},methods:{close(){this.setData({visible:!1})}}});