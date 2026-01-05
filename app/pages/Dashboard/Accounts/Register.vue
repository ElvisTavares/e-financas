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
            <div class="flex flex-col md:flex-row gap-4">
              <div class="flex flex-col gap-2 flex-1">
                <label class="font-semibold">Nome</label>
                <UInput
                  v-model="state.name"
                  placeholder="Ex: Conta Corrente"
                  class="bg-gray-100"
                />
              </div>
              <div class="flex flex-col gap-2 flex-1">
                <label class="font-semibold">Valor</label>
                <UInput
                  v-model="state.amount"
                  type="number"
                  placeholder="0.00"
                  class="bg-gray-100"
                />
              </div>
            </div>

            <div class="flex flex-col gap-2">
              <label class="font-semibold">Categoria</label>
              <USelect
                v-model="state.category"
                :items="items"
                class="bg-gray-100"
              />
            </div>

            <div class="flex flex-col gap-2">
              <label class="font-semibold">Mês e ano</label>
              <div class="flex gap-2">
                <USelect
                  v-model="state.month"
                  :items="monthOptions"
                  placeholder="Mês"
                  class="bg-gray-100 flex-1"
                />
                <USelect
                  v-model="state.year"
                  :items="yearOptions"
                  placeholder="Ano"
                  class="bg-gray-100 flex-1"
                />
              </div>
            </div>
            <div class="flex flex-col gap-2">
              <label class="font-semibold">Tipo</label>
              <UInput
                v-model="state.type"
                placeholder="Ex: Bancária"
                class="bg-gray-100"
              />
            </div>
            <UButton type="submit" class="w-fit font-bold rounded-full">
              Salvar
            </UButton>
          </form>
        </div>
      </div>
    </div>
    <UButton
      icon="i-heroicons-arrow-left"
      size="lg"
      class="fixed top-4 right-4 z-10"
      @click="$router.push('/dashboard/accounts/list')"
      >Voltar</UButton
    >
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

const { listCategories } = useCategories();
const { criarDespesa } = useDespesas();

const despesas = ref([]);

const categories = ref([]);

const items = ref([
  // { label: "Alimentação", value: 1 },
  // { label: "Casa", value: 2 },
]);

const state = reactive({
  name: undefined,
  type: undefined,
  amount: undefined,
  status: "Ativa",
  category: undefined,
});

const monthOptions = [
  { label: "Janeiro", value: 1 },
  { label: "Fevereiro", value: 2 },
  { label: "Março", value: 3 },
  { label: "Abril", value: 4 },
  { label: "Maio", value: 5 },
  { label: "Junho", value: 6 },
  { label: "Julho", value: 7 },
  { label: "Agosto", value: 8 },
  { label: "Setembro", value: 9 },
  { label: "Outubro", value: 10 },
  { label: "Novembro", value: 11 },
  { label: "Dezembro", value: 12 },
];

const currentYear = new Date().getFullYear();
const yearOptions = Array.from({ length: 11 }, (_, i) => ({
  label: (currentYear + i).toString(),
  value: currentYear + i,
}));

// const saveAccount = () => {
//   console.log("Form Data:", state);
// };

async function saveAccount() {
  // Lógica para salvar a conta
  console.log("Salvando conta:", state);
  await criarDespesa({
    nome: state.name,
    tipo: state.type,
    valor: state.amount,
    id_category: state.category,
    month: state.month,
    year: state.year,
  });

  navigateTo("/dashboard/accounts/list");
}

onMounted(async () => {
  try {
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
