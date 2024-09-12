import React from "react";

interface Props {
  children: React.ReactNode;
  users: React.ReactNode;
  products: React.ReactNode;
}

export default function layout({ children, users, products }: Props) {
  return (
    <div className="min-h-screen bg-gray-100 grid grid-cols-2">
      <aside className="p-4 bg-gray-200">
        <div className="space-y-4">{users}</div>
      </aside>
      <section className="p-4 bg-gray-100">
        <div className="grid grid-cols-1 gap-4">{products}</div>
      </section>
    </div>
  );
}
