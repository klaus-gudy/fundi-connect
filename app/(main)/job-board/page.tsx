import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { JobCard } from "@/components/job-board/job-card"
import { Search, SlidersHorizontal } from "lucide-react"

// Mock data for demonstration
const jobs = [
  {
    id: 1,
    title: "Custom Furniture Maker",
    company: "Luxury Homes Ltd",
    location: "Dar es Salaam",
    type: "Full-time",
    salary: "TZS 800,000 - 1,200,000 per month",
    skills: ["Carpentry", "Furniture Design", "Wood Finishing"],
    description: "We're seeking an experienced custom furniture maker to join our team...",
    postedDate: "2025-02-10",
    matchScore: 95,
  },
  {
    id: 2,
    title: "Plumbing Technician",
    company: "City Services Co.",
    location: "Arusha",
    type: "Contract",
    salary: "TZS 50,000 - 70,000 per day",
    skills: ["Plumbing", "Pipe Fitting", "Leak Detection"],
    description: "Immediate opening for a skilled plumbing technician for various projects...",
    postedDate: "2025-02-11",
    matchScore: 80,
  },
  {
    id: 3,
    title: "Electrical Installation Specialist",
    company: "PowerTech Solutions",
    location: "Mwanza",
    type: "Part-time",
    salary: "TZS 400,000 - 600,000 per month",
    skills: ["Electrical Wiring", "Circuit Design", "Safety Regulations"],
    description: "Looking for a certified electrician to handle residential and commercial installations...",
    postedDate: "2025-02-12",
    matchScore: 85,
  },
  // Add more mock job listings as needed
]

export default function JobBoardPage() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-xl font-bold tracking-tight">Job Board</h2>
        <Button>Post a Job</Button>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-64 space-y-4">
          <div className="flex items-center space-x-2">
            <Input placeholder="Search jobs..." />
            <Button size="icon" variant="outline">
              <Search className="h-4 w-4" />
            </Button>
          </div>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Job Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="full-time">Full-time</SelectItem>
              <SelectItem value="part-time">Part-time</SelectItem>
              <SelectItem value="contract">Contract</SelectItem>
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
              <SelectValue placeholder="Skill Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="carpentry">Carpentry</SelectItem>
              <SelectItem value="plumbing">Plumbing</SelectItem>
              <SelectItem value="electrical">Electrical</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" className="w-full">
            <SlidersHorizontal className="mr-2 h-4 w-4" />
            Apply Filters
          </Button>
        </div>

        <div className="flex-1 space-y-4">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </div>
    </div>
  )
}

