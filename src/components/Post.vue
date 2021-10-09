<template>
  <a-comment class="post">
    <template #actions>
      <span key="comment-basic-reply-to">
        <a-tooltip :title="`Comment ${2}`">
          <template #default>
            <MessageOutlined class="icon" @click="comment" />
          </template>
        </a-tooltip>
        <span class="icon-lable">
          {{ 2 }}
        </span>
      </span>
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
        quality design resources (Sketch and Axure), to help people create their
        product prototypes beautifully and efficiently.
      </p>
    </template>
    <template #datetime>
      <a-tooltip :title="moment().format('YYYY-MM-DD HH:mm:ss')">
        <span>{{ moment().fromNow() }}</span>
      </a-tooltip>
    </template>
  </a-comment>
  <comment v-if="showComment"/>
</template>

<script>
import moment from "moment";
import { MessageOutlined } from "@ant-design/icons-vue";
import Comment from "./Comment.vue";

export default {
  components: { MessageOutlined, Comment },
  name: "Post",
  data() {
    return {
      showComment: false
    }
  },

  methods: {
    moment,
    comment() {
      this.showComment = !this.showComment;
    },
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

  .icon {
    font-size: 1.25rem; 
    color: white; 
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