import axios from "axios";
import { makeAutoObservable } from "mobx";

let instance = axios.create({
  baseURL: "http://localhost:8000/",
});

class SalonStore {
  salons = [];
  loading = true;

  constructor() {
    makeAutoObservable(this);
  }

  fetchSalons = async () => {
    try {
      const response = await instance.get("http://localhost:8000/salons");
      this.salons = response.data;
      this.loading = false;
    } catch (error) {
      console.error(error);
    }
  };
  fetchSalon = async () => {
    try {
      const response = await instance.get("http://localhost:8000/salonId");
      this.salonId = response.data;
      this.loading = false;
    } catch (error) {
      console.error(error);
    }
  };
}

const salonStore = new SalonStore();
salonStore.fetchSalons();
salonStore.fetchSalon();
export default salonStore;
