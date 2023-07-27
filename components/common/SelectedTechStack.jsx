export default function SelectedTechStack(props) {
  return (
    <button
      className="flex py-1 px-2 mt-3 space-x-3 bg-purple-600 justify-center w-30 sm:ml-7 ml-1 items-center rounded-full border-none text-sm text-white font-medium"
    >
      <span>{props.dt.name}</span>{" "}
      <i
        onClick={() => props.removeTechStack(props.dt.id)}
        className="bi bi-x"
      ></i>
    </button>
  );
}
