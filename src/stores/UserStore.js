import { defineStore } from "pinia";
import axios from "axios";

export const useAuthStore = defineStore("auth", {
  state: () => {
    return {
      authUser: null,
      requestLoading: true,
    };
  },
  getters: {
    user: (state) => state.authUser,
    loading: (state) => state.requestLoading,
  },
  actions: {
    async getUser() {
      await axios
        .get("/auth/user")
        .then((res) => {
          this.authUser = res.data.user;
          this.requestLoading = false;
        })
        .catch((err) => {
          this.requestLoading = false;
        });
    },
  },
});
