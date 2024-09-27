import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateSetting as updateSettinsgApi } from "../../services/apiSettings";

function useUpdateSettings() {
  const queryClient = useQueryClient();

  const { isLoading: isUpdateSettings, mutate: updateSettings } = useMutation({
    mutationFn: updateSettinsgApi,
    onSuccess: () => {
      toast.success("Settings successfully Updated");
      queryClient.invalidateQueries({ queryKey: ["settings"] });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return { isUpdateSettings, updateSettings };
}

export default useUpdateSettings;
