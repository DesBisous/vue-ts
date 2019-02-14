import Vue from 'vue';

declare global {
  interface Window {
    $vm: Vue,
  }
}
