import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type ProductCardProps = {
    title : string ,
    price : number ,
    description : string ,
    category : string ,
    image : string , 
}

const ProductCard = ({ title , price  , category , image }: ProductCardProps) => {
  return (
    <Card className="max-w-[300px]   flex flex-col justify-between ">

      <CardHeader>
      <img className="  mb-4 aspect-square " src={image} alt="Product img" />

        <CardTitle>{title}</CardTitle>
        <CardDescription> {category}</CardDescription>
      </CardHeader>

      <CardContent className="flex justify-between items-center">
      <Button className="py-6"> Add to cart </Button>

         ${price}
      </CardContent>


    </Card>
  );
};

export default ProductCard;
