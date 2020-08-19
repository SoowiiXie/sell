<template>
  <h3 id="card" class="bg-success rounded col-12 text-center mx-auto">
    {{card}}
  </h3>
</template>

<script>
export default {
  name: 'Card',
  props: ['card']
}
</script>

<style>
@import 'bootstrap';
</style>
