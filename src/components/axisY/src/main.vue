<template>
  <el-form :model="axisYForm" label-width="160px">
    <el-form-item label="坐标轴名称">
      <div style="text-align:left; padding-left: 20px;">
        <el-input v-model="axisYForm.name" size="small" style="width:240px"></el-input>
      </div>
    </el-form-item>
    <el-form-item label="坐标轴名称样式">
      <div style="text-align:left; padding-left: 20px;">
        <el-select v-model="axisYForm.nameFonts.family" placeholder="请选择字体" size="small">
          <el-option v-for="family in fonts.family" :key="family.value" :label="family.label" :value="family.value">
          </el-option>
        </el-select>
        <el-select v-model="axisYForm.nameFonts.size" placeholder="请选择字体大小" size="small">
          <el-option v-for="size in fonts.size" :key="size.value" :label="size.label" :value="size.value">
          </el-option>
        </el-select>
        <el-select v-model="axisYForm.nameFonts.weight" placeholder="请选择字体粗细" size="small">
          <el-option v-for="weight in fonts.weight" :key="weight.value" :label="weight.label" :value="weight.value">
          </el-option>
        </el-select>
        <br>
        <el-color-picker v-model="axisYForm.nameFonts.color"></el-color-picker>
      </div>
    </el-form-item>
    <el-form-item label="坐标轴名称位置">
      <div style="text-align:left; padding-left: 20px;">
        <el-radio-group v-model="axisYForm.position">
          <el-radio-button name="left" label="位于开端"></el-radio-button>
          <el-radio-button name="center" label="居中"></el-radio-button>
          <el-radio-button name="right" label="位于末端"></el-radio-button>
        </el-radio-group>
      </div>
    </el-form-item>
    <el-form-item label="名称到轴线的距离">
      <div style="text-align:left; padding-left: 20px;">
        <el-input-number v-model="axisYForm.distance" :min="0" style="width: 240px"></el-input-number>
      </div>
    </el-form-item>
    <el-form-item label="刻度显示方式">
      <div style="text-align:left; padding-left: 20px;">
        <el-radio-group v-model="axisYForm.display">
          <el-radio-button name="auto" label="自动"></el-radio-button>
          <el-radio-button name="vertical" label="垂直显示"></el-radio-button>
          <el-radio-button name="tilt" label="倾斜显示"></el-radio-button>
          <el-radio-button name="none" label="不显示"></el-radio-button>
        </el-radio-group>
      </div>
    </el-form-item>
    <el-form-item label="刻度标签样式">
      <div style="text-align:left; padding-left: 20px;">
        <el-select v-model="axisYForm.scaleFonts.family" placeholder="请选择字体" size="small">
          <el-option v-for="family in fonts.family" :key="family.value" :label="family.label" :value="family.value">
          </el-option>
        </el-select>
        <el-select v-model="axisYForm.scaleFonts.size" placeholder="请选择字体大小" size="small">
          <el-option v-for="size in fonts.size" :key="size.value" :label="size.label" :value="size.value">
          </el-option>
        </el-select>
        <el-select v-model="axisYForm.scaleFonts.weight" placeholder="请选择字体粗细" size="small">
          <el-option v-for="weight in fonts.weight" :key="weight.value" :label="weight.label" :value="weight.value">
          </el-option>
        </el-select>
        <br>
        <el-color-picker v-model="axisYForm.scaleFonts.color"></el-color-picker>
      </div>
    </el-form-item>
    <el-form-item label="数据轴格式">
      <div style="text-align:left; padding-left: 20px;">
        <el-select v-model="axisYForm.scaleFonts.family" placeholder="请选择字体" size="small">
          <el-option v-for="family in fonts.family" :key="family.value" :label="family.label" :value="family.value">
          </el-option>
        </el-select>
      </div>
    </el-form-item>
    <el-form-item label="刻度设置">
      <div class="scaleContainer">
        <el-form-item label="最小刻度">
          <el-select v-model="axisYForm.scale.min" placeholder="最小刻度" size="small">
            <el-option value="123"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="最大刻度">
          <el-select v-model="axisYForm.scale.max" placeholder="最大刻度" size="small">
            <el-option value="123"></el-option>
          </el-select>
        </el-form-item>
      </div>
    </el-form-item>
    <div style="text-align:left; padding:0 0 20px 90px;">
      <el-tag>分割线</el-tag>
    </div>
    <el-form-item label="是否显示">
      <div style="text-align:left; padding-left: 20px;">
        <el-switch v-model="axisYForm.showDivider" on-color="#13ce66" off-color="#ff4949"></el-switch>
      </div>
    </el-form-item>
    <el-form-item label="线条样式">
      <div style="text-align:left; padding-left: 20px;">
        <el-select v-model="axisYForm.line.type" placeholder="请选择类型" size="small">
          <el-option v-for="family in fonts.family" :key="family.value" :label="family.label" :value="family.value">
          </el-option>
        </el-select>
        <el-select v-model="axisYForm.line.size" placeholder="请选择字体大小" size="small">
          <el-option v-for="size in fonts.size" :key="size.value" :label="size.label" :value="size.value">
          </el-option>
        </el-select>
        <br>
        <el-color-picker v-model="axisYForm.line.color"></el-color-picker>
      </div>
    </el-form-item>
    <div style="text-align:left;padding:0 0 20px 90px;">
      <el-tag>分割区域</el-tag>
    </div>
    <el-form-item label="是否显示">
      <div style="text-align:left; padding-left: 20px;">
        <el-switch v-model="axisYForm.showDividArea" on-color="#13ce66" off-color="#ff4949"></el-switch>
      </div>
    </el-form-item>
  </el-form>
</template>

<script>
  import {fonts} from '@/util/fonts'
  export default {
    name: 'my-axisy',
    props: ['option', 'mainCharts'],
    data() {
      return {
        axisYForm: {
          name: '',
          nameFonts: {
            family: '',
            size: '',
            weight: '',
            color: '#000'
          },
          position: '位于开端',
          distance: 0,
          stepLength: 0,
          display: '自动',
          scaleFonts: {
            family: '',
            size: '',
            weight: '',
            color: '#000'
          },
          showDivider: false,
          line: {
            type: '',
            size: '',
            color: '#000'
          },
          showDividArea: false,
          scale: {
            min: '',
            max: ''
          }
        },
        fonts: fonts
      }
    }
  }
</script>

<style lang="scss">
  .scaleContainer {
    text-align: left;
    label {
      width: 100px !important;
    }
  }
</style>
