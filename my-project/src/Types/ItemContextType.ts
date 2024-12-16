export interface ItemContextType {
  data: Data[];
  error?: string;
}

export type Data = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};
