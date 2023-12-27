interface IProps {
  text: string;
}

export default function NavItem({ text }: IProps) {
  return <a className="hover:bg-emerald-700 transition-all duration-200 rounded p-2 cursor-pointer">{text}</a>;
}
