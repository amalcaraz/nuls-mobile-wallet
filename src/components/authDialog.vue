<template>
  <view class="auth-dialog">
    <nb-icon class="auth-dialog__icon" name='finger-print' />
    <text class="auth-dialog__text">Authentication needed</text>
  </view>
</template>
 
<script>
export default { 
};
</script>

<style>
.auth-dialog {
  position: absolute;
  flex: 1;
  justify-content: center;
  align-items: center;
  top: 50%;
  margin-left: 10%;
  margin-top: -50px;
  width: 80%;
  height: 140;
  background-color: #ddd;
  border-width: 1;
  border-radius: 5;
  border-style: solid;
  border-color: #999;
  opacity: 0.7;
}

.auth-dialog__text {
  font-size: 20
}

.auth-dialog__icon {
  font-size: 50;
  color: red;
  margin-bottom: 10
}
</style>
