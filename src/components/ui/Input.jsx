export const Input = (props) => {
    return (
        <input
            type={props.type || 'text'}
            placeholder={props.placeholder}
            className="w-full h-14 px-4 border border-gray-200 rounded-lg"
        />
    )
}
