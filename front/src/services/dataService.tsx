const PATH = import.meta.env.VITE_PATH;

interface ApiResponse {
  [key: string]: any;
}

export const dataActions = {
  // GET DATA FROM ONE TABLE
  async getData(table: string): Promise<ApiResponse> {
    try {
      const response = await fetch(`${PATH}/data/${table}`, {
        method: "GET",
      });
      const res: ApiResponse = await response.json();
      return res;
    } catch (err) {
      console.log(err);
      throw err;
    }
  },

  // GET AVERAGE DATA PER YEAR PER POLLUTANT
  async getAverageData(table: string): Promise<ApiResponse> {
    try {
      const response = await fetch(`${PATH}/averageYear/${table}`, {
        method: "GET",
      });
      const res: ApiResponse = await response.json();
      return res;
    } catch (err) {
      console.log(err);
      throw err;
    }
  },

  // GET AVERAGE DATA PER DAY PER POLLUTANT
  async getAverageDayData(table: string): Promise<ApiResponse> {
    try {
      const response = await fetch(`${PATH}/averageDay/${table}`, {
        method: "GET",
      });
      const res: ApiResponse = await response.json();
      return res;
    } catch (err) {
      console.log(err);
      throw err;
    }
  },
};
