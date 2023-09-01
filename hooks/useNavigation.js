import { useRouter } from "next/router";

function useNavigation() {
  const router = useRouter();
  function navigate(route) {
    router.push(route);
  }
  return {
    navigate,
  };
}

export default useNavigation;
