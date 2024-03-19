import React, { useEffect, useRef } from 'react';
import Viz from 'viz.js';
import { Module, render } from 'viz.js/full.render.js'; // Import the full render module

function GraphVisualization({ dot }) {
  const graphContainer = useRef(null);

  useEffect(() => {
    // Create a new Viz instance
    const viz = new Viz({ Module, render });

    // Render the DOT graph
    viz.renderSVGElement(dot)
      .then((element) => {
        // Append the SVG element to the container
        graphContainer.current.innerHTML = '';
        graphContainer.current.appendChild(element);
      })
      .catch((error) => {
        console.error('Error rendering graph:', error);
      });
  }, [dot]);

  return <div ref={graphContainer} style={{maxWidth:"100%", border:"2px dotted black", padding:"1rem"}}></div>;
}

export default GraphVisualization;