import { CopyToClipboard } from "./types"

export const copyToClipboard: CopyToClipboard = (value: string) => {
  const el = document.createElement('textarea')
  el.value = value
  el.style.width = '0px'
  el.style.height = '0px'
  el.style.padding = '0px'
  el.style.margin = '0px'
  el.style.opacity = '0'

  document.body.appendChild(el)

  el.select()
  document.execCommand('copy')
  el.blur()
  document.getSelection()?.empty()

  document.body.removeChild(el)
}
