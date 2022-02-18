function Error({ children }) {
  return (
    <div className="bg-red-800 text-white text-center p-3 uppercase font-bold mb-3 rounded">
      {children}
    </div>
  );
}

export default Error;
