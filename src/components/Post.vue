<template>
    <a-comment class="post">
      <template #actions>
        <span key="comment-basic-reply-to">Reply to</span>
      </template>
      <template #author><a class="text-light">Han Solo</a></template>
      <template #avatar>
        <a-avatar
          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          alt="Han Solo"
        />
      </template>
      <template #content>
        <p>
          We supply a series of design principles, practical patterns and high
          quality design resources (Sketch and Axure), to help people create
          their product prototypes beautifully and efficiently.
        </p>
      </template>
      <template #datetime>
        <a-tooltip :title="moment().format('YYYY-MM-DD HH:mm:ss')">
          <span>{{ moment().fromNow() }}</span>
        </a-tooltip>
      </template>
    </a-comment>
</template>

<script>
import moment from "moment";
import { ref } from "vue";

export default {
  setup() {
    const likes = ref(0);
    const dislikes = ref(0);
    const action = ref();

    const like = () => {
      likes.value = 1;
      dislikes.value = 0;
      action.value = "liked";
    };

    const dislike = () => {
      likes.value = 0;
      dislikes.value = 1;
      action.value = "disliked";
    };

    return {
      likes,
      dislikes,
      action,
      like,
      dislike,
      moment,
    };
  },
};
</script>

<style lang="scss">
@import "../shared/scss/variables.scss";
.post {
  padding: 0 1rem;
  color: $text-color;
  border-top: 0.5px solid $border-color;
  margin-top: 0.5rem;
}
</style>