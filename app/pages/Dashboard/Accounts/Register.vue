<script setup lang="ts">
import type { FormError, FormSubmitEvent } from "#ui/types";
import { useDespesas } from "../../../../composables/useDespesas";

const { criarDespesa } = useDespesas();

const state = reactive({
  name: undefined as string | undefined,
  type: undefined as string | undefined,
  amount: undefined as string | number | undefined,
});

const optionsCategory = [
  { label: "Alimentação", value: 1 },
  { label: "Casa", value: 2 },
];

const category = ref();

const validate = (state: any): FormError[] => {
  const errors = [];
  if (!state.name) errors.push({ name: "name", message: "Required" });
  if (!state.type) errors.push({ name: "type", message: "Required" });

  if (!state.amount) {
    errors.push({ name: "amount", message: "Required" });
  } else {
    // Regex to allow integers or BRL currency format with comma (e.g., 20 or 2,50)
    const brlRegex = /^(\d{1,3}(\.\d{3})*|\d+)(,\d{1,2})?$/;
    if (!brlRegex.test(state.amount)) {
      errors.push({
        name: "amount",
        message:
          "O valor deve ser um número inteiro ou ter vírgula (ex: 20 ou 2,50)",
      });
    }
  }

  return errors;
};

const toast = useToast();
async function onSubmit(event: FormSubmitEvent<typeof state>) {
  try {
    const amountStr = String(event.data.amount);
    const amountParsed = parseFloat(
      amountStr.replace(/\./g, "").replace(",", ".")
    );

    await criarDespesa({
      nome: event.data.name as string,
      tipo: event.data.type as string,
      valor: amountParsed,
    });

    toast.add({
      title: "Sucesso",
      description: "Despesa salva com sucesso!",
      color: "success",
    });

    // Redirect to list page
    await navigateTo("/dashboard/accounts/list");
  } catch (error) {
    console.error("Erro ao salvar:", error);
    toast.add({
      title: "Erro",
      description: "Erro ao salvar a despesa.",
      color: "error",
    });
  }
}
</script>

<template>
  <UDashboardGroup class="flex flex-col md:flex-row min-h-screen">
    <DashboardMenuSidebar />
    <div
      class="flex-1 flex flex-col bg-[var(--color-neutral)] min-h-screen px-2 md:px-8"
    >
      <div class="w-full flex flex-col gap-6 mt-8">
        <div class="p-4 md:p-8 rounded-lg shadow-md w-full">
          <h1
            class="text-xl md:text-2xl font-bold mb-4"
            style="color: var(--color-primary)"
          >
            Register
          </h1>

          <UForm
            :validate="validate"
            :state="state"
            class="space-y-4"
            @submit="onSubmit"
          >
            <UFormField
              label="Nome"
              name="name"
              style="color: var(--color-primary)"
            >
              <UInput v-model="state.name" />
            </UFormField>

            <UFormField label="Tipo" name="type">
              <UInput v-model="state.type" />
            </UFormField>

            <USelect
              v-model="category"
              ,
              :options="optionsCategory"
              placeholder="Categoria"
            />

            <UFormField label="Valor" name="amount">
              <UInput v-model="state.amount" />
            </UFormField>

            <UButton type="submit"> Submit </UButton>
          </UForm>
        </div>
      </div>
    </div>
  </UDashboardGroup>

  <h1>Ola</h1>
</template>

<style></style>
