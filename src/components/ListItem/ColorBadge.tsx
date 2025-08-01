const colorClassMap: Record<string, string> = {
    red: "bg-red-300",
    blue: "bg-blue-300",
    green: "bg-green-300",
    purple: "bg-purple-300",
    orange: "bg-orange-300",
  };
  
  export default function ColorBadge({ color }: { color: string }) {
    return (
      <div
        className={`h-5 w-5 rounded-full ${colorClassMap[color] || "bg-gray-300"}`}
        title="User"
      ></div>
    );
  }
  