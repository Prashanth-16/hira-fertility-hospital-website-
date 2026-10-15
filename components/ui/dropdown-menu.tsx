import React from "react"

export function DropdownMenu(props: any) {
  return <div {...props}>{props.children}</div>
}

export function DropdownMenuContent(props: any) {
  return <div {...props}>{props.children}</div>
}

export function DropdownMenuTrigger(props: any) {
  return <button {...props}>{props.children}</button>
}

export function DropdownMenuItem(props: any) {
  return <div {...props}>{props.children}</div>
}

export function DropdownMenuGroup(props: any) {
  return <div {...props}>{props.children}</div>
}

export function DropdownMenuLabel(props: any) {
  return <div {...props}>{props.children}</div>
}

export function DropdownMenuSeparator(props: any) {
  return <hr {...props} />
}
