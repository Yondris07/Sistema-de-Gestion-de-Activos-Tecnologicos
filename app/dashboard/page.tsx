import Sidebar from "@/components/Sidebar";

export default function Dashboard() {
  return (
    <div className="flex">
      <Sidebar />

      <div className="p-10 w-full">
        <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

        <div className="grid grid-cols-3 gap-4">
          <div className="bg-blue-500 text-white p-6 rounded">
            <h2 className="text-xl font-bold">Activos</h2>
            <p>Sistema de gestión de activos tecnológicos</p>
          </div>

          <div className="bg-green-500 text-white p-6 rounded">
            <h2 className="text-xl font-bold">Mantenimientos</h2>
            <p>Control de mantenimientos realizados</p>
          </div>

          <div className="bg-purple-500 text-white p-6 rounded">
            <h2 className="text-xl font-bold">Usuarios</h2>
            <p>Administración de usuarios</p>
          </div>
        </div>
      </div>
    </div>
  );
}
