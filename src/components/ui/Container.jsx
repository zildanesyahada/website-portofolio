export default function Container({ children, className = '' }) {
  return (
    <div className={`mx-auto w-full max-w-[1440px] px-5 md:px-8 lg:px-12 xl:px-20 ${className}`}>
      {children}
    </div>
  )
}