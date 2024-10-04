interface SaviezVousProps {
  data: {
    id: string;
    title: string;
    description: string;
  };
}

function SaviezVous({ data }: SaviezVousProps) {
  return (
    <div className="flex flex-col items-center w-full h-full p-6 bg-white border rounded-lg shadow-md">
      <h3 className="mb-4 text-xl font-bold text-gray-800">{data.title}</h3>
      <p className="text-sm leading-relaxed text-gray-600">
        {data.description}
      </p>
    </div>
  );
}

export default SaviezVous;
