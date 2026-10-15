import React from "react"

export function Card(props: any) {
  return <div {...props}>{props.children}</div>
}

export function CardContent(props: any) {
  return <div {...props}>{props.children}</div>
}

export function CardHeader(props: any) {
  return <div {...props}>{props.children}</div>
}

export function CardTitle(props: any) {
  return <h3 {...props}>{props.children}</h3>
}

export function CardDescription(props: any) {
  return <p {...props}>{props.children}</p>
}
