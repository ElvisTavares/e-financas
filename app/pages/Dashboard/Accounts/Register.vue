<script setup lang="ts">
import type { FormError, FormSubmitEvent } from "@nuxt/ui";

const state = reactive({
  name: undefined,
  password: undefined,
  type: undefined,
  amount: undefined,
});

const validate = (state: any): FormError[] => {
  const errors = [];
  if (!state.email) errors.push({ name: "email", message: "Required" });
  if (!state.password) errors.push({ name: "password", message: "Required" });
  return errors;
};

const toast = useToast();
async function onSubmit(event: FormSubmitEvent<typeof state>) {
  toast.add({
    title: "Success",
    description: "The form has been submitted.",
    color: "success",
  });
  console.log(event.data);
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
