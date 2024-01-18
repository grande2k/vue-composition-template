import { defineStore } from "pinia";

export const useAppStore = defineStore("appStore", {
    state: () => ({
        home: "Home",
        massage: "Hello!",
    })
});