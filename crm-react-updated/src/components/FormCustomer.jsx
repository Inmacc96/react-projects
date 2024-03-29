const FormCustomer = ({ customer }) => {
  return (
    <>
      <div className="mb-4">
        <label
          htmlFor="name"
          className="text-gray-800 uppercase font-bold text-lg"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          placeholder="Client's name"
          className="block w-full bg-gray-50 p-3 mt-2"
          name="name"
          defaultValue={customer?.name}
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="company"
          className="text-gray-800 uppercase font-bold text-lg"
        >
          Company
        </label>
        <input
          type="text"
          id="company"
          placeholder="Client's company"
          className="block w-full bg-gray-50 p-3 mt-2"
          name="company"
          defaultValue={customer?.company}
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="email"
          className="text-gray-800 uppercase font-bold text-lg"
        >
          E-mail
        </label>
        <input
          type="email"
          id="email"
          placeholder="Client's email"
          className="block w-full bg-gray-50 p-3 mt-2"
          name="email"
          defaultValue={customer?.email}
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="phone"
          className="text-gray-800 uppercase font-bold text-lg"
        >
          Phone number
        </label>
        <input
          type="text"
          id="phone"
          placeholder="Client's phone number"
          className="block w-full bg-gray-50 p-3 mt-2"
          name="phone"
          defaultValue={customer?.phone}
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="notes"
          className="text-gray-800 uppercase font-bold text-lg"
        >
          Notes
        </label>
        <textarea
          as="textarea"
          id="notes"
          type="text"
          className="block w-full bg-gray-50 p-3 mt-2 h-40"
          placeholder="Other comments from the customer"
          name="notes"
          defaultValue={customer?.notes}
        />
      </div>
    </>
  );
};

export default FormCustomer;
