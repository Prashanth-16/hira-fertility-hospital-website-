import React from "react"

export function Sheet(props: any) {
  return <div {...props}>{props.children}</div>
}

export function SheetContent(props: any) {
  return <div {...props}>{props.children}</div>
}

export function SheetDescription(props: any) {
  return <p {...props}>{props.children}</p>
}

export function SheetFooter(props: any) {
  return <footer {...props}>{props.children}</footer>
}

export function SheetHeader(props: any) {
  return <header {...props}>{props.children}</header>
}

export function SheetTitle(props: any) {
  return <h3 {...props}>{props.children}</h3>
}
