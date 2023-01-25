// export default ({ icon, ...props }) => {
//   const Icon = icon;
//   return <Icon className="icon mx-1 inline vertical-ac" height="0.8em" {...props} />;

// };

type Props = {
  name: string;
  className?: string;
  alt?: string;
  size?: "lg" | "xl" | "sm" | "xs" | "2xl" | "3xl";
};

export default function Icon(props: Props) {
  let fontSize = "";
  if (props.size === "3xl") fontSize = "text-3xl";
  if (props.size === "2xl") fontSize = "text-2xl";
  if (props.size === "xl") fontSize = "text-xl";
  if (props.size === "lg") fontSize = "text-lg";
  if (props.size === "sm") fontSize = "text-sm";
  if (props.size === "xs") fontSize = "text-xs";
  return (
    <>
      {" "}
      <span className={`${props.name} inline-block vertical-text-top ${fontSize} ${props.className ?? ""}`}></span>
      {props.alt && <span className="sr-only">{props.alt}</span>}{" "}
    </>
  );
}
