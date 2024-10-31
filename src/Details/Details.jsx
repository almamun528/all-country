import { useLoaderData, useNavigate } from "react-router-dom";

const Details = () => {
  const country = useLoaderData();
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(-1);
  };

  const { name, flags, region, languages, population } = country[0];
  const { coatOfArms, subregion, capital, startOfWeek, independent } =
    country[0];

  return (
    <main className="md:flex gap-5 items-center justify-between w-10/12 mx-auto my-3 p-3 border-2 border-red-700">
      <div className="">
        <h1>Name : {name.common} </h1>
        <img className="my-2" src={flags.png} alt="" />

        <h1>Region : {region} </h1>
        <h1> Language : {languages.eng}</h1>
        <h2>Population : {population} </h2>

        <button
          onClick={handleNavigate}
          className=" bg-red-200 hover:bg-red-600 hover:text-white py-2 px-4 my-2 rounded"
        >
          Back
        </button>
      </div>
      <div className="w-6/12 flex flex-col ">
          <img className=" h-2/3 w-1/3 " src={coatOfArms.png} alt="" />
          <h1 className="font-bold text-lg">capital : {capital} </h1>
          <p> Week Starting : {startOfWeek}</p>
          <p> Independent: {independent ? "Yes" : "No"} </p>
          <p> Subregion : {subregion} </p>
        </div>
    </main>
  );
};

export default Details;
