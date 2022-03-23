import { Fragment, useContext } from "react";
import { brands, years, plans } from "../constants";
import QuoterContext from "../context/QuoterProvider";

const Form = () => {

    const { hola, fnHolaMundo } = useContext(QuoterContext);
   fnHolaMundo()
  return (
    <>
      <form>
        <div className="my-5">
          <label className="block mb-3 font-bold text-gray-400 uppercase">
            Marca
          </label>
          <select
            name="brand"
            className="w-full p-3 bg-white border border-gray-200"
          >
            <option value="">-- Selecciona Marca --</option>
            {brands.map((brand) => (
              <option key={brand.id} value={brand.name}>
                {brand.name}
              </option>
            ))}
          </select>
        </div>

        <div className="my-5">
          <label className="block mb-3 font-bold text-gray-400 uppercase">
            Año
          </label>
          <select
            name="brand"
            className="w-full p-3 bg-white border border-gray-200"
          >
            <option value="">-- Selecciona Año --</option>
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>

        <div className="my-5">
          <label className="block mb-3 font-bold text-gray-400 uppercase">
            Elige un plan
          </label>
          <div className="flex gap-3 items-center">
            {plans.map((plan) => (
              <Fragment key={plan.id}>
                <label>{plan.name}</label>
                <input type="radio" name="plan" value={plan.id} />
              </Fragment>
            ))}
          </div>
        </div>

        <input
          type="submit"
          className="w-full bg-indigo-500 hover:bg-indigo-600 transition-colors text-white cursor-pointer p-3 uppercase font-bold"
          value="Cotizar"
        />
      </form>
    </>
  );
};

export default Form;
