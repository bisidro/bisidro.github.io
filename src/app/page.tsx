import React from "react"
import { Button } from "../components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import { Linkedin, Mail, Download } from "lucide-react"
import { Link } from "react-router-dom"
import { ContactForm } from "../components/ui/contact"

export default function PersonalWebsite() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center px-6 md:px-10">
          <div className="mr-4 flex">
            <Link to="/" className="mr-6 flex items-center space-x-2">
              <span className="font-bold font-poppins text-foreground">Bianca Isidro</span>
            </Link>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <nav className="flex items-center space-x-6">
              <a href="#about" className="text-sm font-medium text-foreground hover:text-secondary">
                About
              </a>
              <a href="#experience" className="text-sm font-medium text-foreground hover:text-secondary">
                Experience
              </a>
              <a href="#contact" className="text-sm font-medium text-foreground hover:text-secondary">
                Contact
              </a>
            </nav>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="container py-8 md:py-16 px-6 md:px-10">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center min-h-[400px]">
          <div className="space-y-4 text-left items-start flex flex-col justify-center h-full">
            <h1
              className="font-bold text-4xl sm:text-5xl md:text-[2.5rem]"
            >
              Hi, I'm <span className="text-secondary">Bianca Isidro</span>
            </h1>
            <p className="text-xl md:text-2xl">Software Engineering Manager</p>
            <p className="max-w-[600px] text-foreground/80 md:text-lg">
            I build strong engineering teams and deliver products that are thoughtful, reliable, and aligned with business goals. I’m passionate about clean architecture, impactful execution, and helping people grow.            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row justify-start">
              <Button
                size="lg"
                className="rounded-button bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground"
                asChild
              >
                <a href="#contact">Get In Touch</a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-button border-border text-foreground hover:bg-muted"
                asChild
              >
                <Link to="/resume.pdf" target="_blank">
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </Link>
              </Button>
            </div>
            <div className="flex space-x-4 justify-start">
              <Button variant="ghost" size="icon" className="text-foreground hover:bg-muted" asChild>
                <Link to="https://linkedin.com/in/biancaisidro/" target="_blank">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </Button>
            </div>
          </div>
          <div className="flex justify-center items-center h-full">
            <div className="relative">
              <img
                src="/headshot.jpg"
                alt="Bianca Isidro"
                width={400}
                height={400}
                className="rounded-full border-4 border-border"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-8 bg-muted">
        <div className="container px-6 md:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <h2
              className="font-bold text-3xl sm:text-4xl md:text-[2.25rem] mb-8"
            >
              About Me
            </h2>
            <p className="text-lg mb-8">
            I’m an engineering manager with a passion for building great teams and shipping high-quality software. I enjoy solving complex problems through collaboration, thoughtful leadership, and scalable systems. Outside of work, I’m always looking to grow as a leader and find better ways to support people, improve processes, and drive impact.
            </p>
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border-border bg-background">
                <CardHeader>
                  <CardTitle
                    className="font-semibold"
                  >
                    Technical Skills
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Python</Badge>
                    <Badge variant="secondary">TypeScript</Badge>
                    <Badge variant="secondary">React</Badge>
                    <Badge variant="secondary">Node.js</Badge>
                    <Badge variant="secondary">NoSQL and SQL</Badge>
                    <Badge variant="secondary">GraphQL</Badge>
                    <Badge variant="secondary">Terraform</Badge>
                    <Badge variant="secondary">CI/CD</Badge>
                    <Badge variant="secondary">AWS</Badge>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-border bg-background">
                <CardHeader>
                  <CardTitle
                    className="font-semibold"
                  >
                    Leadership Skills
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Performance Management</Badge>
                    <Badge variant="secondary">Coaching and Mentorship</Badge>
                    <Badge variant="secondary">Remote Team Leadership</Badge>
                    <Badge variant="secondary">Psychological Safety</Badge>
                    <Badge variant="secondary">Change Management</Badge>
                    <Badge variant="secondary">Building High Performing Teams</Badge>
                    <Badge variant="secondary">Cross-functional Collaboration</Badge>
                    <Badge variant="secondary">Roadmap Planning and Execution</Badge>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-border bg-background">
                <CardHeader>
                  <CardTitle
                    className="font-semibold"
                  >
                    Tools & Processes
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">DORA Metrics</Badge>
                    <Badge variant="secondary">Feedback and Recognition</Badge>
                    <Badge variant="secondary">Agile</Badge>
                    <Badge variant="secondary">Performance Reviews and Calibration</Badge>
                    <Badge variant="secondary">Sprint Planning and Retrospectives</Badge>
                    <Badge variant="secondary">Monitoring and Incident Management</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-8">
        <div className="container px-6 md:px-10">
          <div className="mx-auto max-w-3xl">
            <h2
              className="font-bold text-3xl sm:text-4xl md:text-[2.25rem] mb-8 text-center"
            >
              Experience
            </h2>
            <div className="space-y-8">
              <Card className="border-border">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle
                        className="font-semibold"
                      >
                        Engineering Manager
                      </CardTitle>
                      <CardDescription className="text-base">Saas Startup</CardDescription>
                    </div>
                    <Badge variant="outline" className="border-border">
                      2022 - 2025
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80 mb-4">
                  Led and scaled a remote engineering team, delivering impactful product features and significantly improving reliability. Oversaw key technical initiatives including a microservices migration, a product rebuild, and sustained efforts to reduce technical debt, all while fostering a supportive, high-performing team culture.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Python</Badge>
                    <Badge variant="secondary">GoLang</Badge>
                    <Badge variant="secondary">React</Badge>
                    <Badge variant="secondary">Typescript</Badge>
                    <Badge variant="secondary">PostgreSQL</Badge>
                    <Badge variant="secondary">Terraform</Badge>
                    <Badge variant="secondary">GCP</Badge>
                    <Badge variant="secondary">CI/CD</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle
                        className="font-semibold"
                      >
                        Senior Engineering Manager
                      </CardTitle>
                      <CardDescription className="text-base">Fitness Tech Company</CardDescription>
                    </div>
                    <Badge variant="outline" className="border-border">
                      2021 - 2022
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80 mb-4">
                  Managed a backend team supporting a live streaming platform, and led the design of a federated GraphQL and backend-for-frontend (BFF) architecture. Drove modernization of backend services to improve scalability, maintainability, and platform consistency.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Node.js</Badge>
                    <Badge variant="secondary">Python</Badge>
                    <Badge variant="secondary">NoSQL</Badge> 
                    <Badge variant="secondary">GraphQL</Badge>
                    <Badge variant="secondary">APIs and Integrations</Badge>
                    <Badge variant="secondary">AWS</Badge>
                    <Badge variant="secondary">Serverless</Badge>
                    <Badge variant="secondary">System Design</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle
                        className="font-semibold"
                      >
                        Consulting Manager
                      </CardTitle>
                      <CardDescription className="text-base">Consulting Firm</CardDescription>
                    </div>
                    <Badge variant="outline" className="border-border">
                      2016 - 2021
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80 mb-4">
                  Delivered end-to-end technical solutions across roles like architect, developer, and delivery manager, while building trusted relationships with client executives. Led multi-functional teams, managed delivery across scope and budget, and designed backend systems and ML pipelines aligned to business goals.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Python</Badge>
                    <Badge variant="secondary">Node.js</Badge>
                    <Badge variant="secondary">React</Badge>
                    <Badge variant="secondary">Typescript</Badge>
                    <Badge variant="secondary">SQL</Badge>
                    <Badge variant="secondary">Terraform</Badge>
                    <Badge variant="secondary">AWS</Badge>
                    <Badge variant="secondary">Data Analytics</Badge>
                    <Badge variant="secondary">Data Pipelines</Badge>
                    <Badge variant="secondary">Machine Learning</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-8 bg-muted">
        <div className="container px-6 md:px-10">
          <div className="mx-auto max-w-2xl text-center">
            <h2
              className="font-bold text-3xl sm:text-4xl md:text-[2.25rem] mb-8"
            >
              Get In Touch
            </h2>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-background">
        <div className="container py-8 px-6 md:px-10">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-foreground/70">© 2025 Bianca Isidro. All rights reserved.</p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-foreground hover:bg-muted" asChild>
                <Link to="https://linkedin.com/in/biancaisidro/" target="_blank">
                  <Linkedin className="h-4 w-4" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
