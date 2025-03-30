import { Button } from "./ui/button";
import { Form, FormItem, FormLabel } from "./ui/form";
import { Input } from "./ui/input";
import { Select } from "./ui/select";
import { Textarea } from "./ui/textarea";

export function ContactForm() {
  return (
    <div className="bg-gray-50 p-8 rounded-lg shadow">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Send Us a Message
      </h2>
      <Form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormItem>
            <FormLabel htmlFor="name">Full Name</FormLabel>
            <Input id="name" name="name" placeholder="Your name" required />
          </FormItem>
          <FormItem>
            <FormLabel htmlFor="email">Email Address</FormLabel>
            <Input
              type="email"
              id="email"
              name="email"
              placeholder="your.email@example.com"
              required
            />
          </FormItem>
        </div>

        <FormItem>
          <FormLabel htmlFor="organization">Organization</FormLabel>
          <Input
            id="organization"
            name="organization"
            placeholder="Your company or school"
          />
        </FormItem>

        <FormItem>
          <FormLabel htmlFor="phone">Phone Number</FormLabel>
          <Input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Your contact number"
          />
        </FormItem>

        <FormItem>
          <FormLabel htmlFor="subject">Subject</FormLabel>
          <Select id="subject" name="subject" required defaultValue="">
            <option value="" disabled className="text-gray-500">
              Select an option
            </option>
            <option value="course-inquiry">Course Inquiry</option>
            <option value="enrollment">Enrollment Information</option>
            <option value="certification">Certification Questions</option>
            <option value="testing">Testing Services</option>
            <option value="other">Other</option>
          </Select>
        </FormItem>

        <FormItem>
          <FormLabel htmlFor="message">Message</FormLabel>
          <Textarea
            id="message"
            name="message"
            rows={5}
            placeholder="Please provide details about your inquiry..."
            required
          />
        </FormItem>

        <div>
          <Button
            type="submit"
            variant="default"
            className="w-full h-auto gradient-secondary hover:opacity-90 text-white font-medium py-3 px-6 text-base rounded-md transition duration-300"
          >
            Send Message
          </Button>
        </div>
      </Form>
    </div>
  );
}
