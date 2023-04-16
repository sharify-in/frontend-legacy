import { defineStore } from "pinia";
import axios from "axios";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    authUser: null,
    requestLoading: true,
  }),
  getters: {
    user: (state) => state.authUser,
    loading: (state) => state.requestLoading,
  },
  actions: {
    async getUser() {
      await axios
        .get("/auth/get_user")
        .then((res) => {
          this.authUser = res.data;
          this.requestLoading = false;
        })
        .catch((err) => {
          return err;
        });
    },
  },
});
