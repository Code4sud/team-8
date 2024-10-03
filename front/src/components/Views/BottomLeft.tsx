interface BottomLeftProps {
  town: string;
}

export const BottomLeft = ({ town }: BottomLeftProps) => {
  return <div className="col-span-4 col-start-1 row-span-4 row-start-5"></div>;
};
