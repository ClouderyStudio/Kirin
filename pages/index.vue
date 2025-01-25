<script setup lang="ts">
useHead({
  link: [
    {
      rel: 'preload',
      fetchpriority: 'high',
      as: 'image',
      href: "https://cdn.pixabay.com/photo/2020/07/27/14/34/stars-5442598_960_720.jpg",
      type: 'image/jpeg',
      crossorigin: 'anonymous'
    }
  ]
})

const snackbar = ref(false)

</script>

<template>
  <div class="home-container">
    <VParallax class="first-block"
      src="https://cdn.pixabay.com/photo/2020/07/27/14/34/stars-5442598_960_720.jpg">
      <div class="d-flex ga-4 fill-height flex-column justify-center align-center text-white float-in-up">
        <div class="logo-container px-8 d-flex flex-column flex-md-row ga-4 justify-center align-center">
          <NuxtImg preload class="logo-shadow" height="400" width="450" src="fontlogo-gradient.png" />
          <!-- 这里留一个display: none的h1是为了页面上有h1作为标题，用于SEO优化 -->
          <h1 class="d-none">Kirin</h1>
        </div>
        <h4 class="text-h5 subheading text-shadow">工作室、团队或个人合作社</h4>
      </div>
    </VParallax>

    <!-- Origin code
        <div class="second-block d-flex flex-shrink-0 flex-column flex-wrap justify-center align-center pa-8">
      <div class="line d-flex flex-shrink-0 flex-wrap justify-center align-center">
        <HomeFeature icon="mdi-memory" title="性能">高性能的独立服务器<br>由Fabric服务端驱动</HomeFeature>
        <HomeFeature icon="mdi-pinwheel" title="静谧">倡导恬静与安稳<br>温馨和谐的MC社区</HomeFeature>
        <HomeFeature icon="mdi-cog" title="热忱">由热爱驱动<br>勤奋的更新与修复</HomeFeature>
      </div>
      <div class="line d-flex flex-shrink-0 flex-wrap justify-center align-center">
        <HomeFeature icon="mdi-heart" title="生电">经典地毯服<br>具有完整的原版特性</HomeFeature>
      </div>
    </div>
    -->
    
    <VParallax class="second-block bg-white">
      <div class="pa-8 pl-4 d-flex fill-height justify-space-between text-black flex-column flex-sm-row">
        <div class="d-flex ga-2 flex-column justify-space-between">
          <div>
            <h4 class="text-h4 mb-4">介绍</h4>
            麒麟合作社（Kirin Cooperative）是一个互联网合作平台，由云竹和柒屹共同创建。该平台致力于构建一个平等、互助的合作生态，促进各合作单位之间的协同发展。权限管理在麒麟合作社中，各合作单位的代表人拥有最高管理权限，且合作单位之间的权限完全一致。这种管理模式确保了各合作方在决策和运营过程中的平等地位，能够充分表达意见并共同推动合作社的发展。合作关系自合作单位加入麒麟合作社起，便与所有其他合作单位建立了互相合作关系。这种合作关系贯穿于合作社的各个业务领域，包括项目合作、资源共享、技术交流等，旨在实现互利共赢。麒麟合作社通过整合各方资源，发挥各自优势，致力于在互联网领域创造更多价值，推动合作单位的共同发展。
          </div>
        </div>
      </div>
    </VParallax>

    <VParallax class="third-block" :height="320"
      src="https://cdn.pixabay.com/photo/2020/07/27/14/34/stars-5442598_960_720.jpg">
      <div class="pa-8 d-flex fill-height justify-space-between text-white flex-column flex-sm-row">
        <div class="d-flex ga-2 flex-column justify-space-between">
          <div>
            <h4 class="text-h4 mb-4">加入合作社</h4>
            你可以联系<strong>云竹或柒屹</strong>申请加入合作社，QQ号已写在下面。如果是工作室/团队加入，请确保你是该工作室/团队的代表人；如果是个人加入，无需任何前提。<br/>
          </div>
          <div class="d-flex ga-4 flex-column">
            <p class="d-flex ga-1 align-center">
              <VIcon icon="mdi-qqchat" /><b class="mr-2">云竹</b>2457483710
            </p>
            <p class="d-flex ga-1 align-center">
              <VIcon icon="mdi-qqchat" /><b class="mr-2">柒屹</b>2675256772
            </p>
          </div>
        </div>
      </div>
    </VParallax>
  </div>
  <VSnackbar v-model="snackbar">
    <!-- Content here -->
    <template v-slot:actions>
      <VBtn color="pink" variant="text" @click="snackbar = false">
        关闭
      </VBtn>
    </template>
  </VSnackbar>
</template>

<style scoped lang="scss">
.first-block {
  height: calc(100dvh - 56px);

  &:deep(.v-img__img) {
    filter: brightness(0.8) blur(2px);
  }

  p,
  h4 {
    user-select: text;
  }

  .logo-container {
    max-width: 100%;

    img:nth-child(2) {
      width: 100%;
    }
  }
}

.second-block,
.line {
  gap: 2em;
  max-width: 100%;
}

.third-block {
  &:deep(.v-img__img) {
    filter: blur(32px);
  }

  h2,
  p {
    user-select: text;
  }
}

.v-parallax {
  background-color: #50424d;
}

.logo {
  aspect-ratio: 1 / 1;
}

.logo-shadow {
  filter: drop-shadow(0 6px 8px rgb(0 0 0 / 30%));
}

.text-shadow {
  text-shadow: 0 3px 6px rgb(0 0 0 / 30%);
}
</style>