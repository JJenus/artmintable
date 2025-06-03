export {}

declare global {
  interface Window {
    $zoho?: {
      salesiq?: {
        visitor?: {
          customaction(arg0: string): void
          question(message: string): void
          name: (name: string) => void
          email: (email: string) => void
          info: (info: Record<string, string>) => void
        }
        chat?: {
          start: () => void
        }
        widget?: {
          open: () => void
          close: () => void
        }
      }
    }
  }
}
