import React from "react"

export function Table(props: any) {
  return <table {...props}>{props.children}</table>
}

export function TableHeader(props: any) {
  return <thead {...props}>{props.children}</thead>
}

export function TableHead(props: any) {
  return <th {...props}>{props.children}</th>
}

export function TableRow(props: any) {
  return <tr {...props}>{props.children}</tr>
}

export function TableCell(props: any) {
  return <td {...props}>{props.children}</td>
}

export function TableBody(props: any) {
  return <tbody {...props}>{props.children}</tbody>
}
