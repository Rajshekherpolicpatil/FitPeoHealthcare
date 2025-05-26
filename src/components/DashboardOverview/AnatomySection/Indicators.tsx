export default function Indicators({
  label,
  icon,
  textColor,
  backgroundColor,
}: {
  label: string;
  icon: string;
  textColor: string;
  backgroundColor: string;
}) {
  return (
    <div className={`flex items-center gap-1 pr-3 pl-2 py-1  rounded-lg ${backgroundColor}`}>
      <span className="m-1 text-sm">{icon}</span>
      <span className={`text-nowrap font-bold text-xs ${textColor} `}>{label}</span>
    </div>
  );
}
