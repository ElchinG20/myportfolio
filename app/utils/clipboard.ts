export function copyToClipboard(toCopy: string, message: string = 'Скопировано') {
  const toast = useToast()
  navigator.clipboard.writeText(toCopy).then(() => {
    toast.add({ title: message, color: 'secondary', icon: 'i-lucide-check-circle' })
  })
}
