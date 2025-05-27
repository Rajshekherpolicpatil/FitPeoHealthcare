import type { MenuItem } from "../../types/types";

export default function NavComponent({
  menuData,
  title,
}: {
  menuData: MenuItem[];
  title?: string;
}) {
  return (
    <nav className="pl-12 pt-10">
      <div className="text-sm text-gray-500 mb-6">{title}</div>
      <div className="flex flex-col gap-6">
        {menuData.map((item, index) => (
          <a
            key={index}
            className={`flex items-center gap-3 text-md font-medium ${
              item.active ? "text-blue-900 font-bold" : "text-gray-400"
            }`}
          >
            <span className="text-xl">{item.icon}</span>
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
