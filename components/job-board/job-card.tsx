import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Calendar, Briefcase } from "lucide-react"
import Link from "next/link"

interface Job {
  id: number
  title: string
  company: string
  location: string
  type: string
  salary: string
  skills: string[]
  description: string
  postedDate: string
  matchScore: number
}

interface JobCardProps {
  job: Job
}

export function JobCard({ job }: JobCardProps) {
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl">{job.title}</CardTitle>
            <p className="text-sm text-muted-foreground">{job.company}</p>
          </div>
          <Badge variant={job.matchScore >= 90 ? "default" : "secondary"}>{job.matchScore}% Match</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2 mb-2">
          {job.skills.map((skill, index) => (
            <Badge key={index} variant="outline">
              {skill}
            </Badge>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-2 text-sm mb-4">
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
            {job.location}
          </div>
          <div className="flex items-center">
            <Briefcase className="h-4 w-4 mr-2 text-muted-foreground" />
            {job.type}
          </div>
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
            Posted on {new Date(job.postedDate).toLocaleDateString()}
          </div>
        </div>
        <p className="text-sm text-muted-foreground line-clamp-2">{job.description}</p>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <p className="text-sm font-medium">{job.salary}</p>
        <Button asChild>
          <Link href={`/jobs/${job.id}`}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

