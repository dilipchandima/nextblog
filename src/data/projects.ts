export const projects = [
  {
    name: "I'm Coming App",
    url: 'imcomingapp.com',
    highlights: [
      'Directed the end-to-end architecture and feature development for a React Native mobile application, ensuring a scalable, robust codebase designed for long-term growth.',
      'Orchestrated the UI/UX design process using Figma, translating complex user requirements into intuitive, high-fidelity interfaces and user-centric navigation flows.',
      'Led a high-performing team of two mobile developers, managing the full Agile lifecycle via Jira, Confluence, and Microsoft Teams to ensure on-time delivery.',
      'Bridged the gap between design and implementation, ensuring that the final mobile product remained technically feasible while providing a premium user experience.',
    ],
  },
  {
    name: 'Rn-select-date-range',
    url: 'https://www.npmjs.com/package/rn-select-date-range',
    highlights: [
      'Architected and maintained a highly customizable React Native date-range selection library, addressing industry-wide limitations in existing packages by offering deep UI adaptability.',
    ],
  },
] as const

export function projectExternalHref(url: string): string {
  if (url.startsWith('http://') || url.startsWith('https://')) return url
  return `https://${url}`
}
