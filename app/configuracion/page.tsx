import Sidebar from "@/components/Sidebar";

export default function Configuracion() {
  return (
    <div className="flex">
      <Sidebar />

      <div className="p-10 w-full">
        <h1 className="text-3xl font-bold mb-4">Configuración</h1>

        <div className="border p-4 rounded shadow">
          Sistema SGAT versión 1.0
        </div>
      </div>
    </div>
  );
}
