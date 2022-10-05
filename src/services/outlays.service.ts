import axios from "axios";

interface IOutlayProps {
  description: string;
  value: number | null;
  installments_quantity: number | null;
  date: string;
  pay: string;
  basic: boolean;
}
class OutlayService {
  static async getAllOutlays() {
    const result = await axios.get('http://localhost:3001/api/outlays');
    return result.data;
  }

  static async createOutlay(values: IOutlayProps) {
    const result = await axios.post('http://localhost:3001/api/outlay', values);
    return result.data;
  }

  static async deleteOutlay(id: number) {
    const result = await axios.delete(`http://localhost:3001/api/outlay/${id}`);   
    return result;
  }
}

export default OutlayService;