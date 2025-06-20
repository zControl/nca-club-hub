function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="list-disc pl-5">
      {items.map((item, index) => (
        <li key={index} className="mb-2 text-xl">
          {item}
        </li>
      ))}
    </ul>
  );
}

export { BulletList };
