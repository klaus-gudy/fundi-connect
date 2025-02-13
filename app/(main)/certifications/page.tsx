import { Button } from "@/components/ui/button"

import { Plus } from "lucide-react"
import { CertificateCard } from "@/components/certificate/certificate-card"

export default function SkillsPage() {
  return (
    <div className=" space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-xl font-bold tracking-tight">Skills & Certifications</h2>
        <div className="flex items-center space-x-2">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add New Certificate
          </Button>
        </div>
      </div>

        <div className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <CertificateCard
              title="Advanced Carpentry"
              issuer="VETA"
              date="2024"
              status="verified"
              image="/placeholder.svg?height=400&width=300"
            />
            <CertificateCard
              title="Woodworking Fundamentals"
              issuer="VETA"
              date="2023"
              status="verified"
              image="/placeholder.svg?height=400&width=300"
            />
            <CertificateCard
              title="Furniture Design"
              issuer="VETA"
              date="2024"
              status="pending"
              image="/placeholder.svg?height=400&width=300"
            />
          </div>
        </div>
    </div>
  )
}

