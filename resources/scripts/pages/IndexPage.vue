<template>
  <q-page class="row items-center justify-evenly">
    <example-component
      title="Todo items"
      active
      :todos="todos"
    ></example-component>
  </q-page>
</template>

<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query';
import axios from 'axios';
import { computed } from 'vue';
import ExampleComponent from '../components/ExampleComponent.vue';
import { Todo } from '../components/models';

const { data, isLoading, isError } = useQuery({
  queryKey: ['todo-items'],
  queryFn: async () => {
    try {
      const getResponse = await axios.get('api/items');
      console.log(getResponse);
      const items = getResponse.data as Todo[];
      return items;
    } catch (error) {
      console.error(error);
    }
  },
  refetchOnWindowFocus: false,
});
const todos = computed(() => data.value ?? []);
console.log(todos);
console.log(todos);
</script>
