// const transactions = [
//   {
//     id: "AAPS0L",
//     company: "Chase & Co.",
//     share: "CAC",
//     commission: "+$4.37",
//     price: "$3,509.00",
//     quantity: "12.00",
//     netAmount: "$4,397.00",
//   },
//   // More transactions...
// ];

const transactions = [
  {
    id: "AAPS0L",
    company: "Chase & Co.",
    share: "CAC",
    commission: "+$4.37",
    price: "$3,509.00",
    quantity: "12.00",
    netAmount: "$4,397.00",
  },
  {
    id: "O2KMND",
    company: "Amazon.com Inc.",
    share: "AMZN",
    commission: "+$5.92",
    price: "$2,900.00",
    quantity: "8.80",
    netAmount: "$3,509.00",
  },
  {
    id: "1LP2P4",
    company: "Procter & Gamble",
    share: "PG",
    commission: "-$5.65",
    price: "$7,978.00",
    quantity: "2.30",
    netAmount: "$2,652.00",
  },
  {
    id: "PS9FJGL",
    company: "Berkshire Hathaway",
    share: "BRK",
    commission: "#ERROR!",
    price: "+$4.37",
    quantity: "48.00",
    netAmount: "$6,055.00",
  },
  {
    id: "QYR135",
    company: "Apple Inc.",
    share: "AAPL",
    commission: "+$38.00",
    price: "$8,508.00",
    quantity: "36.00",
    netAmount: "$3,496.00",
  },
  {
    id: "99SLSM",
    company: "NVIDIA Corporation",
    share: "NVDA",
    commission: "+$1,427.00",
    price: "$4,425.00",
    quantity: "18.00",
    netAmount: "$2,109.00",
  },
  {
    id: "OSDJLS",
    company: "Johnson & Johnson",
    share: "JNJ",
    commission: "+$1,937.23",
    price: "$4,038.00",
    quantity: "32.00",
    netAmount: "$7,210.00",
  },
  {
    id: "4HJK3N",
    company: "JPMorgan",
    share: "JPM",
    commission: "-$3.67",
    price: "$3,966.00",
    quantity: "80.00",
    netAmount: "$6,432.00",
  },
];

export default function Example() {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">
            Transactions
          </h1>
          <p className="mt-2 text-sm text-gray-700">
            A table of placeholder stock market data that does not make any
            sense.
          </p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <button
            type="button"
            className="block px-3 py-2 text-sm font-semibold text-center text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Export
          </button>
        </div>
      </div>
      <div className="flow-root mt-8">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="whitespace-nowrap py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                  >
                    Transaction ID
                  </th>
                  <th
                    scope="col"
                    className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Company
                  </th>
                  <th
                    scope="col"
                    className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Share
                  </th>
                  <th
                    scope="col"
                    className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Commision
                  </th>
                  <th
                    scope="col"
                    className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Price
                  </th>
                  <th
                    scope="col"
                    className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Quantity
                  </th>
                  <th
                    scope="col"
                    className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Net amount
                  </th>
                  <th
                    scope="col"
                    className="relative whitespace-nowrap py-3.5 pl-3 pr-4 sm:pr-0"
                  >
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {transactions.map((transaction) => (
                  <tr key={transaction.id}>
                    <td className="py-2 pl-4 pr-3 text-sm text-gray-500 whitespace-nowrap sm:pl-0">
                      {transaction.id}
                    </td>
                    <td className="px-2 py-2 text-sm font-medium text-gray-900 whitespace-nowrap">
                      {transaction.company}
                    </td>
                    <td className="px-2 py-2 text-sm text-gray-900 whitespace-nowrap">
                      {transaction.share}
                    </td>
                    <td className="px-2 py-2 text-sm text-gray-500 whitespace-nowrap">
                      {transaction.commission}
                    </td>
                    <td className="px-2 py-2 text-sm text-gray-500 whitespace-nowrap">
                      {transaction.price}
                    </td>
                    <td className="px-2 py-2 text-sm text-gray-500 whitespace-nowrap">
                      {transaction.quantity}
                    </td>
                    <td className="px-2 py-2 text-sm text-gray-500 whitespace-nowrap">
                      {transaction.netAmount}
                    </td>
                    <td className="relative py-2 pl-3 pr-4 text-sm font-medium text-right whitespace-nowrap sm:pr-0">
                      <a
                        href="#"
                        className="text-indigo-600 hover:text-indigo-900"
                      >
                        Edit<span className="sr-only">, {transaction.id}</span>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
