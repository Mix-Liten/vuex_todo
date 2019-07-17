<template>
  <div id="app">
    <Todo />
  </div>
</template>

<script>
import Todo from "@/views/Todo.vue";

export default {
  name: "app",
  components: {
    Todo,
  }
};
</script>

<style>
body {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  line-height: 1.6;
  background: #e8f7f0;
}
</style>
