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
            Nova Conta
          </h2>
          <form @submit.prevent="saveAccount" class="flex flex-col gap-4">
            <div class="flex flex-col gap-2">
              <label class="font-semibold">Nome</label>
              <UInput v-model="state.name" placeholder="Ex: Conta Corrente" />
            </div>
            <div class="flex flex-col gap-2">
              <label class="font-semibold">Tipo</label>
              <UInput v-model="state.type" placeholder="Ex: Bancária" />
            </div>

            <div class="flex flex-col gap-2">
              <label class="font-semibold">Categoria</label>
              <USelect v-model="state.category" :items="items" />
            </div>

            <div class="flex flex-col gap-2">
              <label class="font-semibold">Valor</label>
              <UInput v-model="state.amount" type="number" placeholder="0.00" />
            </div>
            <UButton type="submit" class="w-fit font-bold rounded-full">
              Salvar
            </UButton>
          </form>
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
                <tr
                  v-for="despesa in despesas"
                  :key="despesa.id"
                  class="hover:bg-[var(--color-neutral)] transition-colors"
                >
                  <td class="px-4 py-2 text-gray-900 font-medium">
                    {{ despesa.nome }}
                  </td>
                  <td class="px-4 py-2 text-gray-900 font-medium">
                    {{ despesa.tipo }}
                  </td>
                  <td class="px-4 py-2 text-gray-900 font-medium">
                    {{
                      new Intl.NumberFormat("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      }).format(despesa.valor)
                    }}
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

<!-- <template>
  <div>
    <h1>Testando conexão Supabase</h1>
  </div>
</template> -->

<script setup>
import { useDespesas } from "../../../../composables/useDespesas";
import { useCategories } from "../../../../composables/useCategories";

const { listarDespesas } = useDespesas();
const { listCategories } = useCategories();

const despesas = ref([]);

const categories = ref([]);

const items = ref([
  // { label: "Alimentação", value: 1 },
  // { label: "Casa", value: 2 },
]);
const value = ref(1);

const state = reactive({
  name: undefined,
  type: undefined,
  amount: undefined,
  status: "Ativa",
  category: undefined,
});

const optionsCategory = [
  { label: "Alimentação", value: 1 },
  { label: "Casa", value: 2 },
];

const saveAccount = () => {
  console.log("Form Data:", state);
};

onMounted(async () => {
  try {
    despesas.value = await listarDespesas();
    categories.value = await listCategories();

    items.value = categories.value.map((category) => ({
      label: category.name,
      value: category.id,
    }));
  } catch (error) {
    console.error("Erro ao buscar despesas:", error);
  }
});
</script>
