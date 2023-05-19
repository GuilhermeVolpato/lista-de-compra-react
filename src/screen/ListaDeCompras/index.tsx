import React, { useState } from "react";

type List = {
  id: number;
  name: string;
  qtd: number;
};

export function ListaDeCompras() {
  const [list, setList] = useState<List[]>([]);
  const [name, setName] = useState("");
  const [qtd, setQtd] = useState<number>(1);

  function getNewItem(item: List) {
    setList((products) => products.filter((_, index) => index !== 0));
    setList([
      ...list,
      { id: new Date().getUTCMilliseconds(), name: item.name, qtd: item.qtd },
    ]);
    console;
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    let id = new Date().getUTCMilliseconds();
    getNewItem({ id, name, qtd });
  }

  return (
    <div className="h-screen bg-gray-950 items-center justify-center ">
      <div className="flex flex-col items-center justify-center h-full w-screen pt-10 bg-gray-950">
        <ul className="w-1/2 overflow-y-scroll">
          {list.map((item) => (
            <li
              key={item.id}
              className="flex items-center justify-between p-4 mb-4 bg-gray-900 rounded-md"
            >
              <span className="text-white">{item.name}</span>
              <span className="text-white">{item.qtd}</span>
            </li>
          ))}
        </ul>
        <form onSubmit={handleSubmit} className='flex flex-col w-2/4 items-center justify-center pt-5'>
          <input
            type="text"
            placeholder="Nome do produto"
            className="w-1/2 p-4 mb-4 bg-gray-900 rounded-md text-white"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="number"
            placeholder="Quantidade"
            className="w-1/2 p-4 mb-4 bg-gray-900 rounded-md text-white "
            id="qtd"
            value={qtd}
            onChange={(e) => setQtd(parseInt(e.target.value))}
          />
          <button
            type="submit"
            className="w-1/2 p-4 mb-4 bg-gray-900 rounded-md"
          >
            Adicionar
          </button>
        </form>
      </div>
    </div>
  );
}
