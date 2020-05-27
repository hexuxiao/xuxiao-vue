<template>
  <div>
    <header class="site-header jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1>请发表对React的评论</h1>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
      <!-- <Add :addComment='addComment'></Add> -->
      <!-- <Add ref='add'></Add> -->
      <Add @addComment='addComment'></Add>
      <List :comments='comments' :deleteComment="deleteComment"></List>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Add from "./components/Add";
import List from "@/components/List";
export default {
  components: {
    Add,
    List
  },
  data() {
    return {
      comments: [
        { id: 1, username: "岳云鹏", content: "111111" },
        { id: 2, username: "孟鹤堂", content: "222222" },
        { id: 3, username: "秦霄贤", content: "333333" }
      ]
    };
  },
  // mounted() {
  //   this.$refs.add.$on('addComment',this.addComment)
  // },
  methods: {
    addComment(obj){
      this.comments.unshift(obj)
    },
    deleteComment(index){
      this.comments.splice(index,1)
    }
  },
};
</script>

<style scoped>
</style>
