import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, MapPin, Star, User } from "lucide-react"
import placeholder from "@/public/placeholder.png"
import Image from "next/image"
import Link from "next/link"


// Mock data for demonstration
const product = {
  id: 1,
  name: "Custom Handwoven Basket",
  description:
    "This large, multi-purpose basket is woven in Tanzania by artisans using sustainable materials. The basket is perfect for laundry, picnic, shopping, or storage.",
  price: 25000,
  category: "Carpentry",
  images: [
    "https://cdn.usegalileo.ai/sdxl10/b65a11d8-9117-49f6-9053-d912537ef5ea.png",
    "https://cdn.usegalileo.ai/sdxl10/fb61e5a5-4b88-4f53-abf3-4a7d1be6b575.png",
    "https://cdn.usegalileo.ai/sdxl10/3703309f-71e5-4308-bc2d-12a6ac792623.png",
  ],
  rating: 4.5,
  location: "Dar es Salaam",
  artisan: {
    name: "John Doe",
    rating: 4.8,
    completedProjects: 52,
  },
  specifications: [
    { name: "Material", value: "Solid Oak" },
    { name: "Dimensions", value: "180cm x 90cm x 75cm" },
    { name: "Finish", value: "Natural Oil" },
    { name: "Seating Capacity", value: "6-8 people" },
  ],
}

export default function ProductPage({ params }: { params: { id: string } }) {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-2/3 space-y-4">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" asChild>
              <Link href="/tenants">
                <ArrowLeft className="h-4 w-4" />
              </Link>
            </Button>
            <h2 className="text-xl font-bold tracking-tight">{product.name}</h2>
          </div>
          <div className="aspect-video relative overflow-hidden rounded-lg">
            <Image
              src={product.images[0] || "/placeholder.svg"}
              alt={product.name}
              width={"5000"}
              height={"3000"}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {product.images.slice(1).map((image, index) => (
              <img
                key={index}
                src={image || "/placeholder.svg"}
                alt={`${product.name} - Image ${index + 2}`}
                className="w-24 h-24 object-cover rounded-md"
              />
            ))}
          </div>

          <Tabs defaultValue="description" className="w-full">
            <TabsList>
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="specifications">Specifications</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="mt-4">
              <p>{product.description}</p>
            </TabsContent>
            <TabsContent value="specifications" className="mt-4">
              <ul className="space-y-2">
                {product.specifications.map((spec, index) => (
                  <li key={index} className="flex justify-between">
                    <span className="font-medium">{spec.name}:</span>
                    <span>{spec.value}</span>
                  </li>
                ))}
              </ul>
            </TabsContent>
            <TabsContent value="reviews" className="mt-4">
              <p>Reviews coming soon...</p>
            </TabsContent>
          </Tabs>
        </div>

        <div className="md:w-1/3 space-y-4 mt-1">
          <Card className="mt-12">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">
                TZS {product.price.toLocaleString()}
              </CardTitle>
              <CardDescription className="flex items-center mt-2">
                <MapPin className="h-4 w-4 mr-1" />
                {product.location}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-400 mr-1" />
                  <span className="text-sm font-medium">{product.rating}</span>
                </div>
              </div>
              <Button className="w-full">Add to Cart</Button>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                Contact Artisan
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Artisan</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-4">
                <User className="h-10 w-10" />
                <div>
                  <p className="font-medium">{product.artisan.name}</p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Star className="h-4 w-4 text-yellow-400 mr-1" />
                    <span>{product.artisan.rating}</span>
                    <span className="mx-2">•</span>
                    <span>{product.artisan.completedProjects} projects</span>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                View Profile
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}

