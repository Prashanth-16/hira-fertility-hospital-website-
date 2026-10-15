export function Avatar(props: any) {
  return <div {...props}>{props.children}</div>
}

export function AvatarImage(props: any) {
  return <img {...props} />
}

export function AvatarFallback(props: any) {
  return <div {...props}>{props.children}</div>
}
