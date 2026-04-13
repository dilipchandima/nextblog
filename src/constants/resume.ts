/** Must match the filename in `/public` (Vite serves it at this path). */
const RESUME_PUBLIC_FILE = 'Resume Dileepa Chandima.pdf'

export const RESUME_HREF = new URL(RESUME_PUBLIC_FILE, 'https://example.org/').pathname

/** Suggested filename when the browser saves the file. */
export const RESUME_DOWNLOAD_FILENAME = 'Dileepa-Chandima-Resume.pdf'
