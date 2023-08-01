import { defineStore } from "pinia";
import axios from "axios";

export const useStatsStore = defineStore("stats", {
  state: () => {
    return {
      hostStats: null,
      requestLoading: true,
    };
  },
  getters: {
    stats: (state) => state.hostStats,
    loading: (state) => state.requestLoading,
  },
  actions: {
    async getStats() {
      await axios
        .get("/stats")
        .then((response) => {
          this.hostStats = response.data;
          this.requestLoading = false;
        })
        .catch((err) => {
          this.requestLoading = false;
        });
    },
  },
});
