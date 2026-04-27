export default function Login() {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow w-80">
        <h1 className="text-xl font-bold mb-4">Login</h1>

        <input className="w-full mb-3 p-2 border" placeholder="Correo" />
        <input className="w-full mb-3 p-2 border" placeholder="Contraseña" />

        <button className="w-full bg-blue-600 text-white p-2">Entrar</button>
      </div>
    </div>
  );
}
