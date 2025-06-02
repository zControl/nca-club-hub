export function ClubFees() {
  return (
    <>
      <div className="flex flex-col">
        <div className="w-full">
          <div className="w-full h-24 bg-nca-blue text-primary-foreground text-center flex justify-center items-center text-4xl font-bold">
            <p>Fully Transparent Pricing</p>
          </div>
        </div>
        <div className="w-full flex flex-row justify-around text-primary-foreground text-center text-2xl">
          <div className="bg-primary text-primary-foreground w-full h-80">
            Left
          </div>
          <div className="bg-secondary text-secondary-foreground w-full">
            Right
          </div>
        </div>
      </div>
    </>
  );
}
