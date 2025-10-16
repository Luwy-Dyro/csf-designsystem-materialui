import { Calendar, ChevronDown } from "lucide-react";
import { useState } from "react";

export const ButtonPage = () => {
  const [activeTypeButton, setActiveTypeButton] = useState<string | null>(
    "Type1"
  );
  const [activeCodeButton, setActiveCodeButton] = useState<string | null>(
    "HTML"
  );
  const [activeStyleButton, setActiveStyleButton] = useState<string>("Filled");

  const typeLabels: Record<string, string> = {
    Type1: "Button 1",
    Type2: "Button 2",
    Type3: "Group Button",
  };

  const getButtonType = (nombre: string) => {
    const isActive = activeTypeButton === nombre;
    return `
      flex flex-col items-center rounded-sm py-3 px-7 border-2 font-semibold cursor-pointer duration-300 gap-1 text-white rounded-sm p-3 border-2 font-medium text-sm cursor-pointer
      ${isActive ? "border-primary-blue-700 bg-primary-blue-700" : "hover:bg-primary-blue-700 hover:border-primary-blue-700 border-primary-blue-600 bg-primary-blue-600"}
    `;
  };

  const getStyleButtonClasses = (
    name: string,
    position: "left" | "middle" | "right"
  ) => {
    const base = "px-6 py-4 border-primary-green-600 cursor-pointer";
    const active =
      activeStyleButton === name ? "bg-primary-green-200" : "bg-white";

    const radius = {
      left: "border-2 rounded-l-md",
      middle: "border-y-2",
      right: "border-2 rounded-r-md",
    }[position];

    return `${base} ${active} ${radius}`;
  };

  const getButtonCode = (nombre: string) => {
    const isActive = activeCodeButton === nombre;
    return `
      flex flex-col items-center rounded-sm py-2 px-7 border-2 font-semibold text-xl cursor-pointer duration-300
      ${isActive ? "bg-primary-blue-600 text-white border-primary-blue-600" : "bg-white text-primary-blue-600"}
    `;
  };

  


  return (
    <div>
      <div className="pb-5 ">
        <p className="text-xl/6 text-primary-blue-600 font-normal mt-2 text-center">
          Todo lo que los desarrolladores necesitan para implementar el sistema
          de diseño en sus proyectos.
        </p>
      </div>
      <section className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-1 grid-rows-3 pb-15 pt-8 gap-6">
        <button
          className={getButtonType("Type1")}
          onClick={() => setActiveTypeButton("Type1")}
        >
          <span className="block h-6 w-6">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V11H13V17ZM13 9H11V7H13V9Z"
                fill="#ffffff"
              />
            </svg>
          </span>
          {typeLabels["Type1"]}
        </button>
        <button
          className={getButtonType("Type2")}
          onClick={() => setActiveTypeButton("Type2")}
        >
          <span className="block h-6 w-6">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V11H13V17ZM13 9H11V7H13V9Z"
                fill="#ffffff"
              />
            </svg>
          </span>
          {typeLabels["Type2"]}
        </button>
        <button
          className={getButtonType("Type3")}
          onClick={() => setActiveTypeButton("Type3")}
        >
          <span className="block h-6 w-6">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V11H13V17ZM13 9H11V7H13V9Z"
                fill="#ffffff"
              />
            </svg>
          </span>
          {typeLabels["Type3"]}
        </button>
      </section>
      <div className="bg-primary-blue-600 px-6 py-4 rounded-lg mb-10  ">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-semibold text-white">
            {activeTypeButton ? typeLabels[activeTypeButton] : "Component"}
          </h3>
        </div>
      </div>
      <section className="grid grid-cols-3 text-center">
        <button
          className={getStyleButtonClasses("Filled", "left")}
          onClick={() => setActiveStyleButton("Filled")}
        >
          <strong className="text-base font-medium text-primary-green-600">
            Filled
          </strong>
        </button>
        <button
          className={getStyleButtonClasses("Outline", "middle")}
          onClick={() => setActiveStyleButton("Outline")}
        >
          <strong className="text-base font-medium text-primary-green-600">
            Outline
          </strong>
        </button>
        <button
          className={getStyleButtonClasses("Clear", "right")}
          onClick={() => setActiveStyleButton("Clear")}
        >
          <strong className="text-base font-medium text-primary-green-600">
            Clear
          </strong>
        </button>
      </section>
      <section className="grid grid-cols-1 xl:grid-cols-[2.1fr_1fr] xl:grid-rows-1 grid-row-2 mt-6 gap-6 ">
        <div className="flex flex-col">
          <div className="border-2 rounded-t-md p-6 bg-primary-blue-600 border-primary-blue-600">
            <strong className="text-xl font-medium text-white">
              Propiedades personalizadas de CSS
            </strong>
          </div>
          <div className="border-2 border-t-0  rounded-b-md p-6 border-primary-green-600">
            <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] md:grid-rows-1 grid-row-2 gap-4">
              <div>
                <div className="border-2 text-center rounded-t-md p-2 bg-primary-blue-600 border-primary-blue-600">
                  <strong className="text-base font-semibold text-white">
                    Title
                  </strong>
                </div>
                <div className="border-2 border-t-0 rounded-b-md border-primary-blue-600">
                  <div className="bg-primary-blue-50">s</div>
                  <div className="flex flex-col gap-6 p-6 items-center">
                    <div className="relative w-full">
                      <select
                        id="estado"
                        name="estado"
                        className="appearance-none w-full text-primary-blue-600 placeholder:text-primary-blue-600  bg-white border-2 border-primary-blue-600 rounded-md pl-12 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-blue-100"
                      >
                        <option value="" hidden selected>
                          Selecciona estado
                        </option>
                        <option value="">Rojo</option>
                        <option value="">Verde</option>
                        <option value="">Azul</option>
                      </select>

                      <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 grid place-items-center h-6 w-6">
                        <img
                          src="./icons/icon-logueo.svg"
                          alt=""
                          className="w-full"
                          aria-hidden="true"
                        />
                      </span>
                      <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center px-2 text-gray-700">
                        <ChevronDown className="h-6 w-6 text-primary-blue-600" />
                      </span>
                    </div>
                    <div className="grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1 md:divide-x-2 divide-primary-blue-600 w-max">
                      <div className="px-0 md:px-4 md:pb-0">
                        <strong className="text-xs text-primary-blue-600 font-semibold">
                          Size
                        </strong>
                        <div className="flex gap-3">
                          <span className="flex items-center justify-center min-w-6 min-h-6 border-1 rounded-xs cursor-pointer">
                            <Calendar className="shrink-0 w-3 text-primary-blue-600"></Calendar>
                          </span>
                          <span className="flex items-center justify-center min-w-6 min-h-6 border-1 rounded-xs cursor-pointer">
                            <Calendar className="shrink-0 w-3 text-primary-blue-600"></Calendar>
                          </span>
                          <span className="flex items-center justify-center min-w-6 min-h-6 border-1 rounded-xs cursor-pointer">
                            <Calendar className="shrink-0 w-3 text-primary-blue-600"></Calendar>
                          </span>
                          <span className="flex items-center justify-center min-w-6 min-h-6 border-1 rounded-xs cursor-pointer">
                            <Calendar className="shrink-0 w-3 text-primary-blue-600"></Calendar>
                          </span>
                        </div>
                      </div>
                      <div className="px-0 md:px-4 md:pb-0">
                        <strong className="text-xs text-primary-blue-600 font-semibold">
                          Color
                        </strong>
                        <div className="flex gap-3">
                          <button className="flex items-center justify-center min-w-6 min-h-6 border-1 border-primary-blue-600-50 rounded-lg cursor-pointer">
                            <div className="rounded-lg h-3 w-3 bg-primary-blue-600"></div>
                          </button>
                          <button className="flex items-center justify-center min-w-6 min-h-6 border-1 border-neutral-50 rounded-lg cursor-pointer">
                            <div className="rounded-lg h-3 w-3 bg-primary-blue-600"></div>
                          </button>
                          <button className="flex items-center justify-center min-w-6 min-h-6 border-1 border-neutral-50 rounded-lg cursor-pointer">
                            <div className="rounded-lg h-3 w-3 bg-primary-blue-600"></div>
                          </button>
                          <button className="flex items-center justify-center min-w-6 min-h-6 border-1 border-neutral-50 rounded-lg cursor-pointer">
                            <div className="rounded-lg h-3 w-3 bg-primary-blue-600"></div>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 grid-rows-2 xl:grid-cols-2 xl:grid-rows-1 gap-2 w-full">
                      <button
                        className={getButtonCode("HTML")}
                        onClick={() => setActiveCodeButton("HTML")}
                      >
                        HTML
                      </button>
                      <button
                        className={getButtonCode("CSS")}
                        onClick={() => setActiveCodeButton("CSS")}
                      >
                        CSS
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="border-2 rounded-md p-6 bg-primary-green-50 border-primary-green-200">
                  <code className="text-primary-blue-600 text-base">
                    --btn-padding: 12px 24px; --btn-font-size: 16px;
                  </code>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <div className="flex flex-row items-center justify-between gap-6 border-2 rounded-t-md p-6 bg-primary-blue-600 border-primary-blue-600">
            <strong className="text-xl font-medium text-white">
              Propiedades de animación
            </strong>
            <span className="flex items-center justify-center w-10 h-10 bg-white rounded-sm">
              <Calendar className="shrink-0 w-4 text-primary-blue-600"></Calendar>
            </span>
          </div>
          <div className="flex border-2 border-t-0 rounded-b-md p-6 border-primary-green-600 h-full">
            <button className="border-2 rounded-md p-6 bg-primary-blue-50 border-primary-blue-600 w-full"></button>
          </div>
        </div>
      </section>

      <section className="mt-15">
        <strong className="text-2xl font-semibold text-primary-green-600 mb-6 block">
          Guia de uso
        </strong>
        <p className="text-xl font-normal text-primary-blue-500">
          Este sistema de diseño se sincroniza automáticamente con el archivo
          Figma mediante webhooks y la API de Figma. Así es como funciona la
          integración:
        </p>
        <div className="grid grid-rows-2 md:grid-rows-1 gap-6 md:grid-cols-[2fr_1.4fr] mt-7">
          <div className="p-6 rounded-md border-primary-green-600 border-2">
            <strong className="text-xl font-medium text-primary-blue-500 mb-7 block">
              Actualizaciones automáticas
            </strong>
            <ul className="body text-primary-blue-600 mb-4 list-disc list-inside pl-2 gap-2">
              <li className="mb-3">
                Sincronización en tiempo real cuando cambian los tokens de
                diseño
              </li>
              <li className="mb-3">
                Las actualizaciones de componentes se reflejan inmediatamente
              </li>
              <li className="mb-3">
                Los cambios de estilo se propagaron a la documentación.
              </li>
              <li>Control de versiones para cambios de diseño.</li>
            </ul>
          </div>
          <div className="p-6 rounded-md border-primary-green-600 border-2">
            <strong className="text-xl font-medium text-primary-blue-500 mb-7 block">
              Beneficios para desarrolladores
            </strong>
            <ul className="body  text-primary-blue-600 mb-4 list-disc list-inside pl-2">
              <li className="mb-3">Tokens de diseño siempre actualizados</li>
              <li className="mb-3">Sincronización manual reducida</li>
              <li className="mb-3">
                Alineación del flujo de trabajo de diseño y desarrollo
              </li>
              <li>Generación automática de códigos</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};
