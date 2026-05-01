import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { toast } from 'sonner';
import pb from '@/lib/pocketbaseClient';

function GetHelpForm({ title = "Get Visa Help", description = "Fill out the form and our team will contact you" }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    country_interested: '',
    visa_type: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await pb.collection('lead_submissions').create(formData, { $autoCancel: false });
      toast.success('Request submitted successfully. We will contact you soon.');
      setFormData({
        name: '',
        phone: '',
        email: '',
        country_interested: '',
        visa_type: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Failed to submit request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name *</Label>
            <Input
              id="name"
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="text-foreground"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number *</Label>
            <Input
              id="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="text-foreground"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email Address *</Label>
            <Input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="text-foreground"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="country">Country Interested</Label>
            <Select
              value={formData.country_interested}
              onValueChange={(value) => setFormData({ ...formData, country_interested: value })}
            >
              <SelectTrigger id="country" className="text-foreground">
                <SelectValue placeholder="Select country" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Germany">Germany</SelectItem>
                <SelectItem value="Italy">Italy</SelectItem>
                <SelectItem value="Spain">Spain</SelectItem>
                <SelectItem value="France">France</SelectItem>
                <SelectItem value="USA">USA</SelectItem>
                <SelectItem value="Canada">Canada</SelectItem>
                <SelectItem value="UK">UK</SelectItem>
                <SelectItem value="Australia">Australia</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="visa-type">Visa Type</Label>
            <Select
              value={formData.visa_type}
              onValueChange={(value) => setFormData({ ...formData, visa_type: value })}
            >
              <SelectTrigger id="visa-type" className="text-foreground">
                <SelectValue placeholder="Select visa type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Tourist/Visit">Tourist/Visit</SelectItem>
                <SelectItem value="Student">Student</SelectItem>
                <SelectItem value="Work">Work</SelectItem>
                <SelectItem value="Business">Business</SelectItem>
                <SelectItem value="Immigration">Immigration</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Submit Request'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

export default GetHelpForm;