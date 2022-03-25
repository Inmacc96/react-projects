import { useCallback, useRef } from "react";
import useQuoter from "../hooks/useQuoter";
import { brands, plans } from "../constants";

const Result = () => {
  const { result, data } = useQuoter();
  const { brand, plan, year } = data;
  const yearRef = useRef(year);

  const [nameBrand] = useCallback(
    brands.filter((b) => b.id === Number(brand)),
    [result]
  );
  const [namePlan] = useCallback(
    plans.filter((p) => p.id == Number(plan)),
    [result]
  );

  if (result === 0) return null;

  return (
    <div className="bg-gray-100 text-center mt-5 p-5 shadow">
      <h2 className="text-gray-600 font-black text-3xl">Resumen</h2>

      <p className="my-2">
        <span className="font-bold">Marca: </span>
        {nameBrand.name}
      </p>

      <p className="my-2">
        <span className="font-bold">Plan: </span>
        {namePlan.name}
      </p>

      <p className="my-2">
        <span className="font-bold">Año del Auto: </span>
        {yearRef.current}
      </p>

      <p className="my-2 text-2xl">
        <span className="font-bold">Total Cotización: </span>
        {result}
      </p>
    </div>
  );
};

export default Result;

