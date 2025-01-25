<script setup lang="ts">
useHead({
  title: '合作单位'
})

enum type {studio,team,personal}
function strtype(t: type){
    switch (t){
        case type.studio: return "工作室";
        case type.team: return "团队";
        case type.personal: return "个人";
    }
}
const members = ref([
    {
        "name": "云术工作室",
        "type": type.studio,
        "leader": "云竹&柒屹"
    },
    {
        "name": "xdbstudio",
        "type": type.studio,
        "leader": "daimaxue"
    },
    {
        "name": "claystudio",
        "type": type.studio,
        "leader": "y_bowen"
    },
    {
        "name": "辽阔工作室",
        "type": type.studio,
        "leader": "辽阔"
    }
])
</script>
<template>
<VContainer class="d-flex flex-column ga-6 pa-4 pa-sm-6 pa-md-8">
    <div>
      <h2 class="text-h5 font-weight-bold text-primary float-in-right">合作单位</h2>
      <p class="subheading my-4 float-in-right">以下为加入了麒麟合作社的合作者。</p>
      <p class="subheading my-4 float-in-right">工作室旗下的团队没有展示。</p>
      <p class="subheading my-4 float-in-right">如果这上面没有你（你的团队或工作室）请联系柒屹。</p>
      <p class="subheading my-4 float-in-right">所有代表人都已经过验证。</p>
      <div class="rounded mt-2 elevation-2 float-in-left">
        <VTable>
          <thead>
            <tr>
              <th class="text-left">
                名称
              </th>
              <th class="text-left">
                类型
              </th>
              <th class="text-left">
                代表人
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in members" :key="item.name">
              <td>{{ item.name }}</td>
              <td>{{ strtype(item.type) }}</td>
              <td>{{ item.leader }}</td>
            </tr>
          </tbody>
        </VTable>
      </div>
    </div>
  </VContainer>
</template>