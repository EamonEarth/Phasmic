import { type ClassValue, clsx } from "clsx"
import { toast } from "sonner";
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

  

interface EmailData {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export function sendEmail(data: EmailData) {
  const apiEndpoint = '/api/email';

  fetch(apiEndpoint, {
    method: 'POST',
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((response) => {
      toast.success(response.message);
    })
    .catch((err) => {
      toast.error(err);
    });
}