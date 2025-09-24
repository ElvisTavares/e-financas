<!-- <template>
  <div>
    <h1>Olá, Nuxt 🚀</h1>
    <p>Agora o roteamento automático está funcionando!</p>
  </div>

  <hr />

  <UInput color="neutral" variant="subtle" placeholder="Search..." />
  <UBlogPost
    title="Introducing Nuxt Icon v1"
    description="Discover Nuxt Icon v1 - a modern, versatile, and customizable icon solution for your Nuxt projects."
    date="2024-11-25"
  />
</template>
<script setup lang="ts">
const value = ref("");
</script> -->

<template>
  <UContainer class="min-h-screen flex flex-col">
    <!-- Header -->
    <UHeader>
      <template #left>
        <UButton color="primary" variant="ghost" icon="i-heroicons-bars-3" />
      </template>
      <template #center>
        <span class="font-bold text-lg">Meu App Nuxt UI</span>
      </template>
      <template #right>
        <UButton color="primary">Entrar</UButton>
      </template>
    </UHeader>

    <!-- Main -->
    <div class="flex flex-1">
      <!-- Sidebar -->
      <UAside class="w-64 border-r p-4">
        <UVerticalNavigation
          :links="[
            { label: 'Dashboard', icon: 'i-heroicons-home' },
            { label: 'Usuários', icon: 'i-heroicons-users' },
            { label: 'Configurações', icon: 'i-heroicons-cog-6-tooth' },
          ]"
        />
      </UAside>

      <!-- Content -->
      <UMain class="flex-1 p-6">
        <h1 class="text-2xl font-bold mb-4">Bem-vindo 👋</h1>
        <p class="mb-6">Este é um layout inicial usando Nuxt UI.</p>

        <UCard class="mb-4">
          <template #header>
            <h2 class="text-xl font-semibold">Card de Exemplo</h2>
          </template>
          <p>Conteúdo dentro de um card.</p>
          <template #footer>
            <UButton color="primary">Ação</UButton>
          </template>
        </UCard>
      </UMain>
    </div>
  </UContainer>
</template>

<script setup>
// Nenhum import manual necessário se o plugin de registro global estiver ativo
</script>
