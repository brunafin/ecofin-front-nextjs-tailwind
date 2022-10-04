import api from "./api";


interface IOutlayProps {
  description: string;
  value: number | null;
  installments_quantity: number | null;
  date: string;
  pay: string;
  basic: boolean;
}
class OutlayService {
  static async getAllOutlays(){
    const result = fetch('http://localhost:3001/api/outlays');
    const data = (await result).json();
    return data;
  }

  static async createOutlay(values: IOutlayProps){
    const result = fetch('http://localhost:3001/api/outlay', {
      method: 'POST',
      body: JSON.stringify(values),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    
    const data = (await result).json();
    return data;
  }
}

export default OutlayService;