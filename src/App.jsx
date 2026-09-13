import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechCard from "./components/TechCard";
import StackSidebar from "./components/StackSidebar";
import Footer from "./components/Footer";
import technologiesData from "./data/technologies.json";

function App() {
  const [technologies, setTechnologies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [stack, setStack] = useState([]);

  // Simulate loading the JSON "from a source" so the loading state has a
  // moment to render, even though the file is actually local.
  useEffect(() => {
    const timer = setTimeout(() => {
      setTechnologies(technologiesData);
      setLoading(false);
    }, 400);

    return () => clearTimeout(timer);
  }, []);

  const handleAddToStack = (tech) => {
    const alreadyAdded = stack.some((item) => item.id === tech.id);
    if (alreadyAdded) {
      toast.warning(`${tech.name} is already in your stack.`);
      return;
    }
    setStack((prev) => [...prev, tech]);
    toast.success(`${tech.name} added to your stack.`);
  };

  const handleRemove = (id) => {
    const tech = stack.find((item) => item.id === id);
    setStack((prev) => prev.filter((item) => item.id !== id));
    if (tech) toast.info(`${tech.name} removed from your stack.`);
  };

  const handleRemoveAll = () => {
    setStack([]);
    toast.info("Your stack has been cleared.");
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />

      <section className="max-w-7xl mx-auto px-4 md:px-8 pb-20">
        <h2 className="text-3xl font-bold text-slate-900 mb-1">
          Explore the <span className="text-pink-500">Technologies</span>
        </h2>
        <p className="text-slate-500 mb-8">
          Pick one technology per category to build your ideal stack.
        </p>

        {loading ? (
          <div className="py-24 text-center text-slate-400">
            Loading technologies...
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {technologies.map((tech) => (
                <TechCard
                  key={tech.id}
                  tech={tech}
                  isAdded={stack.some((item) => item.id === tech.id)}
                  onAdd={handleAddToStack}
                />
              ))}
            </div>

            <div className="lg:col-span-1">
              <StackSidebar
                stack={stack}
                onRemove={handleRemove}
                onRemoveAll={handleRemoveAll}
              />
            </div>
          </div>
        )}
      </section>

      <Footer />
      <ToastContainer position="bottom-right" autoClose={2500} />
    </div>
  );
}

export default App;
