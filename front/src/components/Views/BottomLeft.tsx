import EchartsYear from "../EchartsYear";

interface BottomLeftProps {
  town: string;
}

export const BottomLeft = ({ town }: BottomLeftProps) => {
  return (
    <div className="col-span-4 col-start-1 row-span-5 row-start-6">
      <EchartsYear town={town} />
    </div>
  );
};
