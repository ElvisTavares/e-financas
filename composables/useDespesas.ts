import { createClient } from "@supabase/supabase-js";

export const useDespesas = () => {
  const config = useRuntimeConfig();

  const supabase = createClient(
    config.public.supabaseUrl,
    config.public.supabaseKey
  );

  const listarDespesas = async () => {
    console.log("Buscando despesas...");

    const { data, error } = await supabase
      .from("despesas")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Erro do Supabase:", error);
      throw error;
    }

    console.log("Despesas encontradas:", data);
    return data;
  };

  const criarDespesa = async (despesa: {
    nome: string;
    tipo: string;
    valor: number;
    id_category: number;
    month: number;
    year: number;
  }) => {
    const { data, error } = await supabase
      .from("despesas")
      .insert([despesa])
      .select();

    if (error) throw error;
    return data;
  };

  const atualizarDespesa = async (
    id: number,
    despesa: {
      nome?: string;
      tipo?: string;
      valor?: number;
    }
  ) => {
    const { data, error } = await supabase
      .from("despesas")
      .update(despesa)
      .eq("id", id)
      .select();

    if (error) throw error;
    return data;
  };

  const deletarDespesa = async (id: number) => {
    const { error } = await supabase.from("despesas").delete().eq("id", id);

    if (error) throw error;
  };

  return {
    listarDespesas,
    criarDespesa,
    atualizarDespesa,
    deletarDespesa,
  };
};
