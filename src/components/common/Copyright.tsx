export default function Copyright() {
  return (
    <div className="mt-2">
      <h3>
        {"Copyright © "}
        <a href="http://ncalliancefc.com">
          North County Alliance Football Club
        </a>{" "}
        {new Date().getFullYear()}.
      </h3>
    </div>
  );
}
