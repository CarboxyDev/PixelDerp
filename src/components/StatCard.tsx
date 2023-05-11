type StatCardProps = {
  statFigure: string;
  statUnit: string;
  remark: string;
};

const StatCard = (props: StatCardProps) => {
  const { statFigure, statUnit, remark } = props;
  return (
    <>
      <div className="w-84 rounded-2xl border border-slate-700">
        <div className="mx-6 my-10">
          <div>
            <h3 className="inline text-6xl font-semibold text-white">
              {statFigure}
            </h3>
            <span className="ml-2 text-slate-500">{statUnit}</span>
          </div>
          <div className="mt-8">
            <p className="text-slate-400">{remark}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default StatCard;
