import { useState } from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Textarea } from "./ui/textarea"
import { toast } from "sonner"

export default function ResumeSubmissionForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    resume: null
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const submitData = new FormData()
      submitData.append("name", formData.name)
      submitData.append("email", formData.email)
      submitData.append("phone", formData.phone)
      submitData.append("message", formData.message)
      submitData.append("resume", formData.resume)

      // Replace 'YOUR_FORMSPREE_ID' with your actual Formspree form ID
      const response = await fetch("https://formspree.io/f/YOUR_FORMSPREE_ID", {
        method: "POST",
        body: submitData,
        headers: {
          Accept: "application/json"
        }
      })

      if (!response.ok) {
        throw new Error("Failed to submit resume")
      }

      toast.success("Resume submitted successfully!")
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        resume: null
      })
    } catch (error) {
      toast.error("Failed to submit resume. Please try again.")
      console.error("Error submitting resume:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file && file.type === "application/pdf") {
      setFormData(prev => ({ ...prev, resume: file }))
    } else {
      toast.error("Please upload a PDF file")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
      <div className="space-y-4">
        <div>
          <Label htmlFor="name">Full Name</Label>
          <Input
            id="name"
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
            placeholder="John Doe"
          />
        </div>

        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
            placeholder="john@example.com"
          />
        </div>

        <div>
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
            placeholder="+234 123 456 7890"
          />
        </div>

        <div>
          <Label htmlFor="message">Message (Optional)</Label>
          <Textarea
            id="message"
            value={formData.message}
            onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
            placeholder="Tell us why you're interested in joining our team..."
            rows={4}
          />
        </div>

        <div>
          <Label htmlFor="resume">Resume (PDF only)</Label>
          <Input
            id="resume"
            type="file"
            accept=".pdf"
            required
            onChange={handleFileChange}
            className="cursor-pointer"
          />
          <p className="text-sm text-gray-500 mt-1">Maximum file size: 5MB</p>
        </div>
      </div>

      <Button
        type="submit"
        className="w-full bg-orange-500 hover:bg-orange-600 text-white"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Submitting..." : "Submit Resume"}
      </Button>
    </form>
  )
}