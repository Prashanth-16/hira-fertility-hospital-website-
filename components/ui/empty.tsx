import React from "react"

export function Empty(props: any) {
  return <div {...props}>{props.children}</div>
}

export function EmptyContent(props: any) {
  return <div {...props}>{props.children}</div>
}

export function EmptyDescription(props: any) {
  return <p {...props}>{props.children}</p>
}

export function EmptyHeader(props: any) {
  return <h3 {...props}>{props.children}</h3>
}

export function EmptyMedia(props: any) {
  return <div {...props}>{props.children}</div>
}

export function EmptyTitle(props: any) {
  return <h4 {...props}>{props.children}</h4>
}
