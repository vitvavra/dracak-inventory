<template>
  <div>
    <div
        class="map"
        ref="componentRef"
        @mousedown="onMouseDown"
        @mouseup="moving = false"
        @mousemove.prevent="onMouseMove"
        @wheel="zoom"
        @click="useTool"
        :style="mapStyle"
    >
      <div class="mapContent" :style="mapPositionStyle" ref="mapRef">
        <img :src="`${currentMapImageSrc}`" alt="" class="image" ref="image">
      </div>


    </div>
  </div>
</template>
<script setup lang="ts">
import {computed, reactive, ref} from 'vue';

const currentMapImageSrc = 'https://img-9gag-fun.9cache.com/photo/aQEAw48_700bwp.webp';

const moving = ref(false);
const mapPosition = reactive({
  x: 0,
  y: 0
});

const mouseDownPosition = reactive({
  x: 0,
  y: 0
});


const prevMapPosition = reactive({
  x: 0,
  y: 0
});

const canMove = ref(true);
const mapScale = ref(1);
const mapRef = ref<Element | null>(null);
const componentRef = ref<Element | null>(null);

const onMouseDown = () => {

};
const onMouseMove = () => {

};

const zoom = (ev: WheelEvent) => {
  if(ev.deltaY > 0 ) mapScale.value *= 0.9;
  else mapScale.value *= 1.1;

};
const useTool = () => {
  console.log('mouse use tool');
};

const mapStyle = computed(() => ({}));
const mapPositionStyle = computed(() => ({
  transform: `scale(${1/mapScale.value}) translate(-${18 * mapScale.value}px, -${18 * mapScale.value}px)`
}));
</script>
