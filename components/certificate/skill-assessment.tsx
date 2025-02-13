import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, CheckCircle2, Timer } from "lucide-react"

export function SkillAssessment() {
  return (
    <div className="space-y-4">   
        <Card className="w-[500px]">
          <CardHeader className="flex flex-row items-center justify-between space-y-0">
            <div className="space-y-1">
              <CardTitle>Carpentry Basics</CardTitle>
              <CardDescription>Level 1 Assessment</CardDescription>
            </div>
            <div className="rounded-full bg-primary/10 p-2">
              <Brain className="h-4 w-4 text-primary" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Timer className="h-4 w-4" />
              <span>45 minutes</span>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Start Assessment</Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0">
            <div className="space-y-1">
              <CardTitle>Safety Procedures</CardTitle>
              <CardDescription>Completed</CardDescription>
            </div>
            <div className="rounded-full bg-primary/10 p-2">
              <CheckCircle2 className="h-4 w-4 text-primary" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">85%</div>
            <p className="text-xs text-muted-foreground">Score achieved</p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              View Certificate
            </Button>
          </CardFooter>
        </Card>
    </div>
  )
}