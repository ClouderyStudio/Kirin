<template>
  <VFooter color="primary" id="white-pantyhose-footer">
    <div class="left">
      <NuxtImg :width="125" src="fontlogo-gradient.png"></NuxtImg>
      <p class="year">© <!-- 2025 - -->{{ new Date().getFullYear() }} Kirin Cooperative, all rights reserved.</p>
      <!--
      <div class="links">
        <VBtn variant="plain" size="small" target="_blank" href="https://github.com/Kirin/">我们的开源项目</VBtn>
      </div>
    -->
    </div>
    <div class="right">
      <h3>友情链接</h3>
      <div class="links">
        <VBtn variant="plain" size="small" target="_blank" href="https://cloudery.cn/">云术工作室</VBtn>
      </div>
    </div>
  </VFooter>
</template>

<style scoped lang="scss">
#white-pantyhose-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 32px 5vw;
}

.year {
  font-size: 14px;
}

.left {
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;

  .links {
    display: flex;
    align-items: flex-start;

    margin-top: 20px;
    margin-bottom: -10px;
    margin-left: -12px;
  }
}

.right {
  display: flex;
  flex-direction: column;
  gap: 13px;
  align-items: flex-end;

  .links {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    margin-right: -12px;
    margin-bottom: -10px;
  }
}

@media screen and (width <= 600px) {
  #white-pantyhose-footer {
    align-items: flex-end;
  }

  .left .links {
    flex-direction: column;
  }

  .right {
    gap: 34px;
  }
}
</style>
<script setup lang="ts">
</script>