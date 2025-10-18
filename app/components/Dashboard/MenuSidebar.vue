<template>
  <UDashboardSidebar
    class="bg-slate-800 shadow-lg flex flex-col py-6 transition-all duration-300"
    :style="
      isCollapsed
        ? 'min-width: 64px; width: 64px;'
        : 'min-width: 280px; width: 280px;'
    "
    style="min-height: 100vh"
  >
    <template #toggle>
      <button
        class="flex items-center justify-center w-8 h-8 rounded-full bg-slate-700 hover:bg-slate-600 text-white absolute top-4 right-4 z-10"
        @click="isCollapsed = !isCollapsed"
        aria-label="Alternar menu"
      >
        <UIcon
          :name="
            isCollapsed
              ? 'i-heroicons-chevron-right'
              : 'i-heroicons-chevron-left'
          "
          class="w-5 h-5"
        />
      </button>
    </template>

    <!-- Logo/Avatar -->
    <div class="flex items-center justify-center mb-8 px-4" v-if="!isCollapsed">
      <div
        class="w-10 h-10 rounded bg-blue-500 flex items-center justify-center text-white text-xl font-bold"
      >
        <UIcon name="i-heroicons-squares-2x2" />
      </div>
    </div>

    <!-- Menu Items -->
    <nav :class="['flex flex-col gap-1 flex-1', isCollapsed ? 'px-1' : 'px-4']">
      <!-- Dashboard -->
      <UButton
        class="justify-start text-white hover:bg-slate-700 transition-colors duration-200"
        variant="ghost"
        size="lg"
        block
        :padded="true"
        to="/dashboard"
      >
        <template #leading>
          <UIcon name="i-heroicons-home" class="w-5 h-5" />
        </template>
        <span v-if="!isCollapsed">Dashboard - component</span>
      </UButton>

      <!-- Posts -->
      <UButton
        class="justify-start text-white hover:bg-slate-700 transition-colors duration-200 bg-slate-700"
        variant="ghost"
        size="lg"
        block
        :padded="true"
        to="/dashboard"
      >
        <template #leading>
          <UIcon name="i-heroicons-document-text" class="w-5 h-5" />
        </template>
        <span v-if="!isCollapsed">Home</span>
      </UButton>

      <!-- Media -->
      <UButton
        class="justify-start text-white hover:bg-slate-700 transition-colors duration-200"
        variant="ghost"
        size="lg"
        block
        :padded="true"
        to="/dashboard/accounts/list"
      >
        <template #leading>
          <UIcon name="i-heroicons-photo" class="w-5 h-5" />
        </template>
        <span v-if="!isCollapsed">Contas</span>
      </UButton>

      <!-- Pages -->
      <UButton
        class="justify-start text-white hover:bg-slate-700 transition-colors duration-200"
        variant="ghost"
        size="lg"
        block
        :padded="true"
        to="/pages"
      >
        <template #leading>
          <UIcon name="i-heroicons-document" class="w-5 h-5" />
        </template>
        <span v-if="!isCollapsed">Menu</span>
      </UButton>

      <!-- Settings -->
      <UButton
        class="justify-start text-white hover:bg-slate-700 transition-colors duration-200"
        variant="ghost"
        size="lg"
        block
        :padded="true"
        to="/settings"
      >
        <template #leading>
          <UIcon name="i-heroicons-cog-6-tooth" class="w-5 h-5" />
        </template>
        <span v-if="!isCollapsed">Menu</span>
      </UButton>

      <!-- Tools -->
      <UButton
        class="justify-start text-white hover:bg-slate-700 transition-colors duration-200"
        variant="ghost"
        size="lg"
        block
        :padded="true"
        to="/tools"
      >
        <template #leading>
          <UIcon name="i-heroicons-wrench-screwdriver" class="w-5 h-5" />
        </template>
        <span v-if="!isCollapsed">Menu</span>
      </UButton>
    </nav>

    <!-- Bottom Section -->
    <div :class="[isCollapsed ? 'px-1' : 'px-4', 'mt-auto']">
      <!-- Logout -->
      <UButton
        class="justify-start text-white hover:bg-slate-700 transition-colors duration-200"
        variant="ghost"
        size="lg"
        block
        :padded="true"
      >
        <template #leading>
          <UIcon name="i-heroicons-arrow-right-on-rectangle" class="w-5 h-5" />
        </template>
        <span v-if="!isCollapsed">Logout</span>
      </UButton>
    </div>
  </UDashboardSidebar>
</template>

<script setup>
import { ref } from "vue";
const isCollapsed = ref(false);
</script>
