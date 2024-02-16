export class ApiKeys {
    public static get BingMapsKey() {
      return process.env.IMJS_BING_MAPS_KEY ?? "";
    }
  
  }
  