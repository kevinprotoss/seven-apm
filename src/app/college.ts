export class College {
  id: string;
  introduction: string;
  majors: Array<{
    id: string, 
    name: string,
    degree: string,
    description: string
  }>;
  bachelorMajors: Array<{
    id: string, 
    name: string,
    degree: string,
    description: string
  }>;
  masterMajors: Array<{
    id: string, 
    name: string,
    degree: string,
    description: string
  }>;
  application: object;
  tuition: {
    currency: string,
    totalFee: number,
    fees: Array<{
      name: string,
      price: number,
    }>
  };
}