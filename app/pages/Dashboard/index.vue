<template>
  <UDashboardGroup>
    <UDashboardSidebar>
      <template #toggle>
        <UDashboardSidebarToggle variant="subtle" />
      </template>
    </UDashboardSidebar>

    <slot />
  </UDashboardGroup>
</template>

<script setup lang="ts">
import type { TabsItem } from "@nuxt/ui";

const items: TabsItem[] = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Unread",
    value: "unread",
  },
];
</script>
