<script setup lang="ts">
const drawer = ref();
</script>

<template>
  <VAppBar height="56" color="primary">
    <template v-slot:prepend>
      <VAppBarNavIcon @click.stop="drawer = !drawer"></VAppBarNavIcon>
    </template>
    <VAppBarTitle>
      麒麟 Kirin
    </VAppBarTitle>
  </VAppBar>

  <VNavigationDrawer v-model="drawer">
    <VList>
      <VListItem prepend-icon="mdi-home" title="首页" to="/" color="primary"></VListItem>
      <VListItem prepend-icon="mdi-account" title="合作单位" to="/members" color="primary"></VListItem>
    </VList>
    <!--<VDivider />-->
  </VNavigationDrawer>

  <VMain>
    <slot></slot>
    <Footer />
  </VMain>
</template>

<style scoped lang="scss">
// #region Fix SSR

.v-app-bar {
  width: 100%;
  height: 56px;

  &:deep(.v-toolbar__content, .v-toolbar__extension) {
    position: relative;

    display: flex;
    flex: 0 0 auto;
    align-items: center;

    width: 100%;

    transition: inherit;
  }

  &:deep(.v-toolbar__prepend) {
    margin-inline: 10px auto;
  }

  &:deep(.v-toolbar-title) {
    flex: 1 1;
  }

  &:deep(.v-toolbar__content>.v-toolbar-title) {
    margin-inline-start: 16px;
  }
}

// #endregion

.v-app-bar-title {
  height: 100%;

  &:deep(.v-toolbar-title__placeholder) {
    display: flex;
    align-items: center;
    height: 100%;
  }

  img {
    transform: translateY(-1px);
  }
}
</style>
