export default function getDate (date: string): string {
  if (!date?.length) {
    return date
  }
  return date.split('T')[0]?.split('-')?.reverse()?.join('.')
}
