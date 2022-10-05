import React from "react";

interface PropsCard{
  header: () => React.ReactElement;
  body: () => React.ReactElement;
}

export function Card({header, body}: PropsCard) {
  return (
    <section className="bg-gray-50 w-4/5 m-auto rounded-tl-lg rounded-tr-lg rounded-b-sm">
      <header className="bg-green-500 rounded-tl-md rounded-tr-md px-8 py-4">
        {header()}
      </header>
      <div className="px-8 py-8 h-auto">
        {body()}
      </div>
    </section>
  )
}