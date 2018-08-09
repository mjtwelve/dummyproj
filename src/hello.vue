<template>
  <v-layout>
      <v-btn color="success" @click="doSomething()">Success</v-btn>

  </v-layout>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";

export default {
  name: "hello",
  data() {
    return {
      greeting: "Hello"
    };
  },

  computed: {
    ...mapState({})
  },
  methods: {
    ...mapMutations(["doSomething"]),
    ...mapActions({})
  }
};
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
  color: #2e9afe;
}
</style>
