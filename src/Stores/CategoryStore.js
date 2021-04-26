import axios from "axios";
import { makeAutoObservable } from "mobx";

let instance = axios.create({
  baseURL: "http://localhost:8000/",
});

class CategoryStore {
  categoryId = [];
  loading = true;

  constructor() {
    makeAutoObservable(this);
  }

  fetchCatergories = async () => {
    try {
      const response = await instance.get("/categories/categoryId");
      this.categoryId = response.data;
      this.loading = false;
    } catch (error) {
      console.error(error);
    }
  };
}

const categoryStore = new CategoryStore();
categoryStore.fetchCatergories();
export default categoryStore;
