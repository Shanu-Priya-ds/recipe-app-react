function Spinner(){
    
    return (<div className="fixed inset-0 flex justify-center items-center gap-2 bg-gray-500/80"><img
      src="https://cdn.jsdelivr.net/gh/SamHerbert/SVG-Loaders/svg-loaders/three-dots.svg"
      alt="Loading..."
      width={60}
      height={20}
    />Loading</div>)
}

export default Spinner;