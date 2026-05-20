import Sidebar from "@/components/Sidebar";

export default function Usuarios() {
  return (
    <div className="flex">
      <Sidebar />

      <div className="p-10 w-full">
        <h1 className="text-3xl font-bold mb-4">Usuarios</h1>

        <div className="border p-4 rounded shadow">
          Administración de usuarios del sistema.
        </div>
      </div>
    </div>
  );
}
