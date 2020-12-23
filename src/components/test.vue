<template>
  <div class="hello">
    <el-form ref="form" :model="form" label-width="120px">
          <el-row>
              <el-col :span="6">
                <div class="grid-content bg-purple">
                       <el-form-item label="表名称">
                          <el-select v-model="form.region" placeholder="请选择表名称">
                            <el-option label="保费" value="shanghai"></el-option>
                            <el-option label="运营中心" value="beijing"></el-option>
                          </el-select>
                       </el-form-item>
                </div>
              </el-col>
              <el-col :span="6">
                     <el-form-item label="输入标题">
                         <el-input v-model="form.name"></el-input>
                     </el-form-item>
               </el-col>
              <el-col :span="6">
                    <el-form-item label="选择背景颜色">
                         <el-color-picker v-model="form.color"></el-color-picker>
                     </el-form-item>
              </el-col>
              <el-col :span="6">
                     <el-form-item>
                        <el-button type="primary" @click="onSubmit">立即创建</el-button>
                     </el-form-item>
              </el-col>
          </el-row>
    </el-form>
    <h2>效果预览:</h2>
    <div :style="styleObj1">
          <h3 style="text-align:center;">
            {{form.name}}
          </h3>
         <el-row>
            <el-col :span="8">
                <vue-draggable-resizable :w="500" :h="400" v-on:dragging="onDrag" v-on:resizing="onResize" :parent="true">
              <div ref="echarts1" style="width:100%;height:300px;background:yellow;">
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
              </div>
                </vue-draggable-resizable>
              <vue-draggable-resizable :w="500" :h="400" v-on:dragging="onDrag" v-on:resizing="onResize" :parent="true">
               <div ref="echarts2" style="width:100%;height:500px;margin-top:30px;">
                     
              </div>
              </vue-draggable-resizable>
            </el-col>
            <el-col :span="8">
                <p></p>
            </el-col>
            <el-col :span="8">
                <vue-draggable-resizable :w="500" :h="400" v-on:dragging="onDrag" v-on:resizing="onResize" :parent="true">
                 <div ref="echarts4" style="width:100%;height:400px;"> 

                 </div>
                   </vue-draggable-resizable>
                <vue-draggable-resizable :w="500" :h="400" v-on:dragging="onDrag" v-on:resizing="onResize" :parent="true">
                 <div ref="echarts5" style="width:100%;height:400px;margin-top:30px;"> 

                 </div>
                </vue-draggable-resizable>
            </el-col>
         </el-row>
          

    </div>

  </div>
</template>

<script>
export default {
 
 data() {
      return {
        form: {
          name: '',
          region: '',
          color:'',
        },
        styleObj1:{
           background:'',
           width:'100%',
           height:'900px',
           overflow:'hidden'
          },
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
    methods: {
      onSubmit() {
        console.log('submit!');
        console.log(this.form);
        this.styleObj1.background=this.form.color
        this.echarts();
        this.echarts4();
        this.echarts5()
      },
       getRowClass({ row, column, rowIndex, columnIndex }) {
                 return `background-color:${this.form.color};font-color:black;`;
      },
      echarts(){
          const  myCharts = this.$echarts.init(this.$refs.echarts2);
          let option = {
              tooltip: {
                  trigger: 'item',
                  formatter: '{a} <br/>{b}: {c} ({d}%)'
              },
              legend: {
                  orient: 'vertical',
                  left: 10,
                  data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
              },
              series: [
                  {
                      name: '访问来源',
                      type: 'pie',
                      radius: ['50%', '70%'],
                      avoidLabelOverlap: false,
                      label: {
                          show: false,
                          position: 'center'
                      },
                      emphasis: {
                          label: {
                              show: true,
                              fontSize: '30',
                              fontWeight: 'bold'
                          }
                      },
                      labelLine: {
                          show: false
                      },
                      data: [
                          {value: 335, name: '直接访问'},
                          {value: 310, name: '邮件营销'},
                          {value: 234, name: '联盟广告'},
                          {value: 135, name: '视频广告'},
                          {value: 1548, name: '搜索引擎'}
                      ]
                  }
              ]
          };
          myCharts.setOption(option);
      },
      echarts4(){
        const  myCharts = this.$echarts.init(this.$refs.echarts4);
        let option = {
              tooltip: {
                  trigger: 'axis',
                  axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                      type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                  }
              },
              legend: {
                  data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
              },
              grid: {
                  left: '3%',
                  right: '4%',
                  bottom: '3%',
                  containLabel: true
              },
              xAxis: {
                  type: 'value'
              },
              yAxis: {
                  type: 'category',
                  data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
              },
              series: [
                  {
                      name: '直接访问',
                      type: 'bar',
                      stack: '总量',
                      label: {
                          show: true,
                          position: 'insideRight'
                      },
                      data: [320, 302, 301, 334, 390, 330, 320]
                  },
                  {
                      name: '邮件营销',
                      type: 'bar',
                      stack: '总量',
                      label: {
                          show: true,
                          position: 'insideRight'
                      },
                      data: [120, 132, 101, 134, 90, 230, 210]
                  },
                  {
                      name: '联盟广告',
                      type: 'bar',
                      stack: '总量',
                      label: {
                          show: true,
                          position: 'insideRight'
                      },
                      data: [220, 182, 191, 234, 290, 330, 310]
                  },
                  {
                      name: '视频广告',
                      type: 'bar',
                      stack: '总量',
                      label: {
                          show: true,
                          position: 'insideRight'
                      },
                      data: [150, 212, 201, 154, 190, 330, 410]
                  },
                  {
                      name: '搜索引擎',
                      type: 'bar',
                      stack: '总量',
                      label: {
                          show: true,
                          position: 'insideRight'
                      },
                      data: [820, 832, 901, 934, 1290, 1330, 1320]
                  }
              ]
          };
           myCharts.setOption(option);
      },
      echarts5(){
        const  myCharts = this.$echarts.init(this.$refs.echarts5);
       let option = {
           
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    label: {
                        backgroundColor: '#6a7985'
                    }
                }
            },
            legend: {
                data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
            },
            toolbox: {
                feature: {
                    saveAsImage: {}
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    boundaryGap: false,
                    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [
                {
                    name: '邮件营销',
                    type: 'line',
                    stack: '总量',
                    areaStyle: {},
                    data: [120, 132, 101, 134, 90, 230, 210]
                },
                {
                    name: '联盟广告',
                    type: 'line',
                    stack: '总量',
                    areaStyle: {},
                    data: [220, 182, 191, 234, 290, 330, 310]
                },
                {
                    name: '视频广告',
                    type: 'line',
                    stack: '总量',
                    areaStyle: {},
                    data: [150, 232, 201, 154, 190, 330, 410]
                },
                {
                    name: '直接访问',
                    type: 'line',
                    stack: '总量',
                    areaStyle: {},
                    data: [320, 332, 301, 334, 390, 330, 320]
                },
                {
                    name: '搜索引擎',
                    type: 'line',
                    stack: '总量',
                    label: {
                        normal: {
                            show: true,
                            position: 'top'
                        }
                    },
                    areaStyle: {},
                    data: [820, 932, 901, 934, 1290, 1330, 1320]
                }
            ]
        };
             myCharts.setOption(option);
      }


    },
    mounted(){
       
    },

}
</script>

<style lang="less">

</style>