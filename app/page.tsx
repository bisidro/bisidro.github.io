import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Linkedin, Mail, Download } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function PersonalWebsite() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center px-6 md:px-10">
          <div className="mr-4 flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <span className="font-bold">John Doe</span>
            </Link>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <nav className="flex items-center space-x-6">
              <Link href="#about" className="text-sm font-medium hover:text-secondary">
                About
              </Link>
              <Link href="#experience" className="text-sm font-medium hover:text-secondary">
                Experience
              </Link>
              <Link href="#contact" className="text-sm font-medium hover:text-secondary">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="container py-8 md:py-16 px-6 md:px-10">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <h1
              className="font-bold text-4xl sm:text-5xl md:text-[2.5rem]"
              style={{ fontFamily: 'var(--font-poppins), Poppins, "Work Sans", sans-serif' }}
            >
              Hi, I'm <span className="text-secondary">John Doe</span>
            </h1>
            <p className="text-xl md:text-2xl">Full Stack Developer & UI/UX Designer</p>
            <p className="max-w-[600px] text-foreground/80 md:text-lg">
              I create beautiful, functional web applications with modern technologies. Passionate about clean code,
              great user experiences, and continuous learning.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button
                size="lg"
                className="rounded-button bg-primary text-primary-foreground hover:bg-primary/90"
                asChild
              >
                <Link href="#contact">Get In Touch</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-button border-border text-foreground hover:bg-muted"
                asChild
              >
                <Link href="/resume.pdf" target="_blank">
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </Link>
              </Button>
            </div>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-foreground hover:bg-muted" asChild>
                <Link href="https://linkedin.com" target="_blank">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" className="text-foreground hover:bg-muted" asChild>
                <Link href="mailto:john@example.com">
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Link>
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="John Doe"
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
              style={{ fontFamily: 'var(--font-poppins), Poppins, "Work Sans", sans-serif' }}
            >
              About Me
            </h2>
            <p className="text-lg mb-8">
              I'm a passionate full-stack developer with 5+ years of experience building web applications. I love
              turning complex problems into simple, beautiful designs. When I'm not coding, you'll find me exploring new
              technologies, contributing to open source, or enjoying the outdoors.
            </p>
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border-border bg-background">
                <CardHeader>
                  <CardTitle
                    className="font-semibold"
                    style={{ fontFamily: 'var(--font-poppins), Poppins, "Work Sans", sans-serif' }}
                  >
                    Frontend
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">React</Badge>
                    <Badge variant="secondary">Next.js</Badge>
                    <Badge variant="secondary">TypeScript</Badge>
                    <Badge variant="secondary">Tailwind CSS</Badge>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-border bg-background">
                <CardHeader>
                  <CardTitle
                    className="font-semibold"
                    style={{ fontFamily: 'var(--font-poppins), Poppins, "Work Sans", sans-serif' }}
                  >
                    Backend
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Node.js</Badge>
                    <Badge variant="secondary">Python</Badge>
                    <Badge variant="secondary">PostgreSQL</Badge>
                    <Badge variant="secondary">MongoDB</Badge>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-border bg-background">
                <CardHeader>
                  <CardTitle
                    className="font-semibold"
                    style={{ fontFamily: 'var(--font-poppins), Poppins, "Work Sans", sans-serif' }}
                  >
                    Tools
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Git</Badge>
                    <Badge variant="secondary">Docker</Badge>
                    <Badge variant="secondary">AWS</Badge>
                    <Badge variant="secondary">Figma</Badge>
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
              style={{ fontFamily: 'var(--font-poppins), Poppins, "Work Sans", sans-serif' }}
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
                        style={{ fontFamily: 'var(--font-poppins), Poppins, "Work Sans", sans-serif' }}
                      >
                        Senior Frontend Developer
                      </CardTitle>
                      <CardDescription className="text-base">Tech Company Inc.</CardDescription>
                    </div>
                    <Badge variant="outline" className="border-border">
                      2022 - Present
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80 mb-4">
                    Led the development of a customer-facing web application serving 100k+ users. Implemented modern
                    React patterns and improved performance by 40%.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">React</Badge>
                    <Badge variant="secondary">TypeScript</Badge>
                    <Badge variant="secondary">Next.js</Badge>
                    <Badge variant="secondary">GraphQL</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle
                        className="font-semibold"
                        style={{ fontFamily: 'var(--font-poppins), Poppins, "Work Sans", sans-serif' }}
                      >
                        Full Stack Developer
                      </CardTitle>
                      <CardDescription className="text-base">Startup Solutions</CardDescription>
                    </div>
                    <Badge variant="outline" className="border-border">
                      2020 - 2022
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80 mb-4">
                    Built and maintained multiple web applications from concept to deployment. Collaborated with design
                    and product teams to deliver user-centered solutions.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Vue.js</Badge>
                    <Badge variant="secondary">Node.js</Badge>
                    <Badge variant="secondary">MongoDB</Badge>
                    <Badge variant="secondary">AWS</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle
                        className="font-semibold"
                        style={{ fontFamily: 'var(--font-poppins), Poppins, "Work Sans", sans-serif' }}
                      >
                        Junior Developer
                      </CardTitle>
                      <CardDescription className="text-base">Digital Agency</CardDescription>
                    </div>
                    <Badge variant="outline" className="border-border">
                      2019 - 2020
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80 mb-4">
                    Developed responsive websites and web applications for various clients. Gained experience in modern
                    web technologies and agile development practices.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">JavaScript</Badge>
                    <Badge variant="secondary">PHP</Badge>
                    <Badge variant="secondary">MySQL</Badge>
                    <Badge variant="secondary">WordPress</Badge>
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
              style={{ fontFamily: 'var(--font-poppins), Poppins, "Work Sans", sans-serif' }}
            >
              Get In Touch
            </h2>
            <p className="text-lg mb-8">
              I'm always interested in new opportunities and interesting projects. Whether you have a question or just
              want to say hi, feel free to reach out!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="rounded-button bg-primary text-primary-foreground hover:bg-primary/90"
                asChild
              >
                <Link href="mailto:john@example.com">
                  <Mail className="mr-2 h-4 w-4" />
                  Send Email
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-button border-border text-foreground hover:bg-muted"
                asChild
              >
                <Link href="https://linkedin.com" target="_blank">
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-background">
        <div className="container py-8 px-6 md:px-10">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-foreground/70">© 2024 John Doe. All rights reserved.</p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-foreground hover:bg-muted" asChild>
                <Link href="https://linkedin.com" target="_blank">
                  <Linkedin className="h-4 w-4" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" className="text-foreground hover:bg-muted" asChild>
                <Link href="mailto:john@example.com">
                  <Mail className="h-4 w-4" />
                  <span className="sr-only">Email</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
