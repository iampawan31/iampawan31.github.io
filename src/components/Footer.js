const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="bg-primary dark:bg-alternate dark:text-primary py-5 text-alternate mt-32">
      <div className="container mx-auto">
        <div className="flex flex-row justify-between">
          <div className="font-primary">PAWAN KUMAR</div>
          <div className="font-primary">{currentYear}</div>
          <div className="font-primary">MADE WITH REACT</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
