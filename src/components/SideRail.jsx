const DOTS = [["home", "Home"], ["services", "Services"], ["work", "Work"], ["about", "About"], ["process", "Process"], ["contact", "Contact"]];

export default function SideRail() {
  return (
    <nav className="sr" aria-label="Page sections">
      <div className="sl"><b id="slf" /></div>
      {DOTS.map(([id, label]) => (
        <a key={id} href={"#" + id} data-p={id}><span>{label}</span></a>
      ))}
    </nav>
  );
}
