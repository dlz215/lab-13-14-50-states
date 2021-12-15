<template>
  <div id="block-header">
    <h1 id="title">Have you visited every state?</h1>
  </div>
</template>

<script>

export default {
  name: "PageHeader"
}
</script>

<style scoped>
  #block-header {
    padding: 2rem 1rem;
    margin-bottom: 2rem;
    border-radius: .3rem;
    background-color: saddlebrown;
    background-image: url('~@/assets/map_header.jpg');
    background-position: center;
    background-size: cover;
    /* rem: relative to font size of element (1rem is equal to font size of element). Will scale with font size of element. */
  }

  #title{
    font-weight: 500;
    color: ghostwhite;
  }
</style>