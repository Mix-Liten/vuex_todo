<template>
  <div id="app">
    <div class="container">
      <StatusNav />
      <AddTodo />
      <LimitTodos />
      <Todos />
    </div>
  </div>
</template>

<script>
import StatusNav from "@/components/StatusNav.vue";
import AddTodo from "@/components/AddTodo.vue";
import LimitTodos from "@/components/LimitTodos.vue";
import Todos from "@/components/Todos.vue";

export default {
  name: "Todo",
  components: {
    StatusNav,
    AddTodo,
    LimitTodos,
    Todos,
  }
};
</script>

<style>
.container {
  max-width: 1100px;
  margin: auto;
  overflow: auto;
  padding: 0 2rem;
}
</style>
