export default function Input(props) {
  return (
    <div
      className={`flex flex-col sm:${props.mtd ? props.mtd : "mt-0"} sm:ml-5 ${
        props.mt ? props.mt : "mt-0"
      } px-3`}
    >
      <div className="flex text-sm text-slate-800 mb-1">{props.caption}</div>
      <input
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        className={`w-full h-11 rounded-lg py-2 px-8 border border-slate-900`}
        type="text"
        placeholder={props.placeholder}
      />
    </div>
  );
}
