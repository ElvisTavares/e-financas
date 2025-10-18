<template>
  <UDashboardGroup class="flex flex-col md:flex-row min-h-screen">
    <DashboardMenuSidebar />

    <div
      class="flex-1 flex flex-col bg-[var(--color-neutral)] min-h-screen px-2 md:px-8"
    >
      <div class="w-full flex flex-col gap-6 mt-8">
        <div class="p-4 md:p-8 rounded-lg shadow-md w-full">
          <h2
            class="text-xl md:text-2xl font-bold mb-4"
            style="color: var(--color-primary)"
          >
            Content
          </h2>
          <UButton
            to="/dashboard/accounts/register"
            class="font-bold rounded-full"
            >Inserir Despesa</UButton
          >
        </div>

        <div class="p-4 md:p-8 rounded-lg shadow-md w-full">
          <h2
            class="text-xl md:text-2xl font-bold mb-4"
            style="color: var(--color-primary)"
          >
            Contas
          </h2>
          <div class="overflow-x-auto">
            <table
              class="min-w-full border border-[var(--color-neutral)] rounded-lg"
            >
              <thead class="bg-[var(--color-neutral)]">
                <tr>
                  <th
                    class="px-4 py-2 text-left font-semibold text-[var(--color-primary)]"
                  >
                    Nome
                  </th>
                  <th
                    class="px-4 py-2 text-left font-semibold text-[var(--color-primary)]"
                  >
                    Tipo
                  </th>
                  <th
                    class="px-4 py-2 text-left font-semibold text-[var(--color-primary)]"
                  >
                    Valor
                  </th>
                  <th
                    class="px-4 py-2 text-left font-semibold text-[var(--color-primary)]"
                  >
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="hover:bg-[var(--color-neutral)] transition-colors">
                  <td class="px-4 py-2 text-gray-900 font-medium">
                    Conta Corrente
                  </td>
                  <td class="px-4 py-2 text-gray-900 font-medium">Bancária</td>
                  <td class="px-4 py-2 text-gray-900 font-medium">
                    R$ 2.500,00
                  </td>
                  <td class="px-4 py-2 text-green-600 font-bold">Ativa</td>
                </tr>
                <tr class="hover:bg-[var(--color-neutral)] transition-colors">
                  <td class="px-4 py-2 text-gray-900 font-medium">
                    Cartão Visa
                  </td>
                  <td class="px-4 py-2 text-gray-900 font-medium">
                    Cartão de Crédito
                  </td>
                  <td class="px-4 py-2 text-gray-900 font-medium">R$ 500,00</td>
                  <td class="px-4 py-2 text-red-600 font-bold">Bloqueada</td>
                </tr>
                <tr class="hover:bg-[var(--color-neutral)] transition-colors">
                  <td class="px-4 py-2 text-gray-900 font-medium">Poupança</td>
                  <td class="px-4 py-2 text-gray-900 font-medium">Bancária</td>
                  <td class="px-4 py-2 text-gray-900 font-medium">
                    R$ 10.000,00
                  </td>
                  <td class="px-4 py-2 text-green-600 font-bold">Ativa</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </UDashboardGroup>
</template>

<script setup>
// Dados fakes, pode ser substituído por API futuramente
</script>
