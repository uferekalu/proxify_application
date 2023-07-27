export default function CheckBox(props) {
    return (
        <div className="flex space-x-4 mt-8 sm:ml-5 ml-3">
            <input name={props.name} checked={props.checked} onChange={props.onChange} type="checkbox" className="flex w-5 h-5 rounded-sm" />
            <p className="flex text-sm text-black sm:-mt-0 -mt-1">I am planning to move to a different time zones within the next 6 months</p>
        </div>
    )
}