import React from "react"

export function Field(props: any) {
  return <div {...props}>{props.children}</div>
}

export function FieldGroup(props: any) {
  return <div {...props}>{props.children}</div>
}

export function FieldLabel(props: any) {
  return <label {...props}>{props.children}</label>
}
