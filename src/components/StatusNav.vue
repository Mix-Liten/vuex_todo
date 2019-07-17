<template>
  <ul>
    <li>
      <button
      type="button"
      @click="changeStatus('all')"
      class="btn btn-success btn-border"
      :class="{'active': status == 'all'}"
      >
        全部
      </button>
    </li>
    <li>
      <button
      type="button"
      @click="changeStatus('inCompleted')"
      class="btn btn-success btn-border"
      :class="{'active': status == 'inCompleted'}"
      >
        進行中
      </button>
    </li>
    <li>
      <button
      type="button"
      @click="changeStatus('completed')"
      class="btn btn-success btn-border"
      :class="{'active': status == 'completed'}"
      >
        已完成
      </button>
    </li>
  </ul>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "StatusNav",
  methods: {
    ...mapActions(["changeStatus"]),
  },
  computed: {
    ...mapGetters(["status"]),
  },
};
</script>

<style scoped>
ul {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
}

ul li {
  display: inline-block;
}

ul li:not(:last-child)::after {
  content: " | ";
  margin: auto 2rem;
}

ul li button {
  cursor: pointer;
}

ul li button.active {
  background-color: #25a25a !important;
  color: #fff !important;
}

.btn {
  font-weight: bold;
  font-size: 12px;
  letter-spacing: 2px;
  padding: 13px 17px;
  border: none;
  -webkit-border-radius: 2px;
  -webkit-background-clip: padding-box;
  -moz-border-radius: 2px;
  -moz-background-clip: padding;
  border-radius: 2px;
  background-clip: padding-box;
  transition: color 0.2s linear, background-color 0.2s linear;
}

.btn.btn-success {
  background-color: #2ecc71;
}

.btn.btn-success.btn-border {
  border-color: #2ecc71;
  color: #2ecc71;
}

.btn.btn-success:hover {
  background-color: #25a25a;
  color: #fff;
}

.btn.btn-border {
  border: 2px solid;
  background: transparent;
}
</style>
