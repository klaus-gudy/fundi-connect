import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Star } from "lucide-react"

interface Product {
  id: number
  name: string
  description: string
  price: number
  category: string
  image: string
  rating: number
  location: string
}

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-0">
        <div className="aspect-square relative">
          <img src={product.image || "/placeholder.svg"} alt={product.name} className="object-cover w-full h-full" />
          <div className="absolute top-2 right-2 bg-background/80 text-foreground px-2 py-1 rounded-full text-sm font-medium">
            {product.category}
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <CardTitle className="text-lg">{product.name}</CardTitle>
        <CardDescription className="mt-2 line-clamp-2">{product.description}</CardDescription>
        <div className="mt-3 flex items-center justify-between">
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-400 mr-1" />
            <span className="text-sm font-medium">{product.rating}</span>
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 mr-1" />
            {product.location}
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex items-center justify-between">
        <div className="text-lg font-bold">TZS {product.price.toLocaleString()}</div>
        <Button>View Details</Button>
      </CardFooter>
    </Card>
  )
}

