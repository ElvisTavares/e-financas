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
            Contas
          </h2>

          <div class="mb-4 flex items-center gap-2">
            <USelect
              v-model="selectedMonth"
              :items="monthOptions"
              placeholder="Mês"
              class="w-48"
            />
          </div>
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

                  <th
                    class="px-4 py-2 text-left font-semibold text-[var(--color-primary)]"
                  >
                    Ações
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="expense in expenses"
                  :key="expense.id"
                  class="hover:bg-[var(--color-neutral)] transition-colors"
                >
                  <td class="px-4 py-2 text-gray-900 font-medium">
                    {{ expense.nome }}
                  </td>
                  <td class="px-4 py-2 text-gray-900 font-medium">
                    {{ expense.tipo }}
                  </td>
                  <td class="px-4 py-2 text-gray-900 font-medium">
                    {{
                      new Intl.NumberFormat("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      }).format(expense.valor)
                    }}
                  </td>
                  <!-- <td class="px-4 py-2 text-green-600 font-bold">
                    {{ expense.status === 2 ? "Não Pago" : "Pago" }}
                  </td> -->
                  <td class="px-4 py-2 text-gray-900 font-medium">
                    <span :title="expense.status === 2 ? 'Não Pago' : 'Pago'">
                      <UCheckbox
                        :model-value="expense.status === 1"
                        @update:model-value="toggleStatus(expense)"
                      />
                    </span>
                  </td>
                  <td>
                    <UButton
                      icon="i-heroicons-pencil"
                      size="sm"
                      class="mr-2"
                      @click="
                        $router.push({
                          path: '/dashboard/expenses/edit/',
                          query: { id: expense.id },
                        })
                      "
                      >Editar</UButton
                    >
                    <UButton
                      icon="i-heroicons-trash"
                      size="sm"
                      class="ml-2"
                      @click="openDeleteModal(expense.id, expense.nome)"
                      >Deletar</UButton
                    >
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <div
      v-if="showDeleteModal"
      class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
    >
      <div class="bg-white rounded-lg p-6 w-full max-w-md">
        <h3 class="text-lg font-bold mb-4">Confirmar exclusão</h3>
        <p class="mb-6">
          Deseja realmente excluir "<strong>{{ deleteName }}</strong
          >"?
        </p>
        <div class="flex justify-end gap-2">
          <UButton class="bg-gray-200" @click="closeDeleteModal"
            >Cancelar</UButton
          >
          <UButton class="bg-red-600 text-white" @click="confirmDelete"
            >Excluir</UButton
          >
        </div>
      </div>
    </div>

    <UButton
      icon="i-heroicons-plus"
      size="lg"
      class="fixed top-4 right-4 z-10"
      @click="$router.push('/dashboard/expenses/register')"
      >Adicionar Despesa</UButton
    >
  </UDashboardGroup>
</template>

<script setup>
import { useExpenses } from "../../../../composables/useExpenses";
import { useCategories } from "../../../../composables/useCategories";

const { listExpenses, deleteExpense, editExpense } = useExpenses();
const expenses = ref([]);
const showDeleteModal = ref(false);
const deleteId = ref(null);
const deleteName = ref("");
const currentMonth = new Date().getMonth() + 1;
const selectedMonth = ref(currentMonth);

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

async function loadExpenses() {
  const month = selectedMonth.value ? Number(selectedMonth.value) : undefined;
  expenses.value = await listExpenses(month);
}

function openDeleteModal(id, name) {
  deleteId.value = id;
  deleteName.value = name || "";
  showDeleteModal.value = true;
}

function closeDeleteModal() {
  showDeleteModal.value = false;
  deleteId.value = null;
  deleteName.value = "";
}

async function confirmDelete() {
  try {
    if (!deleteId.value) return;
    await deleteExpense(Number(deleteId.value));
    expenses.value = await listExpenses();
    closeDeleteModal();
  } catch (error) {
    console.error("Erro ao excluir:", error);
    alert("Erro ao excluir despesa.");
  }
}

async function toggleStatus(expense) {
  try {
    const newStatus = expense.status === 1 ? 2 : 1;

    await editExpense(expense.id, {
      ...expense,
      status: newStatus,
    });

    expense.status = newStatus;
  } catch (error) {
    console.error("Erro ao atualizar status:", error);
  }
}

onMounted(async () => {
  try {
    expenses.value = await listExpenses();
  } catch (error) {
    console.error("Erro ao buscar despesas:", error);
  }
});
</script>
