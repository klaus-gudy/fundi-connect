'use client'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ProductCard } from "@/components/marketplace/product-card"
import { Search, SlidersHorizontal } from "lucide-react"

// Mock data for demonstration
const products = [
  {
    id: 1,
    name: "Custom Wooden Table",
    description: "Handcrafted oak dining table",
    price: 250000,
    category: "Carpentry",
    image: "https://cdn.usegalileo.ai/sdxl10/81a94fd9-0e12-4821-b1a5-964f0d76b152.png",
    rating: 4.5,
    location: "Dar es Salaam",
  },
  {
    id: 2,
    name: "Plumbing Repair Service",
    description: "Expert plumbing repairs and installations",
    price: 50000,
    category: "Plumbing",
    image: "https://cdn.usegalileo.ai/sdxl10/859f200e-036e-4885-8ee7-c854b6b58f8a.png",
    rating: 4.2,
    location: "Arusha",
  },
  {
    id: 3,
    name: "Electrical Wiring Installation",
    description: "Professional electrical services for homes and businesses",
    price: 75000,
    category: "Electrical",
    image: "https://cdn.usegalileo.ai/sdxl10/42711b84-4aac-4d66-a1e3-66631f4c72aa.png",
    rating: 4.8,
    location: "Mwanza",
  },
  // Add more mock products/services as needed
]

export default function MarketplacePage() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-xl font-bold tracking-tight">Marketplace</h2>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-64 space-y-4">
          <div className="flex items-center space-x-2">
            <Input placeholder="Search" />
            <Button size="icon" variant="outline">
              <Search className="h-5 w-5" />
            </Button>
          </div>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="carpentry">Carpentry</SelectItem>
              <SelectItem value="plumbing">Plumbing</SelectItem>
              <SelectItem value="electrical">Electrical</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Location" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Locations</SelectItem>
              <SelectItem value="dar-es-salaam">Dar es Salaam</SelectItem>
              <SelectItem value="arusha">Arusha</SelectItem>
              <SelectItem value="mwanza">Mwanza</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Sort By" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="relevance">Relevance</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="rating">Highest Rated</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" className="w-full">
            <SlidersHorizontal className="mr-2 h-4 w-4" />
            Apply Filters
          </Button>
        </div>

        <div className="flex-1">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

