declare module 'currency-codes/data' {
    interface CurrencyData {
      code: string;
      currency: string;
    }
  
    const data: CurrencyData[];
    export default data;
  }
  