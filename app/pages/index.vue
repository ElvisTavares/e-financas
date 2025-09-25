<template>
  <UContainer
    class="flex flex-col w-full h-full"
    style="
      background-color: var(--color-neutral);
      color: var(--color-text);
      min-width: 0;
      min-height: 0;
      width: 100vw;
      height: 100vh;
      box-sizing: border-box;
      overflow: hidden;
    "
  >
    <!-- Hero Section -->
    <section
      class="flex flex-col items-center justify-center flex-1 w-full py-16"
      style="background-color: white"
    >
      <h1
        class="text-5xl font-extrabold mb-6"
        style="color: var(--color-primary)"
      >
        Bem-vindo ao Finanças Pro
      </h1>
      <p class="mb-8 text-xl max-w-xl text-center">
        Gerencie seu dinheiro com facilidade, segurança e inteligência. Tenha
        controle total sobre seus gastos, metas e investimentos.
      </p>
      <UButton
        style="
          background-color: var(--color-primary);
          color: white;
          font-size: 1.2rem;
          padding: 0.75rem 2rem;
        "
        @click="goToDashboard"
      >
        Começar agora
      </UButton>
    </section>

    <!-- Funcionalidades -->
    <section
      class="grid md:grid-cols-3 gap-8 px-8 py-12 w-full"
      style="background-color: var(--color-neutral)"
    >
      <UCard
        class="shadow-lg"
        style="border-top: 4px solid var(--color-primary)"
      >
        <template #header>
          <h3 class="text-xl font-bold" style="color: var(--color-primary)">
            Controle de Gastos
          </h3>
        </template>
        <p>
          Registre despesas e receitas, visualize gráficos e mantenha seu
          orçamento sob controle.
        </p>
      </UCard>

      <UCard
        class="shadow-lg"
        style="border-top: 4px solid var(--color-secondary)"
      >
        <template #header>
          <h3 class="text-xl font-bold" style="color: var(--color-secondary)">
            Metas Financeiras
          </h3>
        </template>
        <p>
          Defina objetivos, acompanhe seu progresso e alcance seus sonhos com
          planejamento.
        </p>
      </UCard>

      <UCard
        class="shadow-lg"
        style="border-top: 4px solid var(--color-danger)"
      >
        <template #header>
          <h3 class="text-xl font-bold" style="color: var(--color-danger)">
            Alertas Inteligentes
          </h3>
        </template>
        <p>
          Receba notificações sobre vencimentos, limites e oportunidades para
          economizar.
        </p>
      </UCard>
    </section>

    <!-- Footer -->
    <footer
      class="py-6 text-center text-sm w-full"
      style="color: var(--color-text); background-color: var(--color-neutral)"
    >
      © 2025 Finanças Pro. Todos os direitos reservados.
    </footer>
  </UContainer>
</template>

<script setup>
// Estilo global para garantir que html/body ocupem todo o espaço e não tenham margens
if (process.client) {
  const style = document.createElement("style");
  style.innerHTML = `html, body { width: 100vw; height: 100vh; margin: 0; padding: 0; box-sizing: border-box; overflow: hidden; background: var(--color-neutral); }`;
  document.head.appendChild(style);
}
const goToDashboard = () => {
  navigateTo("/dashboard");
};
</script>
