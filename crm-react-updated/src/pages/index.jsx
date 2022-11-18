export function loader() {
  return "Desde el loader";
}

const Index = () => {
  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Customers</h1>
      <p className="mt-3">Manage yours customers</p>
    </>
  );
};

export default Index;
