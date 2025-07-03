"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 scroll-mt-17">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to work together? Let's discuss your next project
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Let's talk</h3>
            <p className="text-muted-foreground mb-8">
              I'm always interested in hearing about new opportunities and exciting projects. Whether you have a
              question or just want to say hi, feel free to reach out!
            </p>

            <div className="space-y-4" role="list" aria-label="Contact information">
              <div className="flex items-center space-x-3" role="listitem">
                <Mail className="h-5 w-5 text-primary" aria-hidden="true" />
                <span>
                  <a
                    href="mailto:jonesgregory.winter@gmail.com"
                    aria-label="Send email to jonesgregory.winter@gmail.com"
                  >
                    jonesgregory.winter@gmail.com
                  </a>
                </span>
              </div>
              <div className="flex items-center space-x-3" role="listitem">
                <Phone className="h-5 w-5 text-primary" aria-hidden="true" />
                <span>
                  <a href="tel:+12102392879" aria-label="Call Gregory Jones at 2 1 0 2 3 9 2 8 7 9">
                    (210) 239-2879
                  </a>
                </span>
              </div>
              <div className="flex items-center space-x-3" role="listitem">
                <MapPin className="h-5 w-5 text-primary" aria-hidden="true" />
                <span aria-label="Located in Kannapolis, North Carolina">Kannapolis, NC</span>
              </div>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Send me a message</CardTitle>
              <CardDescription>Fill out the form below and I'll get back to you as soon as possible.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    aria-describedby="name-description"
                    aria-label="Enter your full name"
                  />
                  <span id="name-description" className="sr-only">
                    Required field. Please enter your full name for contact purposes.
                  </span>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    aria-describedby="email-description"
                    aria-label="Enter your email address"
                  />
                  <span id="email-description" className="sr-only">
                    Required field. Please enter a valid email address where you can be reached.
                  </span>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    aria-describedby="message-description"
                    aria-label="Enter your message"
                  />
                  <span id="message-description" className="sr-only">
                    Required field. Please describe your inquiry or project details.
                  </span>
                </div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
