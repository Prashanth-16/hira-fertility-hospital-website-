import React from "react"

export function Select(props: any) {
  return <select {...props}>{props.children}</select>
}

export function SelectContent(props: any) {
  return <div {...props}>{props.children}</div>
}

export function SelectItem(props: any) {
  return <div {...props}>{props.children}</div>
}

export function SelectTrigger(props: any) {
  return <button {...props}>{props.children}</button>
}

export function SelectValue(props: any) {
  return <span {...props}>{props.children}</span>
}
