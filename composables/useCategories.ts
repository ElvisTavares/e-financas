import { createClient } from "@supabase/supabase-js";
export const useCategories = () => {
  const config = useRuntimeConfig();

  const supabase = createClient(
    config.public.supabaseUrl,
    config.public.supabaseKey
  );

  const listCategories = async () => {
    const { data, error } = await supabase
      .from("categories")
      .select("*")
      .order("created_at", { ascending: true });

    if (error) {
      console.error("Erro ao buscar categorias:", error);
      throw error;
    }

    return data;
  };

  return { listCategories };
};
