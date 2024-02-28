export const Button = (props) => {
  return (
    <button className={`${props.className} py-4 uppercase text-xs font-semibold rounded-lg text-center`}>{props.children}</button>
  )
}
