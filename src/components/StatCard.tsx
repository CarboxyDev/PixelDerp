type StatCardProps = {
  statFigure: string;
  statUnit: string;
  content: string;
};

const StatCard = (props: StatCardProps) => {
  const { statFigure, statUnit, content } = props;
  return (
    <>
      <div className="w-84 rounded-2xl border border-slate-700">
        <div className="mx-6 my-10">
          <div>
            <h3 className="inline text-6xl font-semibold text-white">
              {statFigure}
            </h3>
            <span className="ml-2 text-sm text-slate-500">{statUnit}</span>
          </div>
          <div className="mt-8">
            <p className="text-slate-400">{content}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default StatCard;
