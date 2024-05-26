import { useState } from "react";
import "./App.css";
import Autocomplete from "./components/Autocomplete";
import { Result } from "./types";
import MapComponent from "./components/MapComponent";

function App() {
  const [selectedCity, setSelectedCity] = useState<Result | null>(null);
  console.log(import.meta.env.VITE_API_KEY); // "123"

  const handleCitySelect = (city: Result) => {
    setSelectedCity(city);
  };

  return (
    <div className="p-5">
      <div className="w-full flex-column space-y-5">
        <h1 className="text-2xl font-bold text-white">
          Autocomplete de Ciudades
        </h1>

        <Autocomplete onCitySelect={handleCitySelect} />
        {selectedCity && (
          <div className="mt-4 p-4 border rounded-lg text-white text-xs space-y-3">
            <h2 className="text-sm font-semibold ">Ciudad seleccionada:</h2>
            <p>
              <strong>Nombre:</strong> {selectedCity.formatted}
            </p>
            {selectedCity.components.city && (
              <p>
                <strong>Ciudad:</strong> {selectedCity.components.city}
              </p>
            )}
            {selectedCity.components.state && (
              <p>
                <strong>Estado:</strong> {selectedCity.components.state}
              </p>
            )}
            {selectedCity.components.country && (
              <p>
                <strong>País:</strong> {selectedCity.components.country}
              </p>
            )}
            {selectedCity.components.postcode && (
              <p>
                <strong>Código postal:</strong>{" "}
                {selectedCity.components.postcode}
              </p>
            )}
            {selectedCity.components.suburb && (
              <p>
                <strong>Suburbio:</strong> {selectedCity.components.suburb}
              </p>
            )}
            <p>
              <strong>Latitud:</strong> {selectedCity.geometry.lat}
            </p>
            <p>
              <strong>Longitud:</strong> {selectedCity.geometry.lng}
            </p>
            <MapComponent
              lat={selectedCity.geometry.lat}
              lng={selectedCity.geometry.lng}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
