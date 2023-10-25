<template>
    <div class="top">
        <div class="content">
            <div class="left">
                <p>预约挂号统一平台</p>
            </div>
            <div class="right">
                <p class="help">帮助中心</p>
                <p class="login">登录</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.top {
    position: fixed;
    z-index: 999;
  width: 100%;
  height: 70px;
  background: #fff;
  display: flex;
  justify-content: center;

  .content {
    width: 1200px;
    height: 70px;
    background: #ffffff;
    display: flex;
    justify-content: space-between;

    .left {
      display: flex;
      justify-content: center;
      align-content: center;

      p {
        font-size: 20px;
        color: #55a6fe;
      }
    }

    .right {
      display: flex;
      justify-content: center;
      align-items: center;
        font-size: 14px;
      .help {
        margin-right: 10px;
      }
    }
  }
}
</style>