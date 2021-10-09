<template>
   <a-comment class="comment">
    <template #author><a class="text-light">Han Solo</a></template>
    <template #avatar>
      <a-avatar
        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
        alt="Han Solo"
      />
    </template>
    <template #datetime>
      <a-tooltip :title="moment().format('YYYY-MM-DD HH:mm:ss')">
        <span>{{ moment().fromNow() }}</span>
      </a-tooltip>
    </template>
    <template #content>
      <p class="text-">
        We supply a series of design principles, practical patterns and high
        quality design resources (Sketch and Axure), to help people create their
        product prototypes beautifully and efficiently.
      </p>
    </template>
  </a-comment>
</template>

<script>
import moment from "moment";

export default {
  name: "Comment",

  methods: {
    moment
  },
}
</script>

<style lang="scss">
@import "../shared/scss/variables.scss";
.comment {
  padding: 0 1rem 1rem 4rem;
  color: $text-color;
  margin-top: 0.5rem;

  .icon {
    font-size: 1.25rem; 
    color: $text-color; 
    position: relative;
    bottom: 2px;
  }

  .icon-lable {
    padding-left: 0.5rem;
    cursor: auto;
    color: $text-color;
    font-size: 1rem;
  }

}
</style>