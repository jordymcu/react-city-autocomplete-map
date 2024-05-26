import React, { useState, ChangeEvent, useEffect } from "react";
import axios from "axios";
import Loading from "./Loading";
import { Result } from "../types";

interface AutocompleteProps {
  onCitySelect: (city: Result) => void;
}

const Autocomplete: React.FC<AutocompleteProps> = ({ onCitySelect }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Result[]>([]);
  const [isLoadint, setLoading] = useState(false);
  const [_, setError] = useState<String | null>(null);
  const [showFilter, setShowFilter] = useState(true);
  const apiKey = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    const fetchResults = async () => {
      if (query.length > 2) {
        setLoading(true);
        setError(null);

        try {
          const response = await axios.get(
            `https://api.opencagedata.com/geocode/v1/json`,
            {
              params: {
                q: query + "*",
                key: apiKey,
                limit: 5,
                lenguage: "es",
                pretty: 1,
              },
            }
          );
          if (response.status === 200 && response.data.results) {
            setResults(response.data.results);
          }
        } catch (error) {
          setError("Error fetching data");
        } finally {
          setLoading(false);
        }
      } else {
        setResults([]);
      }
    };
    const debounceFetch = setTimeout(fetchResults, 300);
    return () => {
      clearTimeout(debounceFetch);
    };
  }, [query, apiKey]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setShowFilter(true);
    setQuery(event.target.value);
  };

  const selectedCity = (city: Result) => {
    setQuery(city.formatted);
    setShowFilter(false);
    onCitySelect(city);
  };

  return (
    <div className="relative">
      <div className="flex items-center relative">
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Ingrese la ciudad"
          className="w-full border my-1 py-1.5 px-3  rounded-lg text-sm pr-10" // Añadir padding a la derecha
        />
        {isLoadint && (
          <div className="absolute right-2">
            {/* Aquí puedes usar un ícono de carga o texto */}
            {isLoadint && <Loading />}
          </div>
        )}
      </div>
      {showFilter && (
        <div className="absolute top-full left-0 right-0 bg-white  rounded-lg z-20">
          {results.length > 0 && (
            <ul className="max-h-60 border rounded-lg overflow-y-auto">
              {results.map((result, index) => (
                <li
                  key={index}
                  onClick={() => selectedCity(result)}
                  className="px-8 p-2 hover:bg-gray-100 cursor-pointer"
                >
                  <p className="text-xs text-gray-700  "> {result.formatted}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default Autocomplete;
