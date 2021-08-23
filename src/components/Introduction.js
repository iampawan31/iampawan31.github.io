const Introduction = () => {
  return (
    <div className="md:container md:mx-auto">
      <div className="flex flex-col">
        <div className="text-center text-4xl text-primary md:text-4xl sm:text-4xl xs:text-4xl font-heading lg:text-7xl py-8">
          Pawan Kumar
        </div>
        <div className="grid grid-cols-3 text-center bg-secondary text-primary font-light font-heading text-2xl divide-x-4 divide-white">
          <div className="font-heading font-semibold">Laravel</div>
          <div className="font-heading font-semibold">Vue.js</div>
          <div className="font-heading font-semibold">React</div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
