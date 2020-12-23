<template>
    <vue-seamless-scroll :data="listData" :class-option="optionHover" class="seamless-warp">
        <ul class="item">
             <el-table
                        :data="tableData"
                        border
                        :row-style="getRowClass" :header-row-style="getRowClass" :header-cell-style="getRowClass" 
                        :cell-style="getRowClass"
                        style="width: 100%;">
                        <el-table-column
                          prop="date"
                          label="日期"
                          width="180">
                        </el-table-column>
                        <el-table-column
                          prop="name"
                          label="姓名"
                          width="180">
                        </el-table-column>
                        <el-table-column
                          prop="address"
                          label="地址">
                        </el-table-column>
                      </el-table>
        </ul>
    </vue-seamless-scroll>
</template>
<style scoped>
    .seamless-warp {
        height: 229px;
        overflow: hidden;
    }
</style>
<script>
    export default {
        data () {
            return {
                listData: [{
                   'title': '无缝滚动第一行无缝滚动第一行',
                   'date': '2017-12-16'
                 }, {
                    'title': '无缝滚动第二行无缝滚动第二行',
                    'date': '2017-12-16'
                 }, {
                     'title': '无缝滚动第三行无缝滚动第三行',
                     'date': '2017-12-16'
                 }, {
                     'title': '无缝滚动第四行无缝滚动第四行',
                     'date': '2017-12-16'
                 }, {
                     'title': '无缝滚动第五行无缝滚动第五行',
                     'date': '2017-12-16'
                 }, {
                     'title': '无缝滚动第六行无缝滚动第六行',
                     'date': '2017-12-16'
                 }, {
                     'title': '无缝滚动第七行无缝滚动第七行',
                     'date': '2017-12-16'
                 }, {
                     'title': '无缝滚动第八行无缝滚动第八行',
                     'date': '2017-12-16'
                 }, {
                     'title': '无缝滚动第九行无缝滚动第九行',
                     'date': '2017-12-16'
                 }],
                  tableData: [{
                        date: '2016-05-02',
                        name: '王小虎',
                        address: '上海市普陀区金沙江路 1518 弄'
                        }, {
                        date: '2016-05-04',
                        name: '王小虎',
                        address: '上海市普陀区金沙江路 1517 弄'
                        }, {
                        date: '2016-05-01',
                        name: '王小虎',
                        address: '上海市普陀区金沙江路 1519 弄'
                        }, { 
                        date: '2016-05-03',
                        name: '王小虎',
                        address: '上海市普陀区金沙江路 1516 弄'
                        }]

                }
            },
            computed: {
                optionHover () {
                    return {
                            hoverStop: false
                        }
                }
             }
       }
</script>