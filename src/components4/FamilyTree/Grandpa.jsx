import Dad from "./Dad";
import Mom from "./Mom";
import Uncle from "./Uncle";
import Aunt from "./Aunt";

const Grandpa = ({asset}) => {

  return (
    <div>
      <h2>Grandpa</h2>
      <section className="flex justify-center">
        <Dad asset={asset}/>
        <Uncle />
        <Aunt />
      </section>
    </div>
  );
};

export default Grandpa;
