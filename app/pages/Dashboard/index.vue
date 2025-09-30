<template>
  <UDashboardGroup class="flex flex-col md:flex-row min-h-screen">
    <DashboardMenuSidebar />

    <div
      class="flex-1 flex flex-col bg-[var(--color-neutral)] min-h-screen px-2 md:px-8"
    >
      <div
        class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8"
      >
        <!-- AREA 1 -->
        <div
          class="max-w-md w-full p-2 md:p-4 bg-white rounded-lg shadow-md flex flex-col justify-center"
        >
          <h1
            class="text-lg md:text-xl font-bold mb-2 text-center md:text-left"
            style="color: var(--color-primary)"
          >
            <!-- Total Receita -->
            Saldo
          </h1>
          <p
            class="text-sm md:text-base mb-2 text-center md:text-left"
            style="color: var(--color-text)"
          >
            R$: 3000,00
          </p>
        </div>
        <!-- AREA 1 -->

        <!-- AREA 2 -->
        <div
          class="max-w-md w-full p-2 md:p-4 bg-white rounded-lg shadow-md flex flex-col justify-center"
        >
          <h1
            class="text-lg md:text-xl font-bold mb-2 text-center md:text-left"
            style="color: var(--color-primary)"
          >
            Entradas
          </h1>
          <p
            class="text-sm md:text-base mb-2 text-center md:text-left"
            style="color: var(--color-text)"
          >
            R$: 1500,00
          </p>
        </div>
        <!-- AREA 2 -->

        <!-- AREA 3 -->

        <div
          class="max-w-md w-full p-2 md:p-4 bg-white rounded-lg shadow-md flex flex-col justify-center"
        >
          <h1
            class="text-lg md:text-xl font-bold mb-2 text-center md:text-left"
            style="color: var(--color-primary)"
          >
            Despesas
          </h1>
          <p
            class="text-sm md:text-base mb-2 text-center md:text-left"
            style="color: var(--color-text)"
          >
            R$: 500
          </p>
        </div>
        <!-- AREA 3 -->

        <!-- AREA 3 -->

        <div
          class="max-w-md w-full p-2 md:p-4 bg-white rounded-lg shadow-md flex flex-col justify-center"
        >
          <h1
            class="text-lg md:text-xl font-bold mb-2 text-center md:text-left"
            style="color: var(--color-primary)"
          >
            Contas a receber
          </h1>
          <p
            class="text-sm md:text-base mb-2 text-center md:text-left"
            style="color: var(--color-text)"
          >
            R$: 500
          </p>
        </div>
        <!-- AREA 3 -->

        <!-- AREA 3 -->

        <div
          class="max-w-md w-full p-2 md:p-4 bg-white rounded-lg shadow-md flex flex-col justify-center"
        >
          <h1
            class="text-lg md:text-xl font-bold mb-2 text-center md:text-left"
            style="color: var(--color-primary)"
          >
            TESTE
          </h1>
          <p
            class="text-sm md:text-base mb-2 text-center md:text-left"
            style="color: var(--color-text)"
          >
            R$: 500
          </p>
        </div>
        <!-- AREA 3 -->
      </div>
    </div>
  </UDashboardGroup>
</template>

<script setup lang="ts">
const handleLogout = () => {
  // Implementar lógica de logout
  console.log("Logout clicked");
};
</script>

<style scoped>
/* Customizações adicionais se necessário */
</style>
