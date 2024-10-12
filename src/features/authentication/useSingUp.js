import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

function useSingUp() {
  const { mutate: singup, isLoading } = useMutation({
    mutationFn: signupApi,
    onSuccess: (user) => {
      console.log(user);
      toast.success(
        "Account successfuly created!  Please verufy the new account from user's email address."
      );
    },
  });
  return { singup, isLoading };
}

export default useSingUp;
