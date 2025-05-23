export default function Copyright() {
  return (
    <div className="mt-2">
      <p className="text-xs">
        {"© Copyright "}
        {new Date().getFullYear()}
        {" | "}
        <a href="http://ncalliancefc.com">
          North County Alliance Football Club
        </a>
      </p>
    </div>
  );
}
