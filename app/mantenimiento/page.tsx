import Sidebar from "@/components/Sidebar";

export default function Mantenimiento() {
  return (
    <div className="flex">
      <Sidebar />

      <div className="p-10 w-full">
        <h1 className="text-3xl font-bold mb-4">Mantenimiento</h1>

        <div className="border p-4 rounded shadow">
          No hay mantenimientos registrados.
        </div>
      </div>
    </div>
  );
}
