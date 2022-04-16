export async function greet(name: string): Promise<string> {
  return `Hello, ${name}!`;
}

export async function goodbye(name: string): Promise<string> {
  return `Goodbye, ${name}!`;
}
