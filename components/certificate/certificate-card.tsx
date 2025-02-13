import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { BadgeCheck, Clock } from "lucide-react"
import placeholder from "@/public/placeholder.png"
import Image from "next/image"

interface CertificateCardProps {
  title: string
  issuer: string
  date: string
  status: "verified" | "pending"
  image: string
}

export function CertificateCard({ title, issuer, date, status, image }: CertificateCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="border-b p-0">
        <div className="aspect-[4/3] relative">
          <Image src={placeholder} alt={title} className="object-cover w-full h-full" />
          <Badge variant={status === "verified" ? "default" : "secondary"} className="absolute top-2 right-2">
            {status === "verified" ? <BadgeCheck className="mr-1 h-3 w-3" /> : <Clock className="mr-1 h-3 w-3" />}
            {status === "verified" ? "Verified" : "Pending"}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <CardTitle className="text-lg">{title}</CardTitle>
        <p className="text-sm text-muted-foreground mt-1">Issued by {issuer}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between">
        <p className="text-sm text-muted-foreground">Issued: {date}</p>
      </CardFooter>
    </Card>
  )
}

