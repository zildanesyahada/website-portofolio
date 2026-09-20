const variants = {
  primary: "bg-ink text-beige hover:bg-ink-hover",
  secondary: "border border-ink text-ink hover:bg-ink hover:text-beige",
  light: "bg-beige text-ink hover:bg-white/90",
  outlineLight: "border border-beige/60 text-beige hover:bg-beige hover:text-ink",
}

const sizes = {
  md: "px-6 py-3",
  sm: "px-5 py-2.5",
}

export default function Button({
  variant = "primary",
  size = "md",
  href,
  children,
  className = "",
  ...props
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-xl text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink ${sizes[size]} ${variants[variant]} ${className}`

  return href ? (
    <a href={href} className={classes} {...props}>{children}</a>
  ) : (
    <button className={classes} {...props}>{children}</button>
  )
}