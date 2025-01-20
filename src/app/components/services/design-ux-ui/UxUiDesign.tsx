import { FaMobileAlt, FaLaptop, FaPaintBrush, FaUserFriends, FaDraftingCompass, FaEye } from 'react-icons/fa';

const UxUiDesign = () => {
  return (
    <section className="max-w-7xl mx-auto py-12">
      <h1 className="text-4xl font-bold text-center text-purple-500 mb-8">
        Diseño UX/UI
      </h1>
      <p className="text-center text-lg text-gray-600 mb-10">
        Ofrezco soluciones de diseño centradas en el usuario que combinan estética, funcionalidad y usabilidad para crear experiencias memorables y eficaces.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-300">
          <div className="flex items-center mb-4">
            <FaMobileAlt className="text-blue-500 text-3xl mr-4" />
            <h3 className="text-xl font-semibold text-gray-800">Diseño Responsivo</h3>
          </div>
          <p className="text-gray-600">
            Diseño adaptativo que garantiza una experiencia óptima en dispositivos móviles, tabletas y computadoras de escritorio.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-300">
          <div className="flex items-center mb-4">
            <FaPaintBrush className="text-red-500 text-3xl mr-4" />
            <h3 className="text-xl font-semibold text-gray-800">Interfaz Visual Atractiva</h3>
          </div>
          <p className="text-gray-600">
            Creación de interfaces visuales modernas y elegantes que mejoran la percepción y la experiencia del usuario.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-300">
          <div className="flex items-center mb-4">
            <FaDraftingCompass className="text-purple-500 text-3xl mr-4" />
            <h3 className="text-xl font-semibold text-gray-800">Prototipos y Wireframes</h3>
          </div>
          <p className="text-gray-600">
            Diseño de wireframes y prototipos interactivos para probar y validar ideas antes de la implementación final.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-300">
          <div className="flex items-center mb-4">
            <FaUserFriends className="text-green-500 text-3xl mr-4" />
            <h3 className="text-xl font-semibold text-gray-800">Diseño Centrado en el Usuario</h3>
          </div>
          <p className="text-gray-600">
            Metodologías de diseño centrado en el usuario para crear soluciones intuitivas que se alinean con sus necesidades.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-300">
          <div className="flex items-center mb-4">
            <FaLaptop className="text-indigo-500 text-3xl mr-4" />
            <h3 className="text-xl font-semibold text-gray-800">Experiencia Multiplataforma</h3>
          </div>
          <p className="text-gray-600">
            Diseño consistente y coherente en diferentes plataformas para asegurar una experiencia fluida y uniforme.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-300">
          <div className="flex items-center mb-4">
            <FaEye className="text-orange-500 text-3xl mr-4" />
            <h3 className="text-xl font-semibold text-gray-800">Accesibilidad Mejorada</h3>
          </div>
          <p className="text-gray-600">
            Aplicación de estándares de accesibilidad para garantizar que todos los usuarios puedan interactuar con tus productos.
          </p>
        </div>
      </div>
    </section>
  );
};

export default UxUiDesign;
