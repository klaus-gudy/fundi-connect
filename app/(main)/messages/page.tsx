import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Send } from "lucide-react"

// Mock data for demonstration
const conversations = [
  {
    id: 1,
    name: "John Doe",
    company: "Luxury Homes Ltd",
    lastMessage: "Thanks for your interest in the position...",
    avatar: "/placeholder.svg",
  },
  {
    id: 2,
    name: "Jane Smith",
    company: "City Services Co.",
    lastMessage: "Can you provide more details about your experience?",
    avatar: "/placeholder.svg",
  },
  {
    id: 3,
    name: "Bob Johnson",
    company: "PowerTech Solutions",
    lastMessage: "Your application has been received. We'll be in touch soon.",
    avatar: "/placeholder.svg",
  },
]

const messages = [
  {
    id: 1,
    sender: "John Doe",
    content: "Hi there! I saw your application for the Custom Furniture Maker position.",
    timestamp: "10:30 AM",
  },
  {
    id: 2,
    sender: "You",
    content:
      "Hello! Yes, I'm very interested in the position. I have several years of experience in custom furniture making.",
    timestamp: "10:32 AM",
  },
  {
    id: 3,
    sender: "John Doe",
    content: "Great! Can you tell me more about your experience with high-end furniture design?",
    timestamp: "10:35 AM",
  },
  {
    id: 4,
    sender: "You",
    content:
      "I've worked on numerous luxury projects, creating bespoke pieces for high-end residential clients. My specialty is in hardwood furniture with intricate inlay work.",
    timestamp: "10:38 AM",
  },
]

export default function MessagesPage() {
  return (
    <div className="flex-1 p-4 md:p-8">
      <h2 className="text-xl font-bold tracking-tight mb-4">Messages</h2>
      <div className="flex">
        <Card className="w-1/3 mr-4">
          <CardHeader>
            <CardTitle>Conversations</CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[calc(100vh-300px)]">
              {conversations.map((conversation) => (
                <div
                  key={conversation.id}
                  className="flex items-center space-x-4 mb-4 p-2 hover:bg-accent rounded-lg cursor-pointer"
                >
                  <Avatar>
                    <AvatarImage src={conversation.avatar} />
                    <AvatarFallback>{conversation.name[0]}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 space-y-1">
                    <p className="font-medium leading-none">{conversation.name}</p>
                    <p className="text-sm text-muted-foreground">{conversation.company}</p>
                    <p className="text-sm truncate">{conversation.lastMessage}</p>
                  </div>
                </div>
              ))}
            </ScrollArea>
          </CardContent>
        </Card>
        <Card className="flex-1">
          <CardHeader>
            <CardTitle>John Doe - Luxury Homes Ltd</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col">
            <ScrollArea className="flex-1 pr-4">
              {messages.map((message) => (
                <div key={message.id} className={`flex mb-4 ${message.sender === "You" ? "justify-end" : ""}`}>
                  <div
                    className={`rounded-lg p-2 max-w-[70%] ${message.sender === "You" ? "bg-primary text-primary-foreground" : "bg-muted"}`}
                  >
                    <p className="text-sm">{message.content}</p>
                    <p className="text-xs mt-1 opacity-70">{message.timestamp}</p>
                  </div>
                </div>
              ))}
            </ScrollArea>
            
          </CardContent>
          <CardFooter>
          <div className="flex items-center mt-4 w-full">
              <Input placeholder="Type your message..." className="flex-1 mr-2" />
              <Button size="icon">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

