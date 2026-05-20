"use client";

import { Shield, Mail, Lock } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-950 to-slate-950 p-6 overflow-hidden">
      {/* EFECTOS */}

      <div className="absolute w-96 h-96 bg-blue-500/20 blur-3xl rounded-full top-0 left-0"></div>

      <div className="absolute w-96 h-96 bg-indigo-500/20 blur-3xl rounded-full bottom-0 right-0"></div>

      {/* CARD */}

      <div className="relative w-full max-w-md">
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl">
          {/* LOGO */}

          <div className="flex flex-col items-center mb-10">
            <div className="bg-blue-500/20 p-5 rounded-3xl mb-5 shadow-lg">
              <Shield size={50} className="text-blue-400" />
            </div>

            <h1 className="text-5xl font-extrabold text-white tracking-wide">
              SGAT
            </h1>

            <p className="text-slate-300 mt-3 text-center leading-relaxed">
              Sistema de Gestión de Activos Tecnológicos
            </p>
          </div>

          {/* FORM */}

          <form
            className="space-y-5"
            onSubmit={(e) => {
              e.preventDefault();
              window.location.href = "/dashboard";
            }}
          >
            {/* EMAIL */}

            <div>
              <label className="text-slate-300 text-sm mb-2 block">
                Correo electrónico
              </label>

              <div className="flex items-center bg-white/10 border border-white/20 rounded-2xl px-4 focus-within:border-blue-400 transition">
                <Mail size={20} className="text-slate-300" />

                <input
                  type="email"
                  placeholder="correo@empresa.com"
                  className="w-full bg-transparent outline-none p-4 text-white placeholder:text-slate-400"
                />
              </div>
            </div>

            {/* PASSWORD */}

            <div>
              <label className="text-slate-300 text-sm mb-2 block">
                Contraseña
              </label>

              <div className="flex items-center bg-white/10 border border-white/20 rounded-2xl px-4 focus-within:border-blue-400 transition">
                <Lock size={20} className="text-slate-300" />

                <input
                  type="password"
                  placeholder="********"
                  className="w-full bg-transparent outline-none p-4 text-white placeholder:text-slate-400"
                />
              </div>
            </div>

            {/* BUTTON */}

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 transition-all duration-300 text-white py-4 rounded-2xl font-bold text-lg shadow-lg hover:scale-[1.02]"
            >
              Iniciar Sesión
            </button>
          </form>

          {/* FOOTER */}

          <div className="mt-8 text-center">
            <p className="text-slate-400 text-sm">
              © 2026 SGAT • Sistema Empresarial
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
