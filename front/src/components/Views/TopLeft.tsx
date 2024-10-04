import EChartsDay from "../EchartsDay";

interface TopLeftProps {
  town: string;
}

export const TopLeft = ({ town }: TopLeftProps) => {
  return (
    <div className="col-span-4 row-span-5">
      <EChartsDay town={town} />
    </div>
  );
};
